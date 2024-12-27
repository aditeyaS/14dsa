export const pyexample = `def minCoins(coins = [10, 5, 2, 1], amount):
    # greedy and pick the largest value coin first
    coins.sort(reverse=True)
    res = 0
    for x in coins:
        if x <= amount:
            c = amount // x
            res += c
            amount -= c * x
        if amount == 0:
            break
    return res`;

export const pseudo = `def getOptimal(arr):
    res = 0
    while all items are not considered:
        i = select an item
        if i is valid:
            res = res + i
    return res`;
