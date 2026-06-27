# Components

Components in separate files (`npm install` then `npm run dev`).

- **Exercise 1** - `Dummy` renders an `input` + `button`, loaded by `App`.
- **Exercise 2** - `Spam` renders a "Spam" div; `Spamalot` renders it 500 times via an array (no copy-paste). `#ex-2` lays them in a grid.
- **Exercise 3** - the component tree is just a sketch (App → Spamalot → Spam ×500), no code.
- **Exercise 4** - component tree built with `NavBar`, `Menu` (has Items), `Checkout` (has an Item), each in its own file. Kept DRY by reusing `Item`.
