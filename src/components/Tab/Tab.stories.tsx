import { Meta, StoryObj } from '@storybook/react';
import { TabProps, Tab } from './Tab';

const meta: Meta = {
    title: 'Components/Tab',
    component: Tab,
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = (args: TabProps) => <Tab {...args} />


Default.args = {
    type: 'mainTab',
    tabItems: [
        {
            index: 0,
            label: 'Detail',
            key: 'detail',

        },
        {
            index: 1,
            label: 'Graph',
            key: 'graph',

        },
        {
            index: 2,
            label: 'Exact Match',
            key: 'em',
            number: 5,
            loading: true
        },
        {
            index: 3,
            label: 'Attribute Match',
            key: 'am',
            number: 12,

        },
        {
            index: 4,
            label: 'Support info',
            key: 'si',
            error: true
        },
    ],
};
