"use client";
import { ReactNode, useState } from "react";
import { observer } from "mobx-react-lite"


import {
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DrawerTrigger } from "@/components/ui/drawer";

import { useStores } from "@/store"
interface Props {
    icon: ReactNode;
    type: string;
    content: string;
    data: any
    items: any[]
}
const Page = ({ icon, type, content, data, items }: Props) => {
    const [open,setOpen] = useState(false)
    const { usersStore } = useStores()
    const { setDrawerFormData } = usersStore
    const click = () => {
        setDrawerFormData({ ...data, type, columns: items })
        setOpen(!open)
    }
    return (
        <DropdownMenuItem>
            <DrawerTrigger  onClick={click} >
                <div className="flex items-center w-full" style={{ gap: "8px" }}>
                    {icon}
                    <div>{content}</div>
                </div>
            </DrawerTrigger>
        </DropdownMenuItem>
    );
};
export default observer(Page);
