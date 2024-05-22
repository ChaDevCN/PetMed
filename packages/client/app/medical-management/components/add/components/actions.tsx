'use server'
import fetchData from "@/lib/fetchData";
import { auth } from '@/app/auth';
export const uploadActions  = async(data:FormData) => {
    const session:any = await auth()
    const res = await fetch(`http://localhost:8082/upload/album`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          'Authorization':`Bearer ${session?.user.token}`
        },
        body: data,
        redirect:'follow'
        // ...headers
      });
      console.log(res.body);
      return res
}

// 添加医生
export const addDoctor = async(data:any) => {
  const res  = await fetchData({
    url:'/medical-management/add-doctor',
    method:'POSt',
    data
  })
  console.log(res);

  return res
}
// 
export const findUsersByRoleId = async(roleId:string) =>  await fetchData({
  url:`/user/role/${roleId}`,
  method:'get',
})
