import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonProps } from '../Button/Button'
import React from 'react';

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ButtonProps) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

Default.args = {
    children: 'Click me',
    variant: 'medium',
    type: 'button'
};

