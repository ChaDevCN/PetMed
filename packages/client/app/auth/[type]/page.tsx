import { redirect } from 'next/navigation'
import { Params } from "@/interface"
const Auth = ({ params: { key, type } }: {params:Params}) => {
  console.log(type , key);
  
  if(type === 'users' && !key){
    return redirect('/auth/users/1')
  }
  return redirect('/404')
};
export default Auth;
