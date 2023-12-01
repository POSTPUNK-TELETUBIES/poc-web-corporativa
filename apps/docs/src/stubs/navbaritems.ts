import { Column, Group } from "ui-material";

export const groups1: Group[] = [
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

export const groups2: Group[] = [
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

export const columns: Column[] = [
  {groups: groups1},
  {groups: groups2}
];