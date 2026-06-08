# Git Collaboration

A pair exercise done together with my partner (eden), practicing real git
collaboration: working as collaborators on one shared repo, on separate branches,
then merging into `main` via Pull Requests.

**Shared repo:** https://github.com/edenmrv/git-collaboration

## Roles
- **Partner A (eden)** — front-end branch (`dist/` files, secret message).
- **Partner B (me)** — back-end branch: an Express server.

## My part (back-end)
On a `back-end` branch I added `server.js` (in this folder), which:
1. Hosts the `dist/` folder as static files.
2. Exposes a `GET /message` route that returns a secret message as JSON.

```bash
npm install express
node server.js
# http://localhost:3000        -> serves the front-end
# http://localhost:3000/message -> { "secret": "This is the backend secret message!" }
```

## The collaboration flow we practiced
1. eden created the repo and added me as a collaborator (Clone, not Fork).
2. Each of us worked on our own branch (`front-end`, `back-end`).
3. `git add` → `git commit` → `git push` our branch.
4. Opened Pull Requests and merged both branches into `main` (no conflicts).
5. `git pull` to stay in sync.

The merged `main` is a working app: the server serves the front-end and provides the API route.
