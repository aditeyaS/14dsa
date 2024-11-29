export const pyNTR = `import math
math.ceil(x)
math.floor(x)
math.gcd(*integers) # GCD or HCF
math.lcm(*integers)`;

export const pyPowerAndLog = `math.cbrt(x)
math.exp(x) # math.e ** x
math.log(x, base) # base: optional, default -> e
math.pow(x, y)
math.sqrt(x)`;

export const pyMaxMin = `a = float("inf")
b = float("-inf")
math.isinf(x)`;

export const pyConstant = `math.pi
math.e
math.inf # similar to float("inf)
-math.inf`;

export const pyXPowerN = `def power(x, n):
  if n == 0:
    return 1
  t = power(x, n // 2)
  t = t * t
  return t if n % 2 == 0 else t * x`;
