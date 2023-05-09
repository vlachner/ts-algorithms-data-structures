// Searches a sorted list, returns index or -1 if value not found
export function binarySearch(list: number[], target: number): number {
  let lowIndex = 0;
  let highIndex = list.length - 1; // Last index

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((highIndex + lowIndex) / 2);
    const midValue = list[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (target < midValue) {
      highIndex = midIndex - 1; // Target is Smaller than mid, lower top boundary
    } else if (target > midValue) {
      lowIndex = midIndex + 1; // Target is Larger than mid, increase bottom boundary
    }
  }

  return -1;
}
