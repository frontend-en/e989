import { addTwoNumbers } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should add two positive numbers", () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
  });

  it("should add negative numbers", () => {
    expect(addTwoNumbers(-1, -2)).toBe(-3);
  });

  it("should handle zero", () => {
    expect(addTwoNumbers(0, 5)).toBe(5);
    expect(addTwoNumbers(5, 0)).toBe(5);
  });

  it("should add floating point numbers", () => {
    expect(addTwoNumbers(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
