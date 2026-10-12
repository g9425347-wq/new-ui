import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { DatePicker, DatePickerProps } from './DatePicker';
import React from 'react';

const meta: Meta = {
    title: 'Components/DatePicker',
    args: { onChange: fn() },
    component: DatePicker,
    argTypes: {
        value: {
            control: { type: 'date' }
        }
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: DatePickerProps) => (
    <DatePicker {...args} />
);

Default.args = {
    label: 'Date'
}
