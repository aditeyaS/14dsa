export const pyInit = `t = ("apple", 2, True)
t = tuple(("apple", 2, True))
t = tuple([])`;

export const pyAccess = `t[0] # apple`;

export const pyOthers = `len(t)`;

export const pyImportant = `t1 = ("apple",)
print(type(t1)) # <class 'tuple'>

t2 = ("apple")
print(type(t2)) # <class 'str'>`;
