import endsWith from "../src/endsWith";

describe("endsWith", () => {
  it("should return true if the string ends with target", () => {
    expect(endsWith("lorem", "m")).toBe(true);
    expect(endsWith("lorem", "em")).toBe(true);
    expect(endsWith("lorem123", "m123")).toBe(true);
  });

  it("should return false if the string does not end with target", () => {
    expect(endsWith("lorem", "a")).toBe(false);
    expect(endsWith("lorem", "am")).toBe(false);
  });

  it("should handle case-sensitive strings", () => {
    expect(endsWith("lorem", "eM")).toBe(false);
    expect(endsWith("lorEM", "EM")).toBe(true);
  });

  it("should handle strings with special characters", () => {
    expect(endsWith("lorem$", "$")).toBe(true);
    expect(endsWith("lorem@$€", "@$€")).toBe(true);
    expect(endsWith("lorem$", "e$")).toBe(false);
  });

  it("should handle unicode strings", () => {
    expect(endsWith("lorem🚀", "🚀")).toBe(true);
    expect(endsWith("lorem🚀", "rem🚀")).toBe(true);
    expect(endsWith("lorem🚀", "lem🚀")).toBe(false);
  });

  it("should handle whitespaces in strings", () => {
    expect(endsWith("lorem ", " ")).toBe(true);
    expect(endsWith("lore  m", "e  m")).toBe(true);
    expect(endsWith(" lorem", " lorem  ")).toBe(false);
  });

  // Tests using position parameter
  it("should return true if the string ends with target at specified position", () => {
    expect(endsWith("lorem", "r", 3)).toBe(true);
  });

  it("should return true for a target that matches the entire string with position set to string length", () => {
    expect(endsWith("lorem", "lorem", 5)).toBe(true);
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

  it("should handle empty string and target", () => {
    expect(endsWith("", "")).toBe(true);
  });

  // Not sure what is expected behaviour, but ignores decimals (e.g. 5.5 -> 5)
  it("should handle non integer position parameters", () => {
    expect(endsWith("lorem", "m", 5.5)).toBe(true);
    expect(endsWith("lorem", "m", 3.9)).toBe(false);
    expect(endsWith("lorem", "m", 4.9)).toBe(true);
  });

  it("should handle non-string inputs for string and target", () => {
    // expect(() => endsWith(12345, "5")).toThrow(TypeError)
    // expect(() => endsWith("12345", 5)).toThrow(TypeError);
    expect(endsWith("12345", 5)).toBe(true);
    expect(endsWith(12345, "5")).toBe(true);
  });
});
