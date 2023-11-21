import type { Meta, StoryObj } from "@storybook/react";
import { MenuGroup, SubmenuItem } from "ui-material";

const meta = {
  title: "Molecules/Menu Group",
  component: MenuGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: SubmenuItem[] = Array.from({ length: 5 }).map((_, index) => ({
  label: `sub item ${index}`,
  url: "#",
}));

export const Default: Story = {
  args: {
    label: "Sub menu",
    items,
  },
};

const itemsWithSubMenu : SubmenuItem[]= Array.from({ length: 5 }).map((_, index) => ({
  label: `sub item ${index}`,
  items: [{
    label: `children sub item ${index}`,
    url: "#",
  }]
}));


export const WithSubMenus: Story = {
  args: {
    label: "Sub menu",
    items: itemsWithSubMenu,
  },
};
