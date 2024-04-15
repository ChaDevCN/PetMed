import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Sider } from "@/components/index";
import "./globals.css";

import Provider from "../provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "云上动物",
  description: "云上动物",
};

export default function RootLayout({
  children,...rest
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="flex overflow-hidden w-[100%] h-[100vh]">
            <div className="lg:w-[280px] h-[100vh] hidden lg:block">
              <Sider />
            </div>
            <div className="flex-1 flex flex-col bg-[#f3f2f7]">
              <Header />
              <main className="flex-1 overflow-auto px-10 py-2">
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
