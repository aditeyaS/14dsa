export const pyadjl = `adj = [[] for _ in range(V)]
for u, v in edges:
    adj[u].append(v)
    adj[v].append(u)`;

export const pyadjldict = `adj = defaultdict(list)
for u, v in edges:
    adj[u].append(v)
    adj[v].append(u)`;
