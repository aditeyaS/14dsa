import { SortFunction } from "@/components/sort-visualizer";

const visualizerFunction: SortFunction = async (array, update, shouldStop) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      if (shouldStop()) return;
      await update(array, [j - 1, j]);
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      await update(array, [j - 1, j]);
      j--;
    }
  }
};

export default visualizerFunction;
