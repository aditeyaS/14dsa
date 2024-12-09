export const pylumoto = `def lumotoPartition(arr, l, r):
    pivot = arr[r]
    i = l - 1
    for j in range(l, r):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[r] = arr[r], arr[i + 1]
    return i`;

export const pyhoares = `def hoaresPartition(arr, l, r):
    pivot = arr[l]
    i, j = l - 1, r + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]`;

export const pyquicksort = `# LUMOTO
def quickSort(arr, l, h):
    if l < h:
        pivot = lumotoPartition(arr, l, h)
        quickSort(arr, l, pivot - 1)
        quickSort(arr, pivot + 1, h)
        
# HOARES
def quickSort(arr, l, h):
    if l < h:
        pivot = hoaresPartition(arr, l, h)
        quickSort(arr, l, pivot)
        quickSort(arr, pivot + 1, h)`;
