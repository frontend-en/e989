# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is **computer-service (e989)** — a front-end React app for a computer/office equipment repair service (Russian-language). Built with Create React App + TypeScript + Tailwind CSS. No backend, no database, no external service dependencies.

### Commands

Standard CRA scripts are in `package.json`:

| Task | Command |
|------|---------|
| Dev server | `npm start` (port 3000) |
| Build | `npm run build` |
| Tests | `CI=true npm test` |
| Lint | `npx eslint src/` |

### Known issues

- The existing test in `src/components/App/App.test.tsx` fails because `App` uses `useRoutes` (requires `<Router>` context), but the test renders `<App />` without wrapping it in a Router. This is a pre-existing issue in the repository.

### Dev environment notes

- `npm install` is sufficient for dependency setup — no additional system dependencies required.
- Dev server starts with `BROWSER=none npm start` to avoid trying to open a browser in headless environments.
