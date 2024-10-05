import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `t = ("apple", 2, True)
t = tuple(("apple", 2, True))
t = tuple([])`;

const access = `t[0] # apple`;

const others = `len(t)`;

const important = `t1 = ("apple",)
print(type(t1)) # <class 'tuple'>

t2 = ("apple")
print(type(t2)) # <class 'str'>`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>ordered</LI>
        <LI>unchangeable</LI>
        <LI>can have duplicates</LI>
      </UL>
      <Section>
        <H2>Init</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Section>
        <H2>Access</H2>
        <CodeBlock>{access}</CodeBlock>
      </Section>
      <Section>
        <H2>Others</H2>
        <CodeBlock>{others}</CodeBlock>
      </Section>
      <Alert type="Important">
        <CodeBlock>{important}</CodeBlock>
      </Alert>
    </PageSectionContainer>
  );
};
