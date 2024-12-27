export const pyq = `def fibonacci(n):
    if n == 0 or n == 1:
        return n
    return fibonacci(n-1) + fibonacci(n - 2)`;

export const pym = `dp = [None] * 100
def fibonacci(n):
    if dp[n] != None:
        return dp[n]
    if n == 0 or n == 1:
        dp[n] = n
    else:
        dp[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return dp[n]`;

export const pyt = `def fibonacci(n):
    dp = [None] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`;
