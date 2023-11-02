import type { Meta, StoryObj } from '@storybook/react';

import { NavbarExample } from './Navbar.example';

const meta = {
  title: 'Organisms/Examples/NavbarExample',
  component: NavbarExample,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof NavbarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args:{items:[{label: 'Menu 1'}, {label: 'Menu 2'}]}
};


