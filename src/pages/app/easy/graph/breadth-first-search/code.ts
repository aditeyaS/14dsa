export const pybfs = `# s: source vertex
def BFS(adjL, s):
    visited = [False] * len(adjL) # can also use set
    q = deque([s])
    visited[s] = True
    while q:
        s = q.popleft()
        print(s)
        for u in adjL[s]:
            if not visited[s]:
                q.append(u)
                visited[s] = True`;

export const pybfsd = `def BFSDisconnected(adjL):
    visited = [False] * len(adjL)

    def helper(s):
        q = deque([s])
        visited[s] = True
        while q:
            s = q.popleft()
            print(s)
            for u in adjL[s]:
                if not visited[s]:
                    q.append(u)
                    visited[u] = True

    for s in range(len(adjL)):
        if not visited[s]:
            helper(s)`;
