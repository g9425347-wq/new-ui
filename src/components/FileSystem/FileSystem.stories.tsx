import { Meta, StoryObj } from '@storybook/react';
import { FileSystem, Props } from './FileSystem';
import React from 'react';

const meta: Meta = {
    title: 'Components/FileSystem',
    component: FileSystem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => (
    <FileSystem
        node={{
            id: "root",
            name: "Jogflow",
            type: "folder",
            children: [
                {
                    id: "sd7g8v7sd87gd8v7g",
                    name: "Common Workflows",
                    type: "folder",
                    children: [
                        {
                            id: "afga87fga87fga0s8",
                            name: "jogflow.alerts.post.workflowfailure",
                            type: "item",
                            refId: "jogflow.alerts.post.workflowfailure"
                        },
                        {
                            id: "asgh87sagf8a7fgas87",
                            name: "jogflow.configurations.generate.token",
                            type: "item",
                            refId: "jogflow.configurations.generate.token"
                        }
                    ]
                },
                {
                    id: "asgd87asgf78asgf",
                    name: "Alerts",
                    type: "folder",
                    children: [
                        {
                            id: "asgd87asgf78asgf",
                            name: "Insert Process",
                            type: "folder",
                            children: [
                                {
                                    id: "gva7sgf43564gfs7g",
                                    name: "jogflow.alerts.insertprocess",
                                    type: "item",
                                    refId: "jogflow.alerts.insertprocess"
                                },
                                {
                                    id: "gva7sgf5357gfs7g",
                                    name: "jogflow.alerts.insertprocess.closeexactmatch",
                                    type: "item",
                                    refId: "jogflow.alerts.insertprocess.closeexactmatch"
                                },

                            ]
                        },
                        {
                            id: "asgdsssgf78asgf",
                            name: "Update Process",
                            type: "folder",
                            children: []
                        },
                        {
                            id: "gva7sgsdddadgfs7g",
                            name: "startup.jogflow.rabbitmq.alert.receive",
                            type: "item",
                            refId: "startup.jogflow.rabbitmq.alert.receive"
                        },
                        {
                            id: "gva7sgssda57gfs7g",
                            name: "jogflow.alerts.message.handler",
                            type: "item",
                            refId: "jogflow.alerts.message.handler"
                        }
                    ]
                }
            ]
        }}
        height="400px"
        width="100%"
        onChange={(node: any) => console.log(node)}
        onView={(node: any) => alert(`View ${node.name}`)}
    />
);

Default.args = {}