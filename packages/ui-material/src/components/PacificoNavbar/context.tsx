import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

interface IContext{
  currentMenu?: string,
  setCurrentMenu?: Dispatch<SetStateAction<string | undefined>>
}

export const contextMenu = createContext<IContext>({
  currentMenu: undefined,
  setCurrentMenu: undefined
});

export default function PacificoNavbarProvider({children}:PropsWithChildren){
  const [ currentMenu, setCurrentMenu ] = useState<string | undefined>();

  const value = useMemo(()=>({
    currentMenu,
    setCurrentMenu
  }), [currentMenu])

  return(<contextMenu.Provider value={value}>
    {children}
  </contextMenu.Provider>)
}
