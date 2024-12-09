export const pynode = `class Node:
    child: [None] * 26
    isEnd = False`;

export const pyinsert = `def insert(root, word):
    node = root
    for c in word:
        i = ord(c) - ord('a')
        if not node.child[i]:
            node.child[i] = new Node()
        node = node.child[i]
    node.isEnd = True`;

export const pysearch = `def search(root, word):
    node = root
    for c in word:
        i = ord(c) - ord('a')
        if not node.child[i]:
            return False
        node = node.child[i]
    return node.isEnd`;

export const pydelete = `def isEmpty(root):
    for x in root.child:
        if x:
            return False
    return True

def delete(root, word, i):
    if root == None:
        return None
    if i == len(word):
        if root.isEnd:
            root.isEnd = False
        if isEmpty(root):
            root = None
        return root
    idx = ord(word[i]) - ord('a)
    root.child[idx] = delete(root.child[idx], word, i + 1)
    if isEmpty(root) and root.isEnd == False:
        root = None
    return root`;
