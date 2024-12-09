type SortFunction = (
  array: number[],
  update: (arr: number[], indices: [number, number] | null) => Promise<void>,
  shouldStop: () => boolean
) => Promise<void>;

export default SortFunction;
