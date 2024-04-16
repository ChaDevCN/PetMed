import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "../globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "云上诊疗-登录",
  description: "云上诊疗",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>{children}<Toaster /></body>
    </html>
  );
}
