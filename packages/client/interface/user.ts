export interface UserData {
  id: Number;
  name: string;
  createTIme: string;
}
export interface DataList{
  method:string
  url:string
  column:any[]
}
export interface Tab {
  key: string;
  name: string;
  getDataList: DataList
}
export interface Section {
  type: string;
  tabs: Tab[];
}

export interface Auth {
  [key: string]: Section;
}
export interface Params {
  type: string;
  key: string
}
export interface RolesMap {
  [key: number]: string;
}