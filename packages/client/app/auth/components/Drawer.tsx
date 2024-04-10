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
      dismissible
      open={openDrawer}
      onOpenChange={(open) => setOpenDrawer(open)}
    >
      {openDrawer && <DrawerContent />}
    </Drawer>
  );
};
export default observer(DrawerPage);
