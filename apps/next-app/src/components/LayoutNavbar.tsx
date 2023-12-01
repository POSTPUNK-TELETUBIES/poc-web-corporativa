'use client';

import { PacificoNavbar, PacificoNavbarItem, PacificoNavbarProvider } from "ui-material";
export interface LayoutNavbarProps {
  items: PacificoNavbarItem[]
}

export const LayoutNavbar = ({items}:LayoutNavbarProps)=>{
  return (<PacificoNavbarProvider>
    <PacificoNavbar 
      sx={{
        background: 'white',
        zIndex: 1301,
      }} 
    items={items}/>
  </PacificoNavbarProvider>
)
}