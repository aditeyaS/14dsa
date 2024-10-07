def lumotoPartition(arr, l, h):
    p = arr[h]
    i = l - 1
    for j in range(l, h):
        if arr[j] < p:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[h] = arr[h], arr[i + 1]
    return i


def quickSort(arr, l, h):
    if l < h:
        p = lumotoPartition(arr, l, h)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, h)
