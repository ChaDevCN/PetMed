import * as React from 'react';
import { configure } from 'mobx';
import { usersStore } from './/userStore';;

configure({ enforceActions: 'always' }); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。

export const stores = { usersStore };

export const storesContext = React.createContext(stores);

export const useStores = () => React.useContext(storesContext);

export const StoresProvider = storesContext.Provider;
