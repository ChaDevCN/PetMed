"use client"
import type { FormConfig } from "@/interface"
import { FormLabel, FormItem, FormControl ,FormField,FormMessage} from "@/components/ui/form"
import { Input } from "./ui/input"
import { useMemo } from "react"
interface Props {
    config: FormConfig[],
    form:any
}

const FormFields = ({ config,form }: Props) => {
    const nextConfig = useMemo(()=>config,[config])
    return (
        <>
            {
                nextConfig.map((cof, index) => {
                    return <FormField
                    key={index}
                        control={form.control}
                        name={cof.field}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[16px]">{cof.headerName}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled={cof.disabled}
                                        placeholder={cof.placeholder}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                })
            }
        </>
    )
}
export default FormFields