import type { Meta, StoryObj } from '@storybook/react';

import { HeaderStrip } from 'ui-material'

const meta = {
  title: 'Atoms/Header Strip',
  component: HeaderStrip,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof HeaderStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args:{
    children: 'Bareto',
    sx:{
      backgroundColor: 'secondary.main',
      color: 'white',
      p: .1,
      px: 2,
      fontWeight: 'bolder',
      fontSize: '.9em',
      borderRadius: '.3rem .3rem .3rem 0'
    }
  }
}
