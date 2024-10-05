import {
  Alert,
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `# Tail recursive
def fun(n):
    if n <= 0:
        return
    print(n)
    fun(n-1)

# Not tail recursive
def fun(n):
    if n <= 0:
        return
    fun(n-1)
    print(n)
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <Section>
        <UL>
          <LI>function that calls itself</LI>
        </UL>
      </Section>
      <Section>
        <H2>Tail Recursion</H2>
        <UL>
          <LI>
            A function is tail recursive if the function does not do anything
            after the last recursive call
          </LI>
          <LI>
            {
              "Modern compilers replace tail recursion with goto -> Tail call elimination"
            }
          </LI>
          <LI>Python does not do tail call elimination</LI>
        </UL>
        <Alert type="Note">Python does not do tail call elimination</Alert>
        <CodeBlock>{init}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
