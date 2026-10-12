import { Meta, StoryObj } from '@storybook/react';
import { FilePreview, FilePreviewProps } from './FilePreview';

const meta: Meta = {
    title: 'Components/FilePreview',
    component: FilePreview
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: FilePreviewProps) => <div>
    <FilePreview {...args} />
</div>;

Default.args = {
    value: [
        {
            fileName: 'a.txt',
            fileType: 'text/plain',
            fileContent: 'SmFpY2luZA==',
        },
    ],
    remove: true,
};
