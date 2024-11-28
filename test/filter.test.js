import filter from "../src/filter.js";

describe("filter", () => {
  it("should filter elements based on the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: "barney", active: true }]);
  });

  it("should return an empty array if no elements match the predicate", () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n > 10);
    expect(result).toEqual([]);
  });

  it("should return an empty array for null or undefined input", () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  it("should handle empty arrays", () => {
    expect(filter([], () => true)).toEqual([]);
  });

  it("should include elements where the predicate returns truthy", () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it("should invoke predicate with value, index, and array", () => {
    const numbers = [10, 20];
    const mockPredicate = jest.fn(() => true);
    filter(numbers, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, numbers);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, numbers);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3];
    filter(numbers, (n) => n > 1);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should work with complex objects", () => {
    const items = [
      { name: "apple", type: "fruit" },
      { name: "carrot", type: "vegetable" },
      { name: "banana", type: "fruit" },
    ];
    const result = filter(items, (item) => item.type === "fruit");
    expect(result).toEqual([
      { name: "apple", type: "fruit" },
      { name: "banana", type: "fruit" },
    ]);
  });
});
