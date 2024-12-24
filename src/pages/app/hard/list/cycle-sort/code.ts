export const pycyclesort = `# works for distinct elements
def cycleSortDistinct(arr):
    N = len(arr)
    for cs in range(N - 1):
        pos, item = cs, arr[cs]
        for i in range(cs + 1, N):
            if arr[i] < item:
                pos += 1
        if pos == cs:
            continue
        arr[pos], item = item, arr[pos]
        while pos != cs:
            pos = cs
            for i in range(cs + 1, N):
                if arr[i] < item:
                    pos += 1
            if pos == cs:
                continue
            arr[pos], item = item, arr[pos]`;
