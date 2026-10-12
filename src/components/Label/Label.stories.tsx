import { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

const meta: Meta = {
    title: 'Components/Label',
    component: Label
};

export default meta;

export const Default: StoryObj<LabelProps> = (args: LabelProps) => <Label {...args} />;


Default.args = {
    label: 'Label'
}