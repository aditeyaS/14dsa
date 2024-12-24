export const pydfs = `# s: source vertex
def DFS(adjL, s):
    visited = [False] * len(adjL)

    def helper(src):
        visited[src] = True
        print(src)
        for u in adjL[src]:
            if not visited[src]:
                helper(u)
    
    helper(s)`;

export const pydfsd = `def DFSDisconnected(adjL):
    visited = [False] * len(adjL)

    def helper(src):
        visited[src] = True
        print(src)
        for u in adjL[src]:
            if not visited[src]:
                helper(u)

    for u in range(len(adjL)):
        if not visited[u]:
            helper(s)`;
