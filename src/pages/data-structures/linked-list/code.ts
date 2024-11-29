export const pynode = `class Node:
  def __init__(self, val):
    self.val = val
    self.next = None`;

export const pysearch = `def search(head, x):
  curr = head
  i = 0
  while curr:
    if curr.val == x:
      return i
    i += 1
    curr = curr.next
  return -1`;

export const pyiab = `def insertAtBeginning(head, x):
  t = Node(x)
  t.next = head
  return t`;

export const pyiae = `def insertAtEnd(head, x):
  if not head:
    return Node(x)
  curr = head
  while curr.next:
    curr = curr.next
  curr.next = Node(x)
  return head`;

export const pyiai = `def insertAtIndex(head, x, p):
  t = Node(x)
  if p == 0:
    t.next = head 
    return t
  curr = head
  for i in range(p - 2):
    curr = curr.next
    if not curr:
      return head
  t.next = curr.next
  curr.next = t
  return head`;

export const pydf = `def delFirst(head):
  if head:
    return head.next
  return None`;

export const pyde = `def delEnd(head):
  if head == None or head.next == None:
    return None
  curr = head
  while curr.next.next:
    curr = curr.next
  curr.next = None
  return head`;
