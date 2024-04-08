'use client'
import React from "react";
import moment from "moment"
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
import { rolesMap, permissionsMap } from "@/common/roles"

export const userColumn = [
    { field: "id", width: 100, headerName: '序号' },
    { field: "username", headerName: '用户名' },
    {
        field: "roles", valueFormatter: (key: any) => {
            return !key.value.length ?
                '- -'
                : key.value.map((s: number) => rolesMap[s]).toString()
        }
    },
    { field: "createTime", headerName: '创建时间', valueFormatter: (key: any) => moment(key.value).format('YYYY-MM-DD HH:mm') },
    { field: "updateTime", headerName: '修改时间', valueFormatter: (key: any) => moment(key.value).format('YYYY-MM-DD HH:mm') },
    {
        field: 'id', headerName: '操作', pinned: 'center', cellRenderer: (key: any) => {
            return <div className="flex justify-center items-center w-full h-full cursor-pointer">
                <EllipsisHorizontalIcon style={{ width: '1.25rem', height: '1.25rem',color: "#A78BFA" }} />
            </div>
        }
    }
]