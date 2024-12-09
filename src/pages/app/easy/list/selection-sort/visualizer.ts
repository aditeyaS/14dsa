// ChatGPT
import SortFunction from "@/types/sort-function";

const visualizerFunction: SortFunction = async (array, update, shouldStop) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (shouldStop()) return; // Stop if requested
      await update(array, [minIndex, j]); // Highlight the elements being compared
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element in the unsorted portion
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      await update(array, [i, minIndex]); // Highlight the swap
    }
  }

  await update(array, null); // Reset highlights after sorting
};

export default visualizerFunction;
