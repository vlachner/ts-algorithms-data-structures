export function mergeSort(list: number[]) {
  // Base case
  if (list.length <= 1) return list;

  let midIdx = Math.floor(list.length / 2);
  let left = list.slice(0, midIdx);
  let right = list.slice(midIdx);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]) {
  let output = []; // the sorted items will go here

  // Iterate until one side is empty
  while (left.length && right.length) {
    // Insert the smallest item , assumes input is sorted
    if (left[0] < right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }

  // Spread operators to join any remainder on left or right
  return [...output, ...left, ...right];
}

// Merge sort is stable while quick sort is not
// Quick sort usually requires more comparisons than merge sort for sorting a large set of elements
// Additional storage space requirement is less in Quick Sort than Merge Sort
