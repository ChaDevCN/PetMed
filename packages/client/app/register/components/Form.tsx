"use client";

import { useFormStatus } from "react-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";


import { RegisterSchema } from "@/schema";
import { useToast } from "@/components/ui/use-toast";
import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { actions } from "../actions";

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
    type:'password',
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "邮箱",
    field: "email",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "昵称",
    field: "nickName",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
];

const LoginForm = () => {
  const {toast} = useToast()
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      password: "",
      nickName: "",
      email: "",
    },
  });
  const { pending } = useFormStatus();

  const onSubmit = async(data: z.infer<typeof RegisterSchema>) => {
   actions(data).then(res=>{
    if(res.data?.code === 0){
      toast({
        className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        title: "成功",
        description: <div>{res.data.message}&nbsp;&nbsp;<Link href='/login' className="text-blue-500">去登录</Link></div>,
      })
    }else{
      toast({
        className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        title: "注册失败啦 ！",
        variant: "destructive",
        description: res.data.message,
      })
    }
   }).catch(err=>{
    toast({
      className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
      title: "注册失败啦 ！",
      variant: "destructive",
      description: '未知错误',
    })
   })
    
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as any)}
          className="space-y-6"
        >
          <FormFields config={formConfig} form={form} />
          <Button className="w-full" type="submit" disabled={pending}>
            注册
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default LoginForm;
