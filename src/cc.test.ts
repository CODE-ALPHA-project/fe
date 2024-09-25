import { add, sub } from "./cc";

describe("사칙연산", () => {
  describe("add", () => {
    test("1 + 1은 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("1 + 2는 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  describe("sub", () => {
    test("1 - 1은 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2 - 1은 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
