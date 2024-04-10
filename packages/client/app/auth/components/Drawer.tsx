"use client";
import { observer } from "mobx-react-lite";

import { Drawer } from "@/components/ui/drawer";
import DrawerContent from "./DrawerContent";
import { useStores } from "@/store";

const DrawerPage = () => {
  const { usersStore } = useStores();
  const { setOpenDrawer, openDrawer } = usersStore;
  return (
    <Drawer
      open={openDrawer}
      direction="right"
      onOpenChange={(open) => {
        setOpenDrawer(open);
      }}
    >
      <DrawerContent />
    </Drawer>
  );
};
export default observer(DrawerPage);
