import { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from './ImageUpload';

const meta: Meta = {
    title: 'Components/ImageUpload',
    component: ImageUpload,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
    <ImageUpload />
);

Default.args = {}