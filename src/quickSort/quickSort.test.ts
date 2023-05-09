import { describe, expect, test } from "@jest/globals";
import { quickSort } from "./quickSort";

describe("QuickSort Algorithm", () => {
  test("Sorts list of numbers", () => {
    expect(quickSort([3, 10, 102, 24, 2, 1])).toEqual([1, 2, 3, 10, 24, 102]);
  });

  test("Sorts list with repeated entries", () => {
    expect(quickSort([3, 10, 24, 1, 1])).toEqual([1, 1, 3, 10, 24]);
  });

  test("Sorts list that was already sorted", () => {
    expect(quickSort([1, 3, 4, 5, 10])).toEqual([1, 3, 4, 5, 10]);
  });
});
