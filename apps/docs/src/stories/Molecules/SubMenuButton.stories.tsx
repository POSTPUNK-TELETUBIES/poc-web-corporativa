import type { Meta, StoryObj } from '@storybook/react';
import { BodyMenu, Column, SubMenuButton } from 'ui-material';


const meta = {
  title: 'Molecules/Submenu button',
  component: SubMenuButton,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof SubMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: Column[] = Array
  .from({length: 1})
  .map((_, index)=>({
    groups: [
      {
        label: `Group ${index}`,
        items: Array
          .from({length: 10})
          .map((_, index)=>({
            label: `Item ${index}`,
            url: '#'
          }))
      }
    ]
  }))

export const Default: Story = {
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <div>Hola</div>
  }
}


