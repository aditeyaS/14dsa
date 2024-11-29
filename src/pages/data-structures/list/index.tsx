import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { Alert } from "@/components/alert";
import { LI, UL } from "@/components/ul-li";
import {
  pyAccess,
  pyDel,
  pyInit,
  pyInsert,
  pyListOperations,
  pyOthers,
} from "./code";

export default function List() {
  return (
    <PageContainer pageTitle="List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Initialize</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInit]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInsert]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Access</Heading>
        <CodeBlock languages={["python"]} snippets={[pyAccess]} />
        <Alert type="Caution">
          <Paragraph>
            arr.index(item) gives error if item is not present
          </Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <CodeBlock languages={["python"]} snippets={[pyDel]} />
        <Alert type="Caution">
          <Paragraph>
            arr.remove(item) gives error if item is not present
          </Paragraph>
        </Alert>
        <Alert type="Tip">
          <Paragraph>
            Use another data structure if there are lot of delete
          </Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyOthers]} />
        <UL>
          <LI>
            Stability in sorting: Order of occurrence is maintained when values
            are same
          </LI>
          <LI>sort() and sorted() are stable</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Sorting objects</Heading>
        <CodeBlock languages={["python"]} snippets={[pyListOperations]} />
        <Alert type="Important">
          <Paragraph>
            sort() only works for array and sorted() works for any iterable
          </Paragraph>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
