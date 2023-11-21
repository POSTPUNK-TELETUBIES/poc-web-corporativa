import { Box, BoxProps, Stack } from "@mui/material";
import { Column } from "./types";
import  MenuGroup from "./MenuGroup";

export interface BodyMenuProps extends BoxProps{
    columns: Column[];
  }
  
const BodyMenu= ({columns, ...props}: BodyMenuProps)=>(
    <Box {...props}>
      {
       columns.map(({groups}, index)=>(
         <Stack key={index} gap={2}>
           {
             groups.map(({label, items}, index)=>(
               <MenuGroup key={index} label={label} items={items}/>
             ))
           }
         </Stack>
       ))
      } 
      </Box>
  )
  
  
export default BodyMenu