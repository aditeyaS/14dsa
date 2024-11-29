export const pymaxksum = `def max_k_sum(arr, k):
    left = 0  # start of window
    for i in range(k):
        left += arr[i]
    res = left
    for i in range(k, len(arr)):
        left = left + arr[i] - arr[i - k]
        res = max(res, left)
    return res`;

export const pysubarraygivensum = `def sub_array_with_given_sum(arr, x):
    s, curr = 0, 0  # start index, current sum
    for e in range(len(arr)):
        curr += arr[e]
        while curr > x:
            curr -= arr[s]
            s += 1
        if curr == x:
            return True
    return False`;
