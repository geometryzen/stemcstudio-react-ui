import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../buttons/Button';

const meta: Meta<typeof Button> = {
    title: "Example/Button",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: (args) => <Button {...args} />
};