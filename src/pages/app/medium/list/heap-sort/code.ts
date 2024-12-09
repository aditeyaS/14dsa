export const pyheapsort = `def buildHeap(arr):
    N = len(arr)
    for i in range((N - 2) // 2, -1, -1):
        maxHeapify(arr, N, i)

def maxHeapify(arr, n, i):
    largest = i
    left, right = 2 * i + 1, 2 * i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        maxHeapify(arr, n, largest)

def heapSort(arr):
    buildHeap(arr)
    N = len(arr)
    for i in range(N - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        maxHeapify(arr, i, 0)`;
