import { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from "./TextArea";
import React from "react";

const meta: Meta = {
	title: "Components/TextArea",
	component: TextArea,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: TextAreaProps) => <TextArea {...args} />;

Default.args = {
	id: "textarea1",
	label: "Label",
	value: "Pellentesque habitant morbi tristique Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
	disabled: false,
	expandable: true,
};
