def bs_rotated(arr, x):
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
    return -1
