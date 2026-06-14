// A Trie (prefix tree) for autocomplete. Every node is itself an AutoCompleteTrie.
class AutoCompleteTrie {
  constructor(value = null) {
    this.value = value; // the character at this node (root is null)
    this.children = {}; // char -> child node
    this.endOfWord = false; // true if a word ends here
  }

  // add a word, reusing existing nodes where possible
  addWord(word) {
    let node = this;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new AutoCompleteTrie(char);
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  // true only if the full word exists (ends with endOfWord)
  findWord(word) {
    const node = this._getRemainingTree(word);
    return node !== null && node.endOfWord;
  }

  // walk down the prefix; return the node where it ends, or null if the path breaks
  _getRemainingTree(prefix, node = this) {
    let current = node;
    for (const char of prefix) {
      if (!current.children[char]) return null;
      current = current.children[char];
    }
    return current;
  }

  // recursively collect every complete word under `node`, building the string as we go
  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) allWords.push(prefix);
    for (const char in node.children) {
      this._allWordsHelper(prefix + char, node.children[char], allWords);
    }
    return allWords;
  }

  // all words that start with the given prefix
  predictWords(prefix) {
    const node = this._getRemainingTree(prefix);
    if (!node) return [];
    return this._allWordsHelper(prefix, node, []);
  }
}

module.exports = AutoCompleteTrie;
