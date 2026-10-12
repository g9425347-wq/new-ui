/** @jsxImportSource @emotion/react */
import { Meta, StoryObj } from "@storybook/react";
import { IconMenu, IconMenuProps } from "./IconMenu";

const meta: Meta = {
	title: "Components/IconMenu",
	component: IconMenu,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IconMenuProps) => (
	<div
		css={(theme: any) => ({
			position: "absolute",
			left: "50%",
		})}
	>
		<IconMenu {...args} />
	</div>
);

Default.args = {
	menuItems: [
		{
			icon: "edit",
			label: "Edit",
			value: "edit",
		},
		{
			icon: "delete",
			label: "Delete",
			value: "delete",
		},
		{
			icon: "export",
			label: "Export",
			value: "export",
		},
	],
};
