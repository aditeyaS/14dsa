export const pybbt = `res = 0
def burnTime(root, leaf, distance):
    if root == None:
        return 0
    if root.data == leaf:
        distance[0] = 0
        return 1
    global res
    ldist, rdist = [-1], [-1]
    lh = burnTime(root.left, leaf, ldist)
    rh = burnTime(root.right, leaf, rdist)
    if ldist[0] != -1:
        distance[0] = ldist[0] + 1
        res = max(res, rh + distance[0])
    elif rdist[0] != -1:
        distance[0] = rdist[0] + 1
        res = max(res, lh + distance[0])
    return max(lh, rh) + 1`;
