import { MouseEvent, useCallback, useState } from "react"
import { Column } from "./types"
import { Button, Drawer, DrawerProps, ButtonProps } from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

export interface SubMenuButtonProps extends ButtonProps{
  label: string;
  items: Column[];
  drawerProps?: DrawerProps;
}


export default function SubMenuButton({label, drawerProps, onClick, children, ...props}: Readonly<SubMenuButtonProps>){
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>)=>{
    setIsOpen(prev=>!prev)
    if(onClick)
      onClick(event)
  }, [])

  const handleClose = useCallback(()=>setIsOpen(false), [])

  return(
    <>
      <Button endIcon={isOpen ? <ExpandLess/> : <ExpandMore/>} variant="text" onClick={handleClick} {...props}>
        {label}
      </Button>
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        open={isOpen}
        onClose={handleClose}
        {...drawerProps}
      >
        {children}
      </Drawer>
    </>
  )

}