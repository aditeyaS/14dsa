export const idea = `we first find the shortest paths that are 1 edge length.
The 2 edge length, and so on`;
export const algo = `we relax all edges V -1 times

d[V] = [infinity for every vertex]
d[src] = 0
for (count = 0; count < V-1; count ++):
    for every edge (u, v)
        if d[v] > d[u] + weight(u,v)
            d[v] = d[u] + weight(u,v)`;
