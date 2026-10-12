import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Table, TableProps, RemoteDataParam } from "./Table";
import { SLA } from "../SLA/SLA";
import React from "react";

const meta: Meta = {
	title: "Components/Table",
	component: Table,
	args: { onSelectionChange: fn() },
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: TableProps) => (
	<div>
		<Table {...args} />
	</div>
);

//async function fetchData(page: number, pageSize: number,) {
async function fetchData(param: RemoteDataParam) {
	// let url = 'https://reqres.in/api/users?';
	// url += 'per_page=' + param.limit;
	// url += '&page=' + (param.page + 1);
	// url += '&filter=' + param.filter;
	// const result = await fetch(url).then((response) => response.json());

	const url = `https://34.198.41.114/api/v1/alerts?filter=${param.filter}&limit=20&sort=raisedDateTime&sortOrder=desc`;
	const result = await fetch(url, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOiJhcGl1c2VyIiwiUm9sZVVpZCI6IkFQSUFDQ0VTUyIsIm5iZiI6MTc5MDIzNDcwMSwiZXhwIjoxNzkwMzIxMTAxLCJpc3MiOiJzZWNnZW5pZS5haSIsImF1ZCI6InNlY2dlbmllLmFpIn0.Fr8IRWryICiWTuQ5VUAyW77h6BLhFfFMcvJVT1okZj0",
		},
	}).then((response) => response.json());
	console.log(JSON.stringify(param));
	console.log(JSON.stringify(result));
	// result.data.forEach((element) => {
	//     element['uid'] = element.id;
	// });
	//.then(result => {
	return {
		data: result.result,
		page: result.page - 1,
		pageSize: param.limit,
		totalCount: result.total,
	};
	//});
}

const DetailComponent = ({ row }) => {
	return <div style={{ height: "200px" }}>{JSON.stringify(row)}</div>;
};

Default.args = {
	id: "basictable1",
	columns: [
		{
			field: "customer",
			headerName: "Customer",
			type: "list",
			width: "",
			flex: 1,
			hide: false,
		},
		{
			field: "priority",
			headerName: "Priority",
			width: 120,
			hide: false,
		},
		{
			field: "status",
			headerName: "Status",
			type: "list",
			width: 100,
			flex: "",
			hide: false,
		},
		{
			field: "assignedUser",
			headerName: "Assigned to User",
			type: "list",
			width: "",
			flex: 1,
			hide: false,
		},
		{
			field: "attackCategory",
			headerName: "Attack Category",
			type: "list",
			width: "",
			flex: 1,
			hide: false,
		},
		{
			field: "sourceIpAddress",
			headerName: "Source IP",
			type: "array",
			width: "",
			flex: 1,
			hide: false,
		},
		{
			field: "sla",
			headerName: "SLA",
			width: 220,
			hide: false,
			sortable: false,
			filterable: false,
			renderCell: (params: GridRenderCellParams) => (
				<SLA
					raisedDateTime={params.row.raisedDateTime}
					dueDateTime={params.row.dueDateTime}
					responseDueDateTime={params.row.responseDueDateTime}
					completedDateTime={params.row.closedDateTime}
					isOpen={false}
					isFulfilled={true}
				/>
			),
		},
		{
			field: "raisedDateTime",
			headerName: "Raised Date",
			width: 180,
			type: "dateTime",
			hide: false,
		},
		{
			field: "deviceType",
			headerName: "Device Type",
			type: "list",
			width: "",
			flex: 1,
			hide: false,
		},
		{
			field: "details",
			headerName: "Details",
			type: "text",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceReference",
			headerName: "Reference",
			type: "text",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceHostname",
			headerName: "Source Hostname",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceEmail",
			headerName: "Source Email",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceFilename",
			headerName: "Source Filename",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationHostname",
			headerName: "Destination Hostname",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationEmail",
			headerName: "Destination Email",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationFilename",
			headerName: "Destination Filename",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "outcome",
			headerName: "Outcome",
			type: "list",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "uid",
			headerName: "Alert Identifier",
			type: "text",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "responseDueDateTime",
			headerName: "Response Due Date",
			width: 180,
			type: "dateTime",
			hide: true,
		},
		{
			field: "dueDateTime",
			headerName: "Due Date",
			width: 180,
			type: "dateTime",
			hide: true,
		},
		{
			field: "destinationIpAddress",
			headerName: "Destination IP",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "warningDueDateTime",
			headerName: "Warning Due Date",
			width: 180,
			type: "dateTime",
			hide: true,
		},
		{
			field: "attackSubCategory",
			headerName: "Attack Sub-category",
			type: "list",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "summary",
			headerName: "Summary",
			type: "text",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceExternalIpAddress",
			headerName: "Source External IP",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourcePort",
			headerName: "Source Port",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceIpv6",
			headerName: "Source IPv6",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceFilepath",
			headerName: "Source Filepath",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceFilehash",
			headerName: "Source Filehash",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceDomain",
			headerName: "Source Domain",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "sourceGeoPoint",
			headerName: "Source Geo Point",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationExternalIpAddress",
			headerName: "Destination External IP",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationPort",
			headerName: "Destination Port",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationFilepath",
			headerName: "Destination Filepath",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationUrl",
			headerName: "Destination Url",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationDomain",
			headerName: "Destination Domain",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
		{
			field: "destinationGeoPoint",
			headerName: "Destination Geo Point",
			type: "array",
			width: "",
			flex: 1,
			hide: true,
		},
	],
	//DetailPanelComponent: ({ row }) => <div style={{ padding: '20px' }}>{JSON.stringify(row)}{row.avatar}</div>,
	DetailPanelComponent: DetailComponent,
	paginationMode: "server",
	remoteData: fetchData,
};

// Mock rows exercising each SLA state (on track, breached, fulfilled) for the demo below.
const now = Date.now();
const hoursFromNow = (hours: number) => new Date(now + hours * 60 * 60 * 1000);
const hoursAgo = (hours: number) => new Date(now - hours * 60 * 60 * 1000);

const slaRows = [
	{
		uid: "1",
		customer: "Acme Corp",
		priority: "High",
		raisedDateTime: hoursAgo(4),
		dueDateTime: hoursFromNow(4),
		responseDueDateTime: hoursFromNow(4),
		isOpen: true,
	},
	{
		uid: "2",
		customer: "Globex Inc",
		priority: "Critical",
		raisedDateTime: hoursAgo(30),
		dueDateTime: hoursAgo(6),
		isOpen: false,
	},
	{
		uid: "3",
		customer: "Initech",
		priority: "Medium",
		raisedDateTime: hoursAgo(20),
		dueDateTime: hoursAgo(2),
		completedDateTime: hoursAgo(5),
		isFulfilled: true,
	},
];

// Local remoteData mock so the story doesn't depend on any live endpoint.
async function fetchSlaData(param: RemoteDataParam) {
	return {
		data: slaRows,
		page: 0,
		pageSize: param.limit,
		totalCount: slaRows.length,
	};
}

export const WithSlaColumn: Story = (args: TableProps) => (
	<div>
		<Table {...args} />
	</div>
);

WithSlaColumn.args = {
	id: "slatable1",
	columns: [
		{ field: "customer", headerName: "Customer", flex: 1, hide: false },
		{ field: "priority", headerName: "Priority", width: 120, hide: false },
		{
			field: "sla",
			headerName: "SLA",
			width: 220,
			hide: false,
			sortable: false,
			filterable: false,
			renderCell: (params: GridRenderCellParams) => (
				<SLA
					raisedDateTime={params.row.raisedDateTime}
					dueDateTime={params.row.dueDateTime}
					responseDueDateTime={params.row.responseDueDateTime}
					completedDateTime={params.row.completedDateTime}
					isOpen={params.row.isOpen}
					isFulfilled={params.row.isFulfilled}
				/>
			),
		},
	],
	DetailPanelComponent: DetailComponent,
	paginationMode: "server",
	remoteData: fetchSlaData,
};
