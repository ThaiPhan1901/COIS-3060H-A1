# MSR Research Guide

[![MSR Guide CI](https://github.com/OWNER/REPOSITORY/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPOSITORY/actions/workflows/ci.yml)

A clean, responsive reference website for students starting research in Mining Software Repositories (MSR).

## Features
- Four tabs: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.
- Reference tables covering the sources, techniques, conferences, and journals listed in the assignment.
- Responsive layout and keyboard-accessible tab navigation.
- Node.js smoke tests and a GitHub Actions CI workflow.
- Static website suitable for GitHub Pages.

## Project structure
```text
docs/requirements.md
src/index.html
src/style.css
src/script.js
test/smoke.test.js
tests/test_checklist.md
.github/workflows/ci.yml
package.json
README.md
.gitignore
```

## Run locally
No build step or server is required. Open `src/index.html` in a browser.

To run the automated tests, install Node.js 20 or newer and run:
```bash
npm test
```

## GitHub setup
1. Create a **public** repository and push these files.
2. Replace `OWNER/REPOSITORY` in the badge URL above with your GitHub username and repository name.
3. Create at least three GitHub milestones and add issues for each milestone.
4. Create a feature branch, commit the implementation, and open a pull request referencing its issue (for example, `Closes #1`).
5. In **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The included `pages.yml` workflow publishes the contents of `src/` as the website root.
6. Check the Actions tab to confirm both CI and Pages deployment pass.

## Suggested milestones
- **M1 — Page Structure & Navigation:** page layout, working tabs, Data Sources content.
- **M2 — Collection & Analysis Methods:** complete reference tables.
- **M3 — Publication Venues:** conference and journal listing.
- **M4 — Testing & Deployment:** automated checks, CI, and GitHub Pages.

## Notes
The publication relevance labels are intended as practical guidance for students. Always check the current venue call for papers and recent proceedings before submitting research.
