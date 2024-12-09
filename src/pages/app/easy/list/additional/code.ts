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

export const pymajorityElement = `def findMajority(arr):
  n = len(arr)
  # finding the majority
  res = 0
  count = 1
  for i in range(1, n):
    if arr[res] == arr[i]:
      count += 1
    else:
      count -= 1
    if count == 0:
      res = i
      count = 1
  # verifying the majority
  count = 0
  for i in range(n):
    if arr[res] == arr[i]:
      count += 1
  if count <= n // 2:
    res = -1
  return res`;
