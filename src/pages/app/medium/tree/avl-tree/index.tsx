import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";

import { Complexity, Heading, LI, Paragraph, UL } from "@/components/blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InsertImage from "./insert-image";

export default function AVLTree() {
  return (
    <PageContainer pageTitle="AVL Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Self balancing BST</LI>
          <LI>
            {
              "For every node difference between left and right height does not exceed 1; balance factor <= 1"
            }
          </LI>
          <LI>balance factor = abs(left height - right height)</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert</Heading>
        <UL>
          <LI>Perform normal BST Insert</LI>
          <LI>Traverse all ancestors form the inserted node</LI>
          <LI>
            If unbalanced check for below case
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case</TableHead>
                  <TableHead>Rotation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Left left</TableCell>
                  <TableCell rowSpan={2}>Single Rotation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Right Right</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Left Right</TableCell>
                  <TableCell rowSpan={2}>Double Rotation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Right Left</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </LI>
          <LI>While inserting you will just have to fix one ancestor</LI>
          <LI>
            Time complexity: <Complexity complexity="O(log n)" level={2} />
          </LI>
        </UL>
        <Paragraph>Eg: Insert: [20, 15, 5, 40, 50, 18]</Paragraph>
        <InsertImage />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <UL>
          <LI>
            While deleting you have to go up and keep checking for unbalanced
          </LI>
        </UL>
      </SectionContainer>
    </PageContainer>
  );
}
