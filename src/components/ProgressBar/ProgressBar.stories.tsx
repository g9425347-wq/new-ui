import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = (args) => <ProgressBar {...args} />;

Default.args = {}
