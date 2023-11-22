import type { Meta, StoryObj } from '@storybook/react';
import { NavSubmenu } from 'ui-material';


const meta = {
  title: 'Molecules/Nav Submenu',
  component: NavSubmenu,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof NavSubmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = Array
  .from({length: 10})
  .map((_, index)=>({
    children: `Item ${index}`,
    key: index,
    sx:{
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'unset',
      marginBottom: 1,
      '&:hover':{
        color: 'primary.main'
      }
    }
  }))

export const Default: Story = {
  args: {
    label: 'Sub menu',
    items
  }
}


