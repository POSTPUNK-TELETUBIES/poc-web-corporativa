import { AppBarProps, Link } from "@mui/material";
import NavBar from "../NavBar";
import { Column } from "./types";
import SubMenuButton from "./SubMenuButton";
import BodyMenu from "./BodyMenu";


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
        return <Link key={label} href={url}>{label}</Link>

      return (<SubMenuButton key={label} label={label}>
        <BodyMenu columns={items ?? []}/>
      </SubMenuButton>)
    })}
  />)
}