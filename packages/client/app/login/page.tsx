import Image from "next/image";
import Link from "next/link";


import LoginCard from "./components/Card";
import LoginForm from "./components/Form";
import login1 from "@/public/svg/login.img.svg";

const Page = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-custom-gradient relative overflow-hidden login-main">
        {/* <input type="hidden" name="csrfToken" value={csrfToken} /> */}
      <div className="flex w-full h-full">
        <div className="flex-1 h-full bg-[#ecefff]">
          <div className="hidden md:block w-[40%] ml-[15%] my-auto mt-[20%]">
            <h2 className="text-2xl mb-10">Welcome Back!</h2>
            <LoginForm />
            <h2 className="text-xl mt-10">没有账号吗 ? <Link href='/register' className="font-bold">去注册</Link></h2>
          </div>
          <div className="flex bg-[#ecefff] w-full h-full md:hidden justify-center items-center">
            <LoginCard />
          </div>
        </div>
        <div className="hidden w-[34.66%] bg-[#b2b3ff] h-full md:flex justify-center items-center">
          <div className="ml-[-100%] ">
            <Image src={login1} alt="login" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
