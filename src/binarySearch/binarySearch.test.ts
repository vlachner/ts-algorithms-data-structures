import { describe, expect, test } from "@jest/globals";
import { binarySearch } from "./binarySearch";

const SORTED_LIST = [2, 4, 6, 8, 10, 12, 14];

describe("Binary Search Algorithm", () => {
  test("Returns index of existing number", () => {
    const targetIdx = Math.floor(SORTED_LIST.length / 2);
    expect(binarySearch(SORTED_LIST, SORTED_LIST[targetIdx])).toBe(targetIdx);
  });

  test("Returns -1 if not found", () => {
    expect(binarySearch(SORTED_LIST, 25)).toBe(-1);
  });

  test("Returns correct index of a list of one element", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });
});
