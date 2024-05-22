"use client";
import FormFields from "@/components/FormFields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { CreateDoctorSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addDoctor,findUsersByRoleId } from "./actions";

interface Props {
  config: any[];
}

const AddDoctor = (props: Props) => {
  const { config } = props;

  const form = useForm({
    resolver: zodResolver(CreateDoctorSchema),
    defaultValues: {
      username: "",
    },
  });
  const onsubmit = async(data: any) => {
    const res = await addDoctor(data)
    console.log("******", res);
  };
  return (
    <Card className="px-10 py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <FormFields config={config} form={form} />
          <div className="text-center">
            <Button type="submit" className="w-full my-10 mx-auto">
              提交
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
export default AddDoctor;
