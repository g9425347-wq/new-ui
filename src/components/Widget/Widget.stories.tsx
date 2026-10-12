import { Meta, StoryObj } from "@storybook/react";
import { Widget, WidgetProps } from "./Widget";
import { random } from "lodash";
import { fn } from "@storybook/test";
import React from "react";
import { useTheme } from "@mui/material";

const drilldownHandler = (
	groupUid: string,
	dashboard: any,
	widgetUid: string,
	customerUid?: string,
	fromDate?: string,
	toDate?: string,
) => {
	console.log(fromDate);
	// var url = 'https://www.w3schools.com/';
	// var link = document.createElement('a');
	// link.setAttribute('href', url);
	// link.setAttribute('target', '_blank');
	// link.click();
};

const dateRangeHandler = (
	groupUid: any,
	dashboard: any,
	widgetUid: any,
	customerUid: any,
	s: any,
	a: any,
) => {
	console.log(dashboard);
};

const meta: Meta = {
	title: "Components/Widget",
	component: Widget,
	args: { onEditClick: fn(), onLayoutChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = (args: WidgetProps) => (
	<div
		css={(theme: any) => ({
			padding: "30px",
			backgroundColor:
				theme?.palette?.mode === "dark" ? "#121212" : "#f8fafc",
			minHeight: "100vh",
			boxSizing: "border-box",
		})}
	>
		<div
			style={{
				width: "100%",
				display: "flex",
				gap: "10px",
			}}
		>
			<Widget {...args} />
		</div>
	</div>
);

Display.args = {
	type: "display",
	onDrillDown: drilldownHandler,
	getData: (
		groupUid: string,
		widgetUId: string,
		customerUid?: string,
		fromDate?: string,
		toDate?: string,
	) => {
		if (widgetUId === "FCT1") {
			return new Promise<any>(async (resolve, reject) => {
				resolve(random(100, 99999999));
			});
		} else if (widgetUId === "FCT2") {
			return new Promise<any>(async (resolve, reject) => {
				resolve([
					{
						name: "Installation & Developers",
						data: [
							43934, 48656, 65165, 81827, 112143, 142383, 171533,
							165174, 155157, 161454, 154610,
						],
					},
					{
						name: "Manufacturing",
						data: [
							24916, 37941, 29742, 29851, 32490, 30282, 38121,
							36885, 33726, 34243, 31050,
						],
					},
					{
						name: "Sales & Distribution",
						data: [
							11744, 30000, 16005, 19771, 20185, 24377, 32147,
							30912, 29243, 29213, 25663,
						],
					},
					{
						name: "Operations & Maintenance",
						data: [
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							11164,
							11218,
							10077,
						],
					},
					{
						name: "Other",
						data: [
							21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300,
							13053, 11906, 10073,
						],
					},
				]);
			});
		} else if (widgetUId === "FCT3") {
			return new Promise<any>(async (resolve, reject) => {
				resolve({
					categories: null,
					series: [
						{
							name: "low",
							data: [
								{
									radius: "50%",
									innerRadius: "25%",
									y: 1,
								},
							],
						},
						{
							name: "critical",
							data: [
								{
									radius: "75%",
									innerRadius: "50%",
									y: 11,
								},
							],
						},
						{
							name: "high",
							data: [
								{
									radius: "100%",
									innerRadius: "75%",
									y: 19,
								},
							],
						},
						{
							name: "medium",
							data: [
								{
									radius: "125%",
									innerRadius: "100%",
									y: 137,
								},
							],
						},
					],
				});
			});
		} else if (widgetUId == "FCT4") {
			return new Promise<any>(async (resolve, reject) => {
				resolve([
					{
						name: "sent to action",
						data: [1, 1, 1, 0, 2, 3, 3, 2, 0, 4],
					},
					{
						name: "closed",
						data: [3, 2, 2, 3, 3, 0, 1, 0, 2, 0],
					},
					{
						name: "open",
						data: [3, 5, 2, 3, 8, 2, 2, 2, 3, 7],
					},
					{
						name: "assigned",
						data: [4, 4, 1, 0, 0, 1, 3, 1, 0, 5],
					},
					{
						name: "escalated",
						data: [4, 0, 0, 1, 0, 3, 0, 8, 0, 0],
					},
					{
						name: "re-opened",
						data: [5, 1, 2, 0, 1, 1, 1, 1, 0, 0],
					},
				]);
			});
		} else if (widgetUId == "FCT5") {
			return new Promise<any>(async (resolve, reject) => {
				resolve({
					categories: [
						"1.1.1.1",
						"2.2.2.2",
						"3.3.3.3",
						"4.4.4.4",
						"5.5.5.5",
						"7.7.7.7",
						"9.9.9.9",
						"10.10.10.10",
						"8.8.8.8",
						"6.6.6.6",
					],
					series: [
						{
							name: "sent to action",
							data: [1, 1, 1, 0, 2, 3, 3, 2, 0, 4],
						},
						{
							name: "closed",
							data: [3, 2, 2, 3, 3, 0, 1, 0, 2, 0],
						},
						{
							name: "open",
							data: [3, 5, 2, 3, 8, 2, 2, 2, 3, 7],
						},
						{
							name: "assigned",
							data: [4, 4, 1, 0, 0, 1, 3, 1, 0, 5],
						},
						{
							name: "escalated",
							data: [4, 0, 0, 1, 0, 3, 0, 8, 0, 0],
						},
						{
							name: "re-opened",
							data: [5, 1, 2, 0, 1, 1, 1, 1, 0, 0],
						},
					],
				});
			});
		} else if (widgetUId == "FCT6") {
			return new Promise<any>(async (resolve, reject) => {
				resolve({
					series: [
						{
							name: "support emails",
							data: [
								{
									name: null,
									x: 1719878400000,
									y: 11,
									z: 1,
								},
							],
						},
						{
							name: "avanan",
							data: [
								{
									name: null,
									x: 1719619200000,
									y: 4,
									z: 1,
								},
								{
									name: null,
									x: 1719792000000,
									y: 5,
									z: 1,
								},
							],
						},
						{
							name: "microsoft defender",
							data: [
								{
									name: null,
									x: 1719964800000,
									y: 3,
									z: 2,
								},
							],
						},
						{
							name: "crowdstrike",
							data: [
								{
									name: null,
									x: 1719878400000,
									y: 4,
									z: 3,
								},
							],
						},
						{
							name: "identity protection",
							data: [
								{
									name: null,
									x: 1719878400000,
									y: 16,
									z: 2,
								},
								{
									name: null,
									x: 1719964800000,
									y: 23,
									z: 1,
								},
							],
						},
						{
							name: "microsoft dlp",
							data: [
								{
									name: null,
									x: 1719705600000,
									y: 23,
									z: 2,
								},
								{
									name: null,
									x: 1719964800000,
									y: 4,
									z: 1,
								},
							],
						},
						{
							name: "bitsight",
							data: [
								{
									name: null,
									x: 1719705600000,
									y: 14,
									z: 1,
								},
								{
									name: null,
									x: 1720396800000,
									y: 9,
									z: 3,
								},
							],
						},
						{
							name: "securityscorecard",
							data: [
								{
									name: null,
									x: 1719792000000,
									y: 4,
									z: 1,
								},
								{
									name: null,
									x: 1719792000000,
									y: 13,
									z: 3,
								},
							],
						},
						{
							name: "arcsight",
							data: [
								{
									name: null,
									x: 1719619200000,
									y: 12,
									z: 2,
								},
								{
									name: null,
									x: 1719619200000,
									y: 23,
									z: 1,
								},
								{
									name: null,
									x: 1719878400000,
									y: 2,
									z: 1,
								},
								{
									name: null,
									x: 1720310400000,
									y: 3,
									z: 1,
								},
								{
									name: null,
									x: 1720396800000,
									y: 1,
									z: 1,
								},
							],
						},
						{
							name: "secureworks",
							data: [
								{
									name: null,
									x: 1719619200000,
									y: 3,
									z: 1,
								},
								{
									name: null,
									x: 1719705600000,
									y: 15,
									z: 1,
								},
								{
									name: null,
									x: 1719792000000,
									y: 17,
									z: 2,
								},
								{
									name: null,
									x: 1719792000000,
									y: 18,
									z: 1,
								},
								{
									name: null,
									x: 1719878400000,
									y: 12,
									z: 3,
								},
								{
									name: null,
									x: 1720310400000,
									y: 12,
									z: 1,
								},
								{
									name: null,
									x: 1720310400000,
									y: 4,
									z: 0,
								},
								{
									name: null,
									x: 1720310400000,
									y: 7,
									z: 1,
								},
							],
						},
						{
							name: "alienvault",
							data: [
								{
									name: null,
									x: 1719619200000,
									y: 7,
									z: 1,
								},
								{
									name: null,
									x: 1719619200000,
									y: 5,
									z: 2,
								},
								{
									name: null,
									x: 1719705600000,
									y: 6,
									z: 2,
								},
								{
									name: null,
									x: 1719705600000,
									y: 6,
									z: 1,
								},
								{
									name: null,
									x: 1719705600000,
									y: 2,
									z: 2,
								},
								{
									name: null,
									x: 1719792000000,
									y: 5,
									z: 6,
								},
								{
									name: null,
									x: 1719792000000,
									y: 7,
									z: 2,
								},
								{
									name: null,
									x: 1719792000000,
									y: 9,
									z: 0,
								},
								{
									name: null,
									x: 1719792000000,
									y: 8,
									z: 0,
								},
								{
									name: null,
									x: 1719792000000,
									y: 7,
									z: 1,
								},
								{
									name: null,
									x: 1720310400000,
									y: 6,
									z: 1,
								},
							],
						},
					],
				});
			});
		} else if (widgetUId == "FCT7") {
			return new Promise<any>(async (resolve, reject) => {
				resolve({
					categories: [
						"alicia",
						"api user",
						"ezra",
						"fahad",
						"rafee",
						"raja",
					],
					series: [
						{
							name: "SLA Met",
							stack: "arcsight",
							data: [0, 0, 1, 0, 0, 0],
						},
						{
							name: "SLA Breached",
							stack: "arcsight",
							data: [0, 1, 0, 1, 0, 0],
						},
						{
							name: "SLA Met",
							stack: "alienvault",
							data: [0, 2, 0, 0, 1, 0],
						},
						{
							name: "SLA Met",
							stack: "identity protection",
							data: [0, 0, 0, 0, 1, 0],
						},
						{
							name: "SLA Met",
							stack: "microsoft defender",
							data: [0, 0, 0, 0, 1, 0],
						},
						{
							name: "SLA Breached",
							stack: "secureworks",
							data: [0, 0, 0, 0, 0, 1],
						},
						{
							name: "SLA Breached",
							stack: "securityscorecard",
							data: [0, 0, 0, 0, 0, 1],
						},
						{
							name: "SLA Met",
							stack: "securityscorecard",
							data: [0, 0, 0, 0, 0, 1],
						},
						{
							name: "SLA Breached",
							stack: "alienvault",
							data: [4, 0, 0, 0, 0, 0],
						},
						{
							name: "SLA Met",
							stack: "avanan",
							data: [0, 1, 0, 0, 0, 0],
						},
						{
							name: "SLA Met",
							stack: "bitsight",
							data: [0, 1, 0, 0, 0, 0],
						},
						{
							name: "SLA Met",
							stack: "microsoft dlp",
							data: [0, 1, 0, 0, 0, 0],
						},
						{
							name: "SLA Met",
							stack: "secureworks",
							data: [0, 1, 0, 0, 0, 0],
						},
					],
				});
			});
		}
	},
	widgets: [
		{
			i: "FCT",
			x: 0,
			y: 0,
			w: 6,
			h: 4,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "IFRAME",
				dashboardType: "IFrame",
				refreshInterval: 10000,
				dateRangeLabel: "Last 5 years",
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				uid: "FCT",
			},
		},
		{
			i: "FCT1",
			x: 6,
			y: 0,
			w: 3,
			h: 1,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 10000,
				dateRangeLabel: "Last 5 years",
				sortOrder: 1,
				drillDown: true,
				script: null,
				uid: "FCT1",
				formatScript: '${(data).toLocaleString("en-IN")} $',
			},
		},
		{
			i: "FCT2",
			x: 0,
			y: 5,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				dateRangeLabel: "Last 5 years",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "STACKEDAREA",
				graphType: "Line",
				refreshInterval: 0,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT2",
			},
		},
		{
			i: "FCT3",
			x: 6,
			y: 2,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "ACTIVITYGAUGE",
				graphType: "Pie",
				refreshInterval: 10000,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT3",
			},
		},
		{
			i: "FCT4",
			x: 6,
			y: 5,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "AREA",
				graphType: "Area",
				refreshInterval: 10000,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT4",
			},
		},
		{
			i: "FCT5",
			x: 0,
			y: 8,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "BAR",
				graphType: "Bar",
				refreshInterval: 10000,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT5",
			},
		},
		{
			i: "FCT6",
			x: 6,
			y: 8,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "STACKEDBAR",
				graphType: "Column",
				refreshInterval: 10000,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT6",
			},
		},
		{
			i: "FCT4",
			x: 6,
			y: 5,
			w: 6,
			h: 3,
			dashboard: {
				description: "All Alerts",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "PIE",
				graphType: "Activity Gauge",
				refreshInterval: 10000,
				sortOrder: 1,
				drillDown: false,
				uid: "FCT4",
			},
		},
		{
			i: "FCT6",
			x: 0,
			y: 10,
			w: 12,
			h: 4,
			dashboard: {
				description: "Alerts by DeviceType",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "SCATTER",
				iframeUrl: null,
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				fromDate: "07/11/2023",
				toDate: "07/12/2023",
				dateRangeLabel: "Last 30 days",
				refreshInterval: 10000,
				sortOrder: 10,
				uid: "FCT6",
			},
		},
		{
			i: "FCT7",
			x: 0,
			y: 14,
			w: 12,
			h: 4,
			dashboard: {
				description: "Alerts by DeviceType",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "STACKEDGROUPEDCOLUMN",
				iframeUrl: null,
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				fromDate: "07/11/2023",
				toDate: "07/12/2023",
				dateRangeLabel: "Last 30 days",
				refreshInterval: 10000,
				sortOrder: 10,
				uid: "FCT6",
			},
		},
	],
};

export const Sender: Story = (args: WidgetProps) => <Widget {...args} />;

Sender.args = {
	type: "sender",
	widgets: [
		{
			i: "widget4",
			x: 0,
			y: 0,
			w: 1,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dateRangeLabel: "Last 6 months",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "IFrame",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
		{
			i: "widget5",
			x: 1,
			y: 0,
			w: 1,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "IFRAME",
				dashboardType: "IFrame",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
		{
			i: "widget6",
			x: 2,
			y: 0,
			w: 1,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
	],
};

export const Receiver: Story = (args: WidgetProps) => <Widget {...args} />;

Receiver.args = {
	type: "receiver",
	widgets: [
		{
			i: "widget1",
			x: 0,
			y: 0,
			w: 2,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				dateRangeLabel: "Test label",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "IFRAME",
				dashboardType: "IFrame",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
		{
			i: "widget2",
			x: 2,
			y: 0,
			w: 2,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "IFRAME",
				dashboardType: "IFrame",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
		{
			i: "widget3",
			x: 4,
			y: 0,
			w: 2,
			h: 1,
			dashboard: {
				description: "FireEye Cyber Threat Map\t",
				fromDate: "01/12/2022",
				toDate: "07/12/2022",
				dashboardCategoryUid: "ALERT",
				dashboardCategory: "Alerts",
				dashboardTypeUid: "IFRAME",
				dashboardType: "IFrame",
				graphTypeUid: "PIE",
				graphType: "Pie Graph",
				refreshInterval: 1,
				sortOrder: 1,
				drillDown: false,
				iframeUrl:
					"https://cybermap.kaspersky.com/en/widget/dynamic/dark",
				script: null,
				uid: "FCT",
				active: false,
				createdUser: null,
				createdDate: null,
				modifiedUser: null,
				modifiedDate: null,
			},
		},
	],
};

export const SecurityOperationsDashboard: Story = (args: WidgetProps) => {
	const theme = useTheme() as any;
	const styles = theme?.widget?.securityOperationsDashboard ?? {};

	return (
		<div css={styles.container}>
			{/* Top Header Banner matching the UI/UX design */}
			<div css={styles.header}>
				<div>
					<div css={styles.title}>SECURITY OPERATIONS</div>
					<div css={styles.subtitle}>
						Welcome back! Here's an overview of your security posture.
					</div>
				</div>

				<div css={styles.headerActions}>
					<div css={styles.dateButton}>
						<span style={{ fontSize: "13px" }}>📅</span>
						<span>Last 2 weeks</span>
						<span css={styles.dateArrow}>▼</span>
					</div>

					<div css={styles.refreshButton}>
						<span style={{ fontSize: "15px" }}>↻</span>
					</div>
				</div>
			</div>

			<Widget {...args} />
		</div>
	);
};

SecurityOperationsDashboard.args = {
	type: "display",
	id: "secintel-dashboard",
	getData: (groupUid: string, widgetUid: string) => {
		const mockData: Record<string, any> = {
			kpi1: 3271,
			kpi2: 751,
			kpi3: 822,
			kpi4: 186,
			kpi5: 0,
			kpi6: 0,
			chartCustomer: {
				series: [
					{
						name: "Exposures",
						data: [
							{ name: "Acme Corp", y: 916, color: "#0284c7" },
							{ name: "Globex Inc", y: 720, color: "#8b5cf6" },
							{
								name: "Stark Industries",
								y: 589,
								color: "#f97316",
							},
							{
								name: "Wayne Enterprise",
								y: 458,
								color: "#ef4444",
							},
							{
								name: "Global Industries",
								y: 327,
								color: "#10b981",
							},
							{ name: "Star Corp", y: 261, color: "#475569" },
						],
					},
				],
			},
			chartPriority: {
				categories: ["Critical", "High", "Medium", "Low", "Info"],
				series: [
					{
						name: "Exposures",
						colorByPoint: true,
						data: [
							{ name: "Critical", y: 487, color: "#dc2626" },
							{ name: "High", y: 328, color: "#f59e0b" },
							{ name: "Medium", y: 214, color: "#2563eb" },
							{ name: "Low", y: 168, color: "#10b981" },
							{ name: "Info", y: 74, color: "#93c5fd" },
						],
					},
				],
			},
		};

		return new Promise((resolve) => {
			resolve(mockData[widgetUid] ?? 0);
		});
	},
	widgets: [
		// 6 KPI Metric Cards
		{
			i: "kpi1",
			x: 0,
			y: 0,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi1",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 1,
				colorScheme: "orange",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		{
			i: "kpi2",
			x: 4,
			y: 0,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi2",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 2,
				colorScheme: "purple",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		{
			i: "kpi3",
			x: 8,
			y: 0,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi3",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 3,
				colorScheme: "blue",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		{
			i: "kpi4",
			x: 0,
			y: 2,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi4",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 4,
				colorScheme: "amber",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		{
			i: "kpi5",
			x: 4,
			y: 2,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi5",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 5,
				colorScheme: "green",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		{
			i: "kpi6",
			x: 8,
			y: 2,
			w: 4,
			h: 2,
			dashboard: {
				uid: "kpi6",
				description: "Raised Exposures",
				dateRangeLabel: "Last 2 Weeks",
				fromDate: "2026-09-25",
				toDate: "2026-10-09",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "AGGREGATE",
				dashboardType: "Aggregate",
				refreshInterval: 0,
				sortOrder: 6,
				colorScheme: "gray",
				icon: "vulnerability",
				trend: "+5.5%",
			} as any,
		},
		// 2 Charts
		{
			i: "chartCustomer",
			x: 0,
			y: 4,
			w: 6,
			h: 4,
			dashboard: {
				uid: "chartCustomer",
				description: "Exposures By Customer",
				dateRangeLabel: "Last 2 Weeks",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "DONUT",
				graphType: "Donut",
				filterLabel: "All Customers",
				refreshInterval: 0,
				sortOrder: 7,
			} as any,
		},
		{
			i: "chartPriority",
			x: 6,
			y: 4,
			w: 6,
			h: 4,
			dashboard: {
				uid: "chartPriority",
				description: "Exposures By Priority",
				dateRangeLabel: "Last 2 Weeks",
				dashboardCategoryUid: "EXPOSURE",
				dashboardCategory: "Exposures",
				dashboardTypeUid: "GRAPH",
				dashboardType: "Graph",
				graphTypeUid: "BASICCOLUMN",
				graphType: "Column",
				headerActionText: "View All",
				refreshInterval: 0,
				sortOrder: 8,
				script: JSON.stringify({
					yAxis: { max: 1000, tickInterval: 200 },
					plotOptions: {
						series: {
							dataLabels: {
								enabled: true,
								style: {
									fontSize: "12px",
									fontWeight: "600",
									color: "#0f172a",
									textOutline: "none",
								},
							},
						},
					},
					legend: {
						enabled: true,
						layout: "horizontal",
						align: "center",
						verticalAlign: "bottom",
					},
				}),
			} as any,
		},
	],
};
