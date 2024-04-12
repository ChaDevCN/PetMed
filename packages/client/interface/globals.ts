export interface FormConfig {
    formType: string
    value: string | any[]
    placeholder?: string
    lable:string
    disabled: boolean
    [key: string]: any
}