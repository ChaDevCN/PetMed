import fetchData from "@/lib/fetchData";

import type { Params } from "@/interface";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
interface Data {
  // data: UserData[];
  column?: any[];
  url: string;
  method: string;
}
const Tables = async ({
  data: { column, url, method },
}: {
  params?: Params;
  data: Data;
}) => {
  
  const { data } = await fetchData<{ data: any[] }>({
    url,
    method,
  });
  
  return (
    <Card className="p-5">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {column &&
                column.map((item) => (
                  <TableHead key={item.field}>{item.headerName}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice: any) => (
              <TableRow key={invoice.id}>
                {column &&
                  column.map((items) => (
                    <TableCell key={items.field}>
                      {items.valueFormatter(
                        invoice,
                        column.map(({ valueFormatter, ...res }) => res)
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
export default Tables;
