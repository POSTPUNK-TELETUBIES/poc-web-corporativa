'use client';

import { ExpandMore } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { HTMLAttributes, MouseEvent, ReactNode } from "react";


export interface NavItem<T = HTMLElement> extends HTMLAttributes<T>{
  label: ReactNode;
  onClick?: (event?: MouseEvent<T>)=>void,
  isOpen?: boolean
}


export default function NavbarLink ({label, onClick, isOpen, ...props}: Readonly<NavItem>){
  return (<Typography
    {...props}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'primary.main'
    }} 
    onClick={onClick}
  >
    {label} {<ExpandMore sx={{
      transform: isOpen? 'rotateX(180deg)' : 'unset'
    }}/>}
  </Typography>)
}
