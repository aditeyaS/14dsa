def sub_array_with_given_sum(arr, x):
    s, curr = 0, 0  # start index, current sum
    for e in range(len(arr)):
        curr += arr[e]
        while curr > x:
            curr -= arr[s]
            s += 1
        if curr == x:
            return True
    return False
