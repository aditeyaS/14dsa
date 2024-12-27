export const pseudo = `- create a Priority Queue, pq (or Min Heap)
- distance[v] = [infinity for all vertex]
- distance[source] = 0
- insert all distance in pq
- while pq is not empty
    - u = min from priority queue
    - relax all adj of pq that are not in pq`;

export const pyd = `def dijkstra(graph, source):
    V = len(graph)
    distance = [float("inf")] * V
    distance[source] = 0
    finalized = [False] * V
    for _ in range(V-1):
        u = -1
        for i in range(V):
            if finalized[i] == False and (u == -1 or distance[i] < distance[u]):
                u = i
        finalized[u] = True
        for v in range(V):
            if finalized[v] == False and graph[u][v] != 0:
                distance[v] = min(distance[v], distance[u] + graph[u][v])
    return distance`;
