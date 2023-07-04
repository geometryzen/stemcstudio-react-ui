import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../buttons/Button';

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button />,
};
