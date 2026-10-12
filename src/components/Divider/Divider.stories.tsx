import { Meta, StoryObj } from '@storybook/react';
import { Divider, Props } from './Divider';

const meta: Meta = {
    title: 'Components/Divider',
    component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => <Divider {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

Default.args = {
    label: 'Label',
};
