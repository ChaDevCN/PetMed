import fetchData from "@/lib/fetchData";
import DoctorResourcesPage from "../components/Doctor-resources";
import Add from "../components/add";
interface Props {
  params: {
    key: string;
  };
}

const Page = ({ params: { key } }: Props) => {
  if (key === "doctor-resources") {
    return <DoctorResourcesPage />;
  } else if (key.includes("add")) {
    return <Add params={key as any} />;
  }

  return <div></div>;
};
export default Page;
