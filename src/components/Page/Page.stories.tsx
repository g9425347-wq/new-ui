import { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta = {
    title: 'Components/Page',
    component: Page,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => <Page {...args} />;


Default.args = {
    component: 'div',
    children: <div>This is a page</div>
};
