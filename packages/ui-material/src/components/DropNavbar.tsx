'use client';

import { ExpandMore } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { MouseEvent, ReactNode, useReducer } from "react";


export interface NavItem{
  label: ReactNode;
  onClick?: (event?: MouseEvent)=>void
}

const toggleReducer = (prev: boolean)=>!prev

export default function NavbarLink ({label, onClick}: Readonly<NavItem>){
  const [isOpen, setIsOpen] = useReducer(toggleReducer, false)

  function handleClick(event: MouseEvent<HTMLSpanElement>){
    setIsOpen(); 
    if(onClick)
      onClick(event)
  }

  return (<Typography
    sx={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'primary.main'
    }} 
    onClick={handleClick}
  >
    {label} {<ExpandMore sx={{
      transform: isOpen? 'rotateX(180deg)' : 'unset'
    }}/>}
  </Typography>)
}
