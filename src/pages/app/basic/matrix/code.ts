export const pyinit = `R, C = 2, 4

# INCORRECT ❌
matrix = [[0] * C] * R

# correct way ✅
matrix = [[0 for _ in range(C)] for _ in range(R)]`;
