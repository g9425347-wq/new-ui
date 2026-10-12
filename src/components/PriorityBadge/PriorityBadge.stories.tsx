import { Meta, StoryObj } from "@storybook/react";
import { PriorityBadge, PriorityBadgeProps } from "./PriorityBadge";

const meta: Meta = {
	title: "Components/PriorityBadge",
	component: PriorityBadge,
};

export default meta;

export const Default: StoryObj<PriorityBadgeProps> = (
	args: PriorityBadgeProps,
) => <PriorityBadge {...args} />;

Default.args = {
	value: "CRITICAL",
};

export const High: StoryObj<PriorityBadgeProps> = (
	args: PriorityBadgeProps,
) => <PriorityBadge {...args} />;

High.args = {
	value: "HIGH",
};

export const Medium: StoryObj<PriorityBadgeProps> = (
	args: PriorityBadgeProps,
) => <PriorityBadge {...args} />;

Medium.args = {
	value: "MEDIUM",
};

export const Low: StoryObj<PriorityBadgeProps> = (args: PriorityBadgeProps) => (
	<PriorityBadge {...args} />
);

Low.args = {
	value: "LOW",
};

export const MediumSize: StoryObj<PriorityBadgeProps> = (
	args: PriorityBadgeProps,
) => <PriorityBadge {...args} />;

MediumSize.args = {
	value: "CRITICAL",
	size: "medium",
};

export const UnknownValue: StoryObj<PriorityBadgeProps> = (
	args: PriorityBadgeProps,
) => <PriorityBadge {...args} />;

UnknownValue.args = {
	value: "INFO",
};
