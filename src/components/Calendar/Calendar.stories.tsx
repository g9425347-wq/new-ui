import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta = {
    title: 'Components/Calendar',
    component: Calendar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
    <Calendar schedule={[
        {
            "uid": "FFSCAN2",
            "description": "Fortify Scan 2",
            "startDateTime": "2024-09-05T12:50:27.405Z",
            "type": "REQUEST"
        },
        {
            "uid": "FFSCAN3",
            "description": "Fortify Scan 3",
            "startDateTime": "2024-09-07T13:50:27.405Z",
            "type": "APPROVE"
        },
        {
            "uid": "FFSCAN3",
            "description": "Fortify Scan 3",
            "startDateTime": "2024-09-07T13:50:27.405Z",
            "type": "REJECT"
        },
        {
            "uid": "FFSCAN1",
            "description": "Fortify Scan",
            "startDateTime": "2024-09-09T11:50:27.405Z",
            "type": "INPROGRESS"
        },
        {
            "uid": "FFSCAN4",
            "description": "Fortify Scan 4",
            "startDateTime": "2024-09-15T04:50:27.405Z",
            "type": "COMPLETED"
        },
        {
            "uid": "FFSCAN5",
            "description": "Fortify Scan 5",
            "startDateTime": "2024-09-22T06:50:27.405Z",
            "type": "REPORTGENERATED"
        }
    ]} {...args} />

);

Default.args = {}
