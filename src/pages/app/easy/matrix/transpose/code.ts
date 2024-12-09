export const pytranspose = `def transpose(matrix):
  N = len(matrix)
  for i in range(N):
    for j in range(N):
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]`;
