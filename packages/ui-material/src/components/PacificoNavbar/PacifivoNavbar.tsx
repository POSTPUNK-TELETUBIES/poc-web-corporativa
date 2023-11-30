import { AppBarProps, Box, IconButton, Link, Stack } from "@mui/material";
import NavBar from "../NavBar";
import { Column } from "./types";
import SubMenuButton from "./SubMenuButton";
import BodyMenu from "./BodyMenu";
import { CampaignOutlined, LocalPhoneOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import useMenuOperations from "./hooks/useMenuOperations";
import { renderDrawer } from "./renderOperation";

export interface PacificoNavbarItem{
  label: string
  url?: string
  items?: Column[]

}

export type drawerRenderStrategy = 'inSubMenu' | 'sibling'

export interface PacificoNavbarProps extends AppBarProps{
  items: PacificoNavbarItem[];
  drawerStrategyDesktop?: drawerRenderStrategy
  drawerStrategyMobile?: drawerRenderStrategy
}

function PacificoNavbar({items, drawerStrategyDesktop = 'sibling',  ...props}: Readonly<PacificoNavbarProps>){
  const {closeMenu: handleClose, currentMenu} = useMenuOperations()

  return(<>
  <NavBar
    {...props}
    navItemsMobile={[]}
    navItemsDesktop={items.map(({url, items, label})=>{
      if(url && !items)
        return <Box key={label} display='flex' alignItems='center'>
            <Link href={url}>{label}</Link>
          </Box>

      return (<SubMenuButton
        hasDrawer={drawerStrategyDesktop === 'inSubMenu'}
        sx={{
          textTransform: 'unset',
          p: 0,
          fontSize: '1rem'
        }} 
        key={label} 
        label={label}
      >
        {
          drawerStrategyDesktop === 'inSubMenu' &&  <BodyMenu sx={{
            m: 2,
            display: 'flex',
            gap: 3
          }} 
          columns={items ?? []}
        />
        }
      </SubMenuButton>
  )
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
      </Stack>
    }
  />
  {
    drawerStrategyDesktop === 'sibling' && items.map(renderDrawer(currentMenu, handleClose))
  }
  </>
  )
}

export default PacificoNavbar