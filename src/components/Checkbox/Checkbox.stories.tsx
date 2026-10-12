import { Meta, StoryObj } from '@storybook/react';
import { CheckBox, Props } from './Checkbox';

const meta: Meta = {
    title: 'Components/Checkbox',
    component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = (args: Props) => (
    <div>
        <CheckBox {...args} />
        <CheckBox checked={true} />
        <CheckBox checked={false} />
    </div>
);

Default.args = {

}