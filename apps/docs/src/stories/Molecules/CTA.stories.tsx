import { ArrowForwardIos } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from 'ui-material';


const meta = {
  title: 'Molecules/CTA',
  component: CTA,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Bareto',
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Bareto',
    endIcon: <ArrowForwardIos />
  }
}

export const Outlined: Story = {
  args: {
    children : 'Bareto',
    variant: 'outlined',
  }
}
