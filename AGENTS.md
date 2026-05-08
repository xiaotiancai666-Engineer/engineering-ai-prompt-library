# AGENTS.md

## Project role

This project is a static web app for an overseas civil engineering AI prompt library.

## Target user

The target user is a road and bridge engineer working on overseas infrastructure projects, especially cost control, contract analysis, consultant communication, project reporting, and Civil 3D learning.

## Coding rules

- Use plain HTML, CSS, and JavaScript unless otherwise requested.
- Keep the project lightweight and easy to deploy on GitHub Pages.
- Do not introduce unnecessary frameworks.
- Do not introduce a backend or database for the first usable version.
- Use UTF-8 encoding.
- Chinese text must display correctly.
- UI should be clean, professional, and suitable for engineering users.
- Every prompt card should include a clear copy button.
- Keep JavaScript readable and easy to extend.
- Avoid empty slogans and AI-sounding language.

## Product rules

- Focus on practical engineering use cases.
- Use clear Chinese explanations.
- Do not fabricate engineering standards, contract clauses, or project data.
- If sample data is needed, mark it clearly as sample data.
- Prompt placeholders should use clear markers such as `【填写】` or `【粘贴】`.
- Output should be practical, direct, and easy to use.

## Repository structure

- `index.html`: static page entry.
- `style.css`: visual design and responsive layout.
- `script.js`: prompt data, rendering, search, category filtering, and copy behavior.
- `prompts/*.md`: source prompt templates grouped by engineering category.
- `docs/product-requirements.md`: product scope, acceptance criteria, and future roadmap.
- `changelog.md`: version history.

## Review checklist

Before finishing any task, check:

- Does the page open normally?
- Does the search function work?
- Do category filters work?
- Do copy buttons work?
- Is the page mobile friendly?
- Does Chinese text display correctly?
- Can the project run as a static website?
- Are any engineering facts, contract clauses, standards, or project data fabricated?
