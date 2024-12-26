export const pyinOrder = `def inOrder(root):
    if root == None:
        return
    stack = []
    curr = root
    while curr:
        stack.append(curr)
        curr = curr.left
    while stack:
        curr = stack.pop()
        print(curr.val)
        curr = curr.right
        while curr:
            stack.append(curr)
            curr = curr.left`;

export const pypreOrder = `def preOrder(root):
    if root == None:
        return
    stack = [root]
    while stack:
        curr = stack.pop()
        print(curr.val)
        if curr.right:
            stack.append(curr.right)
        if curr.left:
            stack.append(curr.left)`;

export const pypreOrderSO = `def preOrderSpaceOptimized(root):
    if root == None:
        return
    stack = []
    curr = root
    while stack or curr:
        while curr:
            print(curr.val)
            if curr.right:
                stack.append(curr.right)
            curr = curr.left
        if stack:
            curr = stack.pop()`;
