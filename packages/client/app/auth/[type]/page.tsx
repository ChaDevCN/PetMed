import { redirect } from "next/navigation";
import { menus } from "@/common/menu";
export const generateStaticParams = () => {
  return menus.map((items) => ({ type: items.link.split("/")[2] }));
};
const Auth = () => redirect("/404");
export default Auth;
