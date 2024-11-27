import endsWith from "../src/endsWith";

describe("endsWith", () => {
  it("should return true if the string ends with target", () => {
    expect(endsWith("lorem", "m")).toBe(true);
    expect(endsWith("lorem", "em")).toBe(true);
  });

  it("should return false if the string does not end with target", () => {
    expect(endsWith("lorem", "a")).toBe(false);
    expect(endsWith("lorem", "am")).toBe(false);
  });

  it("should handle strings with special characters", () => {
    expect(endsWith("lorem$", "$")).toBe(true);
    expect(endsWith("lorem@$€", "@$€")).toBe(true);
    expect(endsWith("lorem$", "e$")).toBe(false);
  });

  // Tests using position parameter
  it("should return true if the string ends with target at specified position", () => {
    expect(endsWith("lorem", "r", 3)).toBe(true);
  });

  it("should return false if the string does not end with target at specified position", () => {
    expect(endsWith("lorem", "e", 5)).toBe(false);
  });

  it("should return true if position is greater than string length and target matches last letter", () => {
    expect(endsWith("lorem", "m", 7)).toBe(true);
  });

  it("should return false if position is less than zero", () => {
    expect(endsWith("lorem", "l", -1)).toBe(false);
  });

  // Edge cases
  it("should throw typeError for empty and undefined targets", () => {
    expect(() => endsWith("lorem", null)).toThrow(TypeError);
    expect(() => endsWith("lorem", undefined)).toThrow(TypeError);
  });

  it("should throw typeError for null and undefined strings", () => {
    expect(() => endsWith(null, "m")).toThrow(TypeError);
    expect(() => endsWith(undefined, "m")).toThrow(TypeError);
  });

  it("should return true for an empty target", () => {
    expect(endsWith("lorem", "")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(endsWith("", "m")).toBe(false);
  });
});
