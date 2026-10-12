import { Meta, StoryObj } from "@storybook/react";
import IconProvider from "../IconProvider/IconProvider";
import { ToolTip, Props } from "./ToolTip";

const meta: Meta = {
	title: "Components/ToolTip",
	component: ToolTip,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: Props) => (
	<>
		{" "}
		<IconProvider />
		<ToolTip {...args} />
	</>
);

Default.args = {
	title: "ToolTip",
	children: <div>data</div>,
};
