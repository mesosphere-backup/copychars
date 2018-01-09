import copychars from "../copychars";

describe("copychars", () => {
  it("returns an empty string if the input is an object", () => {
    expect(copychars({})).toBe("");
  });

  it("returns an empty string if the input is undefined", () => {
    expect(copychars(undefined)).toBe("");
  });

  it("returns an empty string if the input is null", () => {
    expect(copychars(null)).toBe("");
  });

  it("returns an empty string if the input an array", () => {
    expect(copychars([])).toBe("");
  });

  it("returns an empty string if the input string is empty", () => {
    expect(copychars("", 0, 10)).toBe("");
  });

  it("returns an empty string if the input string is empty", () => {
    expect(copychars("", 0, 10)).toBe("");
  });

  it("copies the given amount of characters", () => {
    expect(copychars("abc123", 0, 3)).toBe("abc");
  });

  it("copies characters starting at the given index", () => {
    expect(copychars("abc123", 3, 3)).toBe("123");
  });

  it("copies all characters if neither start nor the length is defined", () => {
    expect(copychars("abc123")).toBe("abc123");
  });
});
