import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from './Box'

const meta: Meta = {
    title: 'Components/Box',
    component: Box,
    args: {
        children: "Box"
    }
} as Meta

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: BoxProps) => <Box {...args} />

