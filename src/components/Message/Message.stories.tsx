import { Meta, StoryObj } from '@storybook/react';
import { Message, Props } from './Message';
import { Button } from '@mui/material';

const meta: Meta = {
    title: 'Components/Message',
    component: Message
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Error: Story = (args: Props) =>
    <div>
        <Message {...args} open={true} onClose={() => alert('Close')} />
    </div>;

Error.args = {
    message: 'Error Message',
    variant: 'Error'
}

export const Success: Story = (args: Props) =>
    <div>
        <Message {...args} open={true} onClose={() => alert('Close')} />
    </div>;


Success.args = {
    message: 'Success Message',
    variant: 'Success'
}

export const Warning: Story = (args: Props) =>
    <div>
        <Message {...args} open={true} onClose={() => alert('Close')} />
    </div>;


Warning.args = {
    message: 'Warning Message',
    variant: 'Warning'
}

export const Information: Story = (args: Props) =>
    <div>
        <Message {...args} open={true} onClose={() => alert('Close')} />
    </div>;


Information.args = {
    message: 'Information Message',
    variant: 'Information'
}