import {
  CodeBlock,
  H2,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../components";

const init = `cols = 4
rows = 2

# not recomended (INCORRECT)
mat = [[0] * cols] * rows 

# correct way
mat = [[0 for i in range(cols)] for j in range(rows)]`;

const spiral = `m, n = len(matrix), len(matrix[0])
L, R = 0, n - 1
T, B = 0, m - 1
while L <= R and T <= B:
  for i in range(L, R + 1):
    matrix[T][i]
  T += 1
  for i in range(T, B + 1):
    matrix[i][R]
  R -= 1
  if T <= B:
    for i in range(R, L - 1, -1):
      matrix[B][i]
    B -= 1
  if L <= R:
    for i in range(B, T - 1, -1):
      matrix[i][L]
    L += 1`;

export const Intro = () => {
  return (
    <PageSectionContainer>
      <UL>
        <LI>2D array</LI>
      </UL>
      <Section>
        <H2>Initialization</H2>
        <CodeBlock>{init}</CodeBlock>
      </Section>
      <Section>
        <H2>Spiral</H2>
        <CodeBlock>{spiral}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};
