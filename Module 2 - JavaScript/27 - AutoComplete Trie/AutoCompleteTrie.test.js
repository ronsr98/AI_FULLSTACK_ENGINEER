const AutoCompleteTrie = require("./AutoCompleteTrie");

describe("addWord", () => {
  test("marks the end of a word", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("cat");
    expect(trie.children["c"].children["a"].children["t"].endOfWord).toBe(true);
  });
  test("reuses an existing path", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("run");
    trie.addWord("running");
    // 'r' should still be a single shared node
    expect(Object.keys(trie.children)).toEqual(["r"]);
    expect(trie.findWord("run")).toBe(true);
    expect(trie.findWord("running")).toBe(true);
  });
  test("a prefix of another word is not a word unless added", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("running");
    expect(trie.findWord("run")).toBe(false);
  });
});

describe("findWord", () => {
  const trie = new AutoCompleteTrie();
  trie.addWord("cat");
  trie.addWord("car");
  test("finds an existing word", () => expect(trie.findWord("cat")).toBe(true));
  test("missing word returns false", () => expect(trie.findWord("dog")).toBe(false));
  test("a prefix that is not a word returns false", () => expect(trie.findWord("ca")).toBe(false));
});

describe("_getRemainingTree", () => {
  const trie = new AutoCompleteTrie();
  trie.addWord("card");
  test("returns the node at the end of the prefix", () => {
    const node = trie._getRemainingTree("car");
    expect(node.value).toBe("r");
  });
  test("returns null when the prefix is not present", () => {
    expect(trie._getRemainingTree("xyz")).toBeNull();
  });
});

describe("predictWords", () => {
  const trie = new AutoCompleteTrie();
  ["cat", "car", "card", "care", "dog"].forEach((w) => trie.addWord(w));
  test("returns all completions for a prefix", () => {
    expect(trie.predictWords("ca").sort()).toEqual(["car", "card", "care", "cat"]);
  });
  test("includes the prefix itself if it is a word", () => {
    trie.addWord("ca");
    expect(trie.predictWords("ca")).toContain("ca");
  });
  test("unknown prefix returns an empty array", () => {
    expect(trie.predictWords("zzz")).toEqual([]);
  });
});
