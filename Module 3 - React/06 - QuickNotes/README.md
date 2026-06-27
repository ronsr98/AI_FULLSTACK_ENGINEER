# QuickNotes

My first React project - a notes app. Built with Vite + React (hooks).

## Run
```bash
npm install
npm run dev
```

## What's done (by step)
- **Step 1** - add notes with a multiline textarea, each note keeps its text + created date, shown in a grid
- **Step 2** - human-readable dates (e.g. "Aug 31, 12:30 PM") + delete with a `confirm()` prompt
- **Step 3** - optional title (shown above the text only if there is one)
- **Step 3.1** - textarea auto-resizes as you type (no manual drag handle)
- **Step 4** - click a note to open it in a modal
- **Step 5** - edit title/body in the modal (reuses the form), saves an update date that's shown on the note
- **Step 6** - `vite.config.js` uses `base: './'` so the production build works on GitHub Pages (`npm run build`, then publish the `dist` folder)
- **Step 7** - notes persist in `localStorage` between reloads
- **Step 8** - each note has a category (Personal / Work / Ideas / Urgent) with its own background color
- **Step 9** - search bar filters by title/content + a filter button per category

## Structure
```
src/
  App.jsx              state, localStorage, search/filter, modal wiring
  categories.js        category list + colors
  date.js              date formatting helper
  components/
    NoteForm.jsx       add + edit form (reused)
    Note.jsx           single note card
    NotesGrid.jsx      the grid
    Modal.jsx          popup
    SearchBar.jsx      search + category filters
```
