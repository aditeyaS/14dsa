def insertion_sort(arr):
    N = len(arr)
    for i in range(1, N):
        x = arr[i]
        j = i - 1
        while j >= 0 and x < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = x
