import type { Meta, StoryObj } from '@storybook/react';
import { PacificoNavbar } from 'ui-material'

const meta = {
  title: 'Organisms/PacificoNavbar',
  component: PacificoNavbar,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof PacificoNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args:{
    data: {
      groups: [],
      navbarItems: [
        {
          id: 'Seguros',
          label: 'Seguros'
        },
        {
          id: 'Promociones',
          label: 'Promociones'
        }, 
      ],
      pages: [
        {id: 'pagina1', slug: 'Home', navBarItemId: 'Promociones'},
      ],
      subgroups: []
    }
  }
};


