import { redirect } from "next/navigation";

import AddDoctor from "./components/addDoctor";
import Upload from "./components/upload";

const AddPage = ({ params, data }: { params: "add-doctor"; data: any }) => {
  const AddDoctorFormConfig = [
    {
      formType: "input",
      value: "",
      lable: "用户名",
      field: "username",
      className: "border-[#e9d5ff]",
    },
    {
      formType: "input",
      value: "",
      lable: "姓名",
      field: "name",
      className: "border-[#e9d5ff]",
    },
    {
      formType: "redio",
      value: "",
      lable: "性别",
      field: "gender",
      className: "border-[#e9d5ff]",
      data: [
        { key: 0, label: "女" },
        { key: 1, label: "男" },
      ],
    },
    {
      formType: "input",
      value: "",
      lable: "抽成比例",
      field: "commissionRate",
      className: "border-[#e9d5ff]",
    },
    {
      formType: "input",
      value: "",
      lable: "年龄",
      field: "age",
      className: "border-[#e9d5ff]",
    },
    {
      formType: "input",
      value: "",
      lable: "工作经验(年)",
      field: "experience",
      className: "border-[#e9d5ff]",
    },
    {
      formType: "select",
      value: "",
      lable: "科室",
      field: "department",
      className: "border-[#e9d5ff]",
      data,
      dataType: "group",
    },
    {
      formType: "input",
      value: "",
      lable: "医生简介",
      field: "introduction",
      className: "border-[#e9d5ff]",
    },
  ];

  const addMap = {
    "add-doctor": AddDoctorFormConfig,
  };
  if (!addMap[params]) {
    redirect("/404");
  }

  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <AddDoctor config={addMap[params]} />
        {/* <Upload /> */}
      </div>
    </div>
  );
};
export default AddPage;
