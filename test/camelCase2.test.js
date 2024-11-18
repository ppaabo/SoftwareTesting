import camelCase2 from "../src/camelCase2.js";
import { expect } from "chai";

describe("camelCase", () => {
  it("should convert an empty string to an empty string", () => {
    expect(camelCase2("")).to.equal("");
  });

  it('should convert "Foo Bar" to "fooBar"', () => {
    expect(camelCase2("Foo Bar")).to.equal("fooBar");
  });

  it('should convert "--foo-bar--" to "fooBar"', () => {
    expect(camelCase2("--foo-bar--")).to.equal("fooBar");
  });

  it('should convert "__FOO_BAR__" to "fooBar"', () => {
    expect(camelCase2("__FOO_BAR__")).to.equal("fooBar");
  });

  it('should convert "abc" to "abc"', () => {
    expect(camelCase2("abc")).to.equal("abc");
  });

  it('should convert " abcAbc" to "abcAbc"', () => {
    expect(camelCase2(" abcAbc")).to.equal("abcAbc");
  });

  it("should handle strings with numbers", () => {
    expect(camelCase2("abc2abc")).to.equal("abc2Abc");
  });

  it("should handle strings with special characters (@)", () => {
    expect(camelCase2("abc@abc")).to.equal("abcAbc");
  });

  it("should handle strings with special characters (€)", () => {
    expect(camelCase2("abc€abc")).to.equal("abcAbc");
  });
});
