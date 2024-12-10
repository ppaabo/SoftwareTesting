import capitalize from "../src/capitalize";

describe("capitalize", () => {
  it("should capitalize first letter of a string", () => {
    expect(capitalize("lorem ipsum")).toBe("Lorem ipsum");
  });

  it("should capitalize a single character", () => {
    expect(capitalize("l")).toBe("L");
    expect(capitalize("L")).toBe("L");
  });

  it("should convert empty string to an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle already capitalized strings", () => {
    expect(capitalize("Lorem ipsum")).toBe("Lorem ipsum");
  });

  it("should convert 'LOREM IPSUM' to 'Lorem ipsum'", () => {
    expect(capitalize("LOREM IPSUM")).toBe("Lorem ipsum");
  });

  it("should convert 'lOrEm IpSuM' to 'Lorem ipsum'", () => {
    expect(capitalize("lOrEm IpSuM")).toBe("Lorem ipsum");
  });

  it("should preserve whitespace when capitalizing the first letter", () => {
    expect(capitalize("   lorem ipsum  ")).toBe("   Lorem ipsum  ");
  });

  it("should not capitalize special characters", () => {
    expect(capitalize("$€@%!?")).toBe("$€@%!?");
    expect(capitalize("@")).toBe("@");
  });

  it("should handle unicode characters", () => {
    expect(capitalize("ś")).toBe("Ś");
    expect(capitalize("α")).toBe("Α");
  });

  it("should capitalize long strings without errors", () => {
    const longString = "a".repeat(1000);
    expect(capitalize(longString)).toBe("A" + "a".repeat(999));
  });

  // Doesn't return null, instead converts null to a string "Null"???
  // toString examples show that it should return empty string for null
  it("should return a empty string for null input", () => {
    expect(capitalize(null)).toBe("");
  });
});
