import { Complexity } from "@/components/blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataStructureOpTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={3}>Data structure</TableHead>
          <TableHead colSpan={8}>Time complexity</TableHead>
          <TableHead>Space complexity</TableHead>
        </TableRow>
        <TableRow>
          <TableHead colSpan={4}>Average</TableHead>
          <TableHead colSpan={4}>Worst</TableHead>
          <TableHead>Worst</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>Access</TableHead>
          <TableHead>Search</TableHead>
          <TableHead>Insert</TableHead>
          <TableHead>Delete</TableHead>
          <TableHead>Access</TableHead>
          <TableHead>Search</TableHead>
          <TableHead>Insert</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Array</TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Stack</TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Queue</TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(n)" level={3} />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
          <TableCell>
            <Complexity complexity="O(1)" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
