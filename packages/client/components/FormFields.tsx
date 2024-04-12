"use client";
import type { FormConfig } from "@/interface";
import {
  FormLabel,
  FormItem,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { useMemo } from "react";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roles } from "@/utils/map/config";
interface Props {
  config: FormConfig[];
  form: any;
}

const FormFields = ({ config, form }: Props) => {
  const nextConfig = useMemo(() => config, [config]);
  return (
    <>
      {nextConfig.map((cof, index) => {
        console.log(cof);

        return (
          <FormField
            key={index}
            control={form.control}
            name={cof.field}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">{cof.headerName}</FormLabel>
                <FormControl>
                  {cof.formType === "input" ? (
                    <Input
                      {...field}
                      type="text"
                      disabled={cof.disabled}
                      placeholder={cof.placeholder}
                    />
                  ) : cof.formType === "select" ? (
                    <Select onValueChange={field.onChange}  disabled={cof.disabled} >
                      <SelectTrigger>
                        <SelectValue placeholder={roles[(cof.value[0]).name]}></SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cof.headerName.includes('角色')
                          ? Object.keys(roles).map((item: any) => (
                              <SelectItem key={item} value={item}>
                                {roles[item]}
                              </SelectItem>
                            ))
                          : null}
                      </SelectContent>
                    </Select>
                  ) : null}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
    </>
  );
};
export default FormFields;
