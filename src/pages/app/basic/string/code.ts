export const pyInit = `s = "Hello World"
l = list(s)
''.join(l)`;

export const pyAccess = `s[0] # 'H'
s[-1] # 'd'`;

export const pyDel = `del s[2] # Error
s = s[0:2] + s[3:]`;

export const pyStrFormatting = `# Default order
s = "{} {} {}".format('Geeks', 'For', 'Life')

# Positional Formatting
s = "{1} {0} {2}".format('Geeks', 'For', 'Life')

# Keyword Formatting
s = "{l} {f} {g}".format(g='Geeks', f='For', l='Life')

# Rounding off Integers
s = "{0:.2f}".format(1/6) # 0.17

s = f"Hello {name}!"`;

export const pyOthers = `len(s)

s[1:3] # slicing

s[::-1] # reverse

print(ord('a')) # 97
print(chr(97)) # a

"a" in s
"a" not in s`;

export const pyStringMethods = `s.count("Hello") # count
s.endswith(".") # ends with
s.find("l") # first index of -> -1 if not present
s.index("l") # first index of -> Error if not present

s.isalnum() # alphanumeric
s.isalpha() # alphabets
s.isdigit() # digits

s.islower()
s.isupper()

s.lower()
s.upper()

s.lstrip() # removes leading characters
s.strip()

s.replace("hello", "hi")

# string.split(separator, maxsplit)
s.split(", ")`;
