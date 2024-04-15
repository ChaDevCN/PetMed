export interface FormConfig {
    formType: string
    value: string | any[]
    placeholder?: string
    lable?:string
    disabled?: boolean
    field:string
    [key: string]: any
}