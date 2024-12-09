export const pytraversal = `def traversal(head):
    if not head:
        return
    print(head.val)
    curr = head.next
    while curr != head:
        print(curr.val)
        curr = curr.next`;

export const pyiab = `# insert at 2nd position then swap
def insertAtBeginning(head, x):
    t = Node(x)
    if not head:
        t.next = t
        return t
    t.next = head.next
    head.next = t
    head.val, t.val = t.val, head.val
    return head`;

export const pyiae = `# insert at 2nd position, swap, then return 2nd
def insertAtEnd(head, x):
    t = Node(x)
    if not head:
        t.next = t
        return t
    t.next = head.next
    head.next = t
    t.val, head.val = head.val, t.val
    return t`;

export const pydf = `def delFirst(head):
    if head == None or head.next == head:
        return None
    head.val = head.next.val
    head.next = head.next.next
    return head`;
