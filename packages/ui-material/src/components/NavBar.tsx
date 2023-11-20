import { AppBar, AppBarProps, Box, Drawer, IconButton, Stack, Toolbar } from '@mui/material'
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material'
import { ReactNode, useCallback, useReducer } from 'react'
import { LogoPacificoIcon } from './icons'
import { toggleReduce } from '../utils';

export interface NavbarProps extends AppBarProps {
  navItemsDesktop?: ReactNode;
  navItemsMobile: ReactNode;
  leftOptions?: ReactNode;
}

// TODO: use an imperative handler or other abstraction (or maybe is a premature optimization?)
const NavBar = ({ navItemsMobile, navItemsDesktop, leftOptions, ...props}: Readonly<NavbarProps>)=>{
  const [isOpen, setIsOpen] = useReducer(toggleReduce, false)
  

  const handleCloseDrawer = useCallback(() => setIsOpen(false), [])

  return (
    <AppBar {...props}>
      <Toolbar sx={{gap: 2, justifyContent: 'space-between', minHeight: '4rem'}}>
        <Stack gap={2} direction='row'>
          <IconButton sx={{
            display: { md: 'none', xs: 'grid' },
            color: 'primary.main',
            paddingInlineStart: 0
          }}
            onClick={setIsOpen}
          >
            {
              isOpen ?  <CloseIcon data-testid={'close-icon'} />: <MenuIcon data-testid={'menu-icon'} />
            }
          </IconButton>
          <LogoPacificoIcon sx={{fontSize: '6.5rem', maxHeight: '2.5rem'}} />
        </Stack>
        <Box component={'nav'} gap={2} sx={{
          display: { md: 'flex', xs: 'none' }
        }}>
          {navItemsDesktop}
        </Box>
        {leftOptions}
      </Toolbar>
    <Drawer
      aria-hidden={!!isOpen}
      data-testid={'drawer'}
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

export default NavBar
