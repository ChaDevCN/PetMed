"use client";
import FormFields from "@/components/FormFields";
import { Button } from "@/components/ui/button";
import { Form, FormItem } from "@/components/ui/form";
import { CreateDoctorSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from 'next/navigation'
import { useForm } from "react-hook-form";
const AddDoctorFormConfig = [
  {
    formType: "input",
    value: "",
    lable: "用户名",
    field: "username",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "redio",
    value: "",
    lable: "性别",
    field: "gender",
    className: "border-[#656ED3] border-2 rounded-2xl",
    data: [
      { key: 0, label: "女" },
      { key: 1, label: "男" },
    ],
  },
  {
    formType: "input",
    value: "",
    lable: "抽成比例",
    field: "commissionRate",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "年龄",
    field: "age",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "工作经验",
    field: "experience",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
  {
    formType: "input",
    value: "",
    lable: "医生简介",
    field: "introduction",
    className: "border-[#656ED3] border-2 rounded-2xl",
  },
];

const AddPage = ({ params }: { params: "add-doctor" }) => {
  const form = useForm({
    resolver: zodResolver(CreateDoctorSchema),
    defaultValues: {
      username: "",
    },
  });

  const addMap = {
    "add-doctor": AddDoctorFormConfig,
  };
  if(!addMap[params]){
    redirect('/404')
  }
  return (
    <div>
      <Form {...form}>
        <form>
          <FormFields config={addMap[params]} form={form} />
          <div className="text-center">
            <Button type="submit" className="w-[60%] my-10 mx-auto">提交</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AddPage;
