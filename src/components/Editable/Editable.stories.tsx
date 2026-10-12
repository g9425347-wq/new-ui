import { Meta, StoryObj } from '@storybook/react';
import { Editable, Props } from './Editable';

const meta: Meta = {
    title: 'Components/Editable',
    component: Editable,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => <Editable {...args} />;

Default.args = {
    label: 'Label',
    text: 'text',
    type: 'type',
    children: <input
        type="text"
        name="task"
        placeholder="Write a task name"
        value="nothing"
        onChange={e => console.log(e)}
    />
};
