import { Meta, StoryObj } from "@storybook/react";
import { ListForm, ListFormProps } from "./ListForm";
import { TextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";
import { SingleValue } from "react-select";
import { Option } from "../Dropdown/Dropdown";

interface Employee {
	id: number;
	firstName: string;
	lastName: string;
}

interface Assignment {
	id: number;
	department: string;
	role: string;
}

const meta: Meta<typeof ListForm> = {
	title: "Components/ListForm",
	component: ListForm,
	argTypes: {
		value: {
			control: {
				type: "object",
			},
		},
		label: {
			control: "text",
		},
		allowAdd: {
			control: "boolean",
		},
		allowDelete: {
			control: "boolean",
		},
		divider: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					maxWidth: "640px",
					margin: "24px auto",
					width: "100%",
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story<T = any> = StoryObj<ListFormProps<T>>;

export const Default: Story<Employee> = {
	render: (args) => <ListForm {...args} />,
	args: {
		label: "Employee Directory",
		value: [
			{ id: 1, firstName: "John", lastName: "Doe" },
			{ id: 2, firstName: "Jane", lastName: "Smith" },
			{ id: 3, firstName: "Johnny", lastName: "Doe" },
		],
		defaultData: { id: 0, firstName: "", lastName: "" },
		renderItem: (item, index, onChangeItem) => (
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
					gap: "12px",
					width: "100%",
				}}
			>
				<TextField
					type="text"
					value={item.firstName}
					label="First Name"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (onChangeItem) {
							onChangeItem({ firstName: e.target.value });
						} else {
							ListForm.onChange(index, {
								firstName: e.target.value,
							});
						}
					}}
				/>
				<TextField
					type="text"
					value={item.lastName}
					label="Last Name"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (onChangeItem) {
							onChangeItem({ lastName: e.target.value });
						} else {
							ListForm.onChange(index, {
								lastName: e.target.value,
							});
						}
					}}
				/>
			</div>
		),
		allowDelete: true,
		allowAdd: true,
		divider: true,
	},
};

export const StringValue: Story<string> = {
	render: (args) => <ListForm {...args} />,
	args: {
		label: "Allowed URLs",
		value: [
			"https://www.google.com",
			"https://www.yahoo.com",
			"https://www.alertfusion.com",
		],
		defaultData: "",
		renderItem: (item, index, onChangeItem) => (
			<div css={{ width: "100%" }}>
				<TextField
					value={item}
					label={`URL #${index + 1}`}
					placeholder="https://example.com"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (onChangeItem) {
							onChangeItem(e.target.value);
						} else {
							ListForm.onChange(index, e.target.value);
						}
					}}
				/>
			</div>
		),
		allowDelete: true,
		allowAdd: true,
		divider: true,
	},
};

export const Disabled: Story<Employee> = {
	...Default,
	args: {
		...Default.args,
		label: "Employee Directory (Read-Only)",
		disabled: true,
	},
};

const departmentOptions: Option[] = [
	{ label: "Engineering", value: "engineering" },
	{ label: "Sales", value: "sales" },
	{ label: "Marketing", value: "marketing" },
	{ label: "Human Resources", value: "hr" },
];

const roleOptions: Option[] = [
	{ label: "Manager", value: "manager" },
	{ label: "Individual Contributor", value: "ic" },
	{ label: "Director", value: "director" },
];

export const WithDropdowns: Story<Assignment> = {
	render: (args) => <ListForm {...args} />,
	args: {
		label: "Team Assignments",
		value: [
			{ id: 1, department: "engineering", role: "manager" },
			{ id: 2, department: "sales", role: "ic" },
		],
		defaultData: { id: 0, department: "", role: "" },
		renderItem: (item, index, onChangeItem) => (
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					gap: "12px",
					width: "100%",
				}}
			>
				<Dropdown
					label="Department"
					variant="single"
					options={departmentOptions}
					value={item.department}
					onChange={(data) => {
						const value = (data as SingleValue<Option>)?.value ?? "";
						if (onChangeItem) {
							onChangeItem({ department: value });
						} else {
							ListForm.onChange(index, { department: value });
						}
					}}
				/>
				<Dropdown
					label="Role"
					variant="single"
					options={roleOptions}
					value={item.role}
					onChange={(data) => {
						const value = (data as SingleValue<Option>)?.value ?? "";
						if (onChangeItem) {
							onChangeItem({ role: value });
						} else {
							ListForm.onChange(index, { role: value });
						}
					}}
				/>
			</div>
		),
		allowDelete: true,
		allowAdd: true,
		divider: true,
	},
};
