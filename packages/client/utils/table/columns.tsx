import React from "react";
import moment from "moment";
import dynamic from "next/dynamic";
import {
  EllipsisHorizontalIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { rolesMap } from "@/common/roles";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
const iconStyle = { width: "1.25rem", height: "1.25rem", color: "#7a3bed" };
const DropdownMenuItem = dynamic(
  () => import("../../app/auth/components/DropdownMenuItem"),
  { ssr: false }
);
const DropdownMenuContentConfig = [
  {
    type: "eye",
    content: "查看",
    icon: <EyeIcon style={iconStyle} />,
  },
  {
    type: "edit",
    content: "编辑",
    icon: <PencilSquareIcon style={iconStyle} />,
  },
  {
    type: "delete",
    content: "删除",
    icon: <TrashIcon style={iconStyle} />,
  },
];

export const userColumn = [
  {
    field: "id",
    width: 100,
    headerName: "序号",
    valueFormatter: (data: any, items?: any) => data.id,
  },
  {
    field: "username",
    headerName: "用户名",
    valueFormatter: (data: any, items?: any) => data.username,
    formType: "input",
    label:'用户名'
  },
  {
    field: "roles",
    headerName: "角色",
    valueFormatter: (data: any, items?: any) => {
      return !data.roles.length
        ? "- -"
        : data.roles.map((s: number, items?: any) => rolesMap[s]).toString();
    },
    formType:'select',
    label:'角色'
  },
  {
    field: "createTime",
    headerName: "创建时间",
    valueFormatter: (data: any, items?: any) =>
      moment(data.createTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "updateTime",
    headerName: "修改时间",
    valueFormatter: (data: any, items?: any) =>
      moment(data.updateTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "id",
    headerName: "操作",
    pinned: "center",
    valueFormatter: (data: any, res: any[]) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisHorizontalIcon style={iconStyle} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {DropdownMenuContentConfig.map((items) => (
              <DropdownMenuItem
                {...items}
                items={res}
                data={data}
                key={items.content}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export const RolesColumn = [
  {
    field: "id",
    width: 100,
    headerName: "序号",
    valueFormatter: (data: any, items?: any) => data.id,
  },
  {
    field: "name",
    headerName: "角色名称",
    valueFormatter: (data: any, items?: any) => rolesMap[data.name],
    formType: "input",
  },
  {
    field: "createTime",
    headerName: "创建时间",
    valueFormatter: (data: any, items?: any) =>
      moment(data.createTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "updateTime",
    headerName: "修改时间",
    valueFormatter: (data: any, items?: any) =>
      moment(data.updateTime).format("YYYY-MM-DD HH:mm"),
  },
  {
    field: "id",
    headerName: "操作",
    pinned: "center",
    valueFormatter: (data: any, res: any[]) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisHorizontalIcon style={iconStyle} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {DropdownMenuContentConfig.map((items) => (
              <DropdownMenuItem
                {...items}
                items={res}
                data={data}
                key={items.content}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
