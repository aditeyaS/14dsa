export const pyslowFast = `def getMiddle(head):
    if not head:
      return None
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val

# n'th node from the end
def nthNodeFromEnd(head, n):
  if not head:
    return -1
  fast = head
  for _ in range(n):
    if not fast:
      return -1
    fast = fast.next
  slow = head
  while fast:
    slow = slow.next
    fast = fast.next
  return slow.val`;
