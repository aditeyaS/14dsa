export const pymergesort = `# MERGING 2 SORTED SUB ARRAY
def merge(l, low, mid, high):
    iL, iR = 0, 0
    lL = l[low : mid + 1]  # left
    lR = l[mid + 1 : high]  # right
    i = low
    while iL < len(lL) and iR < len(lR):
        if lL[iL] <= lR[iR]:  # = makes it stable
            l[i] = lL[iL]
            iL += 1
        else:
            l[i] = lR[iR]
            iR += 1
        i += 1
    while iL < len(lL):
        l[i] = lL[iL]
        iL += 1
        i += 1
    while iR < len(lR):
        l[i] = lR[iR]
        iR += 1
        i += 1


def mergeSort(arr, l, r):
    if r > l:
        m = (l + r) // 2
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)`;
