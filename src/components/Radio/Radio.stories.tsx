import { Meta, StoryObj } from '@storybook/react';
import { Radio, Props } from './Radio';

const meta: Meta = {
    title: 'Components/Radio',
    component: Radio
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = (args: Props) => <Radio {...args} />;

Default.args = {
    label: 'Label',
    value: 'TextField value'
}
