import { Alert, CodeBlock, PageHeading } from "../../components";

const treeNode = `class Node:
    def __init__(self. k):
        self.left = None
        self.right = None
        self.key = k`;

const inOrder = `# recursive
def inorder(root):
    if root != None:
        inorder(root.left)
        print(root.key)
        inorder(root.right)
# Time: θ(n)
# Space: θ(h)


# iterative
def inOrder(root):
    if root == None: return
    st = []
    curr = root
    while curr:
        st.append(curr)
        curr = curr.left
    while st:
        curr = st.pop()
        print(curr.key)
        curr = curr.right
        while curr:
            st.append(curr)
            curr = curr.left
`;

const preOrder = `# recursive
def preorder(root):
    if root != None:
        print(root.key)
        preorder(root.left)
        preorder(root.right)
# Time: θ(n)
# Space: θ(h)

# iterative
def preorder(root):
    if root == None:
        return
    stk = [root]
    while stk:
        curr = stk.pop()
        print(curr.val)
        if curr.right != None:
            stk.append(curr.right)
        if curr.left != None:
            stk.append(curr.left)

# space optimized
def preorder(root):
    if root == None: return
    st = []
    curr = root
    while st or curr != None:
        while curr!=None:
            print(curr.val)
            if curr.right!=None:
                st.append(curr.right)
            curr = curr.left
        if st:
            curr = st.pop()
`;

const postOrder = `def postorder(root):
    if root != None:
        postorder(root.left)
        postorder(root.right)
        print(root.key)
# Time: theta(n)
# Space: theta(h)

def postorderTraversal(root):
    if root == None:
        return []
    return postorderTraversal(root.left) + postorderTraversal(root.right) + [root.val]`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl">At most 2 children</span>
      <CodeBlock>{treeNode}</CodeBlock>
      <PageHeading>Tree Traversal</PageHeading>
      <ul className="list-disc list-inside [&_ul]:list-[revert]">
        <li>Breadth First (or Level order)</li>
        <li>Depth first (in-order, pre-order, post-order)</li>
      </ul>
      <div>
        <PageHeading>In-Order</PageHeading>
        <Alert type="Note">{`L -> P -> R (Left -> Parent -> Right)`}</Alert>
        <CodeBlock>{inOrder}</CodeBlock>
      </div>
      <div>
        <PageHeading>Pre-Order</PageHeading>
        <Alert type="Note">{`P -> L -> R (Parent -> Left -> Right)`}</Alert>
        <CodeBlock>{preOrder}</CodeBlock>
      </div>
      <div>
        <PageHeading>Post-Order</PageHeading>
        <Alert type="Note">{`L -> R -> P (Left -> Right -> Parent)`}</Alert>
        <CodeBlock>{postOrder}</CodeBlock>
      </div>
      <Alert type="Tip">{`For recursion prefer inorder and preorder -> Tail recursive`}</Alert>
    </div>
  );
};
