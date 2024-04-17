"use server";
// next-auth  5版本开始 不能在next-auth/react 导出了
import { signIn } from "../auth";
export async function loginActions<T>(data: any) {
  
 await signIn('credentials',{
    ...data,
    redirectTo:'/auth/users/1'
  })
}
