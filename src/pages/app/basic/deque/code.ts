export const pyinit = `from collections import deque
d = deque()`;

export const pyleftOp = `d.appendleft(10)
d.popleft()`;

export const pyrightOp = `d.append(20)
d.pop()`;

export const pyothers = `d.insert(2, 15) # index, value
d.count(10)
d.extend([30,40])

# first 15 then 25 will be added
# new deque -> [25, 15, ...]
d.extendleft([15,25])

d.rotate(2) # clockwise

d.reverse()

d[0] = 5
d[-1]`;
