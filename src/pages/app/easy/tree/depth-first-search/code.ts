export const pyinOrder = `def inOrder(root):
    if not root:
        inOrder(root.left)
        print(root.val)
        inOrder(root.right)`;

export const pypreOrder = `def preOrder(root):
    if not root:
        print(root.val)
        preOrder(root.left)
        preOrder(root.right)`;

export const pypostOrder = `def postOrder(root):
    if not root:
        postOrder(root.left)
        postOrder(root.right)
        print(root.val)`;

export const pyheight = `def height(root): # h1
    if root == None:
        return 0 # replace with -1 for h2
    lh = height(root.left)
    rh = height(root.right)
    return 1 + max(lh, rh)`;
