export const pysort = `# Works for list
arr.sort() # sorts in place, ASC
arr.sort(reverse=True) # DESC

# works for any iterable - list, tuple, dictionary, etc.
t = sorted(arr) # creates new list
t = sorted(arr, reverse=True)

# sorting with a lambda function
def myFun(s):
  return len(s)
arr.sort(key=myFun)`;

export const pysortobjects = `class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

def myFun(p):
  return p.x

l = [Point(2,3), Point(5,6)]
l.sort(key=myFun)`;
