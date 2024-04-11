import fetchData from "@/lib/fetchData"
import {PcMenu} from "./Menu"
const Sider = async () => {
    const { data } = await fetchData<{data:any[]}>({
        url: '/user/all-menu',
        method: 'get'
    })

    return (
       <PcMenu data={data} />
    )
}
export default Sider