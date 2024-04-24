import fetchData from "@/lib/fetchData";
import DoctorResourcesPage from "../components/Doctor-resources";
import Add from "../components/add";
import { redirect } from "next/navigation";
interface Props {
  params: {
    key: string;
  };
}

const Page = async ({ params: { key } }: Props) => {
  if (key === "doctor-resources") {
    return <DoctorResourcesPage />;
  } else if (key.includes("add")) {
    const { data } = await fetchData({
      url: "/medical-management/departments",
      method: "get",
    });
    
    if (data.code === 0) {
      return <Add params={key as any} data={data.data} />;
    } else {
      redirect("/404");
    }
  }

  return <div></div>;
};
export default Page;
