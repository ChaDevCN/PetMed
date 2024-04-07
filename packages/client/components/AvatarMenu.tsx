"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import avatar from "@/public/svg/default_avatar.svg";
import { menus } from "@/common/menu";
import Link from "next/link";

const AvatarMenu = () => {
  const logout = () => {}
  return (
    <Menu as="div" className="flex items-center justify-center relative">
      <div className="flex items-center justify-center">
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  hover:text-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 flex items-center gap-2">
          <Image src={avatar} alt="avatar" />
          <ChevronDownIcon
            className="-mr-1 ml-2  h-10 w-10 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-[3.5rem] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none  z-50">
            <div className="px-2 py-2">
              {menus.map((s) => (
                <Menu.Item key={s.name} as="div" className="mt-1">
                  {({ active }) => {
                    const buttonClasses = `group flex w-full items-center rounded-md px-4 py-2 text-xl ${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    }`;
                    const buttonContent = (
                      <>
                        {s.icon}
                        {s.name}
                      </>
                    );
                    return s.name === "/login" ? (
                      <button className={buttonClasses} onClick={logout}>{buttonContent}</button>
                    ) : (
                      <Link href={s.link}>
                        <button className={buttonClasses}>
                          {buttonContent}
                        </button>
                      </Link>
                    );
                  }}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};
export default AvatarMenu;
