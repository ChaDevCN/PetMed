"use server";
import fetchData from "@/lib/fetchData";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
export async function loginActions<T>(data: any) {
  const cookieStore = cookies()
  const res = await fetchData<{
    status: number;
    [key:string]: any
  }>({
    url: "/user/login",
    method: "post",
    data,
  })
  
  if( res && res.status === 0){
    cookieStore.set('user_token',res.data.token, { secure: true })
    // redirect('/auth/user/1')
    return {
      status:200
    }
  }
  return  res as T;
}
