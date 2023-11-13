import NavBar from "../NavBar";
import DropNavbar from '../DropNavbar'
import { IconButton, Link, Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { CampaignOutlined, LocalPhoneOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { Group, NavbarItem, Page, Subgroup } from './types';
import { groupByPageParent } from './utils';

export interface LinkComponentProps extends PropsWithChildren {
  href: string;
  meta?: unknown;
}

export interface PacificoNavbarProps{
  data:{
    pages: Page[];
    groups: Group[];
    subgroups: Subgroup[];
    navbarItems: NavbarItem[];
  },

  LinkRender?: FC<LinkComponentProps>
}

export default function PacificoNavbar({
  data: {pages, navbarItems}, 
  LinkRender = Link 
}: Readonly<PacificoNavbarProps>){

  const {
    pagesInNavBar,
  } = groupByPageParent(pages)

  return(
    <NavBar
      sx={{
        background: 'white'
      }}
      navItemsDesktop={navbarItems.map(({id, label})=>{
        const page = pagesInNavBar[id]
        if(page)
          return <LinkRender key={id} href={'/' + page.slug}>
            {label}
          </LinkRender>
    
        return <DropNavbar key={id}  label={label} />
      })}
      navItemsMobile={navbarItems.map(({id, label})=>{
        const page = pagesInNavBar[id]
        if(page)
          return <LinkRender key={id} href={'/' + page.slug} />
    
        return <DropNavbar key={id}  label={label} />
      })}
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
  )
}



export {
  Page,
  Group,
  NavbarItem,
  Subgroup
}
