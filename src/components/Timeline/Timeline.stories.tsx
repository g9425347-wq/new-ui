import { Typography } from '../Typography/Typography';
import { Meta, StoryObj } from '@storybook/react';
import { Timeline, Props } from './Timeline';
import { RemoteDataParam, RemoteDataResult, Table } from '../Table/Table';

const meta: Meta = {
    title: 'Components/Timeline',
    component: Timeline,
};

export default meta;
type Story = StoryObj<typeof meta>

const DetailComponent = ({ row }) => {
    return <div style={{ height: '200px' }}>
        {JSON.stringify(row)}
    </div>
}

//async function fetchData(page: number, pageSize: number,) {
async function fetchData(param: RemoteDataParam) {
    let url = 'https://reqres.in/api/users?';
    url += 'per_page=' + param.limit;
    url += '&page=' + (param.page + 1);
    url += '&filter=' + param.filter;

    const result = await fetch(url).then((response) => response.json());
    console.log(JSON.stringify(param));
    console.log(JSON.stringify(result));
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

export const Default: Story<Props> = (args) => <div css={() => ({ width: '100%', display: 'flex', gap: '10px' })} >
    <div >
        <Timeline {...args} />
    </div>
</div>;


Default.args = {
    content: <div css={(theme: any) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        minWidth: '400px',
        maxWidth: '500px'
    })}>
        <div css={(theme: any) => ({
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0px 2px 2px 2px',
            gap: '10px'
        })}>
            <Typography variant="subtitle2" fontWeight="400">
                Message Message
            </Typography>
            <Typography variant="subtitle2" fontWeight="400">
                Time Time
            </Typography>
        </div>
        <div css={(theme: any) => ({
            padding: '10px 5px',
            boxShadow: `0px 0px 4px ${theme.palette.shadow.light}`,
            borderRadius: '2px',
            wordWrap: 'break-word'
        })}>
            <Typography variant="subtitle2" fontWeight="400">
                Comments Comments Comments
            </Typography>
        </div>
    </div>,
    advancedContent: < div css={(theme: any) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        width: '500px',
    })}>
        <div css={(theme: any) => ({
            padding: '10px 5px',
            boxShadow: `0px 0px 4px ${theme.palette.shadow.dark}`,
            borderRadius: '2px',
            wordWrap: 'break-word',
            backgroundColor: 'white'
        })}>
            <div css={(theme: any) => ({
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px'
            })}>
                <Typography variant="subtitle2" fontWeight="500">
                    getActivityMessage(activity).message
                </Typography>
                <Typography variant="subtitle2" fontWeight="400">
                    dateTime
                </Typography>
            </div>
            <Typography variant="subtitle2" fontWeight="400">
                activity.comments
            </Typography>
        </div>
    </div >,
    key: '1',
    icon: 'edit',
    connector: true,
    expand: false,
};
