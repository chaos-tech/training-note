import type { Meta, StoryObj } from '@storybook/react';

import { CheckItemList } from '.';

const meta: Meta<typeof CheckItemList> = {
  tags: ['autodocs'],
  component: CheckItemList,
  args: {},
};

export default meta;

type Story = StoryObj<typeof CheckItemList>;

export const Example: Story = {};
