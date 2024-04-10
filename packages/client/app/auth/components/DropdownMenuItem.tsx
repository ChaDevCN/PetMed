"use client";
import { ReactNode } from "react";
import { observer } from "mobx-react-lite"


import {
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useStores } from "@/store"
interface Props {
    icon: ReactNode;
    type: string;
    content: string;
    data: any
    items: any[]
}
const Page = ({ icon, type, content, data, items }: Props) => {
    const { usersStore } = useStores()
    const { setDrawerFormData ,setOpenDrawer} = usersStore
    const click = () => {
        if(type === 'delete') return
        
        setDrawerFormData({ ...data, type, columns: items })
        setOpenDrawer(true)
    }
    return (
        <DropdownMenuItem>
                <div className="flex items-center w-full" style={{ gap: "8px" }} onClick={click}>
                    {icon}
                    <div>{content}</div>
                </div>
        </DropdownMenuItem>
    );
};
export default observer(Page);
