import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";


export interface NavSubmenuProps<T = any>  extends PropsWithChildren<Omit<AccordionProps, 'children'>> {
  label: string;
  items?: T[];
  LinkComponent?: FC<T>;
  headerProps?: AccordionSummaryProps
} 

export const defaultSxHeaderProps = {
  width: 1,
  '&.Mui-expanded':{
    minHeight: 0, 
    color: 'primary.main'
  },
  '& > div.Mui-expanded':{
    margin: `0 !important`
  },
  '&:hover':{
    color: 'primary.main'
  }
}

export const defaultPaperSxProps = {
  boxShadow: 'none'
}

export default function NavSubmenu({
  label,
  items,
  children,
  LinkComponent = Link,
  headerProps,
  ...props
}: Readonly<NavSubmenuProps>) {
  return (
    <Accordion 
      sx={defaultPaperSxProps} 
      {...props}
    >
      <AccordionSummary
        sx={defaultSxHeaderProps}
        expandIcon={<ExpandMore />}
        inlist={true}
        {...headerProps}
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Stack  sx={{
          paddingInlineStart: 2
        }}>
          {items?.map((linkProps) => <LinkComponent {...linkProps} />)}
        </Stack>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
