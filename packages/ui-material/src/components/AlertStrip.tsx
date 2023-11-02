import { Box, BoxProps } from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react"

interface AlertStripProps extends PropsWithChildren<BoxProps> {
  header?: ReactNode;
}

export const AlertStrip = ({ header, children, ...props }:AlertStripProps)=> (
  <Box display='grid' gridTemplateRows={'0.5rem 1rem 1rem 1fr'} {...props}>
    {header}
    {children}
  </Box>
)
