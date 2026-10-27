import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const librarySource = await readFile(path.join(root, "src/data/starter-learning-library.ts"), "utf8");
const registrySource = await readFile(path.join(root, "src/data/official-learning-sources.ts"), "utf8");

function extractArray(exportName, inputSource) {
  const declaration = new RegExp(`export\\s+const\\s+${exportName}\\s*:[^=]+?=\\s*\\[`);
  const match = declaration.exec(inputSource);
  assert.ok(match, `Missing exported array: ${exportName}`);

  const start = match.index + match[0].lastIndexOf("[");
  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = start; index < inputSource.length; index += 1) {
    const char = inputSource[index];
    const next = inputSource[index + 1];

    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }
    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        const literal = inputSource.slice(start, index + 1);
        return runInNewContext(`(${literal})`, Object.create(null), {
          timeout: 1000,
          contextCodeGeneration: { strings: false, wasm: false },
        });
      }
    }
  }

  throw new Error(`Could not find the end of ${exportName}`);
}

const modules = extractArray("STARTER_MODULES", librarySource);
const questions = extractArray("STARTER_QUESTIONS", librarySource);
const officialSources = extractArray("OFFICIAL_LEARNING_SOURCES", registrySource);
assert.ok(Array.isArray(officialSources) && officialSources.length >= 2, "Add the official source discovery registry");

const officialSourceIds = new Set();
for (const sourceRecord of officialSources) {
  assert.ok(typeof sourceRecord.id === "string" && sourceRecord.id.trim(), "Every official source needs an id");
  assert.ok(!officialSourceIds.has(sourceRecord.id), `Duplicate official source id: ${sourceRecord.id}`);
  officialSourceIds.add(sourceRecord.id);
  assert.equal(sourceRecord.authority, "SCERT Kerala", `Unexpected authority for ${sourceRecord.id}`);
  assert.ok(
    /^https:\/\/(?:textbooksarchives|questionpool)\.scert\.kerala\.gov\.in\//.test(sourceRecord.url),
    `Official source must use an expected SCERT domain: ${sourceRecord.id}`,
  );
  assert.ok(
    ["discovery-only", "historical-catalogue"].includes(sourceRecord.status),
    `Source status must not imply chapter verification: ${sourceRecord.id}`,
  );
  assert.ok(typeof sourceRecord.notes === "string" && sourceRecord.notes.length >= 30, `Add verification guidance for ${sourceRecord.id}`);
}
const expectedClasses = [
  ...Array.from({ length: 10 }, (_, index) => `class-${index + 1}`),
  "plus-one",
  "plus-two",
];
const moduleIds = new Set();
const questionIds = new Set();
const moduleCounts = new Map();
const questionCounts = new Map();

assert.ok(Array.isArray(modules), "STARTER_MODULES must be an array");
assert.ok(modules.length >= 288, `Expected at least 288 starter modules; found ${modules.length}`);

for (const module of modules) {
  assert.equal(typeof module.id, "string", "Every module needs an id");
  assert.ok(module.id.trim(), "Module ids cannot be empty");
  assert.ok(!moduleIds.has(module.id), `Duplicate module id: ${module.id}`);
  moduleIds.add(module.id);

  assert.ok(expectedClasses.includes(module.classId), `Unknown class on ${module.id}: ${module.classId}`);
  assert.ok(typeof module.title === "string" && module.title.trim(), `Missing title on ${module.id}`);
  assert.ok(typeof module.subjectId === "string" && module.subjectId.trim(), `Missing subject on ${module.id}`);
  assert.ok(Number.isInteger(module.sequence) && module.sequence > 0, `Invalid sequence on ${module.id}`);
  assert.ok(typeof module.miniLesson === "string" && module.miniLesson.trim().length >= 80, `Missing starter guidance on ${module.id}`);
  assert.ok(Array.isArray(module.learningGoals) && module.learningGoals.length >= 2, `Add at least two learning goals to ${module.id}`);
  assert.ok(Array.isArray(module.activities) && module.activities.length >= 2, `Add at least two activities to ${module.id}`);
  assert.ok(Array.isArray(module.reviewChecklist) && module.reviewChecklist.length >= 2, `Add review checks to ${module.id}`);
  assert.ok(Array.isArray(module.sourceIds), `sourceIds must be an array on ${module.id}`);
  for (const sourceId of module.sourceIds) {
    assert.ok(officialSourceIds.has(sourceId), `Unknown official source id ${sourceId} on ${module.id}`);
  }

  assert.equal(module.syllabusAligned, false, `${module.id} must not claim official syllabus alignment`);
  assert.equal(
    module.verification,
    "starter-content-not-syllabus-verified",
    `${module.id} must keep the unverified-starter label until textbook review`,
  );
  assert.ok(
    module.reviewChecklist.some((item) => /exact textbook chapter/i.test(item)),
    `${module.id} must remind reviewers to check the current textbook`,
  );

  moduleCounts.set(module.classId, (moduleCounts.get(module.classId) ?? 0) + 1);
}

for (const classId of expectedClasses) {
  assert.ok((moduleCounts.get(classId) ?? 0) >= 24, `Expected at least 24 modules for ${classId}`);
}

assert.ok(Array.isArray(questions), "STARTER_QUESTIONS must be an array");
assert.ok(questions.length >= 120, `Expected at least 120 starter questions; found ${questions.length}`);

for (const question of questions) {
  assert.ok(typeof question.id === "string" && question.id.trim(), "Every question needs an id");
  assert.ok(!questionIds.has(question.id), `Duplicate question id: ${question.id}`);
  questionIds.add(question.id);

  assert.ok(expectedClasses.includes(question.classId), `Unknown class on question ${question.id}`);
  assert.ok(typeof question.prompt === "string" && question.prompt.trim(), `Missing prompt on ${question.id}`);
  assert.ok(Array.isArray(question.options) && question.options.length >= 2, `Too few options on ${question.id}`);
  assert.ok(
    Number.isInteger(question.correctIndex) &&
      question.correctIndex >= 0 &&
      question.correctIndex < question.options.length,
    `Answer index is out of range on ${question.id}`,
  );
  assert.ok(typeof question.explanation === "string" && question.explanation.trim().length >= 10, `Missing explanation on ${question.id}`);
  assert.equal(question.syllabusAligned, false, `${question.id} must not claim official syllabus alignment`);
  questionCounts.set(question.classId, (questionCounts.get(question.classId) ?? 0) + 1);
}

for (const classId of expectedClasses) {
  assert.ok((questionCounts.get(classId) ?? 0) >= 10, `Expected at least 10 questions for ${classId}`);
}

const seniorClassIds = new Set(["class-8", "class-9", "class-10", "plus-one", "plus-two"]);
const seniorMathQuestions = questions.filter(
  (question) =>
    seniorClassIds.has(question.classId) &&
    question.subjectId === "mathematics" &&
    /-math-skill-\d+$/.test(question.id),
);
const seniorEnglishQuestions = questions.filter(
  (question) =>
    seniorClassIds.has(question.classId) &&
    question.subjectId === "english" &&
    /-literacy-skill-\d+$/.test(question.id),
);
assert.equal(seniorMathQuestions.length, 25, "Each of Classes 8–10 and Plus One/Plus Two needs five tailored mathematics questions");
assert.equal(seniorEnglishQuestions.length, 25, "Each of Classes 8–10 and Plus One/Plus Two needs five tailored English questions");

const elementaryMathPrompt = /^(?:what is \d+\s*[+\-−]\s*\d+\?|a set has \d+ groups|which expression means .*more than 10|a learner studies for \d+ minutes)/i;
for (const question of seniorMathQuestions) {
  assert.ok(question.skillTag && question.skillTag !== "basic-arithmetic", `Use a meaningful skillTag for ${question.id}`);
  assert.ok(
    !elementaryMathPrompt.test(question.prompt),
    `Elementary arithmetic should not be reused as a senior-grade quiz question: ${question.id}`,
  );
  assert.equal(
    question.verification,
    "original-practice-answer-checked",
    `Senior-grade original questions need an explicit practice-answer status: ${question.id}`,
  );
}
for (const question of seniorEnglishQuestions) {
  assert.ok(question.skillTag && question.skillTag !== "general-literacy", `Use a meaningful skillTag for ${question.id}`);
  assert.equal(
    question.verification,
    "original-practice-answer-checked",
    `Senior-grade original questions need an explicit practice-answer status: ${question.id}`,
  );
}
const seniorMathPromptKeys = seniorMathQuestions.map((question) => question.prompt.trim().toLocaleLowerCase());
const seniorEnglishPromptKeys = seniorEnglishQuestions.map((question) => question.prompt.trim().toLocaleLowerCase());
assert.equal(new Set(seniorMathPromptKeys).size, seniorMathPromptKeys.length, "Senior-grade mathematics prompts must be differentiated");
assert.equal(new Set(seniorEnglishPromptKeys).size, seniorEnglishPromptKeys.length, "Senior-grade English prompts must be differentiated");

console.log(`PASS: ${officialSources.length} official-source records use approved SCERT domains and non-verified statuses.`);
console.log(`PASS: ${modules.length} starter modules cover all 12 class levels.`);
console.log(`PASS: ${questions.length} practice questions have valid options, answers, and explanations.`);
console.log("PASS: Starter content cannot be labelled syllabus-verified without updating explicit review gates.");
