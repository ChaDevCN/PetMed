import fetchData from "@/lib/fetchData";

export const actions = async(data:any) => {
    return fetchData(
        {
            url:'/user/register',
            method:'post',
            data
        }
    )
}