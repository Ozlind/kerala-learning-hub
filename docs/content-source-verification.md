# Learning-content source verification workflow

## Current status

The starter library is original practice material. It is not yet mapped to the current Kerala SCERT syllabus. The `syllabusAligned: false` and `starter-content-not-syllabus-verified` values must remain unchanged until the review below is complete.

The source registry at `src/data/official-learning-sources.ts` records official places to begin research. Registry presence is **not** proof that a lesson has been verified. Existing starter modules intentionally have empty `sourceIds` until a specific source and chapter have been reviewed.

## Review steps for each module

1. Identify the current textbook edition and academic year for the exact standard, subject, medium and part.
2. Confirm the chapter title and page/section from the official edition. Record the exact official URL and access date.
3. Map each learning goal to a concrete chapter outcome or section; do not infer alignment from a similar topic title alone.
4. Have a second reviewer check the mapping, terminology, answer keys and age appropriateness.
5. Add the reviewed source ID to the module only after the evidence exists. Keep a chapter/page locator in the review record.
6. Update the validator and tests in the same change before any module can be labelled syllabus-verified.

## Copyright and freshness safeguards

- The SCERT textbook archive's accessible landing page redirects to sign-in and displays a copyright warning. Use it to locate a candidate edition; do not download or republish textbook files through this project.
- The accessible SCERT question-pool page exposes a 2022 year option. Treat it as historical until the exact year's relevance and reuse permissions are confirmed.
- Prefer original explanations, examples and practice questions that are independently written and checked. Link to official material rather than reproducing textbook passages or question-bank content.
- A source being hosted on an official domain does not by itself establish that it is the latest edition or that its contents may be republished.
- If a source is inaccessible, ambiguous or outdated, leave the lesson unverified and record the blocker instead of guessing.

## Release gate

A public release must not describe content as “SCERT-aligned”, “textbook-verified” or “board-exam verified” unless the exact edition and chapter mapping has been reviewed and the validation rules explicitly support that status. The current validator deliberately blocks syllabus-alignment claims for all starter content.
