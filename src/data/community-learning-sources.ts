/**
 * Public discovery metadata from Kerala education resource sites.
 * This catalogue is not a republication of their notes or textbooks.
 * Use the sources to identify syllabus topics, then author original explanations
 * and questions in our own UI. Verify every chapter against the current SCERT/DHSE
 * edition before marking any content syllabus-verified.
 */
export type CommunityLearningSource = {
  id: string;
  title: string;
  provider: string;
  audience: string;
  subjects: string[];
  resourceTypes: string[];
  discoveryUrl: string;
  reviewedAt: string;
  status: "discovery-only" | "topic-index-reviewed";
  notes: string;
};

export const COMMUNITY_LEARNING_SOURCES: CommunityLearningSource[] = [
  {
    id: "hsslive-plus-one",
    title: "Plus One study materials",
    provider: "HSSLiVE.IN",
    audience: "Class 11 / Plus One",
    subjects: ["English", "Hindi", "Malayalam", "Physics", "Chemistry", "Biology", "Mathematics", "Commerce and Humanities subjects"],
    resourceTypes: ["Chapter-wise notes", "Model questions", "Previous questions", "Answer keys"],
    discoveryUrl: "https://www.hsslive.in/p/higher-secondary-plus-oneclass-11-study.html",
    reviewedAt: "2026-10-28",
    status: "discovery-only",
    notes: "The listing describes broad subject coverage. Exact chapter/edition mapping still needs review against the current DHSE/SCERT syllabus."
  },
  {
    id: "hsslive-plus-two",
    title: "Plus Two study materials",
    provider: "HSSLiVE.IN",
    audience: "Class 12 / Plus Two",
    subjects: ["English", "Hindi", "Malayalam", "Physics", "Chemistry", "Biology", "Mathematics", "Accountancy", "Business Studies and Humanities subjects"],
    resourceTypes: ["Chapter-wise notes", "Model questions", "Previous questions", "Answer keys"],
    discoveryUrl: "https://www.hsslive.in/p/academics.html",
    reviewedAt: "2026-10-28",
    status: "discovery-only",
    notes: "Use as a topic-discovery aid; do not copy published notes verbatim or treat historical question papers as current syllabus proof."
  },
  {
    id: "hsslive-sslc-2026",
    title: "SSLC study materials — Vijayapatham 2026",
    provider: "HSSLiVE.IN / Alappuzha DIET resource listing",
    audience: "Class 10 / SSLC",
    subjects: ["SSLC subjects; verify individual material"],
    resourceTypes: ["Study material", "Revision notes", "Model questions"],
    discoveryUrl: "https://www.hsslive.in/2026/01/sslc-notes.html",
    reviewedAt: "2026-10-28",
    status: "discovery-only",
    notes: "The page title identifies Vijayapatham 2026 by Alappuzha DIET. Subject files and current applicability must be verified individually."
  },
  {
    id: "hsslive-sslc-library",
    title: "Class 10 SSLC study-material index",
    provider: "HSSLiVE.IN",
    audience: "Class 10 / SSLC",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Malayalam and other language subjects"],
    resourceTypes: ["Study notes", "Model questions", "Answer keys"],
    discoveryUrl: "https://www.hsslive.in/2021/03/class-10-sslc-study-materials.html",
    reviewedAt: "2026-10-28",
    status: "discovery-only",
    notes: "Historical index page; never label a linked resource current without confirming its year and textbook edition."
  },
  {
    id: "hsslive-business-studies",
    title: "Plus Two Business Studies notes",
    provider: "HSSLiVE.IN",
    audience: "Class 12 / Plus Two",
    subjects: ["Business Studies"],
    resourceTypes: ["Subject notes"],
    discoveryUrl: "https://www.hsslive.in/2015/06/plus-two-business-studies-class-notes.html",
    reviewedAt: "2026-10-28",
    status: "discovery-only",
    notes: "The article identifies teacher-prepared study notes. Treat as a reference lead only; chapter alignment and permission to reproduce must not be assumed."
  },
  {
    id: "hse-zoology-notes",
    title: "Plus Two Zoology notes and lesson media",
    provider: "HSE Zoology Blog",
    audience: "Class 11–12 / Higher Secondary",
    subjects: ["Zoology", "Biology"],
    resourceTypes: ["Lesson notes", "Slide shows", "Pictures", "Videos", "Model questions"],
    discoveryUrl: "https://hsezoology.blogspot.com/p/blog-page_50.html",
    reviewedAt: "2026-10-28",
    status: "topic-index-reviewed",
    notes: "Public search metadata identifies notes for Kerala Plus One/Plus Two. Slide-show index includes Human Reproduction, Reproductive Health, Principles of Inheritance and Variation, Molecular Basis of Inheritance, Evolution, and Human Health and Disease. Verify chapter names against the current edition before use."
  },
  {
    id: "hse-zoology-slides",
    title: "Plus Two Zoology slide-show topics",
    provider: "HSE Zoology Blog",
    audience: "Class 12 / Plus Two",
    subjects: ["Zoology", "Biology"],
    resourceTypes: ["Topic index", "Slide shows"],
    discoveryUrl: "https://hsezoology.blogspot.com/p/plus-two-slide-shows.html",
    reviewedAt: "2026-10-28",
    status: "topic-index-reviewed",
    notes: "Topic names are indexed for discovery only. Kerala Learning Hub should create its own explanations, diagrams and assessment questions rather than mirror slides."
  }
];
