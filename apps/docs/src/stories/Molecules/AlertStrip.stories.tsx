import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { AlertStrip, HeaderStrip } from 'ui-material';


const meta = {
  title: 'Molecules/Alert strip',
  component: AlertStrip,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof AlertStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    sx:{border: '1px solid gray', borderRadius: 1},
    children: <Box gridRow={'4 / 1 span'} p={2}>Bareto</Box>,
    header:(<HeaderStrip
        containerProps={{
          gridRow:'2 / 1 span',
          sx:{
           transform: 'translateX(-0.5rem)',
        }}}
        sx={{
          backgroundColor: 'secondary.main',
          color: 'white',
          p: .1,
          px: 2,
          fontWeight: 'bolder',
          fontSize: '.9em',
          borderRadius: '.3rem .3rem .3rem 0'
        }}
    >
      Header Bareto
  </HeaderStrip>)
  }
}
