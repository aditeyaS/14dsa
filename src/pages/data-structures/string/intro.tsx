import { CodeBlock, H2 } from "../../../components";

const init = `s = "Hello World"

l = list(s)
''.join(l)`;

const access = `s[0] # 'H'
s[-1] # 'd'`;

const deleteCode = `del s[2] # Error
s = s[0:2] + s[3:]`;

const strFormatting = `# Default order
s = "{} {} {}".format('Geeks', 'For', 'Life')

# Positional Formatting
s = "{1} {0} {2}".format('Geeks', 'For', 'Life')

# Keyword Formatting
s = "{l} {f} {g}".format(g='Geeks', f='For', l='Life')

# Rounding off Integers
s = "{0:.2f}".format(1/6) # 0.17

s = f"Hello {name}!"`;

const others = `len(s)

s[1:3] # slicing

s[::-1] # reverse

print(ord('a')) # 97
print(chr(97)) # a

"a" in s
"a" not in s`;

const stringMethods = `s.count("Hello") # count
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

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>immutable</li>
      </ul>
      <H2>Init</H2>
      <CodeBlock>{init}</CodeBlock>
      <H2>Access</H2>
      <CodeBlock>{access}</CodeBlock>
      <H2>Delete</H2>
      <CodeBlock>{deleteCode}</CodeBlock>
      <H2>String formatting</H2>
      <CodeBlock>{strFormatting}</CodeBlock>
      <H2>Others</H2>
      <CodeBlock>{others}</CodeBlock>
      <H2>String methods</H2>
      <CodeBlock>{stringMethods}</CodeBlock>
    </div>
  );
};
