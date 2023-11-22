import type { Meta, StoryObj } from "@storybook/react";
import { BodyMenu, Column, Group } from "ui-material";

const meta = {
  title: "Molecules/Menu Body",
  component: BodyMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BodyMenu>;

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
    columns,
    sx:{
      display: 'flex',
      gap: 3
    }
  },
};
