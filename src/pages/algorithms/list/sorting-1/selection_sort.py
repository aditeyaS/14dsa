def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        minIdx = i
        for j in range(i + 1, n):
            if arr[i] < arr[minIdx]:
                minIdx = i
        arr[minIdx], arr[i] = arr[i], arr[minIdx]
