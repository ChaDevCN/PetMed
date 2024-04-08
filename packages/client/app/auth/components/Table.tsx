'use client'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import type {  Params } from "@/interface";
import {userColumn} from "@/utils/table"
interface Data {
  data: any[]
  column: any[]
}
const Table = ({ params: { type, key },data:{data,column} }: { params: Params, data: Data }) => {
  // const [columnDefs] = useState(column)
  return (
    <div className={
      "ag-theme-quartz w-[100%] h-[200px]"
    }>
      <AgGridReact rowData={data}
        columnDefs={column as any}
        className="w-[100%] h-[200px]"
        rowHeight={50} />
    </div>
  )
};
export default Table