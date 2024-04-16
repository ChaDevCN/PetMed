import { redirect } from 'next/navigation'
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
  
  const res = await fetch(`http://localhost:8082${url}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...rest
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
