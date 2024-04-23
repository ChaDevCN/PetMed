import Link from "next/link";

import { Button } from "@/components/ui/button";
interface ToolbarConfig {
  [key: string]: any;
}
const ActionToolbarPage = ({
  toolbarConfig,
}: {
  toolbarConfig: ToolbarConfig[];
}) => {
  return (
    <div>
      {toolbarConfig.map((item) =>
        item.el === "link-button" ? (
          <Link key={item.link} href={item.link}>
            <Button type={item.type}>{item.text}</Button>
          </Link>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
export default ActionToolbarPage;
