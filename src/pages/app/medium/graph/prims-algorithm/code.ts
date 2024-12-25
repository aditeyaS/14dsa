export const pseudo = `- maintain a set of MST
- add new vertex by adding the one with min weight (greedy)`;

export const pyprims = `def primMST(graph):
    V = len(graph)
    key = [float('inf')] * V
    key[0] = 0
    res = 0
    mSet = [False] * V
    for _ in range(V):
        u = -1
        for v in range(V):
            if not mSet[v] and (u == -1 or key[v] < key[u]):
                u = i
        mSet[u] = True
        res += key[u]
        for v in range(V):
            if not mSet[v] and graph[u][v] != 0 and graph[u][v] < key[v]:
                key[v] = graph[u][v]
    return res`;
