export const pycycledetection = `def isLoop(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`;

export const pyremoveloop = `def removeLoop(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    if slow != fast:
        return
    slow = head
    while slow.next != fast.next:
        slow = slow.next
        fast = fast.next
    fast.next = None`;
