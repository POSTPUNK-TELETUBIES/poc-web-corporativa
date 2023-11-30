import type { Meta, StoryObj } from "@storybook/react";
import { BodyMenu } from "ui-material";
import { columns } from "../../stubs/navbaritems";

const meta = {
  title: "Molecules/Menu Body",
  component: BodyMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BodyMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    columns,
    sx:{
      display: 'flex',
      gap: 3
    }
  },
};
