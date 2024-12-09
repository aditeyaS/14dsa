export const pymergesort = `# MERGING 2 SORTED SUB ARRAY
def merge(arr, low, mid, high):
    iL, iR = 0, 0
    arrL = arr[low : mid + 1]  # left
    arrR = arr[mid + 1 : high]  # right
    i = low
    while iL < len(arrL) and iR < len(arrR):
        if arrL[iL] <= arrR[iR]:  # = makes it stable
            arr[i] = arrL[iL]
            iL += 1
        else:
            arr[i] = arrR[iR]
            iR += 1
        i += 1
    while iL < len(arrL):
        arr[i] = arrL[iL]
        iL += 1
        i += 1
    while iR < len(arrR):
        arr[i] = arrR[iR]
        iR += 1
        i += 1

def mergeSort(arr, l, r):
    if r > l:
        m = (l + r) // 2
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)`;
