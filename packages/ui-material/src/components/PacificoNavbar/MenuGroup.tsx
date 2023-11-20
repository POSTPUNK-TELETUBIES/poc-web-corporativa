import { Link, LinkProps, Stack, Typography } from "@mui/material"
import { Group } from "./types"
import NavSubmenu from "../NavSubmenu"
import { FC } from "react"

export interface MenuGroupProps extends Group{
    LinkComponent?: FC<LinkProps>
}

const MenuGroup = ({items, label, LinkComponent = Link}: MenuGroupProps)=>(
  <Stack gap={2}>
    <Typography sx={{fontWeight: 'bold'}}>
      {label}
    </Typography>
    {
      items.map(({label, url, items})=> items ? (
        <NavSubmenu
        key={label} 
          label={label} 
          items={items.concat([{url, label: 'Ver categoria'}]).map(({url, label})=>({href: url, children: label}))} 
        />
      ) :(
        <LinkComponent key={label} href={url}>
          {label}
        </LinkComponent>
      ))
    }
  </Stack>
)

export default MenuGroup