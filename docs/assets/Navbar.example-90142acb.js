import{j as o}from"./jsx-runtime-ffb262ed.js";import{M as a,d as n}from"./index-a472fdc0.js";import{p as i}from"./index-a24cc416.js";import{N as s}from"./Navbar.example-74e28e12.js";import{u as m}from"./index-a1cf9e47.js";import{T as c,C as l}from"./CssBaseline-8fc011b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-46f9ace7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-a607ae39.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./index-13a69483.js";import"./index-356e4a49.js";const p=`import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavBar } from "ui-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode, useState } from "react";
import { 
  LocalPhoneOutlined, 
  PersonOutlineOutlined,
  CampaignOutlined 
} from "@mui/icons-material";

interface NavItem{
  label: ReactNode;
  items?: NavItem[]
}

const NavbarLink = ({label}:NavItem)=>{
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

export const NavbarExample = ({items}:NavbarExampleProps) => (
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
);
`;function r(e){return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Organisms/Examples/Navbar"}),`
`,o.jsx("div",{children:o.jsxs(c,{theme:i,children:[o.jsx(l,{}),o.jsx(s,{items:[{label:"Menu 1"},{label:"Menu 2"}]})]})}),`
`,o.jsx(n,{code:p,dark:!0})]})}function k(e={}){const{wrapper:t}=Object.assign({},m(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(r,e)})):r()}export{k as default};
//# sourceMappingURL=Navbar.example-90142acb.js.map
