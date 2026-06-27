# State

`useState` practice (`npm install` then `npm run dev`).

- **Exercise 1** - `Hudini` keeps a `show` boolean in state and flips it with a button (one-line ternary message).
- **Exercise 2** - component tree App → `Landing` + `Home` → `Item` (many). `App` holds the state (user, store, shouldDiscount, currentPage); `Home` gets the store and renders an `Item` per product.
- **Exercise 3** - `currentPage` decides whether `Landing` or `Home` shows; buttons switch between them.
- **Exercise 4** - when `shouldDiscount` is on, `Item` shows `price * (1 - discount)`.
