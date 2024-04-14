import fetchData from "@/lib/fetchData";
const getData = async () => {
  const { data } = await fetchData<{ data: any[] }>({
    url: "/user/all-menu",
    method: "get",
  });
  const params = data
    .filter((s) => s.link.includes("/medical-management"))[0]
    .children.map((item: any) => ({ key: item.link.split("/")[2] }));
  return { data, params };
};

export const generateStaticParams = async () => {
  const { params } = await getData();
  return params
};

const Page = async () => {
  return <div></div>;
};
export default Page;
