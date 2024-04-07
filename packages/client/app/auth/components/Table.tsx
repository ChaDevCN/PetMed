'use client'
import {useState} from "react"
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import type { UserData } from "@/interface";

const column = [
    {field: "id"},
    {field: "name"},
    {field: "createTime"},
]
const Table = ({ data }: { data: UserData[] }) => {
    const [columnDefs] = useState(column)
  return (
    <div className={
        "ag-theme-quartz"
      }>
        <AgGridReact rowData={data} 
                      columnDefs={columnDefs as any} 
                      className="w-[100%] h-[200px]"
                      rowHeight={50}/>
    </div>
  )
};
export default Table