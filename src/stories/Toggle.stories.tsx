import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Toggle } from '../buttons/Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Example/Toggle',
    component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    render: (args) => <Toggle label="Toggle" {...args}></Toggle>,
};
