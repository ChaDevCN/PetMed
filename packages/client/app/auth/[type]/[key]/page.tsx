

import { redirect } from 'next/navigation'
import { auth } from "@/common/menu";
import { Auth, Params } from "@/interface"
import { Tabs, Table } from "../../components"
import fetchData from '@/lib/fetchData';
import {Button} from '@nextui-org/button'
import {Providers} from "@/app/providers"

interface Props {
    params: Params
}
let result: { type: string; key: string }[] = [];
const sections = Object.keys(auth as Auth);
sections.forEach(sectionKey => {
    const section = (auth as Auth)[sectionKey];
    const transformedTabs = section.tabs.map(tab => ({
        type: section.type,
        key: tab.key
    }));
    result = result.concat(transformedTabs);
});
export const generateStaticParams = () => {
    return result;
};
const Page = async ({ params: { key, type } }: Props) => {
    const { url, method, column } = auth[type].tabs[parseInt(key || '1') - 1 ].getDataList
    if (!result.find(s => s.key === key && s.type === type)) {
        return redirect('/404')
    }
    const data = await fetchData<any[]>({
        url,
        method
    })
    console.log(data);
    
    return (
        <div>
            <Providers>
            <Button>213213231</Button>
            <Tabs params={{ key, type }} />
            <Table params={{ key, type }} data={{ data, column }} />
            </Providers>
        </div>
    )
};
export default Page;
