import { describe, it , expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { CTA as Cta } from '.'
import { pacificoDefaultTheme } from '../../theme'
import { ThemeProvider } from '@mui/material';


describe.concurrent('Utils pacifico navbar', ()=>{
  it('button renders', async ()=>{
    const textButton = 'Test buton'
    const handleClick = vi.fn()

    render(<Cta onClick={handleClick}>{textButton}</Cta>, {
      wrapper(props) {
        return <ThemeProvider theme={pacificoDefaultTheme} >
          {props.children}
        </ThemeProvider>
      },
    })

    const button = screen.getByText(textButton)

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
