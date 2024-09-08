import type { Meta, StoryObj } from '@storybook/react';

import { LineButton } from '.';

const meta: Meta<typeof LineButton> = {
  component: LineButton,
};

export default meta;

type Story = StoryObj<typeof LineButton>;

export const Example: Story = {};
