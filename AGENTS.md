# AGENTS.md

## Cursor Cloud specific instructions

This is a **Create React App** project — a front-end-only React SPA for a computer repair service ("e989"). No backend, no database, no Docker.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm start` (port 3000) |
| Build | `npm run build` |
| Lint | `npx eslint src/` |
| Tests | `npm test -- --watchAll=false` |

### Non-obvious notes

- The single test file `src/components/App/App.test.tsx` is stale CRA boilerplate. It fails because it searches for "learn react" text and doesn't wrap `<App />` in a `<BrowserRouter>`. This is a pre-existing issue in the repo, not a regression.
- ESLint config is inline in `package.json` (`eslintConfig` field), not in a separate config file.
- Tailwind CSS is configured via `tailwind.config.js`; custom color palette and breakpoints are defined there.
- The app uses React Router v6 with `useRoutes` in `App.tsx`. Routes: `/`, `/check-application`, `/warranty-repair`, `/contacts`.
