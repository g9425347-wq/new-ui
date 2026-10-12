import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MultiSelect, MultiSelectProps } from "./MultiSelect";

const meta: Meta = {
	title: "Components/MultiSelect",
	component: MultiSelect,
	args: { onSelectItem: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: MultiSelectProps) => (
	<MultiSelect {...args} />
);

Default.args = {
	placeholders: "Select options",
	label: "Fields",
	preselectedItems: [
		{ key: "arc", value: "ArcSight" },
		{ key: "Solar", value: "Solarwinds" },
	],
	options: [
		{ label: "ArcSight", value: { key: "arc", value: "ArcSight" } },
		{ label: "BitSight", value: { key: "Bit", value: "BitSight" } },
		{ label: "Nessus", value: { key: "Nes", value: "Nessus" } },
		{ label: "Solarwinds", value: { key: "Solar", value: "Solarwinds" } },
		{ label: "Symantec EDR", value: { key: "EDR", value: "Symantec EDR" } },
		{ label: "Symantec DLP", value: { key: "DLP", value: "Symantec DLP" } },
	],
};
