import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { TypographyProps } from '@mui/material';

const meta: Meta = {
    title: 'components/Typography',
    component: Typography,
    argTypes: {
        onClick: { action: 'clicked' },
        component: {
            type: { name: 'string', required: false },
            defaultValue: 'div',
            control: { type: 'text' },
        },
    },
} as Meta<TypographyProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: TypographyProps) => <Typography {...args} />;

Default.args = {
    children: 'Typography \n Typography',
    variant: 'h1',
    color: { color: 'red' },
};
