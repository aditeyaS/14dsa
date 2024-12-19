export const pyInit = `s = "Hello World"`;

export const pyAccess = `s[0] # 'H'
s[-1] # 'd'`;

export const pyDel = `del s[2] # Error ❌

s = s[0:2] + s[3:]`;

export const pyStrFormatting = `s = f"Hello {name}!"

# Rounding off Integers
s = "{0:.2f}".format(1/6) # 0.17

s = "%s, %s!"%("Hello", "world")
s = "{} {} {}".format('Geeks', 'For', 'Life')
s = "{1} {0} {2}".format('Geeks', 'For', 'Life')
s = "{l} {f} {g}".format(g='Geeks', f='For', l='Life')`;

export const pyOthers = `ord('a') # 97
chr(97) # a

len(s) # length

s[1:3] # slicing
s[::-1] # reverse

"a" in s
"a" not in s`;

export const pyStringMethods = `s.strip()
s.strip("-")

s = "ILoveDSA"
s.islower() # False
s.isupper() # False
s.lower() # ilovedsa
s.upper() # ILOVEDSA


arr = s.split(" ")
s = ''.join(arr)

s.isalnum() # alphanumeric
s.isalpha() # alphabets
s.isdigit() # digits

s.count("Hello") # count
s.endswith(".") # ends with
s.find("l") # first index of -> -1 if not present
s.index("l") # first index of -> Error if not present ❌

s.lstrip() # removes leading characters

s.replace("hello", "hi")`;
