export const pyselectionsort = `def selection_sort(arr):
    N = len(arr)
    for i in range(N):
        minIdx = i
        for j in range(i + 1, N):
            if arr[i] < arr[minIdx]:
                minIdx = i
        arr[minIdx], arr[i] = arr[i], arr[minIdx]`;
