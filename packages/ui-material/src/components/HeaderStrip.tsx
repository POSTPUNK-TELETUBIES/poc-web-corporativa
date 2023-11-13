import { Box, BoxProps, SxProps } from "@mui/material";

export const headerStripStyle: SxProps = {
    width: '.5rem',
    height: '.3rem',
    borderBottomLeftRadius:'.5rem',
    display: 'block',
    filter: 'brightness(50%)',
  }

export interface HeaderStripProps extends BoxProps {
  foldProps?: BoxProps
  containerProps?: BoxProps
}

export const HeaderStrip = ({children, foldProps, containerProps, ...props}: HeaderStripProps)=> (<Box {...containerProps}>
  <Box {...props}>
    {children}
  </Box>
  
  <Box 
    sx={{
      ...headerStripStyle, 
      // @ts-expect-error
      backgroundColor: props.sx?.backgroundColor
    }}
    {...foldProps}
  />
</Box>)
