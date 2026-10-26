/**
 * Kerala Learning Hub — curriculum/resource registry foundation.
 *
 * Important: this is a coverage scaffold, NOT a verified chapter list.
 * Populate chapter records only after checking the relevant official textbook
 * edition. Prefer linking to official publications and writing original notes,
 * examples and questions; do not mirror whole copyrighted textbooks.
 */

export type LearningStage =
  | "primary"
  | "upper-primary"
  | "high-school"
  | "higher-secondary";

export type VerificationStatus =
  | "not-reviewed"
  | "source-located"
  | "edition-verified"
  | "content-reviewed"
  | "published";

export type OfficialSource = {
  id: string;
  title: string;
  url: string;
  authority: string;
  appliesTo: string[];
  purpose: string;
};

export type CurriculumClass = {
  id: string;
  label: string;
  stage: LearningStage;
  ageBand: string;
  syllabusStatus: VerificationStatus;
  subjectsStatus: VerificationStatus;
  notes: string;
};

export type ResourceKind =
  | "chapter-notes"
  | "worked-examples"
  | "activities"
  | "practice-questions"
  | "answer-key"
  | "revision-cards"
  | "chapter-test"
  | "video"
  | "official-textbook"
  | "teacher-resource";

export type LearningResource = {
  id: string;
  classId: string;
  subjectId: string;
  chapterId: string;
  kind: ResourceKind;
  title: string;
  language: "ml" | "en" | "bilingual";
  verification: VerificationStatus;
  sourceIds: string[];
  edition?: string;
  reviewedAt?: string;
  content?: string;
  externalUrl?: string;
};

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: "scert-main",
    title: "SCERT Kerala — official portal",
    url: "https://scert.kerala.gov.in/",
    authority: "SCERT Kerala",
    appliesTo: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10", "plus-one", "plus-two"],
    purpose: "Official curriculum, textbook and academic publication entry point.",
  },
  {
    id: "scert-curriculum-2024",
    title: "Revised textbooks — part 1",
    url: "https://scert.kerala.gov.in/curriculum-2024/",
    authority: "SCERT Kerala",
    appliesTo: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10"],
    purpose: "Locate revised school textbook editions; verify grade and edition before creating chapter records.",
  },
  {
    id: "scert-textbook-part-2",
    title: "Revised textbooks — part 2",
    url: "https://scert.kerala.gov.in/textbook2024part2/",
    authority: "SCERT Kerala",
    appliesTo: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10"],
    purpose: "Additional official revised textbook listing and cross-check.",
  },
  {
    id: "scert-plus-one",
    title: "Higher Secondary — Plus One resources",
    url: "https://scert.kerala.gov.in/hss-2026/",
    authority: "SCERT Kerala",
    appliesTo: ["plus-one"],
    purpose: "Check current Plus One textbooks and stream-specific materials.",
  },
  {
    id: "samagra",
    title: "Samagra — digital learning resources",
    url: "https://samagra.kite.kerala.gov.in/",
    authority: "KITE Kerala",
    appliesTo: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10", "plus-one", "plus-two"],
    purpose: "Find official digital textbooks and learning resources; verify individual item and edition.",
  },
  {
    id: "mukulam",
    title: "Mukulam — higher secondary learning resources",
    url: "https://mukulam.kite.kerala.gov.in/",
    authority: "KITE Kerala",
    appliesTo: ["plus-one", "plus-two"],
    purpose: "Locate higher-secondary syllabus-aligned resources and exam preparation material.",
  },
];

const schoolClasses: CurriculumClass[] = [
  { id: "class-1", label: "Class 1", stage: "primary", ageBand: "Early primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Prioritise foundational literacy, numeracy, play-based and visual learning." },
  { id: "class-2", label: "Class 2", stage: "primary", ageBand: "Early primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Short, visual activities; confirm subject structure from current textbook edition." },
  { id: "class-3", label: "Class 3", stage: "primary", ageBand: "Primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Build reading comprehension, number sense and hands-on understanding." },
  { id: "class-4", label: "Class 4", stage: "primary", ageBand: "Primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Use short explanations, worked examples and activity-based practice." },
  { id: "class-5", label: "Class 5", stage: "upper-primary", ageBand: "Upper primary transition", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Confirm the current subject names and textbook structure before chapter authoring." },
  { id: "class-6", label: "Class 6", stage: "upper-primary", ageBand: "Upper primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Introduce concept maps, examples and gradual independent practice." },
  { id: "class-7", label: "Class 7", stage: "upper-primary", ageBand: "Upper primary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Include concept checks, practical activities and cumulative revision." },
  { id: "class-8", label: "Class 8", stage: "high-school", ageBand: "Secondary transition", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Emphasise concept mastery, worked solutions and multi-step questions." },
  { id: "class-9", label: "Class 9", stage: "high-school", ageBand: "High school", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Add chapter-wise tests, common misconceptions and spaced revision." },
  { id: "class-10", label: "Class 10", stage: "high-school", ageBand: "SSLC", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Prioritise verified current syllabus, model practice and exam-oriented feedback." },
  { id: "plus-one", label: "Plus One", stage: "higher-secondary", ageBand: "Higher secondary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Subject and chapter catalogues must branch by stream and chosen subject." },
  { id: "plus-two", label: "Plus Two", stage: "higher-secondary", ageBand: "Higher secondary", syllabusStatus: "not-reviewed", subjectsStatus: "not-reviewed", notes: "Track stream, subject, textbook edition and exam-year alignment explicitly." },
];

export const CURRICULUM_CLASSES = schoolClasses;

export const RESOURCE_KINDS: { id: ResourceKind; label: string; description: string }[] = [
  { id: "chapter-notes", label: "Chapter notes", description: "Original, age-appropriate explanations aligned to the verified chapter." },
  { id: "worked-examples", label: "Solved examples", description: "Step-by-step reasoning, methods and worked solutions." },
  { id: "activities", label: "Activities", description: "Hands-on tasks, observations, projects and discussion prompts." },
  { id: "practice-questions", label: "Practice questions", description: "Easy, medium and challenge questions with topic tags." },
  { id: "answer-key", label: "Answer keys", description: "Checked answers and explanations; include marking guidance where suitable." },
  { id: "revision-cards", label: "Revision cards", description: "Definitions, formulas, key ideas and recall prompts." },
  { id: "chapter-test", label: "Chapter tests", description: "Balanced assessments with transparent answer explanations." },
  { id: "video", label: "Video lessons", description: "Curated official or permission-cleared videos with language and duration metadata." },
  { id: "official-textbook", label: "Official textbook", description: "Link to the authoritative publication rather than duplicating the book." },
  { id: "teacher-resource", label: "Teacher resources", description: "Teacher texts, workbooks and classroom support where officially available." },
];

/** A resource is ready to show as syllabus-aligned only after source and edition checks. */
export function isResourcePublishable(resource: LearningResource): boolean {
  return resource.verification === "published"
    && resource.sourceIds.length > 0
    && Boolean(resource.edition)
    && Boolean(resource.reviewedAt);
}
