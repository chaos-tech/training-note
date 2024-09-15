import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '.';

const meta: Meta<typeof Home> = {
  tags: ['autodocs'],
  component: Home,
  args: {
    handleClick: () => alert('click'),
  },
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Example: Story = {};
