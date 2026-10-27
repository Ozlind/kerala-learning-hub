# Student content quality gates

This checklist is the release standard for learning content in Kerala Students Hub. A page being published or a deployment being green does not, by itself, prove that its educational content is correct.

## 1. Curriculum mapping

Every curriculum-aligned item should record:

- School stage and class
- Subject and language
- Chapter/topic and learning outcome
- Syllabus or textbook edition / academic year
- Source title and canonical URL
- Verification date and reviewer
- Content status: `draft`, `reviewed`, or `verified`

Use `verified` only after checking the primary source. If the current official edition cannot be confirmed, label the item as a general practice resource rather than claiming exact syllabus alignment.

## 2. Accuracy and pedagogy

Before release, check:

- Facts, calculations, units, spelling, and terminology
- Answer keys against worked solutions
- Grade-appropriate language and prerequisite knowledge
- Clear explanations for incorrect answers, not just a score
- Malayalam and English content separately proofread where both are offered
- No fabricated citations, invented textbook page numbers, or unsupported exam predictions

## 3. Copyright and child safety

- Link to authorized official resources; do not republish copyrighted textbook scans or paid materials without permission.
- Collect only the student data needed for a clear purpose.
- Never expose private student progress, email addresses, or identifiers in public pages or logs.
- Keep public discussion and user-generated content out of the product until moderation and reporting controls exist.
- Do not include ads or tracking patterns that are inappropriate for children.

## 4. Functional release checks

For each content release, test:

- Class → subject → chapter navigation
- Search and filters, including empty and no-results states
- Quiz scoring, answer explanations, and retry behavior
- Progress persistence after reload and sign-in on another device (when accounts are enabled)
- Keyboard navigation, readable contrast, mobile layout, and Malayalam rendering
- Broken links and missing content
- Loading, error, and offline/slow-network states

## 5. Release gate

A release is ready only when:

1. TypeScript/build checks pass.
2. Changed user journeys pass smoke tests.
3. Content status and source metadata are visible to reviewers.
4. No critical security, privacy, or accessibility issue remains open.
5. A human reviewer has approved educational content marked `verified`.

## 6. Operational rule

Prefer a smaller, accurate, clearly sourced library over a larger library whose syllabus coverage is guessed. Track coverage by class, subject, and chapter, and show missing coverage honestly instead of implying completeness.
