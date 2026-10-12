import { Meta, StoryObj } from "@storybook/react";
import { TileSelect } from "./TileSelect";
import { fn } from "@storybook/test";

const options = [
	{ label: "DEV", value: "dev" },
	{ label: "UAT", value: "uat" },
	{ label: "PRD", value: "prd" },
	{ label: "R&D", value: "rnd" },
	{ label: "DATABRICKS", value: "databricks" },
	{ label: "OTHER", value: "other" },
];

const meta: Meta<typeof TileSelect> = {
	title: "Components/TileSelect",
	component: TileSelect,
	args: { onChange: fn(), options, columns: 4, label: "ENVIRONMENT TYPE" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
	args: {
		id: "env-type",
		variant: "single",
		value: "prd",
	},
};

export const Multi: Story = {
	args: {
		id: "env-type-multi",
		variant: "multi",
		value: ["dev", "prd"],
	},
};
