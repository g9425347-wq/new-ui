import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';
import React from 'react';
import { fn } from '@storybook/test'

const meta: Meta = {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    args: { onDateRangeChange: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: DateRangePickerProps) => (
    <DateRangePicker {...args} />
);


Default.args = {};
