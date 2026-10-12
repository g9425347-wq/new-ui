import { Meta, StoryObj } from '@storybook/react';
import { FileUpload, FileUploadProps } from './FileUpload';
import React from 'react';

const meta: Meta = {
    title: 'Components/FileUpload',
    component: FileUpload,
};

const onChange = (items: any, rejectedFiles: string) => {
    let fileExtn = '';
    const allowedFiles = ['json', 'txt'];
    items.map((file: any) => {
        fileExtn = '';
        fileExtn = file.name.substring(file.name.lastIndexOf('.') + 1);

        if (allowedFiles?.includes(fileExtn)) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log(file);
            };
            reader.readAsDataURL(file);
        }
    });
    if (rejectedFiles != '') {
        //consider having this shown in Dialog box in the actual screen
        alert(
            'Following Files are not uploaded due to the restrictions on file extensions : ' +
            rejectedFiles.substring(1)
        );
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: FileUploadProps) => (
    <div>
        <FileUpload {...args} />
    </div>
);


Default.args = {
    allowedFileTypes: 'docx,doc,xlsx,jpg,pdf',
    disabled: false,
    base64Files: [
        {
            fileName: 'a.txt',
            fileType: 'text/plain',
            fileContent: 'SmFpY2luZA==',
        },
    ],
};
