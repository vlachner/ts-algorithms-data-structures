export function quickSort(list: number[]) {
  if (list.length <= 1) {
    return list;
  }

  const lastIdx = list.length - 1;
  const pivot = list[lastIdx];

  const smaller: number[] = [];
  const bigger: number[] = [];

  for (const el of list.slice(0, lastIdx)) {
    if (el > pivot) {
      bigger.push(el);
    } else {
      smaller.push(el);
    }
  }
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
