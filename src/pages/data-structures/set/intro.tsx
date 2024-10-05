import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `s = {10, 20}
s = set([10, 20])
s = set() # creates empty set`;

const insert = `s.add(30)
s.update([40, 50]) # adds 40 and 50`;

const del = `s.discard(30) # no error if not present
s.remove(30) # error when not present
s.clear()`;

const others = `len(s)
if 20 in s

#union
s1 | s2
s1.union(s2)

# intersection
s1 & s2
s1.intersection(s2)

# difference
s1 - s2
s1.difference(s2)

# symmetric difference
# elements in s1 and s2 but not common
s1 ^ s2
s1.symmetricdifference(s2)

s1.isdisjoint(s2)

# subset
s1 <= s2
s1.issubset(s2)`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>distinct elements</LI>
        <LI>unordered</LI>
        <LI>O(1) for search, insert, delete</LI>
      </UL>
      <Section>
        <H2>Init</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Section>
        <H2>Insert</H2>
        <CodeBlock>{insert}</CodeBlock>
      </Section>
      <Section>
        <H2>Delete</H2>
        <CodeBlock>{del}</CodeBlock>
      </Section>
      <Section>
        <H2>Others</H2>
        <CodeBlock>{others}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
