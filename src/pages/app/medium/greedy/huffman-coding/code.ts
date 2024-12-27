export const hla = `1. Build a binary tree
    - every input character is a leaf
    - every left child edge is ladled as 0 and right edge as 1
    - every root to leaf path represent huffman code of leaf
2 traverse the BT and print the codes`;

export const pseudo = `1. create leaf nodes and build a min heap, h of all leaves initially
2. while h.size() > 1
    - left = h.min()
    - right = h.min()
    - create new tree node with
        character a $
        freq as left.freq + right.freq
        left and right children as left and right
    - insert the new node in h
3. the only left in h is out required binary tree`;

export const pycodes = `def printCodes(root, s = ""):
    if root == None:
        return
    if root.ch != "$":
        print(root.ch + " " + s)
        return
    printCodes(root.left, 1 + "0")
    printCodes(root.right, s + "1")`;
