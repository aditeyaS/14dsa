import { SortFunction } from "@/components/sort-visualizer";

const visualizerFunction: SortFunction = async (array, update, shouldStop) => {
  const auxiliaryArray = [...array];

  const mergeHelper = async (
    mainArray: number[],
    auxArray: number[],
    start: number,
    end: number
  ): Promise<void> => {
    if (start >= end || shouldStop()) return;

    const mid = Math.floor((start + end) / 2);

    // Recursively split the array into halves
    await mergeHelper(auxArray, mainArray, start, mid);
    await mergeHelper(auxArray, mainArray, mid + 1, end);

    // Merge the sorted halves
    let i = start,
      j = mid + 1,
      k = start;

    while (i <= mid && j <= end) {
      if (shouldStop()) return;

      if (auxArray[i] <= auxArray[j]) {
        mainArray[k++] = auxArray[i++];
      } else {
        mainArray[k++] = auxArray[j++];
      }

      await update([...mainArray], [i, j]); // Highlight merging process
    }

    // Copy the remaining elements from the left half
    while (i <= mid) {
      if (shouldStop()) return;
      mainArray[k++] = auxArray[i++];
      await update([...mainArray], [i, k]); // Highlight copying process
    }

    // Copy the remaining elements from the right half
    while (j <= end) {
      if (shouldStop()) return;
      mainArray[k++] = auxArray[j++];
      await update([...mainArray], [j, k]); // Highlight copying process
    }
  };

  await mergeHelper(array, auxiliaryArray, 0, array.length - 1);
  await update(array, null); // Reset highlights after sorting
};

export default visualizerFunction;
