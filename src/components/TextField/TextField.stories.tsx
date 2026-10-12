import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from "./TextField";

const meta: Meta = {
	title: "Components/TextField",
	component: TextField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: TextFieldProps) => <TextField {...args} />;

Default.args = {
	type: "text",
	label: "Label",
	value: "TextField value",
};

export const Email: Story = (args: TextFieldProps) => <TextField {...args} />;

Email.args = {
	id: "txtemail",
	type: "email",
	label: "Email Id: ",
	value: "test@alertfusion.com",
	disabled: false,
};

export const Password: Story = (args: TextFieldProps) => (
	<TextField {...args} />
);

Password.args = {
	name: "txtpassword",
	type: "password",
	label: "Password: ",
	value: "password",
	disabled: false,
};

export const Number: Story = (args: TextFieldProps) => <TextField {...args} />;

Number.args = {
	name: "numberTextBox",
	type: "number",
	label: "Number: ",
	disabled: false,
};
