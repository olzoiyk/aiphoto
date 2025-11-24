# Repo-specific Copilot Instructions

Purpose: Quick, actionable guidance so AI coding agents can be immediately productive in this repository.

**Big Picture**:
- **App entry**: `index.html` is the single entry point — this repository is a minimal static site (no JS build, no server code).
- **Architecture**: single-file static layout. There are currently no backend services, build pipeline, or test harnesses to coordinate with.

**Key Files**:
- `index.html`: the app shell and the only source file present. Treat edits here as the primary change surface.

**How to run & validate locally**:
- No build step. Serve the folder from the repo root. Examples (PowerShell):

```powershell
python -m http.server 8000
# or, if Node is installed
npx serve .
```

- Visit `http://localhost:8000/index.html` to confirm changes render.

**Project-specific patterns & conventions (discoverable)**:
- Single-file approach: avoid creating hidden assumptions about a multi-file app. If you add assets, place them under a top-level `assets/` or `static/` directory and update `index.html` references.
- No package manager files (`package.json`, `requirements.txt`) exist — do not add language-specific scaffolding unless requested.

**Editing guidance for AI agents**:
- When modifying layout or content, update only `index.html` unless the user asks to add new files/directories.
- Keep changes minimal and easily reversible: produce small, focused diffs (single-feature per PR) because there is no CI or tests to catch regressions.
- Include a short comment in `index.html` near significant blocks you change describing intent (e.g., `<!-- changed: moved hero text to H1 for accessibility -->`).

**Integration & external dependencies**:
- None found in the repo. If integrating external services, document new files and add a brief `README.md` describing the integration and any run steps.

**When to escalate to the human maintainer**:
- If a requested change would introduce a build system, tests, or external services, ask for explicit permission first.
- If uncertain about visual or content choices (copy, branding), create a small preview and ask for confirmation.

**Examples**:
- To add a new stylesheet, create `assets/styles.css`, link it from `index.html`, and include a one-line note in the commit message: `Add styles.css and link in index.html`.

If anything here is unclear or you'd like me to merge this with an existing `.github/copilot-instructions.md`, tell me where and I will update accordingly.
