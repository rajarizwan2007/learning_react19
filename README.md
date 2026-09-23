# Learning React 19

My day-by-day practice while learning React 19, built with [Vite](https://vite.dev).

## What's inside

| Page | Entry | What it practises |
|---|---|---|
| `index.html` | `src/main.jsx` | First components: a Bootstrap navbar and a main content block rendered with `createRoot` |
| `react_facts_project.html` | `src/react_facts_project.jsx` | "React facts" page composed from `Header`, `MainContent` and `Footer` components |

`src/App.jsx` is the original Vite starter component, kept for reference.

## Running it

```bash
npm install
npm run dev       # start the dev server with hot reload
```

Then open the URL Vite prints, e.g. `http://localhost:5173/` for the navbar page or
`http://localhost:5173/react_facts_project.html` for the facts page.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # lint with Oxlint
```

## Stack

- React 19
- Vite 8 with `@vitejs/plugin-react`
- Oxlint
- Bootstrap 4 (from CDN, for the navbar page)
