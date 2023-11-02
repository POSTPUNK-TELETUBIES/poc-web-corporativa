import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavBar } from "ui-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { 
  LocalPhoneOutlined, 
  PersonOutlineOutlined,
  CampaignOutlined 
} from "@mui/icons-material";

const NavbarLink = ()=>{
  const [isOpen, setIsOpen] = useState(false)

  return (<Typography 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer'
    }} 
    onClick={()=>setIsOpen(prev => !prev)}
  >
    Seguros {<ExpandMoreIcon sx={{
      transform: isOpen? 'rotateX(180deg)' : 'unset'
    }}/>}
  </Typography>)
}

export const NavbarExample = () => (
  <NavBar
    sx={{ background: "white", boxShadow: "unset", zIndex: 1301 }}
    navItemsMobile={[
      <Accordion
        key={1}
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
            Seguros
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Hola
        </AccordionDetails>
      </Accordion>,
    ]}
    navItemsDesktop={[
      <NavbarLink key={1}/>
    ]}
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
);
