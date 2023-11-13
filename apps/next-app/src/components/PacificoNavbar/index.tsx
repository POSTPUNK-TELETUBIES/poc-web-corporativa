'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavBar } from "ui-material";
import { memo, useState } from "react";
import { 
  LocalPhoneOutlined, 
  PersonOutlineOutlined,
  CampaignOutlined,
  ExpandMore as ExpandMoreIcon 
} from "@mui/icons-material";

interface NavItem{
  label: JSX.Element | string;
  items?: NavItem[]
}

function NavbarLink({label}:Readonly<NavItem>){
  const [isOpen, setIsOpen] = useState(false)

  return (<Typography 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'text.primary'
    }} 
    onClick={()=>setIsOpen(prev => !prev)}
  >
    {label} {<ExpandMoreIcon sx={{
      transform: isOpen? 'rotateX(180deg)' : 'unset'
    }}/>}
  </Typography>)
}

interface NavbarExampleProps{
  items: NavItem[]
}

export const PacificoNavbar = memo(function PacificoNavbar({items}: Readonly<NavbarExampleProps>){
  return (
  <NavBar
    sx={{ background: "white", boxShadow: "unset", zIndex: 1301 }}
    navItemsMobile={items.map(({label})=><Accordion
      key={String(label)}
      sx={{
        boxShadow: "unset",
        flexDirection: "column",
        "& .MuiCollapse-root": {
          width: 1,
        },
      }}
    >
      <AccordionSummary
        sx={{
          width: 1,
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Hola
      </AccordionDetails>
    </Accordion>)}
    navItemsDesktop={items.map(({label})=><NavbarLink label={label} key={String(label)}/>)}
    leftOptions={<Stack direction='row'>
      <IconButton sx={{color: 'primary.main'}}>
        <LocalPhoneOutlined />
      </IconButton>
      <IconButton sx={{color: 'primary.main'}}>
        <PersonOutlineOutlined />
      </IconButton>
      <IconButton sx={{color: 'primary.main'}}>
        <CampaignOutlined />
      </IconButton>
    </Stack>}
  />
)});
