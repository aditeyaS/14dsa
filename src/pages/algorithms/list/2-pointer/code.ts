export const pypairsumx = `def pair_sum_x(arr, x):
    N = len(arr)
    l, r = 0, N - 1
    while l < r:
        if arr[l] + arr[r] == x:
            return True
        elif arr[l] + arr[r] < x:
            l += 1
        else:
            r -= 1
    return False`;
