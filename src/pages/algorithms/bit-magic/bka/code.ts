export const pycountSetBits = `def countSetBits(n):
    res = 0
    while n:
        # un-sets the last set bit 
        n = n & (n - 1)
        res += 1
    return res`;
export const pyisPow2 = `def isPow2(n):
    if n == 0:
        return False
    return (n & (n-1) == 0)`;
