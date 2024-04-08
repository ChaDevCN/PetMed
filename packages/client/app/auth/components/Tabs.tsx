'use client'
import {useRouter} from "next/navigation"
import { Tab } from "@headlessui/react";
import { Params } from "@/interface"

import { auth } from "@/common/menu";
function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
const Tabs = ({ params: { key, type } }: { params: Params }) => {
    const nav = useRouter()
    const change = (index:number) => {
      const result =   auth[type].tabs[index]
        nav.push(`/auth/${type}/${result.key}`)
    }
    return <div className="lg:w-[50%] w-[100%] xl:w-[30%] xxl-[20%]">
                <Tab.Group onChange={change} selectedIndex={parseInt(key || '1') - 1 || 0}>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {
                            auth[type].tabs.map(items => <Tab className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            } key={items.key}>{items.name}</Tab>)
                        }
                    </Tab.List>
                </Tab.Group>
    </div>
}
export default Tabs