import { Box, BoxProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react"

export interface AlertStripProps extends PropsWithChildren<BoxProps> {
  header?: ReactNode;
}

export default function AlertStrip({ header, children, ...props }:Readonly<AlertStripProps>){return (
  <Box display='grid' gridTemplateRows={'0.5rem 1rem 1rem 1fr'} {...props}>
    {header}
    {children}
  </Box>
)}
