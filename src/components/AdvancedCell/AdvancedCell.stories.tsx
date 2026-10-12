import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AdvancedCell, Props } from "./AdvancedCell";
import React from "react";

const meta: Meta = {
	title: "Components/AdvancedCell",
	component: AdvancedCell,
	args: { onMenuClick: fn(), onEditSave: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDown: Story = (args: Props) => <AdvancedCell {...args} />;

DropDown.args = {
	id: "attackCategoryUid",
	data: "Not Specified",
	element: "Dropdown",
	attributes: {
		menu: [
			{ label: "Bulk Assign", value: "Bulk Assign" },
			{ label: "Bulk Close", value: "Bulk Close" },
		],
		style: "color: red; backgroundColor: transparent",
		// #41c520
		aiGenerated: false,
	},
	dropdownArgs: {
		value: "134",
		options: [
			{ label: "Not Specified", value: "134" },
			{ label: "ArcSight", value: "355" },
			{ label: "BitSight", value: "54" },
			{ label: "Nessus", value: "43" },
			{ label: "Solarwinds", value: "61" },
			{ label: "Symantec EDR", value: "965" },
			{ label: "Symantec DLP", value: "46" },
			{ label: "Zed Proxy", value: "58" },
			{ label: "Aggregate", value: "59" },
		],
	},
	label: "Attack Category",
	applyStyle: true,
	editable: true,
};

export const TextBox: Story = (args: Props) => <AdvancedCell {...args} />;

TextBox.args = {
	id: "userName",
	data: "Aswin Sr",
	element: "TextField",
	attributes: {
		menu: [
			{ label: "Bulk Assign", value: "Bulk Assign" },
			{ label: "Bulk Close", value: "Bulk Close" },
		],
		style: "color: red; backgroundColor: transparent",
		aiGenerated: true,
	},
	label: "Username",
	applyStyle: true,
	editable: true,
};

export const TextArea: Story = (args: Props) => <AdvancedCell {...args} />;

TextArea.args = {
	id: "Notes",
	data: "We are seeing activity sourcing from your SOCPWPND14/10.160.8.97 host",
	element: "TextArea",
	attributes: {
		menu: ["Bulk Assign", "Bulk Close"],
		style: "color: red; backgroundColor: transparent",
		aiGenerated: true,
	},
	label: "Username",
	applyStyle: true,
	editable: true,
};

export const Default: Story = (args: Props) => <AdvancedCell {...args} />;

Default.args = {
	id: "attackCategoryUid",
	data: "Not Specified",
	element: "Dropdown",
	attributes: {
		menu: [
			{ label: "Bulk Assign", value: "Bulk Assign" },
			{ label: "Bulk Close", value: "Bulk Close" },
		],
		style: "background-color: blue; color: white;",
		aiGenerated: true,
	},
	label: "Attack Category",
	applyStyle: false,
	editable: true,
};

export const ObjectDisplay: Story = (args: Props) => <AdvancedCell {...args} />;

ObjectDisplay.args = {
	id: "standardOpenPorts",
	label: "Standard Open Ports",
	element: "Object",
	data: '{"appSettingsMetadata":{"siteConfig":{"linuxFxVersion":"","http20Enabled":false,"alwaysOn":false,"numberOfWorkers":1,"authentication":{"type":"AAD","issuer":"https://login.microsoftonline.com","audience":"api://myapp","scopes":["user.read","profile"],"mfa":{"enabled":true,"methods":["phone","email","authenticator"]}}}}}',
	attributes: {
		aiGenerated: false,
	},
	editable: true,
};

export const ObjectDisplayFlat: Story = (args: Props) => (
	<AdvancedCell {...args} />
);

ObjectDisplayFlat.args = {
	id: "cloudDetails",
	label: "Cloud Details",
	element: "Object",
	data: JSON.stringify({
		cloudProvider: "AWS",
		cloudRegion: "us-east-1",
		cloudAccountId: "123456789012",
		instanceType: "t3.medium",
		exposedToInternet: false,
	}),
	editable: true,
};

/* ── Azure public-IP asset ────────────────────────────────────────────────────
   A real asset payload: long unbreakable ARM ids, null values, nested objects
   and single-item lists — the shapes that stress the label/value columns. */

const ARM_RESOURCE_ID =
	"/subscriptions/aae2a3ce-4b9c-4f99-bbf0-13d34d1a9404/resourceGroups/secintel-org/providers/Microsoft.Network/publicIPAddresses/llmattackpath-ip";

/* Flat fields, rendered as plain text cells */
const overviewFields = [
	{
		id: "assetIdentifier",
		label: "Asset Identifier",
		data: "eastus:Public IP Address:llmattackpath-ip",
	},
	{ id: "description", label: "Description", data: "llmattackpath-ip" },
	{ id: "assetType", label: "Asset Type", data: "Public IP Address" },
	{ id: "status", label: "Status", data: "Active" },
	{ id: "criticality", label: "Criticality", data: "Medium" },
	{ id: "customer", label: "Customer", data: "Canada" },
	{ id: "environment", label: "Environment", data: "SecIntel UAT Azure" },
	{
		id: "publicIpAddress",
		label: "Public IP Address",
		data: "48.216.243.86",
	},
	{ id: "resourceName", label: "Resource Name", data: "llmattackpath-ip" },
	{ id: "cloudProvider", label: "Cloud Provider", data: "azure" },
	{ id: "cloudRegion", label: "Cloud Region", data: "eastus" },
	{ id: "identifier", label: "Identifier", data: "llmattackpath-ip" },
	{ id: "isExposedPublicly", label: "Is Exposed Publicly", data: "true" },
	{ id: "isCritical", label: "Is Critical", data: "true" },
	{ id: "lastSeen", label: "Last Seen", data: "11-Aug-2026 11:37 AM" },
];

const detailFields = [
	{ id: "riskScore", label: "Risk Score", data: "90" },
	{ id: "riskLevel", label: "Risk Level", data: "critical" },
	{
		id: "businessCriticality",
		label: "Business Criticality",
		data: "medium",
	},
	{ id: "attackPathCount", label: "Attack Path Count", data: "2" },
	{
		id: "detailsExposedPublicly",
		label: "Is Exposed Publicly",
		data: "true",
	},
	{
		id: "detailsLastSeen",
		label: "Last Seen",
		data: "2026-08-11T11:37:19.564Z",
	},
	{
		id: "firstDiscovered",
		label: "First Discovered",
		data: "2026-08-11T11:37:14.088Z",
	},
	{
		id: "subscriptionId",
		label: "Subscription ID",
		data: "aae2a3ce-4b9c-4f99-bbf0-13d34d1a9404",
	},
	{ id: "resourceGroup", label: "Resource Group", data: "secintel-org" },
	{ id: "armResourceId", label: "ARM Resource ID", data: ARM_RESOURCE_ID },
	{
		id: "resourceType",
		label: "Resource Type",
		data: "Microsoft.Network/publicIPAddresses",
	},
	{
		id: "resourceTypeName",
		label: "Resource Type Name",
		data: "Public IP Address",
	},
	{ id: "location", label: "Location", data: "eastus" },
	{ id: "availabilityZone", label: "Availability Zone", data: "1" },
	{
		id: "allocationMethod",
		label: "Public IP Allocation Method",
		data: "Static",
	},
	{ id: "publicIpVersion", label: "Public IP Version", data: "IPv4" },
	{ id: "updatedOn", label: "Updated On", data: "secintel-org" },
];

/* Nested sections, rendered as object cells */
const azureTagsAndMetadata = {
	tags: null,
	assetTags: {
		assetCriticality: "high",
		businessCriticality: "medium",
		exposureLevel: "public-internet",
		riskLevel: "critical",
		riskScore: "90",
		scanId: "AF-AZ-17",
		subscriptionId: "aae2a3ce-4b9c-4f99-bbf0-13d34d1a9404",
		tenantId: "5594bcb0-56b2-4a50-8c21-54b34a27f6fa",
	},
};

const azureResourceMetadata = {
	resourceType: "Microsoft.Network/publicIPAddresses",
	resourceTypeName: "Public IP Address",
	resourceId: "llmattackpath-ip",
	resourceIdArm: ARM_RESOURCE_ID,
	resourceGroup: "secintel-org",
	region: "eastus",
	location: "eastus",
	status: "Active",
	provisioningState: "Succeeded",
	displayName: "llmattackpath-ip",
};

const azureNetworkConfiguration = {
	ipAddress: "48.216.243.86",
	allocationMethod: "Static",
	publicIPAddressVersion: "IPv4",
	idleTimeoutInMinutes: 4,
	dnsSettings: null,
	zones: ["1"],
	ipConfigurationId:
		"/subscriptions/aae2a3ce-4b9c-4f99-bbf0-13d34d1a9404/resourceGroups/secintel-org/providers/Microsoft.Network/networkInterfaces/llmattackpath476_z1/ipConfigurations/ipconfig1",
	isAttached: true,
};

const azureComplianceFindings = {
	scanId: "AF-AZ-17",
	discoveredAt: "2026-08-11T11:37:06.702Z",
	firstSeen: "2026-08-11T11:37:14.088Z",
	lastSeen: "2026-08-11T11:37:19.564Z",
	createdDate: null,
	updatedDate: null,
	assetSource: "azure",
};

const azureDiscoveryMetadata = {
	openPortRisk: true,
	sku: { name: "Standard", tier: "Regional" },
	dnsSettings: null,
	discoveryMethod: "resource-graph",
	location: "eastus",
};

export const AzureNetworkConfiguration: Story = (args: Props) => (
	<AdvancedCell {...args} />
);

AzureNetworkConfiguration.args = {
	id: "azureNetworkConfiguration",
	label: "Azure Network Configuration",
	element: "Object",
	data: JSON.stringify(azureNetworkConfiguration),
	editable: true,
};

export const AzureDiscoveryMetadata: Story = (args: Props) => (
	<AdvancedCell {...args} />
);

AzureDiscoveryMetadata.args = {
	id: "azureDiscoveryMetadata",
	label: "Azure Discovery Metadata",
	element: "Object",
	data: JSON.stringify(azureDiscoveryMetadata),
	attributes: { aiGenerated: true },
	editable: true,
};

/* The whole asset panel, laid out in two narrow columns — this is where the
   label column and the long ARM ids are most likely to collide. */
export const AzureAssetDetails: Story = () => {
	const sections: { label: string; value: unknown }[] = [
		{ label: "Azure Tags and Metadata", value: azureTagsAndMetadata },
		{ label: "Azure Resource Metadata", value: azureResourceMetadata },
		{
			label: "Azure Network Configuration",
			value: azureNetworkConfiguration,
		},
		{
			label: "Azure Compliance / Findings",
			value: azureComplianceFindings,
		},
		{ label: "Azure Discovery Metadata", value: azureDiscoveryMetadata },
	];

	const heading = (text: string) => (
		<div
			style={{
				fontSize: "15px",
				fontWeight: 600,
				margin: "16px 0 8px",
			}}
		>
			{text}
		</div>
	);

	return (
		<div style={{ maxWidth: "900px" }}>
			{heading("Overview")}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "8px 24px",
				}}
			>
				{overviewFields.map((field) => (
					<AdvancedCell
						key={field.id}
						{...field}
						element="TextField"
					/>
				))}
			</div>

			{heading("Details")}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "8px 24px",
				}}
			>
				{detailFields.map((field) => (
					<AdvancedCell
						key={field.id}
						{...field}
						element="TextField"
					/>
				))}
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "16px 24px",
					marginTop: "16px",
				}}
			>
				{sections.map((section) => (
					<AdvancedCell
						key={section.label}
						id={section.label}
						label={section.label}
						element="Object"
						data={JSON.stringify(section.value)}
					/>
				))}
			</div>
		</div>
	);
};
