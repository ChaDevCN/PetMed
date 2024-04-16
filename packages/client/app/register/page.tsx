import Image from "next/image"
import Link from "next/link"

import registerImage from "@/public/svg/register.img.svg"
import RegisterCard from "./components/Card"
import RegisterForm from "./components/Form"
const RegisterPage = ( ) => {
    return (
        <main className="flex w-full h-full bg-[#ebefff]">
            <div className="w-[50%] h-[100vh] hidden md:block">
                <div className="ml-20 scale-y-125">
                    <Image  src={registerImage} alt="register"/>
                </div>
            </div>
            <div className="flex-1 h-[100vh]">
                <div className="flex h-full w-full md:hidden items-center justify-center">
                    <RegisterCard/>
                </div>
                <div className="hidden md:block w-[50%] ml-[15%] my-auto mt-[20%]">
                    <h2 className="text-2xl mb-10">Please Fill out form to Register!</h2>
                    <RegisterForm  />
                    <h2 className="text-xl mt-10">已有账号 ? <Link href='/login' className="font-bold">去登录</Link></h2>
                </div>
            </div>
        </main>
    )
}
export default RegisterPage