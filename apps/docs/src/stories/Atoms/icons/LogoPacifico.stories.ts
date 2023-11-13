import type { Meta, StoryObj } from '@storybook/react';

import { LogoPacificoIcon } from 'ui-material'

const meta = {
  title: 'Atoms/Icons/Logo Pacifico',
  component: LogoPacificoIcon,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof LogoPacificoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args:{
    sx:{
     fontSize: '6rem',
    }
  }
};


