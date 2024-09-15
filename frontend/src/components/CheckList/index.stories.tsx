import type { Meta, StoryObj } from '@storybook/react';

import { CheckList } from '.';

const meta: Meta<typeof CheckList> = {
  tags: ['autodocs'],
  component: CheckList,
  args: {},
};

export default meta;

type Story = StoryObj<typeof CheckList>;

export const Example: Story = {};
