export const pyInit = `d = {} 
d = dict()`;

export const pyInsert = `d["h"] = 20`;

export const pyAccess = `print(d["h"]) # 20
d.get("h", 0) # 0 is default value
for v in d.values()
for k in d.keys()
for k,v in d.items()`;

export const pyDel = `del d["h"] # delete
d.pop("h") # delete and return
d.popitem() # removes and returns the last inserted`;

export const pyOthers = `len(d)
if "h" in d
from collections import defaultdict
d = defaultdict(list)`;

export const pyDdTip = `# use defaultdict(list) if values are list

# with defalutdict
d['fruits'].append('apple')

# without defaultdict
if 'fruits' not in d:
    d['fruits'] = []
d['fruits'].append('apple')`;
