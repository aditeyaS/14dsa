export const pyGcd = `def gcd(a, b): # Euclidean algorithm
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a

def gcd(a, b): # Optimized
    if b == 0:
        return a
    return gcd(b, a % b)`;
