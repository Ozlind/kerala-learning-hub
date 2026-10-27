#!/usr/bin/env node
/**
 * Structural quality gate for the starter learning dataset.
 * This validates data integrity only; it does NOT certify academic accuracy
 * or official Kerala syllabus alignment.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const sourcePath = resolve(process.cwd(), "src/data/starter-learning-library.ts");
const source = readFileSync(sourcePath, "utf8");
const errors = [];
const warnings = [];

const classLabels = new Map([
  ["class-1", "Class 1"], ["class-2", "Class 2"], ["class-3", "Class 3"],
  ["class-4", "Class 4"], ["class-5", "Class 5"], ["class-6", "Class 6"],
  ["class-7", "Class 7"], ["class-8", "Class 8"], ["class-9", "Class 9"],
  ["class-10", "Class 10"], ["plus-one", "Plus One"], ["plus-two", "Plus Two"],
]);
const subjects = new Set(["mathematics", "science", "english", "malayalam", "social-science", "digital-literacy"]);

function parseExportedJsonArray(exportName) {
  const declaration = source.indexOf("export const " + exportName);
  if (declaration < 0) throw new Error("Missing export: " + exportName);
  const equals = source.indexOf("=", declaration);
  const start = source.indexOf("[", equals);
  if (equals < 0 || start < 0) throw new Error("Could not locate array for " + exportName);

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < source.length; i++) {
    const char = source[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "[") depth++;
    else if (char === "]") {
      depth--;
      if (depth === 0) {
        try { return JSON.parse(source.slice(start, i + 1)); }
        catch (error) { throw new Error(exportName + " is not valid JSON-style data: " + error.message); }
      }
    }
  }
  throw new Error("Unclosed array for " + exportName);
}

function requiredString(value, label, context) {
  if (typeof value !== "string" || value.trim().length === 0) errors.push(context + ": missing " + label);
}
function uniqueIds(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (typeof item.id !== "string" || !item.id.trim()) {
      errors.push(label + ": item has a missing/blank id");
      continue;
    }
    if (seen.has(item.id)) errors.push(label + ": duplicate id " + item.id);
    seen.add(item.id);
  }
}
function checkClass(item, label) {
  if (!classLabels.has(item.classId)) errors.push(label + " " + item.id + ": unknown classId " + item.classId);
}

let modules;
let questions;
try {
  modules = parseExportedJsonArray("STARTER_MODULES");
  questions = parseExportedJsonArray("STARTER_QUESTIONS");
} catch (error) {
  console.error("CONTENT VALIDATION FAILED:", error.message);
  process.exit(1);
}

if (!Array.isArray(modules) || modules.length === 0) errors.push("STARTER_MODULES must be a non-empty array");
if (!Array.isArray(questions) || questions.length === 0) errors.push("STARTER_QUESTIONS must be a non-empty array");

if (Array.isArray(modules)) {
  uniqueIds(modules, "module");
  const coveredPairs = new Set();
  const sequenceKeys = new Set();
  for (const item of modules) {
    const ctx = "module " + (item.id || "(unknown)");
    checkClass(item, "module");
    for (const field of ["classLabel", "stage", "subjectId", "subject", "title", "kind", "language", "verification", "ageAppropriateGuidance", "miniLesson"]) {
      requiredString(item[field], field, ctx);
    }
    if (classLabels.has(item.classId) && item.classLabel !== classLabels.get(item.classId)) errors.push(ctx + ": classLabel does not match classId");
    if (!subjects.has(item.subjectId)) errors.push(ctx + ": unknown subjectId " + item.subjectId);
    if (item.syllabusAligned !== false) errors.push(ctx + ": starter module must remain explicitly not syllabus-aligned");
    if (item.verification !== "starter-content-not-syllabus-verified") errors.push(ctx + ": unexpected verification status");
    if (!Array.isArray(item.sourceIds)) errors.push(ctx + ": sourceIds must be an array");
    for (const field of ["learningGoals", "activities", "reviewChecklist"]) {
      if (!Array.isArray(item[field]) || item[field].length === 0 || item[field].some(value => typeof value !== "string" || !value.trim())) {
        errors.push(ctx + ": " + field + " must contain non-empty strings");
      }
    }
    if (!Number.isInteger(item.sequence) || item.sequence < 1) errors.push(ctx + ": sequence must be a positive integer");
    const pair = item.classId + "|" + item.subjectId;
    coveredPairs.add(pair);
    const sequenceKey = pair + "|" + item.sequence;
    if (sequenceKeys.has(sequenceKey)) errors.push(ctx + ": duplicate sequence within class/subject");
    sequenceKeys.add(sequenceKey);
  }
  for (const classId of classLabels.keys()) {
    for (const subjectId of subjects) {
      const pair = classId + "|" + subjectId;
      if (!coveredPairs.has(pair)) errors.push("No starter module coverage for " + pair);
      const count = modules.filter(item => item.classId + "|" + item.subjectId === pair).length;
      if (count < 1) errors.push(pair + ": expected at least one starter module, found " + count);
    }
  }
  if (modules.some(item => item.syllabusAligned === true)) errors.push("Starter modules must never be marked syllabus-aligned without editorial review");
}

if (Array.isArray(questions)) {
  uniqueIds(questions, "question");
  const questionClasses = new Set();
  const questionSubjects = new Set();
  for (const item of questions) {
    const ctx = "question " + (item.id || "(unknown)");
    checkClass(item, "question");
    questionClasses.add(item.classId);
    questionSubjects.add(item.subjectId);
    for (const field of ["subjectId", "skillTag", "difficulty", "prompt", "explanation", "verification"]) {
      requiredString(item[field], field, ctx);
    }
    if (!subjects.has(item.subjectId)) errors.push(ctx + ": unknown subjectId " + item.subjectId);
    if (item.syllabusAligned !== false) errors.push(ctx + ": practice question must remain explicitly not syllabus-aligned");
    if (!Array.isArray(item.options) || item.options.length < 2 || item.options.some(option => typeof option !== "string" || !option.trim())) {
      errors.push(ctx + ": options must contain at least two non-empty strings");
    } else {
      const normalized = item.options.map(option => option.trim().toLocaleLowerCase());
      if (new Set(normalized).size !== normalized.length) errors.push(ctx + ": answer options contain duplicates");
      if (!Number.isInteger(item.correctIndex) || item.correctIndex < 0 || item.correctIndex >= item.options.length) errors.push(ctx + ": correctIndex is outside the options array");
    }
    if (!["answer-key-auto-checked", "answer-key-reviewed", "original-practice-answer-checked"].includes(item.verification)) errors.push(ctx + ": unknown answer-key verification status");
  }
  for (const classId of classLabels.keys()) {
    if (!questionClasses.has(classId)) errors.push("No practice-question coverage for " + classId);
  }
  const autoCheckedCount = questions.filter(item => item.verification === "answer-key-auto-checked").length;
  if (autoCheckedCount > 0) warnings.push(autoCheckedCount + " practice questions are marked auto-checked rather than human-reviewed; editorial verification is still needed.");
  if (questionSubjects.size < 2) warnings.push("Practice questions currently cover fewer than two subject areas.");
  if (questionSubjects.size < subjects.size) warnings.push("Practice-question coverage is partial (" + [...questionSubjects].sort().join(", ") + "); do not imply all subjects have question banks.");
}

if (errors.length) {
  console.error("CONTENT VALIDATION FAILED (" + errors.length + " issue(s)):");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}

console.log("Content structure validation passed.");
console.log("Modules: " + modules.length + " across " + classLabels.size + " class bands and " + subjects.size + " starter subject areas.");
console.log("Practice questions: " + questions.length + " across " + questionSubjectsSummary(questions, classLabels.size) + ".");
console.log("Important: this check does not verify academic correctness or official syllabus alignment.");
for (const warning of warnings) console.warn("WARNING: " + warning);

function questionSubjectsSummary(items, classCount) {
  return new Set(items.map(item => item.subjectId)).size + " subject areas and " + new Set(items.map(item => item.classId)).size + "/" + classCount + " class bands";
}
