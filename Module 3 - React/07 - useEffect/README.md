# useEffect

`useEffect` practice (`npm install` then `npm run dev`).

- **Exercise 1** - `Clock` shows the current time and updates every second with `setInterval` inside `useEffect`. The effect returns a cleanup that clears the interval.
- **Exercise 2** - `Posts` fetches from `jsonplaceholder.typicode.com/posts` (in a `useEffect` that runs once) and shows the first 10, side by side.
- **Exercise 3** - a second `useEffect` listens to the window `resize` event and switches the posts from a row to a column on small screens (and cleans the listener up).
