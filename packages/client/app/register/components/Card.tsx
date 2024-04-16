import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./Form";
import Link from "next/link";
const LoginCard = () => {
  return (
    <div className="w-full">
      <Card className="w-[98%] mx-auto">
        <CardHeader>
          <CardTitle>Please Fill out form to Register!</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
        <CardFooter>已有账号 ？ <Link href='/register' className="font-bold">去登录</Link></CardFooter>
      </Card>
    </div>
  );
};
export default LoginCard;
