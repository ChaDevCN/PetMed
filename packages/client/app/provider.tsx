"use client";
import { StoresProvider, stores } from "@/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <StoresProvider value={stores}>
        {children}
      </StoresProvider>
    </SessionProvider>
  );
};
export default Provider;
