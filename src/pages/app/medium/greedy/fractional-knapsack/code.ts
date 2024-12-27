export const pseudo = `- calculate ratio (value/weight) for every item
- sort items in decreasing ratio
- initialize res = 0, current_capacity = given_capacity
- do the following for every item, I in sorted order:
    if I.weight <= current_capacity:
        current_capacity -= I.weight
        res += I.value
    else:
        res += (I.value) * (current_capacity / I.weight)
        return res
- return res`;

export const pysol = `def fKnapsack(items, capacity):
    N = len(items)
    valueWeight = sorted(items, key=lambda x: x[0]*1.0/x[1], reverse=True)
    res = 0.0
    for v, w in valueWeight:
        if w <= capacity:
            capacity -= w
            res += v
        else:
            res += v * (capacity / w)
            break
    return res`;
