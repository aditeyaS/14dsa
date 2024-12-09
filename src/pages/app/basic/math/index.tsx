import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  Paragraph,
} from "@/components/blocks";
import {
  pyConstant,
  pyMaxMin,
  pyNTR,
  pyoperations,
  pyPowerAndLog,
  pyroundtozero,
  pyXPowerN,
} from "./code";

export default function Math() {
  return (
    <PageContainer pageTitle="Math" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Operations</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyoperations} />

              <Alert type={"Caution"}>
                <CodeBlock language="python" code={pyroundtozero} />
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Number-theoretic and representation functions</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyNTR} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Power and log functions</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyPowerAndLog} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Dealing with max and min</Heading>
        <Paragraph>
          At times you have to set a default value to find max and min
        </Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyMaxMin} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Constants</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyConstant} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Example</Heading>
        <Paragraph>x power n</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyXPowerN} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
