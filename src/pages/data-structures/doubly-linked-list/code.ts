export const pynode = `class Node:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None`;

export const pyiab = `def insertAtBeginning(head, x):
    t = Node(x)
    if head:
        head.prev = t
    t.next = head
    return t`;

export const pyiae = `def insertAtEnd(head, x):
    t = Node(x)
    if not head:
        return t
    curr = head
    while curr.next:
        curr = curr.next
    curr.next = t
    t.prev = curr
    return head`;

export const pydf = `def delFirst(head):
    if head == None or head.next == None:
        return None
    head = head.next
    head.prev = None
    return head`;

export const pydl = `def delLast(head):
    if head == None or head.next == None:
        return None
    curr = head
    while curr.next.next:
        curr = curr.next
    curr.next = None
    return head`;
