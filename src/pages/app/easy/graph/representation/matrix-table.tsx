import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MatrixTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vertex</TableHead>
          <TableHead>0</TableHead>
          <TableHead>1</TableHead>
          <TableHead>2</TableHead>
          <TableHead>3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead>0</TableHead>
          <TableCell>0</TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>1</TableHead>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>2</TableHead>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>3</TableHead>
          <TableCell>0</TableCell>
          <TableCell>0</TableCell>
          <TableCell>1</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
