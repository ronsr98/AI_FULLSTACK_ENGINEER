# Props

Passing data parent → child with props (`npm install` then `npm run dev`).

- `Company` is its own file and receives `name` + `revenue` through `props`.
- `App` holds the `companies` array and `map`s over it, rendering a `<Company />` for each and passing the data down as props.
