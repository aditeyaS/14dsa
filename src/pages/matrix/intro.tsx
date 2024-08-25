import { CodeBlock, PageHeading } from "../../components";

const init = `cols = 4
rows = 2

# not recomended (INCORRECT)
mat = [[0] * cols] * rows 

# correct way
mat = [[0 for i in range(cols)] for j in range(rows)]
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>2D array</li>
      </ul>
      <PageHeading>Initialization</PageHeading>
      <CodeBlock>{init}</CodeBlock>
    </div>
  );
};
