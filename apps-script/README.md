# Google Forms generator

`CreateForms.gs` creates one self-marking Google Form per knowledge check,
with correct answers, points, and the original feedback text baked in.

## Run it
1. Go to <https://script.google.com> (school account) → **New project**
2. Paste the contents of `CreateForms.gs`, save, run **createAllForms**
3. Approve permissions (creates Forms in your Drive; touches nothing else)
4. Copy the STUDENT urls from the execution log into
   `docs/year-8/generative-ai/quizzes/*.md` (replace the `FORM_URL_*` placeholders)
5. Commit and push — the site redeploys automatically

## Included quizzes
Currently: What is Generative AI (6q incl. matching), Question Mapping (5q),
Misinformation vs Disinformation (5q), REVIEWing Information (5 of 7q).
Pending extraction (add to QUIZ_DATA when done): Rules for using Generative AI,
Lesson 1a, REVIEWing Information's 2 matching questions.
