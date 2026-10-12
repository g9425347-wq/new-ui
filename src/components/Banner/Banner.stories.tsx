import { Meta, StoryObj } from '@storybook/react';
import { Banner, BannerProps } from './Banner';
import { IconButton } from '../IconButton/IconButton';
import { SearchBar } from '../SearchBar/SearchBar';
import React from 'react';


const meta: Meta = {
    title: 'Components/Banner',
    component: Banner,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: BannerProps) =>
    <Banner {...args} />

Default.args = {
    leftChildren: <div css={{ gap: '10px' }}>
        <IconButton title="Add" icon="add" />
    </div>,
    rightChildren: (
        <div css={{ display: 'flex', gap: '10px' }}>
            <SearchBar></SearchBar>
            <IconButton title="Export" icon="export" />
            <IconButton title="Refresh" icon="refresh" />
        </div>
    ),
};
