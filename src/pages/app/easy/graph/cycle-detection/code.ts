export const pyud = `def isCycle(adjL):
    N = len(adjL)
    visited = [False] * N

    def helper(src, parent):
        visited[src] = True
        for u in adjL[src]:
            if not visited[u]:
                if helper(u, src):
                    return True
            elif u != parent:
                return True
        return False
    
    for i in range(N):
        if not visited[i]:
            if helper(i, -1):
                return True
    return False`;

export const pyd = `def isCycle(adjL):
    N = len(adjL)
    visited = [False] * N
    recSt = [False] * N

    def helper(src):
        visited[src] = True
        recSt[src] = True
        for u in adjL[src]:
            if visited[u] == False and helper(u):
                return True
            elif recSt[u]:
                return True
        recSt[s] = False
        return False

    for i in range(N):
        if not visited[i]:
            if helper(i):
                return True
    return False`;
