import { MouseEvent, useCallback, useContext } from "react"
import { Button, Drawer, DrawerProps, ButtonProps } from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { contextMenu } from "./context";
import { defaultMenuDrawerDefaultSx as defaultMenuDrawerDefaultSx } from "./styles";

export interface SubMenuButtonProps extends ButtonProps{
  label: string;
  drawerProps?: DrawerProps;
  hasDrawer?: boolean;
}

export default function SubMenuButton({label, drawerProps, hasDrawer, onClick, children, ...props}: Readonly<SubMenuButtonProps>){
  const { currentMenu, setCurrentMenu } = useContext(contextMenu)

  if(!setCurrentMenu)
    throw new Error('CURRENTsetter current menu not defined')

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>)=>{
    setCurrentMenu(prev=> prev === label? undefined : label)
  
    if(onClick)
      onClick(event)
  }, [label, onClick, setCurrentMenu])

  const handleClose = useCallback(()=>setCurrentMenu(undefined), [setCurrentMenu])

  return(
    <>
      <Button
        data-id={label}
        className={'submenu'} 
        endIcon={currentMenu === label ? <ExpandLess/> : <ExpandMore/>} 
        variant="text" 
        onClick={handleClick} 
        {...props}
      >
        {label}
      </Button>
      {hasDrawer &&  <Drawer
        SlideProps={{
          direction: 'down'
        }}
        PaperProps={{
          sx: defaultMenuDrawerDefaultSx
        }}
        open={currentMenu === label}
        onClose={handleClose}
        {...drawerProps}
      >
        {children}
      </Drawer>}
     
    </>
  )

}