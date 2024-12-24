export const pycountsort = `def countingSort(arr, k):
    count = [0] * k
    for n in arr:
        count[n] += 1
    idx = 0
    for i in range(k):
        for j in range(count[i]):
            arr[idx] = i
            idx += 1`;

export const pycountsortobj = `def countingSort(arr, k):
    output = [0] * len(arr)
    count = [0] * k
    for n in arr:
        count[n] += 1
    for i in range(1, k):
        count[i] += count[i - 1]
    for x in reversed(arr):
        output[count[x] - 1] = x
        count[x] -= 1
    for i in range(len(arr)):
        arr[i] = output[i]`;
