import { NextResponse } from "next/server";
import "server-only";

interface Props {
  url: string;
  method?: string;
  data?: {
    [key: string]: any;
  };
}

const fetchData = async <T>({ url, method, data }: Props) => {
  
  
  const res = await fetch(`http://localhost:8081${url}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  switch (res.status) {
    case 401:
      NextResponse.redirect("/403");
      break;
    case 401:
      NextResponse.redirect("/login");
      break;
    default:
      break;
  }
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json() as T;
};
export default fetchData;