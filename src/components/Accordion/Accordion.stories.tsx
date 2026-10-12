import { Button, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

const meta: Meta = {
    title: 'Components/Accordion',
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: AccordionProps) => (
    <div>
        <Accordion {...args}></Accordion>
    </div>
);

Default.args = {
    summary: 'Summary',
    details: <Typography variant="h2">Details</Typography>,
    actions: <Button>Action Buttons</Button>,
};
