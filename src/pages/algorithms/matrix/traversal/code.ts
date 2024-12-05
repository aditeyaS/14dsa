export const pysnake = `R, C = len(matrix), len(matrix[0])
for r in range(R):
  if r % 2 == 0:
    # L2R
    for c in range(C):
      print(matrix[r][c])
  else:
    # R2L
    for c in range(C - 1, -1, -1):
      print(matrix[r][c])`;

export const pyspiral = `l, r = 0, len(matrix[0]) - 1 # left, right
t, b = 0, len(matrix) - 1 # top, bottom
while l <= r and t <= b:
  for i in range(l, r + 1):
    print(matrix[t][i])
  t += 1
  for i in range(t, b + 1):
    print(matrix[i][r])
  r -= 1
  if t <= b:
    for i in range(r, l - 1, -1):
      print(matrix[b][i])
    b -= 1
  if l <= r:
    for i in range(b, t - 1, -1):
      print(matrix[i][l])
    l += 1`;
