import { AppBar, AppBarProps, Backdrop, Box, Dialog, Drawer, IconButton, Menu, Slide, Stack, Toolbar } from '@mui/material'
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material'
import React, { MouseEvent, ReactNode, useCallback, useState } from 'react'
import { LogoPacificoIcon } from './icons'

export interface NavbarProps extends AppBarProps {
  navItemsDesktop?: ReactNode;
  navItemsMobile: ReactNode;
  leftOptions?: ReactNode;
}

// TODO: use an imperative handler or other abstraction (or maybe is a premature optimization?)
export const NavBar = ({ navItemsMobile, navItemsDesktop, leftOptions, ...rest}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = useCallback(() => 
    setIsOpen(prev => !prev), 
    []
  )

  const handleCloseDrawer = useCallback(() => setIsOpen(false), [])

  return (
    <AppBar {...rest}>
      <Toolbar sx={{gap: 2, justifyContent: 'space-between', minHeight: '4rem'}}>
        <Stack gap={2} direction='row'>
          <IconButton sx={{
            display: { md: 'none', xs: 'grid' },
            color: 'primary.main'
          }}
            onClick={handleClickMenu}
          >
            {
              isOpen ?  <CloseIcon />: <MenuIcon />
            }
          </IconButton>
          <LogoPacificoIcon sx={{fontSize: '6.5rem', maxHeight: '2.5rem'}} />
        </Stack>
        <Box component={'nav'} sx={{
          display: { md: 'initial', xs: 'none' }
        }}>
          {navItemsDesktop}
        </Box>
        {leftOptions}
      </Toolbar>
    <Drawer
      slotProps={{
        backdrop:{
          sx:{
            opacity: '0.6 !important'
          }
        }
      }}
      PaperProps={{
        sx:{top: '4rem', 
          borderTop:'0.4rem solid',
          maxHeight: '95%',
          overflowY: 'auto',
          minWidth: '18rem',
          borderColor: 'primary.main',
          height: 'unset',
          paddingBlock: 2,
          borderBottomRightRadius: '1rem',
          boxShadow: '0 0.25rem 0.75rem -0.1rem rgba(1,125,167,0.27);'
        }}}
      sx={{
        display: { md: 'none', xs: 'initial' },
        
      }}
      onClose={handleCloseDrawer}
      open={!!isOpen}
    >
     {navItemsMobile}
    </Drawer>
    </AppBar>
  )
}
