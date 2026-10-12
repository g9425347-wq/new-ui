import { Meta, StoryObj } from "@storybook/react";
import { TreeGraph } from "./TreeGraph";

const meta: Meta = {
	title: "Components/TreeGraph",
	component: TreeGraph,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
	<div>
		<TreeGraph
			data={{
				key: "AF-Avanan-1:1",
				name: "AF-Avanan-1",
				children: [
					{
						key: "AF-Avanan-1:2:sourceEmail",
						name: "Source Email",
						value: "sourceEmail@af.com",
						children: [
							{
								key: "AF-Avanan-3:3",
								name: "AF-Avanan-3",
								children: [
									{
										key: "AF-Avanan-3:4:sourceEmail",
										name: "Source Email",
										value: "destinationEmail@af.com",
										children: [],
										itemStyle: {
											color: "#f44336",
										},
									},
									{
										key: "AF-Avanan-3:5:sourceEmail",
										name: "Details",
										value: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
										children: [],
										itemStyle: {
											color: "#f44336",
										},
									},
									{
										key: "AF-Avanan-3:5:status",
										name: "Status",
										value: "Closed",
										children: [],
										itemStyle: {
											color: "#51C926",
										},
									},
									{
										key: "alerts:AF-Avanan-3:5:notes",
										name: "Notes for alert AF-Avanan-3",
										children: [],
										itemStyle: {
											color: "#FFA200",
										},
									},
								],
								itemStyle: {
									color: "#f44336",
								},
							},
							{
								key: "SV-EDS-1:1",
								name: "SV-EDS-1",
								children: [
									{
										key: "SV-EDS-1:1:incidentStatus",
										name: "Status",
										value: "Assigned",
										children: [],
										itemStyle: {
											color: "#51C926",
										},
									},
									{
										key: "SV-EDS-1:1:incidentPriority",
										name: "Priority",
										value: "Low",
										children: [],
										itemStyle: {
											color: "#51C926",
										},
									},
									{
										key: "SV-EDS-1:1:incidentType",
										name: "Incident Type",
										value: "Employee Data Sheet",
										children: [],
										itemStyle: {
											color: "#51C926",
										},
									},
									{
										key: "incidents:SV-EDS-1:1:notes",
										name: "Notes for incident SV-EDS-1",
										children: [],
										itemStyle: {
											color: "#FFA200",
										},
									},
								],
								itemStyle: {
									color: "#0b79d0",
								},
							},
						],
						itemStyle: {
							color: "#f44336",
						},
					},
					{
						key: "AF-Avanan-1:5:status",
						name: "Status",
						value: "Assigned",
						children: [],
						itemStyle: {
							color: "#51C926",
						},
					},
					{
						key: "AF-Avanan-1:5:priority",
						name: "Priority",
						value: "High",
						children: [],
						itemStyle: {
							color: "#51C926",
						},
					},
					{
						key: "AF-Avanan-1:5:deviceType",
						name: "Device Type",
						value: "Avanan",
						children: [],
						itemStyle: {
							color: "#51C926",
						},
					},
					{
						key: "alerts:AF-Avanan-1:5:notes",
						name: "Notes for alert AF-Avanan-1",
						value: "",
						children: [],
						itemStyle: {
							color: "#FFA200",
						},
					},
				],
				itemStyle: {
					color: "#f44336",
				},
			}}
			height={"500px"}
			width={"1000px"}
			{...args}
			permissions={[
				"AL_VIEWALERTS",
				"IN_VIEWINCIDENTS",
				"VU_VIEWVULNERABILITY",
				"CO_VIEWCOMPLIANCE",
				"CM_VIEWCMDB",
			]}
		/>
	</div>
);

Default.args = {
	darkMode: true,
};
