import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "云上动物",
  description: "云上动物",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex overflow-hidden w-[100%] h-[100vh]">
          <div className="w-[280px] h-[100vh] hidden lg:block"></div>
          <div className="flex-1 flex flex-col bg-[#f3f2f7]">
            <Header/>
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
