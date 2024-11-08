def hoaresPartition(arr, l, h):
    p = arr[l]
    i = l - 1
    j = h + 1
    while True:
        i += 1
        while arr[i] < p:
            i += 1
        j -= 1
        while arr[j] > p:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]


def quickSort(arr, l, h):
    if l < h:
        p = hoaresPartition(arr, l, h)
        quickSort(arr, l, p)
        quickSort(arr, p + 1, h)
