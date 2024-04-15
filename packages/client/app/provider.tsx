"use client";
import { StoresProvider, stores } from "@/store";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <StoresProvider value={stores}>
      {children}
    </StoresProvider>
  );
};
export default Provider;
