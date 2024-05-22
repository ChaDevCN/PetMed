import Image from "next/image";

import logo from "@/public/svg/logo.svg";
import { AvatarMenu } from "@/components/index";

const Header = () => {
  return (
    <header className="w-[100%] h-[80px] leading-[80px] flex px-5   justify-between">
      <div className="flex gap-4 items-center">
        <Image src={logo} alt="logo" />
        <span className="sm:text-3xl text-xl">云上动医</span>
      </div>
      <div className="flex items-center justify-center">
        <AvatarMenu />
      </div>
    </header>
  );
};
export default Header;
