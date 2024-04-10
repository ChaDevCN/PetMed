"use client";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DrawerContent } from "@/components/ui/drawer";
import { useStores } from "@/store";
import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { UsersSchema } from "@/schema";
import { FormConfig } from "@/interface";
import { Button } from "@/components/ui/button";
import { useMemo, useRef, useState } from "react";
const Page = () => {
  const pathname = usePathname();
  const configMap = useRef<Record<string, any>>();
  const { usersStore } = useStores();
  const { drawerFormData } = usersStore;
  const { pending } = useFormStatus();
  const formData = useMemo<any>(
    () => JSON.parse(JSON.stringify(drawerFormData)),
    [drawerFormData]
  );
  const [config, setConfig] = useState<FormConfig[]>([]);
  const dirty = useRef(false);
  const disable = formData.type === "eye" ? true : false;
  let defaultValues: Record<string, any> = {};
  const resetValues: Record<string, any> = {};

  const form = useForm({
    resolver: zodResolver(UsersSchema),
    defaultValues: {},
  });
  if (formData && formData?.columns && Array.isArray(formData.columns)) {
    const config = formData.columns
      .filter(
        ({ formType }: { formType: string | undefined }) =>
          !!formType && formType === "input"
      )
      .map((items: any) => {
        const value = formData[items.field];
        defaultValues[items.field] = value;
        resetValues[items.field] = value;
        return {
          ...items,
          disable,
          value,
        };
      });
    if (!dirty.current) {
      setConfig(config);
      configMap.current = {
        ...configMap.current,
        [`${pathname}/${formData.type}`]: defaultValues,
      };
      form.reset(configMap.current[`${pathname}/${formData.type}`]);
      dirty.current = true;
    }
  }

  const onSubmit = (data: z.infer<typeof UsersSchema>) => {
    form.reset({
      username: "",
    });
  };

  return (
    <DrawerContent forceMount className="lg:w-[500px] sm:w-[700px] w-[320px]">
      {JSON.stringify(drawerFormData)}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFields config={config} form={form} />
          <Button type="submit" disabled={pending}>
            测试
          </Button>
        </form>
      </Form>
    </DrawerContent>
  );
};
export default observer(Page);
