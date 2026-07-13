# Google Forms generator

`CreateForms.gs` creates one Google Form per assessment:

- **Knowledge checks** become self-marking quizzes with correct answers, points,
  and the original feedback text baked in (matching questions become one
  auto-graded dropdown per pair).
- **Tasks and self-reflections** become teacher-marked forms with one paragraph
  box per prompt.

## Run it
1. Go to <https://script.google.com> (school account) → **New project**
2. Paste the contents of `CreateForms.gs`, save, run **createAllForms**
3. Approve permissions (creates Forms in your Drive; touches nothing else)
4. The execution log prints each form's `FORM_URL_*` token in brackets next to
   its title — copy each STUDENT url over the matching placeholder in
   `docs/year-8/generative-ai/quizzes/*.md` and
   `docs/year-9/business-it/quizzes/*.md` (or paste the whole log into a
   Claude Code session and ask it to do the replacement)
5. Commit and push — the site redeploys automatically

Task and self-reflection forms have no placeholders in the site — share those
links through Google Classroom.

## Included assessments (24)
- **Year 8 — Introduction to Generative AI**: 4 knowledge checks
  (What is Generative AI, Question Mapping, Misinformation vs Disinformation,
  REVIEWing Information — 5 of 7q).
  Pending extraction (add to QUIZ_DATA when done): Rules for using Generative
  AI, Lesson 1a, REVIEWing Information's 2 matching questions.
- **Year 9 — Business IT**: 11 knowledge checks, 5 tasks, 4 self-reflections
  (the full unit).

Re-running `createAllForms` creates a **new copy of every form** — if you are
only adding a course, comment out or delete the entries already created before
running, or you'll get duplicates in Drive.
