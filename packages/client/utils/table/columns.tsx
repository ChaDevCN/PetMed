import React from "react";
import moment from "moment";
import {
  EllipsisHorizontalIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { rolesMap, permissionsMap } from "@/common/roles";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DrawerTrigger } from "@/components/ui/drawer";
const iconStyle = { width: "1.25rem", height: "1.25rem", color: "#7a3bed" };
export const userColumn = [
  {
    field: "id",
    width: 100,
    headerName: "序号",
    valueFormatter: (data: any) => data.id,
  },
  {
    field: "username",
    headerName: "用户名",
    valueFormatter: (data: any) => data.username,
  },
  {
    field: "roles",
    headerName: "角色",
    valueFormatter: (data: any) => {
      return !data.roles.length
        ? "- -"
        : data.roles.map((s: any) => rolesMap[s]).toString();
    },
  },
  {
    field: "createTime",
    headerName: "创建时间",
    valueFormatter: (data: any) =>
      moment(data.createTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "updateTime",
    headerName: "修改时间",
    valueFormatter: (data: any) =>
      moment(data.updateTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "id",
    headerName: "操作",
    pinned: "center",
    valueFormatter: (data: any) => {
      const click = () => {
        console.log("6666");
        
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisHorizontalIcon style={iconStyle} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex items-center w-full" style={{ gap: "8px" }}>
                <EyeIcon style={iconStyle} />
                <div>查看</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center w-full" style={{ gap: "8px" }}>
                <PencilSquareIcon style={iconStyle} />
                <div>编辑</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DrawerTrigger asChild>
                <div
                  className="flex items-center w-full"
                  style={{ gap: "8px" }}
                >
                  <TrashIcon style={iconStyle} />
                  <div>删除</div>
                </div>
              </DrawerTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
