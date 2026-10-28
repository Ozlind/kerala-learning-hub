import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle2, FileText, Languages, LibraryBig, NotebookPen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Textbooks & Notes Library | Kerala Learning Hub",
  description: "Find official Kerala SCERT and Samagra textbook sources, plus original short notes, detailed explanations and practice resources for Classes 1–12.",
};

const classes = [
  { id: "class-1", label: "Class 1", stage: "Primary" },
  { id: "class-2", label: "Class 2", stage: "Primary" },
  { id: "class-3", label: "Class 3", stage: "Primary" },
  { id: "class-4", label: "Class 4", stage: "Primary" },
  { id: "class-5", label: "Class 5", stage: "Upper primary" },
  { id: "class-6", label: "Class 6", stage: "Upper primary" },
  { id: "class-7", label: "Class 7", stage: "Upper primary" },
  { id: "class-8", label: "Class 8", stage: "High school" },
  { id: "class-9", label: "Class 9", stage: "High school" },
  { id: "class-10", label: "Class 10 · SSLC", stage: "High school" },
  { id: "plus-one", label: "Plus One", stage: "Higher secondary" },
  { id: "plus-two", label: "Plus Two", stage: "Higher secondary" },
];

const sources = [
  {
    title: "Samagra — Official Digital Textbooks",
    detail: "KITE Kerala’s textbook portal. Choose the standard, subject, medium and book edition available there.",
    url: "https://samagra.kite.kerala.gov.in/#/textbook/page",
    tag: "Textbooks",
  },
  {
    title: "SCERT — Revised Textbooks, Part 1",
    detail: "Official SCERT listing. Confirm the publication year and exact class/subject before using a chapter as a syllabus reference.",
    url: "https://scert.kerala.gov.in/curriculum-2024/",
    tag: "SCERT",
  },
  {
    title: "SCERT — Revised Textbooks, Part 2",
    detail: "Additional official revised textbook listing; check the individual title and edition.",
    url: "https://scert.kerala.gov.in/textbook2024part2/",
    tag: "SCERT",
  },
  {
    title: "SCERT — Higher Secondary Additional Textbooks",
    detail: "Official entry point for additional higher-secondary textbook materials.",
    url: "https://scert.kerala.gov.in/higher-secondary-additional-textbooks/",
    tag: "Plus One & Plus Two",
  },
  {
    title: "Samagra Learning Room",
    detail: "Official digital learning resources, including multimedia and assessment activities.",
    url: "https://samagra.kite.kerala.gov.in/#/layout/learningroom",
    tag: "Videos & activities",
  },
  {
    title: "Mukulam — Higher Secondary Learning",
    detail: "KITE’s higher-secondary learning-resource portal; verify subject and academic year for each item.",
    url: "https://mukulam.kite.kerala.gov.in/",
    tag: "Higher secondary",
  },
];

const noteFormats = [
  { title: "Quick short notes", detail: "Key ideas, definitions, formulas and facts for fast revision.", icon: FileText },
  { title: "Detailed notes", detail: "Original explanations, worked examples, diagrams described in words and step-by-step reasoning.", icon: NotebookPen },
  { title: "Chapter practice", detail: "Original easy, medium and challenge questions with checked answers and explanations.", icon: CheckCircle2 },
  { title: "Malayalam + English", detail: "Language-aware explanations where available, with technical terms retained when useful.", icon: Languages },
];

export default function LibraryPage() {
  return (
    <main className="resource-library">
      <header className="resource-topbar">
        <Link className="resource-brand" href="/"><span className="resource-brand-mark"><LibraryBig size={20} /></span><span>Kerala <b>Learning Hub</b></span></Link>
        <Link className="resource-back" href="/">Back to study space <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="resource-hero">
        <span className="resource-kicker"><BookOpen size={15} /> CLASS 1–12 · TEXTBOOKS & STUDY NOTES</span>
        <h1>One place to find your <em>next lesson.</em></h1>
        <p>Start with the official textbook for your class, then use original notes, clear explanations and practice to build understanding.</p>
        <div className="resource-hero-actions">
          <a className="resource-primary" href="https://samagra.kite.kerala.gov.in/#/textbook/page" target="_blank" rel="noreferrer">Open official textbooks <ArrowUpRight size={16} /></a>
          <Link className="resource-secondary" href="/#classes">Choose a class in Learning Hub</Link>
        </div>
        <div className="resource-trust-note"><ShieldCheck size={16} /> Official book links open the publisher’s website. Edition and syllabus alignment must be checked per book.</div>
      </section>

      <section className="resource-section" aria-labelledby="class-library-title">
        <div className="resource-section-heading"><div><span>YOUR CLASS</span><h2>Choose where you are learning</h2></div><p>Classes 1–10 and Higher Secondary</p></div>
        <div className="resource-class-grid">
          {classes.map((item) => (
            <a key={item.id} className="resource-class-card" href={item.id.startsWith("plus") ? "https://samagra.kite.kerala.gov.in/#/textbook/page" : "https://samagra.kite.kerala.gov.in/#/textbook/page"} target="_blank" rel="noreferrer">
              <span className="resource-class-stage">{item.stage}</span>
              <strong>{item.label}</strong>
              <span className="resource-class-link">Find textbooks <ArrowUpRight size={14} /></span>
            </a>
          ))}
        </div>
        <p className="resource-small-note">The official portal controls which editions and languages are currently available. This page does not guess a textbook edition or label an unverified chapter as current.</p>
      </section>

      <section className="resource-section" aria-labelledby="notes-format-title">
        <div className="resource-section-heading"><div><span>ORIGINAL STUDY MATERIAL</span><h2>Learn it. Revise it. Practise it.</h2></div><p>Made to complement the textbook, not replace it</p></div>
        <div className="resource-note-grid">
          {noteFormats.map(({ title, detail, icon: Icon }) => <article className="resource-note-card" key={title}><span className="resource-note-icon"><Icon size={19} /></span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
        <div className="resource-editorial-note"><strong>How notes are labelled</strong><p><b>Original notes</b> are written for this learning hub. <b>Textbook-aligned</b> means the exact edition and chapter have been checked. A note is not marked syllabus-verified until that source review is complete.</p></div>
      </section>

      <section className="resource-section" aria-labelledby="official-sources-title">
        <div className="resource-section-heading"><div><span>PRIMARY SOURCES</span><h2>Official textbook & learning portals</h2></div><p>External sites open separately</p></div>
        <div className="resource-source-list">
          {sources.map((source) => <article className="resource-source-card" key={source.title}><div className="resource-source-copy"><span className="resource-source-tag">{source.tag}</span><h3>{source.title}</h3><p>{source.detail}</p><a href={source.url} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={14} /></a></div></article>)}
        </div>
        <p className="resource-copyright-note">Textbook pages remain on their official host. Kerala Learning Hub links to these sources and creates its own explanations and practice materials rather than republishing complete copyrighted books.</p>
      </section>

      <footer className="resource-footer"><Link href="/">← Return to Kerala Learning Hub</Link><span>Study clearly. Revise confidently.</span></footer>
    </main>
  );
}
