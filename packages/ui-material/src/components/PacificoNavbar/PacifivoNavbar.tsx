import { AppBarProps, Box, IconButton, Link, Stack } from "@mui/material";
import NavBar from "../NavBar";
import { Column } from "./types";
import SubMenuButton from "./SubMenuButton";
import BodyMenu from "./BodyMenu";
import { CampaignOutlined, LocalPhoneOutlined, PersonOutlineOutlined } from "@mui/icons-material";


export interface PacificoNavbarItem{
  label: string
  url?: string
  items?: Column[]

}

export interface PacificoNavbarProps extends AppBarProps{
  items: PacificoNavbarItem[]
}

export default function PacificoNavbar({items, ...props}: Readonly<PacificoNavbarProps>){
  return(<NavBar
    {...props}
    navItemsMobile={[]}
    navItemsDesktop={items.map(({url, items, label})=>{
      if(url && !items)
        return <Box key={label} display='flex' alignItems='center'>
            <Link href={url}>{label}</Link>
          </Box>

      return (<SubMenuButton sx={{textTransform: 'unset'}} key={label} label={label}>
        <BodyMenu sx={{
          m: 2,
          display: 'flex',
          gap: 3
        }} 
        columns={items ?? []}
      />
      </SubMenuButton>)
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
  />)
}