import useMenu from "./useMenu";

export default function useMenuOperations(){
  const [currentMenu, setCurrentMenu] = useMenu()

  return {
    currentMenu,
    setCurrentMenu,
    closeMenu: ()=> setCurrentMenu(undefined)
  }
}