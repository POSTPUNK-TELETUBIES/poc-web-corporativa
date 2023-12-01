import type { Meta, StoryObj } from '@storybook/react';
import { PacificoNavbar, PacificoNavbarProvider } from 'ui-material'
import { columns } from '../../../stubs/navbaritems';

const meta = {
  title: 'Organisms/PacificoNavbar',
  decorators:[(Story)=><PacificoNavbarProvider>
    <Story />
  </PacificoNavbarProvider>],
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
    sx:{
      background: 'white',
      zIndex: 1301
    },
    items: [{
      label: 'Home',
      url: '#'
    }, {
      label: 'About',
      items:columns
    }, {
      label: 'Contact',
      url: '#'
    },{
      label: 'About 2',
      items: columns
        .map(
          ({groups})=>({
            groups: groups
              .map(({label, ...rest})=> ({label: `about 2 ${label}` , ...rest}))
            })
          )
    }
  ]
  }
};


