import { Alert, CodeBlock, PageHeading } from "../../../components";

const init = `d = {} 
d = dict()
`;

const insert = `d["h"] = 20
`;

const access = `print(d["h"]) # 20
d.get("h", 0) # 0 is default value
for v in d.values()
for k in d.keys()
for k,v in d.items()
`;

const del = `del d["h"] # delete
d.pop("h") # delete and return
d.popitem() # removes and returns the last inserted
`;

const others = `len(d)
if "h" in d
from collections import defaultdict
d = defaultdict(list)
`;

const ddTip = `use defaultdict(list) if values are list

# with defalutdict
d['fruits'].append('apple')

# without defaultdict
if 'fruits' not in d:
    d['fruits'] = []
d['fruits'].append('apple')
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>key value pairs</li>
        <li>unordered</li>
        <li>O(1) for search, insert, delete</li>
      </ul>
      <PageHeading>Initialization</PageHeading>
      <CodeBlock>{init}</CodeBlock>
      <PageHeading>Insert</PageHeading>
      <CodeBlock>{insert}</CodeBlock>
      <PageHeading>Access</PageHeading>
      <CodeBlock>{access}</CodeBlock>
      <PageHeading>Delete</PageHeading>
      <CodeBlock>{del}</CodeBlock>
      <PageHeading>Others</PageHeading>
      <CodeBlock>{others}</CodeBlock>
      <Alert type="Caution">
        The dictionary key should be immutable. Use tuple instead of list.
      </Alert>
      <Alert type="Important">
        <CodeBlock>from collections import defaultdict</CodeBlock>
      </Alert>
      <Alert type="Tip">
        <CodeBlock>{ddTip}</CodeBlock>
      </Alert>
    </div>
  );
};