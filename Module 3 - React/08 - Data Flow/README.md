# Data Flow (Lifting State Up)

Passing data down and events up (`npm install` then `npm run dev`).

- **Exercise 1** - `Exercise1` is an image gallery: `images` + `currentImg` in state, `shiftImageBack` / `shiftImageForward` move through them.
- **Exercises 2-7** - a conversation app:
  - `Exercise2` holds the state (`conversations`, `displayConversation`) and shows `List` when nothing is open, or `Conversation` when a contact is picked.
  - `List` gets the contact names (pulled from the data with `map`) and the select handler, and renders a `Contact` for each.
  - `Contact` shows a name and calls the handler on click - the handler was passed **down** from `Exercise2` → `List` → `Contact`.
  - `Conversation` gets the `convo` array + the contact name, renders each message ("Me" for `self`, the contact's name for `other`), and a `Back` button that clears `displayConversation`.
