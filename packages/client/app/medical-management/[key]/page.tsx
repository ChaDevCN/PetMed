import fetchData from "@/lib/fetchData";
import DoctorResourcesPage from "../components/Doctor-resources";
interface Props {
  params: {
    key: string;
  };
}

const Page = ({ params: { key } }: Props) => {
    if(key === 'doctor-resources'){
        return <DoctorResourcesPage />
    }
  return <div></div>;
};
export default Page;
