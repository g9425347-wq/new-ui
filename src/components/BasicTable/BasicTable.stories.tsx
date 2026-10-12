import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { BasicTable, BasicTableProps, RemoteDataParam } from './BasicTable';
import React from 'react';

const meta: Meta = {
    title: 'Components/BasicTable',
    component: BasicTable,
    args: { onSelectionChange: fn() },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: BasicTableProps) => <BasicTable {...args} />

//async function fetchData(page: number, pageSize: number,) {
async function fetchData(param: RemoteDataParam) {
    let url = 'https://reqres.in/api/users?';
    url += 'per_page=' + param.limit;
    url += '&page=' + (param.page + 1);
    url += '&filter=' + param.filter;

    const result = await fetch(url).then((response) => response.json());
    console.log(JSON.stringify(param));
    // console.log(JSON.stringify(result));
    result.data.forEach((element) => {
        element['uid'] = element.id;
    });
    //.then(result => {
    return {
        data: result.data,
        page: result.page - 1,
        pageSize: param.limit,
        totalCount: result.total,
    };
    //});
}

Default.args = {
    id: 'basictable1',
    columns: [
        {
            field: 'uid',
            headerName: 'User Identifier',
            width: 50,
            flex: 1,
            hide: true
        },
        {
            field: 'first_name',
            headerName: 'First Name',
            flex: 1
        },
        {
            field: 'last_name',
            headerName: 'Last Name',
            flex: 1
        },
        { "field": "isLocked", "headerName": "Locked", "type": "boolean", "flex": 1 },
    ],
    paginationMode: 'server',
    remoteData: fetchData,
};

export const Client: Story = (args: BasicTableProps) => <BasicTable {...args} />

Client.args = {
    id: 'basictable1',
    columns: [
        { field: 'uid', headerName: 'User Identifier', width: 50, flex: 1 },
        { field: 'first_name', headerName: 'Name', flex: 1 },
        { field: 'last_name', headerName: 'Role', flex: 1 },
        { field: 'dob', headerName: 'Date of Birth', type: 'dateTime', flex: 1 },
        { field: 'isLocked', headerName: 'Is Locked', type: "boolean", "flex": 1 }
    ],
    paginationMode: 'client',
    data: [
        {
            uid: 1,
            first_name: 'Hello',
            last_name: 'World',
            dob: new Date('2020-05-12T23:50:21.817Z'),
            isLocked: true
        },
        {
            uid: 2,
            first_name: 'DataGridPro',
            last_name: 'is Awesome',
            dob: new Date('2020-05-12T23:50:21.817Z'),
            isLocked: false
        },
        {
            uid: 3,
            first_name: 'MUI',
            last_name: 'is Amazing',
            dob: new Date('2020-05-12T23:50:21.817Z'),
            isLocked: false
        },
        {
            uid: 1,
            first_name: 'Hello',
            last_name: 'World',
            dob: new Date('2020-05-12T23:50:21.817Z'),
            isLocked: true
        },
        {
            uid: 2,
            first_name: 'DataGridPro',
            last_name: 'is Awesome',
            dob: new Date('2020-05-12T23:50:21.817Z'),
            isLocked: false
        }
    ],
};
