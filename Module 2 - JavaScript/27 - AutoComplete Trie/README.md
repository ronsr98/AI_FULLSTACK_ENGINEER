# AutoComplete Trie Project

A console-based autocomplete app built on a **Trie** (prefix tree).

## Files
- `AutoCompleteTrie.js` — the Trie class: `addWord`, `findWord`, `predictWords`, and the helpers `_getRemainingTree` / `_allWordsHelper`.
- `app.js` — the console interface (`add` / `find` / `complete` / `help` / `exit`).
- `AutoCompleteTrie.test.js` — Jest unit tests (3+ per method).

## Run
```bash
npm install
node app.js     # the interactive console
npx jest        # the unit tests
```

## Example
```
> add cat
✓ Added 'cat' to dictionary
> add car
✓ Added 'car' to dictionary
> complete ca
Suggestions for 'ca': cat, car
> find dog
✗ 'dog' not found in dictionary
> exit
Goodbye!
```

`predictWords` runs in about O(m) to reach the prefix (m = prefix length), then collects all words beneath it.
