import SortFunction from "@/types/sort-function";

const visualizerFunction: SortFunction = async (array, update, shouldStop) => {
  for (let i = 0; i < array.length; i++) {
    let swapped: boolean = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (shouldStop()) return;
      await update(array, [j, j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        await update(array, [j, j + 1]);
        swapped = true;
      }
    }
    if (!swapped) return;
  }
};

export default visualizerFunction;
