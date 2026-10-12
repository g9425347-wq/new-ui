import { Meta, StoryObj } from '@storybook/react';
import { Hyperlink, HyperlinkProps } from './Hyperlink';

const meta: Meta = {
    title: 'Components/Hyperlink',
    component: Hyperlink
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: HyperlinkProps) => <Hyperlink {...args} />;

Default.args = {
    children: 'Click me',
    href: 'link/link',
    className: 'primary',
    target: "_blank"
};
