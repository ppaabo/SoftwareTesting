import divide from "../src/divide.js";

describe("divide", () => {
  it("should divide two positive numbers correctly", () => {
    expect(divide(6, 4)).toBe(1.5);
  });

  it("should handle division by 1", () => {
    expect(divide(10, 1)).toBe(10);
  });

  it("should handle division by a negative number", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  it("should return 0 when 0 is divided by any number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  it("should handle division of negative numbers", () => {
    expect(divide(-6, -2)).toBe(3);
  });

  it("should handle division of decimals", () => {
    expect(divide(5.5, 2.2)).toBeCloseTo(2.5);
  });

  it("should return Infinity when dividing by 0", () => {
    expect(divide(5, 0)).toBe(Infinity);
  });

  it("should return NaN when 0 is divided by 0", () => {
    expect(divide(0, 0)).toBeNaN();
  });

  it("should handle large numbers", () => {
    expect(divide(1e10, 2)).toBe(5e9);
  });

  it("should return 0 if dividend is undefined", () => {
    expect(divide(undefined, 2)).toBe(0);
  });
});
