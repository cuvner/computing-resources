# Computing Department Resources

KS3/KS4 Computing lessons, tasks, and knowledge checks. Published with MkDocs Material to GitHub Pages; knowledge checks run as self-marking Google Forms.

## Publish (first time)
1. Create a **public** GitHub repo called `computing-resources` (Pages on the free plan needs public)
2. `git init && git add . && git commit -m "Initial migration from Alexandria"`
3. `git remote add origin git@github.com:YOUR-USERNAME/computing-resources.git && git push -u origin main`
4. Repo **Settings → Pages → Source: GitHub Actions**
5. Replace `REPLACE-USERNAME` in `mkdocs.yml` and `docs/index.md`, push again
6. Run the Forms generator (see `apps-script/README.md`) and paste the Form links into the quiz pages

## ⚠️ Before pushing, decide about `extraction/`
`extraction/` holds the raw quiz data **including correct answers**. On a public
repo, determined students can find it. Options:
- delete it after generating the Forms (recommended; it's archived elsewhere), or
- add `extraction/` to `.gitignore`

## Editing content
Everything under `docs/` is plain Markdown. Edit → commit → the site redeploys
automatically via GitHub Actions.
