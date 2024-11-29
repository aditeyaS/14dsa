import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pyheight, pyinOrder, pypostOrder, pypreOrder } from "./code";
import { Complexity } from "@/components/complexity";
import { Alert } from "@/components/alert";

export default function DFS() {
  return (
    <PageContainer pageTitle="DFS" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`in-order: left -> root (parent P) -> right`}</LI>
          <LI>{`pre-order: root -> left -> right`}</LI>
          <LI>{`post-order: left -> right -> root`}</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Paragraph>In-order (LPR)</Paragraph>
        <Complexity
          time="θ(n)"
          timeVariant={"fair"}
          space="θ(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pyinOrder]} />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Pre-order (PLR)</Paragraph>
        <Complexity
          time="θ(n)"
          timeVariant={"fair"}
          space="θ(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pypreOrder]} />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Post-order (LRP)</Paragraph>
        <Complexity
          time="θ(n)"
          timeVariant={"fair"}
          space="θ(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pypostOrder]} />
        <Alert type={"Tip"}>
          <Paragraph>
            Prefer in-order or pre-order because they are tail recursive
          </Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Height of tree</Paragraph>
        <UL>
          <LI>1st convention: number of nodes on longest path (h1)</LI>
          <LI>2nd convention: number of edges on longest path (h2)</LI>
        </UL>
        <Complexity
          time="θ(n)"
          timeVariant={"fair"}
          space="θ(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pyheight]} />
      </SectionContainer>
    </PageContainer>
  );
}
