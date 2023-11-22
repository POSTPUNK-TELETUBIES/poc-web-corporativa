import type { Meta, StoryObj } from '@storybook/react';
import { Column, Group, PacificoNavbar } from 'ui-material'

const meta = {
  title: 'Organisms/PacificoNavbar',
  component: PacificoNavbar,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof PacificoNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const groups1: Group[] = [
  {
    items: [
      {
        label: 'C1 - Item 1',
        url: '#'
      },
      {
        label: 'C1 - Item 2',
        items: [
          {
            label: 'Sub Item 1',
            url: '#'
          }
        ]
      }
    ],
    label: 'C1 - Group 1'
  },
  {
    label: 'C1 - Group 2',
    items: [
      {
        label: 'Item 1',
        url: '#'
      },
      {
        label: 'Item 2',
        items: [
          {
            label: 'Sub Item 1',
            url: '#'
          }
        ]
      }
    ]
  }
];

const groups2: Group[] = [
  {
    items: [
      {
        label: 'C2 - Item 1',
        url: '#'
      },
      {
        label: ' C2 - Item 2',
        items: [
          {
            label: 'Sub Item 1',
            url: '#'
          }
        ]
      }
    ],
    label: 'C2 - Group 1'
  },
  {
    label: 'C2 - Group 2',
    items: [
      {
        label: 'Item 1',
        url: '#'
      },
      {
        label: 'Item 2',
        items: [
          {
            label: 'Sub Item 1',
            url: '#'
          }
        ]
      }
    ]
  }
]

const columns: Column[] = [
  {groups: groups1},
  {groups: groups2}
];

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
    }]
  }
};


