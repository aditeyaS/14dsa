def max_k_sum(arr, k):
    left = 0  # start of window
    for i in range(k):
        left += arr[i]
    res = left
    for i in range(k, len(arr)):
        left = left + arr[i] - arr[i - k]
        res = max(res, left)
    return res
