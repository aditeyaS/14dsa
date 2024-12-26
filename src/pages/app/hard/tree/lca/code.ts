export const pypseudo1 = `- build 2 path arrays from root to nodes
- the last matching node is the LCA`;

export const pylca1 = `def findPath(root, path, x):
    if not root:
        return False
    path.append(root.data)
    if root.data == x:
        return True
    if (root.left != None and findPath(root.left, path, x)) or (root.right != None and findPath(root.right, path, x)):
        return True
    path.pop()
    return False

def lca(root, n1, n2):
    p1, p2 = [], []
    if not findPath(root, p1, n1) or not findPath(root, p2, n2):
        return None
    while i < len(p1) and i < len(p2):
        if p1[1] != p2[i]:
            break
        i += 1
    return p1[i-1]`;

export const pypseudo2 = `for every node we have following cases
    - it is same as n1 or n2
    - one subtree contains n1 and other n2
    - one subtree contains both n1 and n2
    - none of the subtree contain n1 and n2`;

export const pylca2 = `def lca(root, n1, n2):
    if root == None:
        return None
    if root.data == n1 or root.data == n2:
        return root
    lcaL = lca(root.left, n1, n2)
    lcaR = lca(root.right, n1, n2)
    if lcaL and lcaR:
        return root
    return lcaL if lcaL else lcaR`;
