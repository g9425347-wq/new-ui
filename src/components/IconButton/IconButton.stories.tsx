import { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonProps } from './IconButton';
import { useTheme } from '@mui/material';
import React from 'react';

const meta: Meta = {
    title: 'Components/IconButton',
    component: IconButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IconButtonProps) => <IconButton {...args} />;

Default.args = {
    icon: 'edit',
    title: 'Icon Button',
};

export const Label: Story = (args: IconButtonProps) => {
    const theme = useTheme() as any;
    const isDark = theme?.palette?.mode === 'dark';

    return (
        <div
            style={{
                padding: '20px',
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: isDark
                    ? theme?.palette?.background?.paper ?? '#1e1e1e'
                    : '#ffffff',
            }}
        >
            <IconButton {...args} />
        </div>
    );
};

Label.args = {
    icon: 'add',
    title: 'Critical',
    label: { label: '233' },
};
