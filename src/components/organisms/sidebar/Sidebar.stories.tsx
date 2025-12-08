import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
      description: "Logged in user object",
    },
    activePath: {
      control: "select",
      options: [
        "/",
        "/clients",
        "/services",
        "/employees",
        "/inventory",
        "/reports",
        "/settings",
      ],
      description: "Currently active route",
    },
    onLogout: {
      action: "logout",
      description: "Logout callback function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      email: "manager@beaution.pl",
      isLoggedIn: true,
    },
    activePath: "/",
  },
};
