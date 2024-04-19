import { z } from "zod";
export interface UserData {
  id: Number;
  name: string;
  createTIme: string;
}
export interface DataList {
  method: string;
  url: string;
  column: any[];
}
export interface Tab<T extends z.ZodObject<any, any, any>> {
  key: string;
  name: string;
  getDataList: DataList;
  schema: z.infer<T>;
}
export interface Section<T extends z.ZodObject<any, any, any>> {
  type: string;
  tabs: Tab<T>[] | [];
  [key:string]:any
}

export interface Auth<T extends z.ZodObject<any, any, any> = any> {
  [key: string]: T extends z.ZodObject<any, any, any>
    ? Section<T>
    : Section<any>;
}
export interface Params {
  type: string;
  key: string;
}
export interface RolesMap {
  [key: number]: string;
}
