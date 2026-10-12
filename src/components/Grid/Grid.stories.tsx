import { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { GridProps } from '@mui/material';

const meta: Meta = {
    title: 'Components/Grid',
    component: Grid,
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = (args: GridProps) => <Grid container spacing={2} {...args}>
    <Grid item xs={8}>
        <div>xs=8</div>
    </Grid>
    <Grid item xs={4}>
        <div>xs=4</div>
    </Grid>
    <Grid item xs={4}>
        <div>xs=4</div>
    </Grid>
    <Grid item xs={8}>
        <div>xs=8</div>
    </Grid>
</Grid>;


Default.args = {
    spacing: 2,
};
