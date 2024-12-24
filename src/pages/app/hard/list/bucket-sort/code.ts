export const pybucketsort = `# assumption: not negative numker
# k -> number of buckets
def bucketSort(arr, k):
    rs = max(arr) + 1 # range size
    bucket = [[] for _ in range(k)]
    for x in arr:
        i = (k * x) // rs
        bucket[i].append(x)
    for i in range(k):
        bucket[i].sort()
    idx = 0
    for i in range(k):
        for j in range(len(bucket[i])):
            arr[idx] = bucket[i][j]
            idx += 1`;
