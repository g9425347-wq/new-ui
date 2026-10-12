import { Meta, StoryObj } from '@storybook/react';
import { SearchBar, SearchBarProps } from './SearchBar';

const meta: Meta = {
    title: 'Components/SearchBar',
    component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: SearchBarProps) => <div><SearchBar {...args} /></div>;

Default.args = {
    onChange: (text) => { alert(text) }
}
