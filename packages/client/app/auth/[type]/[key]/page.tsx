import { redirect } from "next/navigation";

import fetchData from "@/lib/fetchData";

import { Card } from "@/components/ui/card";

import { Auth, Params } from "@/interface";

import { auth } from "@/common/menu";

import { Tabs, Table, DrawerPage } from "../../components";

interface Props {
  params: Params;
}
let result: { type: string; key: string }[] = [];
const sections = Object.keys(auth as Auth);
sections.forEach((sectionKey) => {
  const section = (auth as Auth)[sectionKey];
  const transformedTabs = section.params;
  result = result.concat(transformedTabs);
});

export const generateStaticParams = () => {
  return result;
};
const Page = async ({ params: { key, type } }: Props) => {
  let columns, datas;
  if (auth[type].type === "table") {
    const { getDataList } = auth[type].tabs[parseInt(key || "1") - 1];
    const { url, method, column } = getDataList;
    if (!result.find((s) => s.key === key && s.type === type)) {
      return redirect("/404");
    }
    const { data } = await fetchData<{ data: any[] }>({
      url,
      method,
    });
    datas = data as any;
    columns = column;
  }

  return (
    <div>
      {auth[type].type === "table" && (
        <>
          <Tabs params={{ key, type }} />
          <Card
            className="p-5 mt-10 overflow-auto"
            style={{ height: "calc(100vh - 230px)" }}
          >
            <Table
              params={{ key, type }}
              data={{ data: datas, column: columns }}
            />
          </Card>
          <DrawerPage />
        </>
      )}
    </div>
  );
};
export default Page;
