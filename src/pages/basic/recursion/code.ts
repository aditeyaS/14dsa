export const pyRecursion = `# Tail recursive
def fun(n):
    if n <= 0:
        return
    print(n)
    fun(n-1)

# Not tail recursive
def fun(n):
    if n <= 0:
        return
    fun(n-1)
    print(n)
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)`;
