export const pysd = `EMPTY = -1

# takes a root and fills the array
def serialize(root, arr):
    if root is None:
        arr.append(EMPTY)
        return
    arr.append(root.data)
    serialize(root.left, arr)
    serialize(root.right, arr)

# takes the array and returns the root
index = 0
def deserialize(arr):
    global index
    if index == len(arr):
        return None
    val = arr[index]
    index += 1
    if val == EMPTY:
        return None
    root = Node(val)
    root.left = deserialize(arr)
    root.right = deserialize(arr)
    return root`;
