export const pylevelOrder = `from collections import deque
def levelOrderTraversal(root):
  if root == None:
    return
  q = deque()
  q.append(root)
  while q:
    t = q.popleft()
    print(t.val)
    if t.left:
      q.append(t.left)
    if t.right:
      q.append*t.right`;
