import fetchData from "@/lib/fetchData";
import type { UserData } from "@/interface";

import Table from "./Table";

const Page = async () => {
  // const data = await fetchData<UserData[]>({
  //   url: "/user/all-users-details",
  // });

  return (
    <div className="w-full h-full">
      <div className="h-[200px]">
        {/* <Table data={data as any} /> */}
      </div>
    </div>
  );
};

export default Page;
