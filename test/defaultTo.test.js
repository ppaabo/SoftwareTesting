import defaultTo from "../src/defaultTo";

describe("defaultTo", () => {
  // Basic functionality
  it("should return the value if it is not null, undefined or NaN", () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo("lorem", "ipsum")).toBe("lorem");
    expect(defaultTo(true, false)).toBe(true);
  });

  it("should return the default value, if value is undefined", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  it("should return the default value, if value is null", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  // According to defaulTo.js, the function should return the default value if the value is NaN
  // But it does not return the default value if the value is NaN
  it("should return the default value, if value is NaN", () => {
    const value = NaN;
    // if (isNaN(value)) {
    //   console.log("value is NaN");
    // }
    expect(defaultTo(value, 10)).toBe(10);
  });

  // Other types & edge cases
  it("should handle arrays and objects as values", () => {
    const value = [1, 2, 3];
    const defaultValue = [4, 5, 6];
    expect(defaultTo(value, defaultValue)).toBe(value);
    expect(defaultTo(null, [1, 2, 3])).toEqual([1, 2, 3]);
    expect(defaultTo(undefined, { a: 1 })).toEqual({ a: 1 });
    expect(defaultTo({}, 10)).toEqual({});
  });

  it("should handle null and undefined as the default value", () => {
    expect(defaultTo(1, null)).toBe(1);
    expect(defaultTo(undefined, undefined)).toBe(undefined);
  });

  it("should handle special values (Infinity, -Infinity)", () => {
    expect(defaultTo(Infinity, 10)).toBe(Infinity);
    expect(defaultTo(-Infinity, 10)).toBe(-Infinity);
    expect(defaultTo(null, Infinity)).toBe(Infinity);
  });
});
