export const pymaxSubArraySum = `def maxEvenOdd(l):
    res = 1
    curr = 1
    for i in range(1, n):
        if (l[i]%2 == 0 and l[i-1]%2 != 0) or (l[i]%2 != 0 and l[i-1]%2 == 0):
            curr += 1
            res = max(res, curr)
        else:
            curr = 1
    return res`;
