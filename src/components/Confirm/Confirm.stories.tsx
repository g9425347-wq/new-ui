import { Meta, StoryObj } from '@storybook/react';
import { Confirm, Props } from './Confirm';
import React from 'react';

const meta: Meta = {
    title: 'Components/Confirm',
    component: Confirm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => (
    <Confirm
        label="Delete record ?"
        onClickYes={() => alert('Clicked Yes')}
        onClickCancel={() => alert('Clicked Cancel')}
        {...args}
    />
);

Default.args = {}