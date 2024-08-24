import { CodeBlock } from "../../components";

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

export const Intro = () => {
  return (
    <>
      <h2 className="text-2xl">Init</h2>
      <CodeBlock>{init}</CodeBlock>
      <h2 className="text-2xl">Insert</h2>
      <CodeBlock>{insert}</CodeBlock>
      <h2 className="text-2xl">Access</h2>
      <CodeBlock>{access}</CodeBlock>
      <h2 className="text-2xl">Delete</h2>
      <CodeBlock>{del}</CodeBlock>
      <h2 className="text-2xl">Others</h2>
      <CodeBlock>{others}</CodeBlock>
    </>
  );
};
