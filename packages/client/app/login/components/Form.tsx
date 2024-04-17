"use client";
import { LoginSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


import { loginActions } from "../actions";

import { useToast } from "@/components/ui/use-toast"
import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
   try {
    await loginActions(data)
   } catch (error) {
    toast({
      className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
      variant: "destructive",
      title: "登录失败啦 ！",
      description: "账号或密码错误",
    });
   }
    setLoading(false);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as any)}
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
