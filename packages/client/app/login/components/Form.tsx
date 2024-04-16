"use client";
import { LoginSchema } from "@/schema";
import { any, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


import { loginActions } from "../actions";

import { useToast } from "@/components/ui/use-toast"
import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formConfig = [
  {
    formType: "input",
    value: "",
    lable: "用户名",
    field: "username",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "密码",
    field: "password",
    className: "border-[#656ED3] border-2 rounded-2xl",
    type: "password",
  },
];
interface Response {
  token: string;
  [key: string]: any;
}
const LoginForm = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    // loginActions<{
    //   status: number;
    //   data: string | Response;
    //   error:any
    // }>(data).then((res) => {
    //   if(res?.status !== 200){
    //       toast({
    //         title:'发生错误啦 !',
    //         description: res?.data as string,
    //         variant: 'destructive',
    //       })}
    // }).catch((err)=>{
      // if (err?.error) {
      //   toast({
      //     title: '登录失败',
      //     description: err.error,
      //     variant: 'destructive',
      //   });
      // }
    // })
    loginActions(data)
    setLoading(false);
  };
  return (
    <div>
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit as any)}
          action={async ({username,password})=> await loginActions({username,password})}
          className="space-y-6"
        >
          <FormFields config={formConfig} form={form} />
          <Button className="w-full" type="submit" disabled={loading}>
            登录
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default LoginForm;
