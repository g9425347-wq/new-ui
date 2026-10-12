import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DateTimePicker, DateTimePickerProps } from "./DateTimePicker";

const meta: Meta = {
	title: "Components/DateTimePicker",
	component: DateTimePicker,
	args: { onChange: fn() },
	argTypes: {
		value: {
			control: { type: "date" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: DateTimePickerProps) => (
	<DateTimePicker {...args} />
);

Default.args = {
	label: "Date",
};
