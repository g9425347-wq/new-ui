import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { fn } from '@storybook/test';

const meta: Meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    args: { onChange: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: DropdownProps) => <Dropdown {...args} />


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

Default.args = {
    id: 'SelectDropDown',
    label: 'Select Drop Down',
    options: [
        { label: 'ArcSight', value: '355', online: true },
        { label: 'BitSight', value: '54' },
        { label: 'Nessus', value: '43' },
        { label: 'Solarwinds', value: '61' },
        { label: 'Symantec EDR', value: '965', online: true },
        { label: 'Symantec DLP', value: '46', online: true },
        { label: 'Zed Proxy', value: '58' },
        { label: 'Aggregate', value: '59' },
    ],
    variant: 'multi',
    value: ['43', '58', '54'],
    helperText: 'helper text',
};
