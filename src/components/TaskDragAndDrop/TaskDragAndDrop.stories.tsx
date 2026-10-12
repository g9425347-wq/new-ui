import { Meta, StoryObj } from "@storybook/react";
import { TaskDragAndDrop, TaskDragAndDropProps } from "./TaskDragAndDrop";
import { TextArea } from "../TextArea/TextArea";

const meta: Meta = {
	title: "Components/TaskDragAndDrop",
	component: TaskDragAndDrop,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: TaskDragAndDropProps) => (
	<div style={{ display: "flex", gap: "20px" }}>
		<div style={{ border: "2px solid transparent", width: "300px" }}>
			<TaskDragAndDrop
				setItems={() => {}}
				group="sample"
				items={[
					{
						uid: "AF-4",
						customer: "AF",
						summary: "Update Patch4",
						raisedDateTime: "2026-02-19T09:37:02.8027583Z",
						raisedDate: "15-Feb-2026 4:30 PM",
						dueDateTime: "2026-03-25T11:37:02.8027583Z",
						dueDate: "25-Feb-2026 12:00 AM",
						assignedUser: "Arjun Sharma",
						taskType: "CPT4",
						taskPriority: "HIGH",
						taskStatusUid: "TODO",
						taskStatus: "ToDo",
						taskTag: ["Pellentesque", "habitant morbi "],
						resolvedDateTime: "",
						closedDateTime: "",
					},
				]}
			/>
		</div>
		<div
			style={{
				border: "2px solid transparent",
				minHeight: "100px",
				width: "400px",
				padding: "10px",
			}}
		>
			<TaskDragAndDrop {...args} />
		</div>
		<div
			style={{
				border: "2px solid transparent",
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
	items: [
		{
			uid: "AF-4",
			customer: "AF",
			summary: "Update Patch4",
			raisedDateTime: "2026-02-19T09:37:02.8027583Z",
			raisedDate: "15-Feb-2026 4:30 PM",
			dueDateTime: "2026-03-25T11:37:02.8027583Z",
			dueDate: "25-Feb-2026 12:00 AM",
			assignedUser: "Arjun Sharma",
			taskType: "CPT4",
			taskPriority: "HIGH",
			taskStatusUid: "TODO",
			taskStatus: "ToDo",
			taskTag: ["Pellentesque", "habitant morbi "],
		},
		{
			uid: "AF-5",
			customer: "AF",
			summary: "Update Patch5",
			raisedDateTime: "2026-02-10T09:37:02.8027583Z",
			raisedDate: "15-Feb-2026 4:30 PM",
			dueDateTime: "2026-02-18T11:37:02.8027583Z",
			dueDate: "25-Feb-2026 12:00 AM",
			resolvedDateTime: "2026-02-20T11:37:02.8027583Z",
			taskType: "CPT5",
			taskPriority: "LOW",
			taskStatusUid: "RESOLVE",
			taskStatus: "Resolved",
			taskTag: ["Pellentesque", "habitant morbi "],
		},
		{
			uid: "AF-6",
			customer: "AF",
			summary: "Update Patch6",
			raisedDateTime: "2026-02-15T09:37:02.8027583Z",
			raisedDate: "15-Feb-2026 4:30 PM",
			dueDateTime: "2026-02-17T11:37:02.8027583Z",
			closedDateTime: "2026-02-16T11:37:02.8027583Z",
			dueDate: "25-Feb-2026 12:00 AM",
			taskType: "CPT6",
			taskPriority: "CRITICAL",
			taskStatusUid: "CLOSE",
			taskStatus: "Closed",
			taskTag: ["Pellentesque", "habitant morbi "],
		},
	],
};
