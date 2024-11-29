export const pyInit = `arr = []
arr = list()
arr = [True]*10
arr = [x for x in range(11) if x % 2 == 0]`;

export const pyInsert = `arr.append(40)
arr.insert(1, 15) # insert at index`;

export const pyAccess = `arr[0]
arr.index(30)`;

export const pyDel = `arr.pop() # removes last element
arr.pop(1) # remove at index
del arr[1]
del arr[1:3]
arr.remove(20) # remove item`;

export const pyOthers = `len(arr)
if 15 in arr

max(arr), min(arr), sum(arr)
arr.reverse()

arr.count(30) # counts the number of 30

arr[start:stop:step] # slicing; stop -> exclusive

arr.sort() # sorts in place, ASC
arr.sort(reverse=True) # DESC

sorted(arr) # creates new list

def myFun(s):
  return len(s)
arr.sort(key=myFun)`;

export const pyListOperations = `class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

def myFun(p):
  return p.x

l = [Point(2,3), Point(5,6)]
l.sort(key=myFun)`;
