const Exercises = require("./Exercises");
const ex = new Exercises();

// ---- Ex1: isEven (note: using toBeTruthy/toBeFalsy, not toBe(true)) ----
describe("isEven", () => {
  test("4 is even", () => expect(ex.isEven(4)).toBeTruthy());
  test("7 is not even", () => expect(ex.isEven(7)).toBeFalsy());
  // Ex5 edge cases
  test("0 is even", () => expect(ex.isEven(0)).toBeTruthy());
  test("negative even", () => expect(ex.isEven(-2)).toBeTruthy());
});

// ---- Ex2: removeAtLeastOne (random, so just check it shrank) ----
describe("removeAtLeastOne", () => {
  test("array is shorter than before", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(ex.removeAtLeastOne(arr).length).toBeLessThan(8);
  });
  // Ex5: run it many times - it must ALWAYS remove at least one
  test("always removes at least one (100 runs)", () => {
    for (let i = 0; i < 100; i++) {
      const arr = [1, 2, 3, 4, 5];
      expect(ex.removeAtLeastOne(arr).length).toBeLessThan(5);
    }
  });
});

// ---- Ex3: simplify ----
describe("simplify", () => {
  test("removes the symbols", () => {
    expect(ex.simplify("h!e#l.l,o'")).toBe("hello");
  });
  // Ex5 edge cases
  test("string with no symbols is unchanged", () => {
    expect(ex.simplify("clean")).toBe("clean");
  });
  test("empty string stays empty", () => {
    expect(ex.simplify("")).toBe("");
  });
});

// ---- Ex4: validate (tests written first, TDD) ----
describe("validate", () => {
  test("more trues than falses -> true", () => {
    expect(ex.validate([true, true, false])).toBe(true);
  });
  test("more falses than trues -> false", () => {
    expect(ex.validate([true, false, false])).toBe(false);
  });
  test("equal trues and falses -> false", () => {
    expect(ex.validate([true, false])).toBe(false);
  });
  test("no booleans -> error object", () => {
    expect(ex.validate([1, 2, 3])).toEqual({ error: "Need at least one boolean" });
  });
  // Ex5 edge cases
  test("empty array -> error object", () => {
    expect(ex.validate([])).toEqual({ error: "Need at least one boolean" });
  });
  test("no argument -> error object", () => {
    expect(ex.validate()).toEqual({ error: "Need at least one boolean" });
  });
});

// ---- Extension: check that add() actually calls push ----
describe("add", () => {
  test("uses Array push", () => {
    const spy = jest.spyOn(Array.prototype, "push");
    ex.add(1, 2);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
