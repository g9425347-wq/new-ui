import { Meta, StoryObj } from "@storybook/react";
import { SideMenuBar, SideMenuBarProps } from "../Sidemenubar/Sidemenubar";
import { useTheme } from "@mui/material";

const meta: Meta = {
	title: "Components/Sidemenubar",
	component: SideMenuBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: SideMenuBarProps) => {
	const theme = useTheme() as any;
	const isDark = theme?.palette?.mode === "dark";

	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				backgroundColor: isDark
					? (theme?.palette?.background?.default || "#121212")
					: "#f8fafc",
				color: isDark ? "#ffffff" : "#0f172a",
				boxSizing: "border-box",
			}}
		>
			<SideMenuBar {...args} />
			<div
				style={{
					flex: 1,
					padding: "28px 36px",
					fontFamily:
						theme?.typography?.fontFamily ||
						"Montserrat, sans-serif",
				}}
			>
				<span>This is the page content</span>
			</div>
		</div>
	);
};

Default.args = {
	selectedItemName: "dashboard",
	height: "100vh",
	menuItems: [
		{
			name: "dashboard",
			label: "Dashboard",
			path: "/dashboard",
			icon: "dashboard",
		},
		{
			name: "alerts",
			label: "Alerts",
			path: "/alerts",
			icon: "alert",
		},
		{
			name: "incidents",
			label: "Incidents",
			path: "/incidents",
			icon: "incident",
		},
		{
			name: "asset-map",
			label: "Asset Map",
			path: "/asset-map",
			icon: "assets",
		},
		{
			name: "exposures",
			label: "Exposures",
			path: "/exposures",
			icon: "exposures",
		},
		{
			name: "vulnerabilities",
			label: "Vulnerabilities",
			path: "/vulnerabilities",
			icon: "vulnerability",
		},
		{
			name: "compliances",
			label: "Compliances",
			path: "/compliances",
			icon: "compliance",
		},
		{
			name: "kanban",
			label: "Kanban",
			path: "/kanban",
			icon: "kanban-config",
		},
		{
			name: "reports",
			label: "Reports",
			path: "/reports",
			icon: "report",
		},
		{
			name: "cmdbs",
			label: "CMDBs",
			path: "/cmdbs",
			icon: "cmdb",
		},
		{
			name: "scans",
			label: "Scans",
			path: "/scans",
			icon: "scan-profile",
		},
		{
			name: "configurations",
			label: "Configurations",
			path: "/configurations",
			icon: "config",
		},
	],
};

export const WithSubtext: Story = (args: SideMenuBarProps) => {
	const theme = useTheme() as any;
	const isDark = theme?.palette?.mode === "dark";

	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				backgroundColor: isDark
					? (theme?.palette?.background?.default || "#121212")
					: "#f8fafc",
				color: isDark ? "#ffffff" : "#0f172a",
				boxSizing: "border-box",
			}}
		>
			<SideMenuBar {...args} />
			<div
				style={{
					flex: 1,
					padding: "28px 36px",
					fontFamily:
						theme?.typography?.fontFamily ||
						"Montserrat, sans-serif",
				}}
			>
				<span>This is the page content</span>
			</div>
		</div>
	);
};

WithSubtext.args = {
	selectedItemName: "users",
	height: "100vh",
	menuItems: [
		{
			name: "users",
			label: "Users",
			path: "/users",
			icon: "user",
			subtext: "List of all users",
		},
		{
			name: "role",
			label: "Role",
			path: "/role",
			icon: "role",
			subtext: "List of all roles",
		},
		{
			name: "lookups",
			label: "Lookups",
			path: "/lookups",
			icon: "lookup",
			subtext: "List of all Lookups",
		},
		{
			name: "customers",
			label: "Customers",
			path: "/customers",
			icon: "customer",
			subtext: "List of all customers",
		},
		{
			name: "compliance",
			label: "Compliances",
			path: "/compliance",
			icon: "compliance",
			subtext: "Compliance controls & audits",
		},
	],
};
