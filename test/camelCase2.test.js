import camelCase2 from "../src/camelCase2.js";

describe("camelCase", () => {
  it("should convert an empty string to an empty string", () => {
    expect(camelCase2("")).toBe("");
  });

  it('should convert "Foo Bar" to "fooBar"', () => {
    expect(camelCase2("Foo Bar")).toBe("fooBar");
  });

  it('should convert "--foo-bar--" to "fooBar"', () => {
    expect(camelCase2("--foo-bar--")).toBe("fooBar");
  });

  it('should convert "__FOO_BAR__" to "fooBar"', () => {
    expect(camelCase2("__FOO_BAR__")).toBe("fooBar");
  });

  it('should convert "abc" to "abc"', () => {
    expect(camelCase2("abc")).toBe("abc");
  });

  it('should convert " abcAbc" to "abcAbc"', () => {
    expect(camelCase2(" abcAbc")).toBe("abcAbc");
  });

  it("should handle strings with numbers", () => {
    expect(camelCase2("abc2abc")).toBe("abc2Abc");
  });

  it("should handle strings with special characters (@)", () => {
    expect(camelCase2("abc@abc")).toBe("abcAbc");
  });
});
