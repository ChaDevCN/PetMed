import { redirect } from "next/navigation";


import { Card } from "@/components/ui/card";
import { Drawer } from "@/components/ui/drawer";

import { Auth, Params } from "@/interface";

import fetchData from "@/lib/fetchData";

import { auth } from "@/common/menu";

import { Tabs, Table, DrawerContent } from "../../components";

interface Props {
  params: Params;
}
let result: { type: string; key: string }[] = [];
const sections = Object.keys(auth as Auth);
sections.forEach((sectionKey) => {
  const section = (auth as Auth)[sectionKey];
  const transformedTabs = section.tabs.map((tab) => ({
    type: section.type,
    key: tab.key,
  }));
  result = result.concat(transformedTabs);
});
export const generateStaticParams = () => {
  return result;
};
const Page = async ({ params: { key, type } }: Props) => {
  const { url, method, column } =
    auth[type].tabs[parseInt(key || "1") - 1].getDataList;
  if (!result.find((s) => s.key === key && s.type === type)) {
    return redirect("/404");
  }
  const data = await fetchData<any[]>({
    url,
    method,
  });

  return (
    <div>
      <Tabs params={{ key, type }} />
      <br />
      <br />
      <Drawer direction="right">
        <Card className="p-5">
          <Table params={{ key, type }} data={{ data, column }} />
        </Card>
        <DrawerContent />
      </Drawer>
    </div>
  );
};
export default Page;
