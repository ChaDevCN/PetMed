"use client";
import { useMemo, Fragment } from "react";
import type { FormConfig } from "@/interface";
import {
  FormLabel,
  FormItem,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { roles } from "@/utils/map/config";
import { Input } from "./ui/input";
interface Props {
  config: FormConfig[];
  form: any;
}

const FormFields = ({ config, form }: Props) => {
  const nextConfig = useMemo(() => config, [config]);
  return (
    <>
      {nextConfig.map((cof, index) => {
        return (
          <FormField
            key={index}
            control={form.control}
            name={cof.field}
            render={({ field }) => (
              <FormItem className={cof.formType === 'redio' ? 'flex items-center gap-3 py-3' :''}>
                <FormLabel className={cof.formType === 'redio' ? 'mt-[8px] text-[16px]' :'text-[16px]'}>{cof.lable}</FormLabel>
                <FormControl>
                  {cof.formType === "input" ? (
                    <Input
                      {...field}
                      type={cof.type || "text"}
                      disabled={cof?.disabled}
                      placeholder={cof.placeholder}
                      className={`${cof.className}`}
                    />
                  ) : cof.formType === "select" ? (
                    <Select
                      onValueChange={field.onChange}
                      disabled={cof?.disabled}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            roles[
                              typeof cof.value.toString() === "string"
                                ? cof.value
                                : cof.value[0].name
                            ]
                          }
                        ></SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cof.headerName.includes("角色")
                          ? Object.keys(roles).map((item: any) => (
                              <SelectItem key={item} value={item}>
                                {roles[item]}
                              </SelectItem>
                            ))
                          : null}
                      </SelectContent>
                    </Select>
                  ) : cof.formType === "redio" ? (
                    <RadioGroup defaultValue={cof.value as string} className="flex">
                      {cof.data.map((items: any) => (
                        <Fragment key={items.value}>
                          <RadioGroupItem value={items.key} id="r2" />
                          <Label htmlFor="r2">{items.label}</Label>
                        </Fragment>
                      ))}
                    </RadioGroup>
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
