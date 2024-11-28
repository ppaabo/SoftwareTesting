import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should split an array into chunks of the specified size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("should handle uneven chunk sizes", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  it("should return an empty array when input array is null or undefined", () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  it("should return an empty array if size is less than 1", () => {
    expect(chunk(["a", "b", "c", "d"], 0)).toEqual([]);
    expect(chunk(["a", "b", "c", "d"], -1)).toEqual([]);
  });

  it("should treat size as 1 by default", () => {
    expect(chunk(["a", "b", "c", "d"])).toEqual([["a"], ["b"], ["c"], ["d"]]);
  });

  it("should handle arrays with a single element", () => {
    expect(chunk(["a"], 2)).toEqual([["a"]]);
  });

  it("should handle empty arrays", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("should coerce size to an integer", () => {
    expect(chunk(["a", "b", "c", "d"], 2.5)).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("should handle large sizes greater than array length", () => {
    expect(chunk(["a", "b", "c", "d"], 10)).toEqual([["a", "b", "c", "d"]]);
  });
});
