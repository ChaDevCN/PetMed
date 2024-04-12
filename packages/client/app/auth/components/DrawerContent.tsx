"use client";
import { observer } from "mobx-react-lite";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useStores } from "@/store";
import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { UsersSchema } from "@/schema";
import { FormConfig } from "@/interface";
import { Button } from "@/components/ui/button";
import { useMemo, useRef, useState } from "react";
const drawertitleMap: Record<string, any> = {
  eye: "查看",
  edit: "编辑",
};
const Page = () => {
  const { usersStore } = useStores();
  const { drawerFormData } = usersStore;
  const { pending } = useFormStatus();
  const formData = useMemo<any>(
    () => JSON.parse(JSON.stringify(drawerFormData)),
    [drawerFormData]
  );
  const [config, setConfig] = useState<FormConfig[]>([]);
  const dirty = useRef(false);
  const disabled = formData.type === "eye" ? true : false;

  let defaultValues: Record<string, any> = {};
  const form = useForm({
    resolver: zodResolver(UsersSchema),
    defaultValues,
  });
  if (formData && formData?.columns && Array.isArray(formData.columns)) {
    const config = formData.columns
      .filter(({ formType }: { formType: string | undefined }) => !!formType)
      .map((items: any) => {
        const value = formData[items.field];
        defaultValues[items.field] = value;
        return {
          ...items,
          disabled,
          value,
        };
      });
    if (!dirty.current) {
      setConfig(config);
      dirty.current = true;
      form.reset(defaultValues);
    }
  }

  const onSubmit = (data: z.infer<typeof UsersSchema>) => {
    console.log(data);
    
  };

  return (
    <DrawerContent forceMount className="lg:w-[500px] sm:w-[700px] w-[320px]">
      <DrawerTitle className="px-4 py-3">
        {drawertitleMap[formData.type]}
      </DrawerTitle>
      <div className="m-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit as any)}
            className="space-y-6"
          >
            <FormFields config={config} form={form}  disabled={pending}/>
           {formData.type === 'edit' && <Button type="submit" >提交</Button>}
          </form>
        </Form>
      </div>
    </DrawerContent>
  );
};
export default observer(Page);
