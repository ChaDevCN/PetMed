



import fetchData from "@/lib/fetchData";
import type { UserData } from "@/interface";

import Table from "./Table"

const Page = async () => {
  const data = await fetchData<UserData[]>({
    url: "/user/all-users-details",
  });
  console.log(data);
  
  return (
    <div className="w-full h-full">
      <div className="h-[200px]">
      <Table data={data} />
      </div>
    </div>
  );
};


export default Page;
