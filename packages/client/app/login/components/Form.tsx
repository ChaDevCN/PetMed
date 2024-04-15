"use client";
import { LoginSchema } from "@/schema";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formConfig = [
    {
      formType: "input",
      value: "",
      lable: "用户名",
      field:'username',
      className: 'border-[#656ED3] border-2 rounded-2xl'
    },
    {
      formType: "input",
      value: "",
      lable: "密码",
      field:'password',
      className: 'border-[#656ED3] border-2 rounded-2xl'
    },
  ];

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { pending } = useFormStatus();

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as any)}
          className="space-y-6"
        >
            <FormFields config={formConfig} form={form} />
            <Button className="w-full" type="submit" disabled={pending} >提交</Button>
        </form>
       
      </Form>
    </div>
  );
};
export default LoginForm;
