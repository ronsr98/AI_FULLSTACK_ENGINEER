// Same Trie as the console project, used here by the web UI.
class AutoCompleteTrie {
  constructor(value = null) {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
  }
  addWord(word) {
    let node = this;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new AutoCompleteTrie(char);
      node = node.children[char];
    }
    node.endOfWord = true;
  }
  findWord(word) {
    const node = this._getRemainingTree(word);
    return node !== null && node.endOfWord;
  }
  _getRemainingTree(prefix, node = this) {
    let current = node;
    for (const char of prefix) {
      if (!current.children[char]) return null;
      current = current.children[char];
    }
    return current;
  }
  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) allWords.push(prefix);
    for (const char in node.children) {
      this._allWordsHelper(prefix + char, node.children[char], allWords);
    }
    return allWords;
  }
  predictWords(prefix) {
    const node = this._getRemainingTree(prefix);
    if (!node) return [];
    return this._allWordsHelper(prefix, node, []);
  }
}
