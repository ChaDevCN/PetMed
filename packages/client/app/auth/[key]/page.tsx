import { redirect } from 'next/navigation'


import { Users } from "../components";
import { menus } from "@/common/menu";
interface Props {
  params: {
    key: string;
  };
}
export const generateStaticParams = () => {
  return menus.map((i) => ({ key: i.name.split('/')[2] }));
};
const Auth = ({ params: { key } }: Props) => {
  if (key === "users") {
    return <Users />;
  }
  
  return redirect('/404')
};
export default Auth;
