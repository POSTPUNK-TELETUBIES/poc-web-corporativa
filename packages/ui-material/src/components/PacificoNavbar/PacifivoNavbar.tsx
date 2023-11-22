import { Link } from "@mui/material";
import NavBar from "../NavBar";
import { Column } from "./types";
import SubMenuButton from "./SubMenuButton";


interface PacificoNavbarItem{
  label: string
  url?: string
  items?: Column[]

}

interface PacificoNavbarProps{
  items: PacificoNavbarItem[]
}

export default function PacificoNavbar({items}: Readonly<PacificoNavbarProps>){
  return(<NavBar
    navItemsMobile={[]}
    navItemsDesktop={items.map(({url, items, label})=>{
      if(url && !items)
        return <Link key={label} href={url}>{label}</Link>

      return <SubMenuButton key={label} label={label} items={items ?? []} />
    })}
  />)
}