import Image from "next/image";
import Link from "next/link";
import img from "@/public/svg/404.svg";
const Page = () => (
  <div className="w-[100%] h-[100%] flex justify-center mt-20">
    <div>
      <Image src={img} alt="404" />
      <p className="text-center text-[#565872] font-semibold text-[17px] lining-[34px] mt-10">未找到该页面</p>
      <div className="text-center mt-10">
        <button className="bg-orange-500 border-2 border-orange-500 shadow-md rounded-full text-white">
            <Link href="/" className="block px-20 py-4">返回首页</Link>
        </button>
      </div>
    </div>
  </div>
);

export default Page;
