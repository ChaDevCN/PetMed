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
    <div >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
        <CardFooter>没有账号吗？ <Link href='/register' className="font-bold">去注册</Link></CardFooter>
      </Card>
    </div>
  );
};
export default LoginCard;
