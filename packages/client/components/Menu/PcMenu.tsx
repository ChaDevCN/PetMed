"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PcMenu = ({ data }: { data: any[] }) => {
  const pathname = usePathname();
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {data.map((items) => {
          return (
            <Disclosure
              as="div"
              className="mt-2"
              key={items.id}
              defaultOpen={
                items.children.findIndex((s: any) => s.link === pathname) !== -1
              }
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{items.name}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  {items.children &&
                    Array.isArray(items.children) &&
                    items.children.length > 0 &&
                    items.children.map((subitems: any) => {
                      return (
                        <Link key={subitems.id} href={subitems.link}>
                          <Disclosure.Panel
                            className={`px-4 pb-2 pt-4 text-sm text-gray-500 cursor-pointer hover:text-purple-500 ${pathname === subitems.link ? "text-purple-800 font-semibold" : ""}`}
                          >
                            {subitems.name}
                          </Disclosure.Panel>
                        </Link>
                      );
                    })}
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
export default PcMenu;
