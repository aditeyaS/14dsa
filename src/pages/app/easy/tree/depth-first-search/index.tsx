import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Alert,
  Paragraph,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pyheight, pyinOrder, pypostOrder, pypreOrder } from "./code";

export default function DFS() {
  return (
    <PageContainer pageTitle="Depth First Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`in-order: left -> root (parent P) -> right`}</LI>
          <LI>{`pre-order: root -> left -> right`}</LI>
          <LI>{`post-order: left -> right -> root`}</LI>
        </UL>
        <Alert type={"Tip"}>
          <Paragraph>
            Prefer in-order or pre-order because they are tail recursive
          </Paragraph>
        </Alert>
      </SectionContainer>
      <SectionContainer>
        <Paragraph>In-order (LPR)</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyinOrder} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Pre-order (PLR)</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pypreOrder} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Post-order (LRP)</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pypostOrder} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Height of tree</Paragraph>
        <UL>
          <LI>1st convention: number of nodes on longest path (h1)</LI>
          <LI>2nd convention: number of edges on longest path (h2)</LI>
        </UL>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyheight} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
