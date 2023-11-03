
import { Button, ButtonProps, SxProps } from "@mui/material";

export const CTAStyle: SxProps = {
  borderRadius: '4rem'
}

// Consider using css modules to mix with sx
export const CTA = (props: ButtonProps)=>(<Button variant='contained' color='secondary' sx={CTAStyle} {...props} />)
