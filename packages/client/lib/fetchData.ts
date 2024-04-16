import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import "server-only";

interface Props {
  url: string;
  method?: string;
  data?: {
    [key: string]: any;
  };
}
interface Response <T> {
  data:T
  status:number
  success:boolean
  message:string
}

const fetchData = async <T>({ url, method, data,...rest }: Props) => {
  // const cookieStore = cookies()
  // const token = cookieStore.get('user_token')?.value || ''
  
  const res = await fetch(`http://localhost:8082${url}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify(data),
    ...rest
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
  if (res.status.toString()[0] !== '2') {
    throw new Error(`Status ${res.status}`);
  }
  return res.json() as T;
};
export default fetchData;
