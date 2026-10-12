import { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogProps } from "./Dialog";
import { TextField } from "../TextField/TextField";
import { TextArea } from "../TextArea/TextArea";
import { Divider } from "../Divider/Divider";
import { Dropdown } from "../Dropdown/Dropdown";
import { Grid } from "../Grid/Grid";
import { DatePicker } from "../DatePicker/DatePicker";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";
import { FileUpload } from "../FileUpload/FileUpload";

const meta: Meta = {
	title: "Components/Dialog",
	component: Dialog,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: DialogProps) => (
	<div>
		<Dialog
			closeHandler={() => alert("close")}
			headerSection={true}
			subHeaderSection={true}
			{...args}
		/>
	</div>
);

const SLAArgs = {
	statusOptions: [
		{ label: "Open", value: "OPEN" },
		{ label: "Close", value: "CLOSE" },
	],
	priorityOptions: [
		{ label: "High", value: "HIGH" },
		{ label: "Low", value: "LOW" },
	],
	durationTypeOptions: [
		{ label: "Hours", value: "HOURS" },
		{ label: "Minutes", value: "MINUTES" },
	],
	SLAItems: [
		{
			id: 1,
			status: "Open",
			priority: "High",
			duration: 10,
			durationType: "Hours",
		},
		{
			id: 2,
			status: "Close",
			priority: "Low",
			duration: 15,
			durationType: "Hours",
		},
	],
};

const dropdownArgs = {
	label: "Customer",
	options: [
		{
			label: "Customer 1",
			value: "cust1",
		},
		{
			label: "Customer 2",
			value: "cust2",
		},
		{
			label: "Customer 3",
			value: "cust3",
		},
	],
};
Default.args = {
	children: (
		<Grid container spacing={3} padding={"10px"}>
			<Grid item xs={6}>
				<TextField label="Customer Identifier" disabled value={"AF"} />
			</Grid>
			<Grid item xs={6}>
				<TextField label="Description" value={"Alert Fusion"} />
			</Grid>
			<Grid item xs={6}>
				<TextField label="Description" value={"Alert Fusion"} />
			</Grid>
			<Grid item xs={6}>
				<TextArea label="Description" value={"Alert Fusion"} rows={1} />
			</Grid>
			<Grid item xs={6}>
				<Dropdown label="Category" />
			</Grid>
			<Grid item xs={6}>
				<Dropdown label="TimeZone" disabled />
			</Grid>
			<Grid item xs={6}>
				<TextField label="User Name" />
			</Grid>
			<Grid item xs={6}>
				<TextField label="Password" type="password" />
			</Grid>
			<Grid item xs={6}>
				<DatePicker />
			</Grid>
			<Grid item xs={6}>
				<DateTimePicker
					onChange={function (newValue: any) {
						throw new Error("Function not implemented.");
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Divider label="SLA DETAILS" />
			</Grid>
			<Grid item xs={12}>
				<FileUpload allowedFileTypes={""} />
			</Grid>
			<Grid item xs={12}>
				<TextArea label="Description" disabled value={"descp value"} />
			</Grid>
			<Grid item xs={12}>
				<TextArea label="Description" />
			</Grid>
		</Grid>
	),
	className: "primary",
	header: "ADD USER",
	subHeader: "ADD USER",
	description:
		"Description of screen goes here....Description of screen goes here....Description of screen goes here...",
	icon: "user",
};
