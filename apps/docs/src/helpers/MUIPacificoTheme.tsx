import { CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import { pacificoDefaultTheme } from 'ui-material'

export const ThemeWrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={pacificoDefaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export const withTheme = (Story: ()=> JSX.Element)=>(
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
)
