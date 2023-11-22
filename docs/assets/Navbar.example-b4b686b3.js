import{j as e,p as r}from"./index.esm-b045b001.js";import{M as n,d as i}from"./index-617081db.js";import{N as s}from"./Navbar.example-06b3fe3f.js";import{u as m}from"./index-530af58a.js";import{T as c,C as l}from"./CssBaseline-409f6c06.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-76a98cbb.js";import"./iframe-f97ae4e5.js";import"../sb-preview/runtime.js";import"./index-d37d4223.js";import"./index-13a69483.js";import"./index-356e4a49.js";const p=`import {
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
`;function a(o){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Organisms/Examples/Navbar"}),`
`,e.jsx("div",{children:e.jsxs(c,{theme:r,children:[e.jsx(l,{}),e.jsx(s,{items:[{label:"Menu 1"},{label:"Menu 2"}]})]})}),`
`,e.jsx(i,{code:p,dark:!0})]})}function M(o={}){const{wrapper:t}=Object.assign({},m(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(a,o)})):a()}export{M as default};
//# sourceMappingURL=Navbar.example-b4b686b3.js.map
