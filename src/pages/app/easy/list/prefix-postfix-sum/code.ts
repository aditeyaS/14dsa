export const pysumbwi = `def sum_between_indexes(arr, indexes):
    N = len(arr)
    pSum = [0] * N
    pSum[0] = arr[0]
    for i in range(1, N):
        pSum[i] = pSum[i - 1] + arr[i]
    res = []
    for l, r in indexes:
        if l == 0:
            res.append(pSum[r])
        else:
            res.append(pSum[r] - pSum[l - 1])
    return res`;
