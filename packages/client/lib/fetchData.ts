'use server'
import { redirect } from 'next/navigation'
import { auth } from '@/app/auth';

interface Props {
  url: string;
  method?: string;
  data?: {
    [key: string]: any;
  };
  headers?:any
}
interface Response <T> {
  data:T
  status:number
  success:boolean
  message:string
}
const fetchData = async <T>({ url, method, data,headers}: Props) => {
  const session:any = await auth()
  
  const res = await fetch(`http://localhost:8082${url}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization':`Bearer ${session?.user.token}`
    },
    body: JSON.stringify(data),
    // ...headers
  });
  switch (res.status) {
    case 403:
      redirect("http://localhost:3000/403");
      return {} as any // 暂时修复ts报错
    case 401:
      redirect("http://localhost:3000/login");
      return {} as any  // 暂时修复ts报错
  }

  if (res.status.toString()[0] !== '2') {
    throw new Error(`Status ${res.status}`);
  }
  
  
  return res.json() as T;
};
export default fetchData;
