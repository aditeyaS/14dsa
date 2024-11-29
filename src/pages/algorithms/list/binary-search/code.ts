export const pybinarySearch = `def binary_search(arr, x):
    N = len(arr)
    l, r = 0, N - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            r = mid - 1
        else:
            l = mid + 1
    return -1`;

export const pybsrotated = `def bs_rotated(arr, x):
    N = len(arr)
    l, h = 0, N - 1
    while l <= h:
        mid = (l + h) // 2
        if arr[mid] == x:
            return mid
        if arr[l] < arr[mid]:
            if arr[l] <= x < arr[mid]:
                h = mid - 1
            else:
                l = mid + 1
        else:
            if arr[mid] < x <= arr[h]:
                l = mid + 1
            else:
                h = mid - 1
    return -1`;

export const pymediansorted = `def median_sorted_arrays(arr1, arr2):
    if len(arr1) > len(arr2):
        arr1, arr2 = arr2, arr1
    N1, N2 = len(arr1), len(arr2)
    l1, r1 = 0, N1
    while l1 <= r1:
        mid = (l1 + r1) // 2
        left1 = arr1[mid - 1] if mid > 0 else float("-inf")
        right1 = arr1[mid] if mid < N1 else float("inf")
        l2Size = (N1 + N2 + 1) // 2 - mid
        left2 = arr2[l2Size - 1] if l2Size > 0 else float("-inf")
        right2 = arr2[l2Size] if l2Size < N2 else float("inf")
        if left1 <= right2 and left2 <= right1:
            if (N2 + N1) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2.0
            return max(left1, left2)
        elif left1 > right2:
            r1 = mid - 1
        else:
            l1 = mid + 1`;
