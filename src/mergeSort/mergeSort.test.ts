import { describe, expect, test } from "@jest/globals";
import { mergeSort, merge } from "./mergeSort";

describe("Merge Sort Algorithm", () => {
  test("Should return sorted list with only one element", () => {
    expect(mergeSort([2])).toEqual([2]);
  });

  test("Should return sorted list", () => {
    expect(mergeSort([4, 5, 3, 10, 2])).toEqual([2, 3, 4, 5, 10]);
  });
});

describe("Merge helper function", () => {
  test("Should merge two sorted list in order", () => {
    expect(merge([4, 5], [2, 10])).toEqual([2, 4, 5, 10]);
  });
});
