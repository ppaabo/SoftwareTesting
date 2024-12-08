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

  it("should handle adding Infinity", () => {
    expect(add(Infinity, 5)).toBe(Infinity);
    expect(add(-Infinity, -5)).toBe(-Infinity);
    expect(add(Infinity, -Infinity)).toBeNaN();
  });

  it("should handle adding NaN", () => {
    expect(add(NaN, 5)).toBeNaN();
    expect(add(5, NaN)).toBeNaN();
    expect(add(NaN, NaN)).toBeNaN();
  });

  it("should handle adding very small numbers (precision)", () => {
    expect(add(1e-10, 1e-10)).toBeCloseTo(2e-10);
  });

  it("should handle adding very large and very small numbers", () => {
    expect(add(1e10, 1e-10)).toBeCloseTo(1e10);
  });

  it("should treat undefined as the default value", () => {
    expect(add(undefined, 5)).toBe(5);
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, undefined)).toBe(0);
  });

  it("should treat null as 0", () => {
    expect(add(null, 5)).toBe(5);
    expect(add(5, null)).toBe(5);
    expect(add(null, null)).toBe(0);
  });

  it("should handle string inputs", () => {
    expect(add("3", "4")).toBe(7);
    expect(add("3", 4)).toBe(7);
    expect(add(3, "4")).toBe(7);
    expect(add("a", 4)).toBeNaN(); 
    expect(add(3, "b")).toBeNaN();
  });

  it("should handle boolean inputs", () => {
    expect(add(true, true)).toBe(2); 
    expect(add(false, true)).toBe(1);
    expect(add(false, false)).toBe(0);
  });
});
