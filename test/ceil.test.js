import ceil from "../src/ceil";

describe("ceil", () => {
  // Basic functionality
  it("should correctly round up positive numbers", () => {
    expect(ceil(1.009)).toBe(2);
    expect(ceil(2040.5)).toBe(2041);
  });

  it("should correctly round up negative numbers", () => {
    expect(ceil(-1.009)).toBe(-1);
    expect(ceil(-2040.5)).toBe(-2040);
  });

  it("should handle zero", () => {
    expect(ceil(0)).toBe(0);
  });

  // Precision handling
  it("should handle positive precision values", () => {
    expect(ceil(1.009, 2)).toBe(1.01);
    expect(ceil(204.5574, 3)).toBe(204.558);
    expect(ceil(0, 2)).toBe(0);
  });

  it("should handle negative precision values", () => {
    expect(ceil(2040, -2)).toBe(2100);
    expect(ceil(10, -2)).toBe(100);
  });

  it("should handle precision values that are too big", () => {
    expect(ceil(2040, 10)).toBe(2040);
  });

  // Edge cases, special values & invalid inputs
  it("should handle large & small numbers", () => {
    expect(ceil(1e20)).toBe(1e20);
    expect(ceil(1e20, -10)).toBe(1e20);
  });

  it("should handle small numbers", () => {
    expect(ceil(1e-20)).toBe(1);
    expect(ceil(1e-20, 10)).toBe(1e-10);
  });

  it("should handle infinity", () => {
    expect(ceil(Infinity)).toBe(Infinity);
    expect(ceil(-Infinity)).toBe(-Infinity);
  });

  // Seems to return 0 for invalid inputs?
  it("should throw TypeError for invalid inputs", () => {
    expect(() => ceil(null)).toThrow(TypeError);
    expect(() => ceil(undefined)).toThrow(TypeError);
    expect(() => ceil("string")).toThrow(TypeError);
  });
});
