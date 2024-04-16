"use server";
import fetchData from "@/lib/fetchData";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { signIn } from "../auth";
export async function loginActions<T>(data: any) {
 await signIn('credentials',{
    ...data,
    redirectTo:'/auth/user/1'
  })
  // const cookieStore = cookies()
  // const res = await fetchData<{
  //   status: number;
  //   [key:string]: any
  // }>({
  //   url: "/user/login",
  //   method: "post",
  //   data,
  // })
  
  // if( res && res.status === 0){
  //   cookieStore.set('user_token',res.data.token, { secure: true })
  //   // redirect('/auth/user/1')
  //   return {
  //     status:200
  //   }
  // }
  // return  res as T;
}
