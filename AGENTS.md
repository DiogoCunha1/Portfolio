# AGENTS

This file is for coding agents working in this repository.
It captures build, lint, test commands and local conventions.

## Repo overview
- Stack: React 18 with Create React App (react-scripts).
- Language: JavaScript (no TypeScript in repo).
- Styling: plain CSS files in `src/styles` imported into components.
- Content: portfolio sections in `src/components` and global layout in `src/App.jsx`.

## Agent rules discovery
- No Cursor rules found in `.cursor/rules/` or `.cursorrules`.
- No Copilot rules found in `.github/copilot-instructions.md`.
- If these files appear later, prefer them over this document.

## Install and run
- Install deps: `npm install`
- Dev server: `npm start`
- Production build: `npm run build`
- Deploy (GitHub Pages): `npm run deploy`

## Linting
- No dedicated `lint` script in `package.json`.
- CRA runs ESLint during `npm start` and `npm run build`.
- If you must lint manually: prefer `npm run build` or `npm start` output.

## Testing
- Full test suite (watch mode by default): `npm test`
- One test file: `npm test -- path/to/file.test.js`
- One test name: `npm test -- -t "partial test name"`
- CI style (no watch): `CI=true npm test -- --watchAll=false`
- For CRA, add `--` to forward args to Jest.

## Project structure
- Entry: `src/index.js` mounts `src/App.jsx`.
- Sections: `src/components/*` (one component per section).
- Styles: `src/styles/*.css` with shared design tokens.
- Public HTML: `public/index.html`.

## Code style (JS/JSX)
- Use 2-space indentation.
- Use semicolons and single quotes (see existing files).
- Prefer function components and React hooks.
- Keep components small and single-purpose.
- Use arrow functions for component definitions and handlers.
- Keep JSX readable; extract repeated markup into small components.

## Imports
- Order: React, third-party libs, local components, local styles.
- Group imports with a blank line between groups.
- Import CSS directly in the component that uses it.
- Prefer relative imports; no path aliases configured.

## Naming conventions
- Components: PascalCase filenames and component names.
- Hooks: `useX` naming, stored in `src/hooks`.
- CSS classes: kebab-case.
- IDs/anchors: match section names used by navigation.

## Types and props
- No TypeScript; use clear prop names and defaults.
- If a component needs defaults, handle them in the component body.
- Avoid implicit any: document assumptions in code or README.

## Error handling and safety
- Guard against undefined data before rendering lists.
- Keep UI resilient to missing optional fields.
- Avoid throwing in render; prefer early returns or fallbacks.
- Clean up event listeners in `useEffect`.

## State and effects
- Keep state local unless shared across sections.
- Prefer derived values instead of extra state.
- Use `useEffect` only for side effects.
- Avoid expensive work in render; memoize when needed.

## CSS and design system
- Use design tokens from `src/styles/variables.css`.
- Reuse utilities from `src/styles/utilities.css`.
- Reuse animations from `src/styles/animations.css`.
- Avoid hard-coded colors and spacing when a token exists.
- Follow the design system best practices in `DESIGN_SYSTEM.md`.

## Animations and scroll effects
- Use the `useScrollAnimation` hook when adding scroll-reveal sections.
- Use classes like `fade-in`, `slide-in-left`, `slide-in-right`, `scale-in`.
- Keep animation durations consistent with tokens in variables.

## Accessibility and UX
- Use semantic HTML (`section`, `nav`, `main`, `footer`).
- Provide `aria-label` on icon-only buttons.
- Ensure keyboard access for interactive elements.
- Keep text contrast consistent with the design system.

## Content updates
- Write-ups are maintained in `src/components/Writeups.jsx`.
- Follow `WRITEUPS_GUIDE.md` for fields, tags, and difficulty colors.
- Keep write-ups sorted by date or ID (see guide).

## Common edit patterns
- Add a new section: create component + CSS, then wire into `src/App.jsx`.
- Update styles: prefer editing `src/styles/*.css` rather than inline styles.
- Add new tokens: update `src/styles/variables.css` and docs.

## Component structure
- Use semantic `section` wrappers with stable `id` values.
- Keep section ordering in `src/App.jsx` as the source of truth.
- Prefer local helpers inside a component over shared utils unless reused.
- Avoid deep prop drilling; keep data close to the section.

## CSS organization
- Keep one CSS file per component in `src/styles`.
- Import the CSS at the top of the owning component.
- Use existing tokens for color, spacing, radius, shadows, and transitions.
- Prefer utility classes for common patterns before adding new CSS.

## Data and content conventions
- Arrays for cards and lists live inside their section component.
- Keep list items ordered consistently (date desc or id asc).
- Use clear, short labels for tags and badges.

## Assets and icons
- Prefer `react-icons` for consistent iconography.
- If adding images, keep them optimized and sized for web.
- Use `public/` for static assets or import from `src` for bundling.

## Tooling and formatting
- No Prettier config; follow existing formatting by example.
- Avoid adding new tooling unless explicitly requested.
- Keep `package.json` and `package-lock.json` in sync.

## Deployment notes
- `npm run deploy` runs `npm run build` then publishes `build/` via gh-pages.
- Update `homepage` in `package.json` if the deploy target changes.

## Build notes
- CRA handles bundling and ESLint checks during build.
- If build fails on lint, fix lint issues before proceeding.

## Git hygiene for agents
- Do not edit files under `node_modules`.
- Avoid changing unrelated files in the same commit.
- Document any new commands in this file.

## When unsure
- Check existing components for patterns before adding new ones.
- Prefer consistency with existing UI and CSS utilities.
- Ask for clarification only if a change is ambiguous or risky.
