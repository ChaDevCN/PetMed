import { Button } from "@/components/ui/button";
import ActionToolbar from "./components/actionToolbar";
const toolbarConfig = [
    {
        el:'link-button',
        text:'添加',
        type:'button',
        link:'/medical-management/add-doctor',
    }
]
const DoctorResourcesPage = async() => {

  
  return (
    <div>
      <ActionToolbar toolbarConfig={toolbarConfig} />
      
    </div>
  );
};
export default DoctorResourcesPage;
