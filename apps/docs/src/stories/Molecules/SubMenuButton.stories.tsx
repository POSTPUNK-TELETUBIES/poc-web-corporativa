import type { Meta, StoryObj } from '@storybook/react';
import { BodyMenu, Column, Group, SubMenuButton } from 'ui-material';


const meta = {
  title: 'Molecules/Submenu button',
  component: SubMenuButton,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof SubMenuButton>;

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


export const Default: Story = {
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <div>Hola</div>
  }
}

export const WithMenuBody: Story = {
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <BodyMenu sx={{
        m: 2,
        display: 'flex',
        gap: 3
      }}
      columns={columns} 
    />
  }
}




