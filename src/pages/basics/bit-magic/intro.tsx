import { CodeBlock, PageHeading } from "../../../components";

const shift = `x=5 # 101
x<<1 # 1010
x<<2 # 10100
x>>1 # 010
x>>3 # 000
1 << n # 2^n
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>Bitwise AND: &</li>
        <li>Bitwise OR: |</li>
        <li>Bitwise XOR : ^</li>
        <li>{`Left Shift: <<`}</li>
        <li>{`Right Shift: >>`}</li>
        <li>Bitwise Not: ~</li>
      </ul>
      <PageHeading>Shift operators</PageHeading>
      <CodeBlock>{shift}</CodeBlock>
    </div>
  );
};
