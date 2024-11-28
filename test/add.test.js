import add from "../src/add.js";

describe("add", () => {
  it("should return 0 when adding 0 and 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("should add two positive numbers correctly", () => {
    expect(add(6, 4)).toBe(10);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(add(6, -4)).toBe(2);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-6, -4)).toBe(-10);
  });

  it("should return the same number when adding 0", () => {
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(5);
  });

  it("should handle decimal numbers correctly", () => {
    expect(add(2.5, 3.2)).toBeCloseTo(5.7);
  });

  it("should handle large numbers correctly", () => {
    expect(add(1e10, 1e10)).toBe(2e10);
  });
});
