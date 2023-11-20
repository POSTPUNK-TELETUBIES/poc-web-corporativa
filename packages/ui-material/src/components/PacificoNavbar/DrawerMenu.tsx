import { Drawer, DrawerProps, Stack } from "@mui/material";
import { Column } from "./types";
import  MenuGroup from "./MenuGroup";

export interface DrawerMenuProps extends DrawerProps{
    columns: Column[];
  }
  
const DrawerMenu= ({columns, ...props}: DrawerMenuProps)=>(
    <Drawer
     PaperProps={{
      sx:{top: '4rem', 
        borderTop:'0.4rem solid',
        maxHeight: '95%',
        overflowY: 'auto',
        width: 1,
        borderColor: 'primary.main',
        height: 'unset',
        paddingBlock: 2,
        borderBottomRightRadius: '1rem',
        boxShadow: '0 0.25rem 0.75rem -0.1rem rgba(1,125,167,0.27);'
      }}}
      sx={{
        display: { md: 'none', xs: 'initial' },
      }}
      {...props}
    >
     {
      columns.map(({groups}, index)=>(
        <Stack key={index} direction='row' gap={2}>
          {
            groups.map(({label, items}, index)=>(
              <MenuGroup key={index} label={label} items={items}/>
            ))
          }
        </Stack>
      ))
     } 
    </Drawer>
  )
  
  
export default DrawerMenu