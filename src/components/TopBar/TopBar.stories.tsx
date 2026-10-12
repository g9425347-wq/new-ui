import { Meta, StoryObj } from "@storybook/react";
import { TopBar, Props } from "./TopBar";
import React from "react";
import { BasicTable } from "../BasicTable/BasicTable";
import { Table, RemoteDataParam } from "../Table/Table";

const meta: Meta = {
	title: "Components/TopBar",
	component: TopBar,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const collapsedMenuWidth = "64px";
const expandedMenuWidth = "250px";

const basicTableColumns = [
	{ field: "uid", headerName: "ID", width: 90, hide: false },
	{ field: "first_name", headerName: "First Name", flex: 1, hide: false },
	{ field: "last_name", headerName: "Last Name", flex: 1, hide: false },
	{
		field: "dob",
		headerName: "Date of Birth",
		type: "dateTime",
		flex: 1,
		hide: false,
	},
	{
		field: "isLocked",
		headerName: "Locked",
		type: "boolean",
		flex: 1,
		hide: false,
	},
];

const basicTableRows = [
	{
		uid: 1,
		first_name: "Ava",
		last_name: "Patel",
		dob: new Date("2020-05-12T23:50:21.817Z"),
		isLocked: false,
	},
	{
		uid: 2,
		first_name: "Noah",
		last_name: "Kim",
		dob: new Date("2019-11-02T14:18:00.000Z"),
		isLocked: true,
	},
	{
		uid: 3,
		first_name: "Mia",
		last_name: "Garcia",
		dob: new Date("2021-01-16T10:30:00.000Z"),
		isLocked: false,
	},
	{
		uid: 4,
		first_name: "Liam",
		last_name: "Chen",
		dob: new Date("2018-07-08T08:45:00.000Z"),
		isLocked: true,
	},
	{
		uid: 5,
		first_name: "Zoe",
		last_name: "Johnson",
		dob: new Date("2022-03-21T17:05:00.000Z"),
		isLocked: false,
	},
];

const tableColumns = [
	{ field: "customer", headerName: "Customer", flex: 1, hide: false },
	{ field: "priority", headerName: "Priority", width: 120, hide: false },
	{ field: "status", headerName: "Status", width: 120, hide: false },
	{
		field: "assignedUser",
		headerName: "Assigned User",
		flex: 1,
		hide: false,
	},
	{
		field: "raisedDateTime",
		headerName: "Raised Date",
		type: "dateTime",
		width: 180,
		hide: false,
	},
	{ field: "deviceType", headerName: "Device Type", flex: 1, hide: false },
];

const tableRows = [
	{
		uid: "AL-1001",
		customer: "Acme Corp",
		priority: "Critical",
		status: "Open",
		assignedUser: "Ava Patel",
		raisedDateTime: "2026-04-29T09:00:00.000Z",
		deviceType: "Firewall",
		summary: "Firewall policy mismatch",
	},
	{
		uid: "AL-1002",
		customer: "Globex",
		priority: "High",
		status: "In Progress",
		assignedUser: "Noah Kim",
		raisedDateTime: "2026-04-28T18:10:00.000Z",
		deviceType: "Endpoint",
		summary: "Suspicious process detected",
	},
	{
		uid: "AL-1003",
		customer: "Initech",
		priority: "Medium",
		status: "Queued",
		assignedUser: "Mia Garcia",
		raisedDateTime: "2026-04-28T15:42:00.000Z",
		deviceType: "Email Gateway",
		summary: "Phishing attempt reported",
	},
	{
		uid: "AL-1004",
		customer: "Umbrella",
		priority: "Low",
		status: "Closed",
		assignedUser: "Liam Chen",
		raisedDateTime: "2026-04-27T12:15:00.000Z",
		deviceType: "SIEM",
		summary: "Noise filtered after triage",
	},
	{
		uid: "AL-1005",
		customer: "Wayne Enterprises",
		priority: "High",
		status: "Open",
		assignedUser: "Zoe Johnson",
		raisedDateTime: "2026-04-27T08:30:00.000Z",
		deviceType: "Identity",
		summary: "Repeated MFA failures",
	},
	{
		uid: "AL-1006",
		customer: "Stark Industries",
		priority: "Critical",
		status: "Open",
		assignedUser: "Ethan Brown",
		raisedDateTime: "2026-04-26T21:05:00.000Z",
		deviceType: "Cloud",
		summary: "Privilege escalation detected",
	},
	{
		uid: "AL-1007",
		customer: "Wonka Labs",
		priority: "Medium",
		status: "In Progress",
		assignedUser: "Olivia Davis",
		raisedDateTime: "2026-04-26T14:20:00.000Z",
		deviceType: "Server",
		summary: "Unexpected service restart",
	},
	{
		uid: "AL-1008",
		customer: "Hooli",
		priority: "Low",
		status: "Closed",
		assignedUser: "James Wilson",
		raisedDateTime: "2026-04-25T11:00:00.000Z",
		deviceType: "Database",
		summary: "Backup job delay",
	},
];

const tableRemoteData = async (param: RemoteDataParam) => {
	const sortedRows = [...tableRows].sort((left, right) => {
		if (!param.sort) return 0;

		const leftValue = left[param.sort as keyof (typeof tableRows)[number]];
		const rightValue =
			right[param.sort as keyof (typeof tableRows)[number]];

		if (leftValue === rightValue) return 0;
		if (leftValue === undefined) return 1;
		if (rightValue === undefined) return -1;

		const comparison = `${leftValue}`.localeCompare(`${rightValue}`);
		return param.sortOrder === "desc" ? comparison * -1 : comparison;
	});

	const start = param.page * param.limit;
	const end = start + param.limit;

	return {
		data: sortedRows.slice(start, end),
		page: param.page,
		pageSize: param.limit,
		totalCount: sortedRows.length,
	};
};

const DetailPanel = ({ row }: { row: any }) => (
	<div style={{ display: "grid", gap: "6px" }}>
		<strong>{row.uid}</strong>
		<span>{row.summary}</span>
		<span>Status: {row.status}</span>
	</div>
);

const ContentTables = () => (
	<div style={{ display: "grid", gap: "24px", width: "100%" }}>
		<div style={{ width: "100%" }}>
			<h3 style={{ margin: "0 0 12px" }}>Table</h3>
			<Table
				id="topbar-table-story"
				height={360}
				columns={tableColumns as any}
				DetailPanelComponent={DetailPanel}
				remoteData={tableRemoteData}
				isSelectBox={true}
			/>
		</div>

		<div>
			<h3 style={{ margin: "0 0 12px" }}>Basic Table</h3>
			<BasicTable
				id="topbar-basic-table-story"
				height={320}
				columns={basicTableColumns as any}
				paginationMode="client"
				data={basicTableRows}
				isSelectBox={true}
			/>
		</div>
	</div>
);

const DefaultStory: React.FC<Props> = (args) => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
		<div>
			<TopBar {...args} onMenuToggle={setMenuOpen} />
			<div
				style={{
					marginLeft: menuOpen
						? expandedMenuWidth
						: collapsedMenuWidth,
					transition: "margin-left .3s ease",
					padding: "20px",
				}}
			>
				<p style={{ marginTop: 0, marginBottom: "16px" }}>
					{/* Use the menu toggle to expand and collapse the left
					navigation, then observe how both tables respond within the
					content area. */}
					menu toggle has been removed from topbar, so this is not
					applicable anymore.
				</p>
				<ContentTables />
			</div>
		</div>
	);
};

export const Default: Story = {
	render: (args: any) => <DefaultStory {...args} />,
	args: {
		logoUrl: "https://alertfusiondemo.com/Images/AFIcon.png",
		badgeContent: "9",
		userName: "Arjun Sharma",
		userRole: "System Administrator",
		userAvtar: null,
		customers: [
			{ value: "ALL", label: "All Customer" },
			{ value: "Cust1", label: "Customer1" },
			{ value: "cust2", label: "customer 2" },
		],
		topBarMenuProps: {
			//open: true,
			menuItems: [
				{
					name: "dashboards",
					label: "Dashboards",
					path: "/dashboards",
					icon: "dashboard",
					subtext: "List of all Dashboards",
					privileges: ["DB_VIEWDASHBOARDS"],
				},
				{
					name: "alerts",
					label: "Alerts",
					path: "/alerts",
					icon: "alert",
					subtext: "List of all Alerts",
					privileges: ["AL_VIEWALERTS"],
					categoryStart: true,
				},
				{
					name: "incidents",
					label: "Incidents",
					path: "/incidents",
					icon: "incident",
					subtext: "List of all Incidents",
					privileges: ["IN_VIEWINCIDENTS"],
				},
				{
					name: "assets",
					label: "Asset Map",
					path: "/assets",
					icon: "assets",
					subtext: "List of all Assets",
					privileges: ["CM_MANAGEASSETS"],
					categoryStart: true,
				},
				{
					name: "exposures",
					label: "Attack Map (CTEM)",
					path: "/exposures",
					icon: "exposures",
					subtext: "List of all Exposure Maps",
					privileges: ["EX_VIEWEXPOSURE"],
				},
				{
					name: "vulnerabilities",
					label: "Vulnerabilities",
					path: "/vulnerabilities",
					icon: "vulnerability",
					subtext: "List of all Vulnerabilities",
					privileges: ["VU_VIEWVULNERABILITY"],
				},
				{
					name: "compliances",
					label: "Compliances",
					path: "/compliances",
					icon: "compliance",
					subtext: "List of all Compliance Gaps",
					privileges: ["CO_VIEWCOMPLIANCE"],
				},
				{
					name: "kanbans",
					label: "Kanban",
					path: "/kanbans",
					icon: "kanban-config",
					subtext: "List of all tasks",
					privileges: ["KB_VIEWKANBAN"],
					categoryStart: true,
				},
				{
					name: "custom-reports",
					label: "Reports",
					path: "/reports/custom-reports",
					icon: "report",
					subtext: "Custom Reports",
					privileges: ["RP_VIEWREPORTS"],
				},
				{
					name: "scans",
					label: "Scans",
					path: "/vulnerabilities/scans",
					icon: "scan-scheduler",
					subtext: "Configure Scans",
					categoryStart: true,
					subMenuItems: [
						{
							name: "environmentscans",
							label: "Environment Scans",
							path: "/cmdbs/environmentscans",
							icon: "environment",
							subtext: "Configure Environment Scans",
							privileges: ["CM_VIEWENVIRONMENTSCANS"],
						},
						{
							name: "vulnerabilityscans",
							label: "Vulnerability Scans",
							path: "/vulnerabilities/scans",
							icon: "vulnerability",
							subtext: "Configure Vulnerability Scans",
							privileges: ["VU_VIEWSCANS"],
						},
						{
							name: "compliancescans",
							label: "Compliance Scans",
							path: "/compliancescans",
							icon: "compliance",
							subtext: "Configure Compliance Scans",
							privileges: ["CO_VIEWCOMPLIANCESCANS"],
						},
					],
					privileges: [
						"VU_VIEWSCANS",
						"CO_VIEWCOMPLIANCESCANS",
						"CM_VIEWENVIRONMENTSCANS",
					],
				},
				{
					name: "changerequests",
					label: "Change Requests",
					path: "/changerequests",
					icon: "change-request",
					subtext: "List of all change requests",
					privileges: ["CR_VIEWCHANGEREQUESTS"],
					categoryStart: true,
				},
				{
					name: "configurations",
					label: "Configurations",
					path: "/configurations/general",
					icon: "config",
					subtext: "List of all Configurations",
					categoryStart: true,
					subMenuItems: [
						{
							name: "dashboardconfigurations",
							label: "Dashboards",
							path: "/configurations/dashboards",
							icon: "dashboard",
							subtext: "Dashboard Configurations",
							privileges: ["DB_MANAGEDASHBOARDS"],
						},
						{
							name: "alertconfigurations",
							label: "Alerts",
							path: "/configurations/alerts",
							icon: "alert",
							subtext: "Alert Configurations",
							privileges: [
								"AL_MANAGEDEVICETYPES",
								"AL_MANAGEACTIONS",
								"AL_MANAGEPLAYBOOKS",
								"AL_MANAGERULES",
								"AL_MANAGESLAS",
								"AL_MANAGENOTIFICATIONS",
							],
						},
						{
							name: "incidentconfigurations",
							label: "Incidents",
							path: "/configurations/incidents",
							icon: "incident",
							subtext: "Incident Configurations",
							privileges: [
								"IN_MANAGEACTIONS",
								"IN_MANAGEPLAYBOOKS",
								"IN_MANAGEINCIDENTTYPES",
								"IN_MANAGENOTIFICATIONS",
							],
						},
						{
							name: "complianceconfigurations",
							label: "Compliances",
							path: "/configurations/compliances",
							icon: "compliance",
							subtext: "Compliance Configurations",
							privileges: [
								"CO_MANAGECOMPLIANCESCANSOURCES",
								"CO_MANAGECOMPLIANCESCANTOOLS",
								"CO_MANAGEACTIONS",
								"CO_MANAGERULES",
								"CO_MANAGESLAS",
								"CO_MANAGECOMPLIANCEFIELDS",
							],
						},
						{
							name: "vulnerabilityconfigurations",
							label: "Vulnerabilities",
							path: "/configurations/vulnerabilities",
							icon: "vulnerability",
							subtext: "Vulnerability Configurations",
							privileges: [
								"VU_MANAGESCANDEVICES",
								"VU_MANAGEACTIONS",
								"VU_MANAGERULES",
								"VU_MANAGESLAS",
								"VU_MANAGEEVULNERABILITYFIELDS",
							],
						},
						{
							name: "exposureconfigurations",
							label: "Exposures",
							path: "/configurations/exposures",
							icon: "exposures",
							subtext: "Exposure Configurations",
							privileges: ["EX_MANAGEACTIONS"],
						},
						{
							name: "changerequestconfigurations",
							label: "Change Requests",
							path: "/configurations/changerequests",
							icon: "change-request",
							subtext: "Change Request Configurations",
							privileges: [
								"CR_MANAGECHANGEREQUESTTYPES",
								"CR_MANAGESLAS",
							],
						},
						{
							name: "kanbanconfigurations",
							label: "Kanbans",
							path: "/configurations/kanbans",
							icon: "kanban-config",
							subtext: "Kanban Configurations",
							privileges: ["KB_MANAGEKANBAN"],
						},
						{
							name: "ReportConfigurations",
							label: "Reports",
							path: "/configurations/reports",
							icon: "report",
							subtext: "Report Configurations",
							privileges: ["RP_MANAGEREPORTS"],
						},
						{
							name: "cmdbconfigurations",
							label: "CMDBs",
							path: "/configurations/cmdbs",
							icon: "cmdb",
							subtext: "CMDB Configurations",
							privileges: ["CM_MANAGECMDB"],
						},
						{
							name: "environmentconfigurations",
							label: "Environments",
							path: "/configurations/environments",
							icon: "environment",
							subtext: "Environment Configurations",
							privileges: ["CM_MANAGEENVIRONMENTS"],
						},
						{
							name: "WorkflowConfigurations",
							label: "Workflows",
							path: "/configurations/workflows",
							icon: "workflow",
							subtext: "Workflow Configurations",
							privileges: ["CF_MANAGEWORKFLOWS"],
						},
						{
							name: "generalconfigurations",
							label: "General",
							path: "/configurations/general",
							icon: "config",
							subtext: "Manage users, settings etc.",
							privileges: [
								"CF_MANAGEUSERS",
								"CF_MANAGEROLES",
								"CF_MANAGECUSTOMERS",
								"CF_MANAGELOOKUPS",
								"CF_MANAGESETTINGS",
							],
						},
						{
							name: "cmdbslist",
							label: "CMDBConfig",
							path: "/cmdbs",
							icon: "cmdb",
							subtext: "List of all CMDBs",
							privileges: ["CM_VIEWCMDB"],
						},
					],
					privileges: ["GL_MANAGECONFIGURATIONS"],
				},
			],
		},
	},
};

const DEMO_PAGES = [
	{ label: "Dashboards", path: "/dashboards" },
	{ label: "Alerts", path: "/alerts" },
	{ label: "Vulnerabilities", path: "/vulnerabilities" },
	{ label: "Vulnerability Scans", path: "/vulnerabilityscans" },
	{ label: "Compliance", path: "/compliances" },
	{ label: "Compliance Scans", path: "/compliancescans" },
	{ label: "Reports", path: "/reports" },
	{ label: "General Config", path: "/configurations/general" },
];

const ActivePathStory: React.FC<Props> = (args) => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [activePath, setActivePath] = React.useState("/alerts");

	const storyArgs = {
		...args,
		topBarMenuProps: {
			...args.topBarMenuProps,
			activePath,
		},
	};

	return (
		<div>
			<TopBar {...storyArgs} onMenuToggle={setMenuOpen} />
			<div
				style={{
					marginLeft: menuOpen
						? expandedMenuWidth
						: collapsedMenuWidth,
					transition: "margin-left .3s ease",
					padding: "20px",
				}}
			>
				<p style={{ marginBottom: "16px", fontWeight: 600 }}>
					Current active path: <code>{activePath}</code>
				</p>
				<p style={{ marginBottom: "12px" }}>
					Click a link below to simulate navigation and see the active
					menu item update:
				</p>
				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
					{DEMO_PAGES.map((page) => (
						<button
							key={page.path}
							onClick={() => setActivePath(page.path)}
							style={{
								padding: "8px 14px",
								cursor: "pointer",
								borderRadius: "4px",
								border:
									activePath === page.path
										? "2px solid #006BA6"
										: "1px solid #ccc",
								fontWeight:
									activePath === page.path ? 700 : 400,
								background:
									activePath === page.path
										? "#e8f3fb"
										: "#fff",
							}}
						>
							{page.label}
						</button>
					))}
				</div>
				<div style={{ marginTop: "24px" }}>
					<ContentTables />
				</div>
			</div>
		</div>
	);
};

export const ActivePath: Story = {
	render: (args: any) => <ActivePathStory {...args} />,
	args: Default.args,
};
