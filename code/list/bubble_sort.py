def bubble_sort(arr):
    N = len(arr)
    for i in range(N):
        swapped = False
        for j in range(N - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
