import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pyBitwiseNot, pyShift } from "./code";

const bitMatrix = [
  ["0", "0", "0", "0", "0"],
  ["0", "1", "0", "1", "1"],
  ["1", "0", "0", "1", "1"],
  ["1", "1", "1", "1", "0"],
];

export default function BitMagic() {
  return (
    <PageContainer pageTitle="Bit Magic" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>
            negative numbers are represented in 2's complement in most languages
          </LI>
          <LI>
            Range: [-2 <sup>n-1</sup> to 2 <sup>n-1</sup> - 1]; n - number of
            bits
          </LI>
          <LI>
            Range for unsigned: 0 to 2 <sup>n</sup> - 1
          </LI>
          <LI>2's complement - 1. invert all bits; 2. add 1</LI>
        </UL>
        <Alert type="Important">leading bit is 1 for negative numbers</Alert>
      </SectionContainer>
      <SectionContainer>
        <Heading>Bitwise Operators</Heading>
        <UL>
          <LI>Bitwise AND: &</LI>
          <LI>Bitwise OR: |</LI>
          <LI>Bitwise XOR : ^</LI>
        </UL>
        <Table className="text-xl">
          <TableHeader>
            <TableRow>
              {["A", "B", "&", "|", "^"].map((v) => (
                <TableHead key={`col-${v}`}> {v}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bitMatrix.map((row, i) => (
              <TableRow key={`row-${i}`}>
                {row.map((v, j) => (
                  <TableCell key={`row-${i}-cell-${j}`}>{v}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <UL>
          <LI>Bitwise Not: ~</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyBitwiseNot} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Shift operators</Heading>
        <UL>
          <LI>{`Left Shift: <<`}</LI>
          <LI>{`Right Shift: >>`}</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyShift} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
