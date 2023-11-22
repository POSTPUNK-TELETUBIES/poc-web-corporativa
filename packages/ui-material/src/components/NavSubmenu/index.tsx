import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Link,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";


export interface NavSubmenuProps<T = any>  extends PropsWithChildren<Omit<AccordionProps, 'children'>> {
  label: string;
  items?: T[];
  LinkComponent?: FC<T>;
  headerProps?: AccordionSummaryProps
} 

export const defaultSxHeaderProps: SxProps = {
  width: 'fit-content',
  minHeight: 0, 
  gap: 1,
  m:0,
  '& .MuiAccordionSummary-content':{
    m: 0
  },
  '&.Mui-expanded':{
    minHeight: 0, 
    color: 'primary.main'
  },
  '& > div.Mui-expanded':{
    margin: `0 !important`
  },
  '&:hover':{
    color: 'primary.main'
  },
  p: 0
}

export const defaultPaperSxProps = {
  boxShadow: 'none',
  margin: 0,
  '&::before':{
    display: 'none'
  },
  '&.Mui-expanded':{
    margin: 0
  },
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
        {...headerProps}
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{p: 0}} >
        <Stack  sx={{
          paddingInlineStart: 2
        }}>
          {items?.map((linkProps, index) => <LinkComponent key={index} {...linkProps} />)}
        </Stack>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
