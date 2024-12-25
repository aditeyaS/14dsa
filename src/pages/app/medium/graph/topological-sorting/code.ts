export const pybfspseudo = `1. store indegree of every vertex
2. create a queue, q
3. add all 0 indegree vertices to q
4. while queue is not empty
    - u = q.pop()
    - print u
    - for every adj v of u:
        - reduce indegree of v by 1
        - if indegree of v == 0, add it to q`;

export const pycd = `def cycleDetectionTopologicalSort(adjL):
    V = len(adj)
    indeg = [0] * V
    for u in range(V):
        for x in adj[u]:
            indeg[x] += 1
    q = deque()
    for v in range(V):
        if indeg[v] == 0:
            q.append(v)
    count = 0
    while q:
        u = q.popleft()
        for x in adjL[u]:
            indeg[x] -= 1
            if indeg[x] == 0:
                q.append(x)
        count += 1
    if count != V:
        return True # cycle present
    return False`;

export const pydfspseudo = `1. create an empty stack
2. for every vertex u
        if u is not visited
            DFS(u, stack)
3. while stack is not empty
        pop from stack and print it
        
DFS(u, stack)
    - mark u as visited
    - for all adj v of u
            if v is not visited
                DFS(v, stack)
    - push u to stack`;
