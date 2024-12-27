export const pseudo1 = `- create an empty stack
- for every vertex u,
    if u is not visited
        DFSRex(u, stack)
- while stack is not empty
    pop an item and add to result
    
DFSRec(u, stack):
    - mark u as visited
    - for every adjacent v
        if v is not visited
            DFSRec(v, stack)
    - add u to stack`;
