import { Meta, StoryObj } from "@storybook/react";
import { FieldDragAndDrop, FieldDragAndDropProps } from "./FieldDragAndDrop";
import { TextArea } from "../TextArea/TextArea";
3;

const meta: Meta = {
	title: "Components/FieldDragAndDrop",
	component: FieldDragAndDrop,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: FieldDragAndDropProps) => (
	<div>
		<div
			style={{ border: "2px solid red", height: "200px", width: "100%" }}
		>
			<FieldDragAndDrop
				setItems={() => {}}
				group="sample"
				width="100px"
				height="100px"
				items={[
					{ uid: "1", label: "SAST", attributes: { color: "red" } },
					{ uid: "2", label: "IaC" },
					{ uid: "3", label: "SCA" },
				]}
				greyed={false}
				onItemSelected={() => alert("selected")}
			/>
		</div>
		<div style={{ border: "2px solid red" }}>
			<FieldDragAndDrop {...args} />
		</div>
		<div
			style={{
				border: "2px solid red",
				minHeight: "100px",
				padding: "10px",
			}}
		>
			<TextArea label={"body"}></TextArea>
		</div>
	</div>
);

Default.args = {
	setItems: () => {},
	group: "sample",
	disabled: false,
	items: [
		{ uid: "4", label: "Name 4" },
		{ uid: "5", label: "Name 5" },
		{ uid: "6", label: "Name 6" },
	],
};
