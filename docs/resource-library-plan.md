# Kerala Learning Hub — Resource Library Build Plan

## Scope

The resource catalogue must cover Class 1–10, Plus One and Plus Two. Higher-secondary subjects must be organised by stream and selected subject, not treated as one shared syllabus. This plan is a production workflow, not a claim that chapter content is already complete.

## Source-of-truth policy

Use official sources first:
- SCERT Kerala: https://scert.kerala.gov.in/
- Revised textbooks, part 1: https://scert.kerala.gov.in/curriculum-2024/
- Revised textbooks, part 2: https://scert.kerala.gov.in/textbook2024part2/
- Plus One resources: https://scert.kerala.gov.in/hss-2026/
- Samagra: https://samagra.kite.kerala.gov.in/
- Mukulam: https://mukulam.kite.kerala.gov.in/

For every subject/chapter, record the exact source URL, textbook title, edition/year, medium, class, subject, chapter number/title, access date and verification status. Never guess a chapter list from memory. Re-check sources when a textbook or syllabus revision is announced.

## Resource package for each verified chapter

1. Original chapter overview and learning outcomes.
2. Clear notes in Malayalam and/or English according to the available medium.
3. Key terms, formulas, diagrams or vocabulary where relevant.
4. Worked examples or guided activities suited to the subject and age.
5. Practice questions with a range of difficulty and topic tags.
6. Checked answer key with explanations; add marking guidance where appropriate.
7. Short revision cards and a chapter test.
8. Curated official video/textbook links when available.
9. Accessibility metadata: readable text, alt text for meaningful images, keyboard support, and mobile-friendly layouts.

Not every resource type fits every chapter. Use age- and subject-appropriate packages instead of forcing identical templates everywhere.

## Content review gates

- **Not reviewed:** catalogue placeholder only; never present as verified syllabus content.
- **Source located:** a plausible official source is found, but edition/chapter match is not yet checked.
- **Edition verified:** exact class, subject, medium and edition are checked against the official source.
- **Content reviewed:** notes, questions and answers have been checked for correctness, clarity and age suitability.
- **Published:** source and edition metadata are present, content review is complete, and the item is ready for learners.

Keep provenance and review status visible to editors. Do not label a resource “official” unless it is actually published by the relevant authority.

## Copyright and trust

Link to official textbooks rather than republishing whole books. Write original explanations, examples, practice questions and revision notes. Only store third-party material when its licence or permission allows it. Mark AI-assisted drafts as drafts until a knowledgeable reviewer checks facts, calculations, language, answer keys and alignment.

## Recommended data model

- CurriculumClass: grade, stage, syllabus status.
- Subject: grade-specific subject identity, medium and stream (where applicable).
- Chapter: title/number, textbook edition, source URL and verification status.
- LearningResource: kind, language, difficulty, content, source IDs and review state.
- Question: prompt, options where appropriate, correct answer, explanation, difficulty, topic tags and reviewer status.
- ContentVersion: change history, reviewer and publication date.

Keep chapter content out of the main page component. Load it from typed data or a database/API so the library can grow without making the UI monolithic.

## Build sequence

1. Verify the current official textbook edition for each class, subject and medium.
2. Publish a coverage matrix with explicit “verified / pending” state.
3. Fill chapter metadata and official textbook links.
4. Author and review chapter packages in manageable batches.
5. Add searchable resource pages and filters for class, subject, chapter, language and resource type.
6. Add teacher/editor workflows and a review queue before large-scale public contributions.
7. Add optional accounts and cloud sync only after access rules, privacy, backups and recovery are designed.
8. Run automated checks plus human academic review before each publication batch.

## Release acceptance criteria

- No unverified chapter is presented as official or syllabus-confirmed.
- Every published resource has a source, edition and review date.
- Answer keys match the questions and calculations are checked.
- Class, subject, language and stream filters return the correct content.
- Mobile, keyboard and screen-reader basics are tested.
- No copyrighted full textbook is republished without permission.
- A deployment is called complete only after its production build is READY and the deployed pages are smoke-tested.
