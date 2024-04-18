import * as React from 'react';
import { configure } from 'mobx';
import { usersStore } from './userStore';;

configure({ enforceActions: 'always' }); 

export const stores = { usersStore };

export const storesContext = React.createContext(stores);

export const useStores = () => React.useContext(storesContext);

export const StoresProvider = storesContext.Provider;
