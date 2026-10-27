import { NextResponse } from "next/server";
import { STARTER_MODULES, STARTER_QUESTIONS } from "@/data/starter-learning-library";
import { OFFICIAL_LEARNING_SOURCES } from "@/data/official-learning-sources";

export const revalidate = 3600;

const sourceById = new Map(
  OFFICIAL_LEARNING_SOURCES.map((source) => [source.id, source] as const),
);

const validClasses = new Set([
  ...Array.from({ length: 10 }, (_, index) => `class-${index + 1}`),
  "plus-one",
  "plus-two",
]);
const validSubjects = new Set([
  "mathematics",
  "science",
  "english",
  "malayalam",
  "social-science",
  "digital-literacy",
]);

export function GET(request: Request) {
  const url = new URL(request.url);
  const classId = url.searchParams.get("classId") ?? "";
  const subjectId = url.searchParams.get("subjectId") ?? "";
  const type = url.searchParams.get("type") ?? "";

  if (!validClasses.has(classId) || !validSubjects.has(subjectId)) {
    return NextResponse.json(
      { error: "Choose a supported class and subject." },
      { status: 400 },
    );
  }

  if (type === "modules") {
    const modules = STARTER_MODULES
      .filter((module) => module.classId === classId && module.subjectId === subjectId)
      .map((module) => ({
        id: module.id,
        sequence: module.sequence,
        title: module.title,
        kind: module.kind,
        language: module.language,
        verification: module.verification,
        syllabusAligned: module.syllabusAligned,
        learningGoals: module.learningGoals,
        miniLesson: module.miniLesson,
        activities: module.activities,
        reviewChecklist: module.reviewChecklist,
        ageAppropriateGuidance: module.ageAppropriateGuidance,
        sourceIds: module.sourceIds,
        sources: module.sourceIds.flatMap((sourceId) => {
          const source = sourceById.get(sourceId);
          return source ? [source] : [];
        }),
      }));

    return NextResponse.json(
      { modules },
      { headers: { "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  }

  if (type === "questions") {
    const questions = STARTER_QUESTIONS
      .filter((question) => question.classId === classId && question.subjectId === subjectId)
      .map((question) => ({
        id: question.id,
        prompt: question.prompt,
        options: question.options,
        correctIndex: question.correctIndex,
        explanation: question.explanation,
        verification: question.verification,
        syllabusAligned: question.syllabusAligned,
      }));

    return NextResponse.json(
      { questions },
      { headers: { "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  }

  return NextResponse.json(
    { error: "Choose either modules or questions." },
    { status: 400 },
  );
}
