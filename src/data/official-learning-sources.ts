/**
 * Official-source discovery registry for Kerala Learning Hub.
 *
 * These records are navigation/verification aids, not proof that any lesson
 * matches the current syllabus. Do not set a module's sourceIds until a human
 * reviewer has confirmed the exact edition, medium, class, subject and chapter.
 */
export type OfficialLearningSource = {
  id: string;
  title: string;
  url: string;
  authority: "SCERT Kerala";
  sourceType: "textbook-archive" | "question-pool";
  status: "discovery-only" | "historical-catalogue";
  reviewedAt: string;
  notes: string;
};

export const OFFICIAL_LEARNING_SOURCES: OfficialLearningSource[] = [
  {
    id: "scert-textbook-archive",
    title: "SCERT Kerala Textbook Archive",
    url: "https://textbooksarchives.scert.kerala.gov.in/",
    authority: "SCERT Kerala",
    sourceType: "textbook-archive",
    status: "discovery-only",
    reviewedAt: "2026-10-27",
    notes:
      "The accessible landing page redirects to sign-in and displays a copyright warning. Use it to locate a candidate edition only; verify standard, subject, medium, part and publication year before chapter mapping. Do not download or republish textbook files through this project.",
  },
  {
    id: "scert-question-pool",
    title: "SCERT Kerala Higher Secondary Question Pool",
    url: "https://questionpool.scert.kerala.gov.in/index.php/questions",
    authority: "SCERT Kerala",
    sourceType: "question-pool",
    status: "historical-catalogue",
    reviewedAt: "2026-10-27",
    notes:
      "The accessible public page exposes a 2022 year option. Treat material as historical until its year, subject, district and present applicability are checked. Do not copy question-bank text into this project without a rights review.",
  },
];
