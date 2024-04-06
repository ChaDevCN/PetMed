'use client'
import Image from "next/image"

import loginBg from "@/public/svg/login_bg.svg"
import {  useFormStatus } from "react-dom"
const Page =  () => {
   const {pending} = useFormStatus()
   return <main className="w-[100vw] h-[100vh] bg-custom-gradient relative overflow-hidden flex items-center justify-center">
      <div>
         <Image src={loginBg} alt="login" />
         <form>
            <input placeholder="请输入用户名" />
            <input placeholder="请输入密码" />
            <button type="submit">提交</button>
         </form>
      </div>
   </main>
}
export default Page