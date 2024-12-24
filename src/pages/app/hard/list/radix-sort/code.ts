export const pyradixsort = `def countingSort(arr, exp):
    N = len(arr)    
    output = [0] * N
    count = [0] * 10
    for i in range(N):
        index = (arr[i] // exp) % 10
        count[index] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    i = N - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1
    for i in range(N):
        arr[i] = output[i]

def radixSort(arr):
    mx = max(arr)
    exp = 1
    while mx / exp > 1:
        countingSort(arr, exp)
        exp *= 10`;
