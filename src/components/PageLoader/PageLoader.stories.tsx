import { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";

const meta: Meta = {
	title: "Components/PageLoader",
	component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = () => (
	<div>
		<PageLoader />
	</div>
);

Default.args = {};
