import { Meta, StoryObj } from "@storybook/react";
import { useState } from "@storybook/preview-api"; // 👈 Import from Storybook preview API instead of "react"
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
	title: "Components/Switch",
	component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState("alerts");
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "10px",
					padding: "10px",
					borderRadius: "20px",
				}}
			>
				1. Switch with label:
				<Switch {...args} value={value} onChange={(e) => setValue(e)} />
			</div>
		);
	},
	args: {
		options: [
			{ label: "All Alerts", value: "alerts" },
			{ label: "My Alerts", value: "my" },
		],
	},
};
