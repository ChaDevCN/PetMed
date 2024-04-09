"use client"
import type { FormConfig } from "@/interface"
import { FormLabel, FormItem, FormControl ,FormField,FormMessage} from "@/components/ui/form"
import { Input } from "./ui/input"
interface Props {
    config: FormConfig[],
    form:any
}

const FormFields = ({ config,form }: Props) => {
    console.log(config);
    
    return (
        <>
            {
                config.map((cof, index) => {
                    return <FormField
                    key={index}
                        control={form.control}
                        name={cof.field}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
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