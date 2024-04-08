import type { Params } from "@/interface";
import { userColumn } from "@/utils/table";
import { Table, TableHeader, TableRow, TableHead ,TableBody,TableCell} from "@/components/ui/table";
interface Data {
  data: any[];
  column: any[];
}
const Tables = ({
  params: { type, key },
  data: { data, column },
}: {
  params: Params;
  data: Data;
}) => {
  // const [columnDefs] = useState(column)
  return (
    <div className={"ag-theme-quartz w-[100%] h-[200px]"}>
      <Table>
        <TableHeader>
          <TableRow>
            {userColumn.map((item) => (
              <TableHead key={item.field}>{item.headerName}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            {
              userColumn.map(items=><TableCell key={items.field}>{items.valueFormatter(invoice)}</TableCell>) 
            }
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Tables;
