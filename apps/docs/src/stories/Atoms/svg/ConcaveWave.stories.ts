import type { Meta, StoryObj } from '@storybook/react';

import { ConcaveWave } from 'ui-material'

const meta = {
  title: 'Atoms/Svg/Concave Wave',
  component: ConcaveWave,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof ConcaveWave>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args:{
    sx:{
      backgroundColor: 'primary.main',
      width: '90vw',
      height: 90
    }
  }
}
