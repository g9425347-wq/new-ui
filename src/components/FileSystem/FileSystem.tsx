/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useState } from "react";
import { useTheme } from "@mui/material";
import { Banner } from "../Banner/Banner";
import { Typography } from "../Typography/Typography";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../Icon/Icon";
import { ToolTip } from "../ToolTip/ToolTip";
import { Dialog } from "../Dialog/Dialog";
import { Confirm } from "../Confirm/Confirm";
import { TextField } from "../TextField/TextField";
import { Button } from "../Button/Button";
import { FileUpload } from "../FileUpload/FileUpload";

export type ItemType = "item" | "folder";

export interface Node {
	id: string;
	name: string;
	type: ItemType;
	refId?: string; // reference to actual entity (workflow, report, etc.)
	description?: string;
	children?: Node[];
}

/* File type */
export interface Base64File {
	fileName: string;
	fileType: string;
	fileContent: string;
}

/* Props for FileSystem component - only these attributes to be allowed */
export interface Props {
	node: Node;
	height?: string;
	width?: string;
	/** Called when a file node is activated (clicked or Enter pressed) */
	onView?: (node: Node) => void;
	/** Called when the folder structure changes */
	onChange?: (node: Node) => void;
	/** Called when files are uploaded */
	onItemUpload?: (files: Base64File[]) => void;
	/** Called when a item is deleted */
	onItemDelete?: (item: string) => void;
}

export const FileSystem: FC<Props> = ({
	node,
	height = "400px",
	width = "300px",
	onView,
	onChange,
	onItemUpload,
	onItemDelete,
}) => {
	const theme = useTheme() as any;
	const fsTokens = {
		...theme?.palette?.fileSystem,
		fontFamily:
			theme?.typography?.fontFamily ??
			"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
	};

	const [history, setHistory] = useState<Node[]>([node]),
		[confirmMessage, setConfirmMessage] = useState<string>(""),
		[confirmOpen, setConfirmOpen] = useState<boolean>(false),
		[hoverItem, setHoverItem] = useState<string>(""),
		[nodeToDelete, setNodeToDelete] = useState<Node | null>(null),
		[showCreateFolderDialog, setShowCreateFolderDialog] =
			useState<boolean>(false),
		[newFolderName, setNewFolderName] = useState<string>(""),
		[showAddItemDialog, setShowAddItemDialog] = useState<boolean>(false),
		[uploadedFiles, setUploadedFiles] = useState<Base64File[]>([]);

	const current = history[history.length - 1];

	// Helper function to get updated root node
	const getUpdatedRoot = (updatedHistory: Node[]): Node => {
		return updatedHistory[0];
	};

	const handleClick = (item: Node) => {
		if (item.type === "folder") {
			setHistory((prev) => [...prev, item]);
		}
	};

	const goBack = () => {
		if (history.length > 1) {
			setHistory((prev) => prev.slice(0, -1));
		}
	};

	const handleCreateFolder = () => {
		setShowCreateFolderDialog(true);
	};

	const createFolder = (name: string) => {
		const newFolder: Node = {
			id: `folder-${Date.now()}`,
			name: name,
			type: "folder",
			children: [],
		};

		const updatedCurrent: Node = {
			...current,
			children: [...(current.children || []), newFolder],
		};

		setHistory((prev) => {
			const newHistory = [...prev];
			newHistory[newHistory.length - 1] = updatedCurrent;
			onChange?.(getUpdatedRoot(newHistory));
			return newHistory;
		});
	};

	const createItem = (name: string) => {
		const newItem: Node = {
			id: `file-${Date.now()}`,
			name: name,
			type: "item",
			refId: name,
		};

		const updatedCurrent: Node = {
			...current,
			children: [...(current.children || []), newItem],
		};

		setHistory((prev) => {
			const newHistory = [...prev];
			newHistory[newHistory.length - 1] = updatedCurrent;
			onChange?.(getUpdatedRoot(newHistory));
			return newHistory;
		});
	};

	const handlePreDelete = (nodeToDeleteItem: Node) => {
		setConfirmMessage(`Delete ${nodeToDeleteItem.name} ?`);
		setNodeToDelete(nodeToDeleteItem);
		setConfirmOpen(true);
	};

	const handleDelete = (nodeToDeleteItem: Node) => {
		const updatedCurrent: Node = {
			...current,
			children: current.children?.filter(
				(child) => child.id !== nodeToDeleteItem.id,
			),
		};

		setHistory((prev) => {
			const newHistory = [...prev];
			newHistory[newHistory.length - 1] = updatedCurrent;
			onChange?.(getUpdatedRoot(newHistory));
			return newHistory;
		});
		onItemDelete?.(nodeToDeleteItem.name);
	};

	return (
		<div style={fsTokens?.containerStyle?.(height, width, theme?.typography?.fontFamily)}>
			<Banner
				leftChildren={
					<div style={fsTokens?.headerLeftStyle}>
						{history.length === 1 ? null : (
							<IconButton
								size="small"
								icon={"arrow-left"}
								title={"Back"}
								onClick={goBack}
							/>
						)}

						<Typography
							variant="h6"
							style={fsTokens?.headerTitleStyle?.(fsTokens.textPrimary)}
						>
							{current.name}
						</Typography>
					</div>
				}
				rightChildren={
					<div style={fsTokens?.headerRightStyle}>
						<IconButton
							size="small"
							icon="workflow"
							title={"Add Workflow"}
							onClick={() => setShowAddItemDialog(true)}
						/>
						<IconButton
							size="small"
							icon="add"
							title={"Add Folder"}
							onClick={handleCreateFolder}
						/>
					</div>
				}
			/>

			{/* List Container */}
			<div style={fsTokens?.listContainerStyle}>
				{current.children?.map((child) => (
					<div
						key={child.id}
						onMouseEnter={() => setHoverItem(child.id)}
						onMouseLeave={() => setHoverItem("")}
						style={fsTokens?.rowStyle?.(hoverItem === child.id)}
					>
						<div
							onClick={() => handleClick(child)}
							style={fsTokens?.itemClickableStyle}
						>
							<span
								style={fsTokens?.itemIconWrapperStyle?.(
									child.type === "folder"
										? fsTokens.folderColor
										: fsTokens.fileColor,
								)}
							>
								<Icon
									name={
										child.type === "folder"
											? "file"
											: "workflow"
									}
									fontSize="medium"
									color="inherit"
								/>
							</span>
							<Typography
								style={fsTokens?.itemNameStyle?.(fsTokens.textPrimary)}
							>
								{child.name}
							</Typography>
						</div>

						{hoverItem === child.id && (
							<div style={fsTokens?.itemActionsStyle}>
								{child.type === "folder" && (
									<>
										<ToolTip
											children={
												<span
													style={fsTokens?.actionIconStyle?.(fsTokens.textSecondary)}
												>
													<Icon
														name="reset-password"
														fontSize="small"
														color="inherit"
													/>
												</span>
											}
											title={"Rename"}
										/>
										<ToolTip
											children={
												<span
													style={fsTokens?.actionIconStyle?.(fsTokens.dangerColor)}
													onClick={(e) => {
														e.stopPropagation();
														handlePreDelete(child);
													}}
												>
													<Icon
														name="delete"
														fontSize="small"
														color="inherit"
													/>
												</span>
											}
											title={"Delete"}
										/>
									</>
								)}
								{child.type === "item" && (
									<>
										<ToolTip
											children={
												<span
													style={fsTokens?.actionIconStyle?.(fsTokens.textSecondary)}
													onClick={(e) => {
														e.stopPropagation();
														onView?.(child);
													}}
												>
													<Icon
														name="view"
														fontSize="small"
														color="inherit"
													/>
												</span>
											}
											title={"View"}
										/>
										<ToolTip
											children={
												<span
													style={fsTokens?.actionIconStyle?.(fsTokens.dangerColor)}
													onClick={(e) => {
														e.stopPropagation();
														handlePreDelete(child);
													}}
												>
													<Icon
														name="delete"
														fontSize="small"
														color="inherit"
													/>
												</span>
											}
											title={"Delete"}
										/>
									</>
								)}
							</div>
						)}
					</div>
				))}
			</div>

			<Confirm
				open={confirmOpen}
				label={confirmMessage}
				onClickCancel={() => setConfirmOpen(false)}
				onClickYes={() => {
					setConfirmOpen(false);
					nodeToDelete && handleDelete(nodeToDelete);
					setNodeToDelete(null);
				}}
			/>

			<Dialog
				open={showCreateFolderDialog}
				header="Create Folder"
				closeHandler={() => setShowCreateFolderDialog(false)}
			>
				<div style={fsTokens?.dialogContentStyle}>
					<TextField
						label="Folder Name"
						value={newFolderName}
						onChange={(e: any) => setNewFolderName(e.target.value)}
					/>
					<div style={fsTokens?.dialogActionsStyle}>
						<Button
							onClick={() => setShowCreateFolderDialog(false)}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							disabled={!newFolderName.trim()}
							onClick={() => {
								createFolder(newFolderName.trim());
								setShowCreateFolderDialog(false);
								setNewFolderName("");
							}}
						>
							Create
						</Button>
					</div>
				</div>
			</Dialog>

			<Dialog
				open={showAddItemDialog}
				header="Add Item"
				closeHandler={() => setShowAddItemDialog(false)}
			>
				<div style={fsTokens?.dialogContentStyle}>
					<FileUpload
						allowedFileTypes={"yaml"}
						onChange={(files) => setUploadedFiles(files || [])}
						value={uploadedFiles}
					/>
					<div style={fsTokens?.dialogActionsStyle}>
						<Button onClick={() => setShowAddItemDialog(false)}>
							Cancel
						</Button>
						<Button
							type="submit"
							disabled={uploadedFiles.length === 0}
							onClick={() => {
								uploadedFiles.forEach((file) => {
									createItem(file.fileName);
								});
								onItemUpload?.(uploadedFiles);
								setShowAddItemDialog(false);
								setUploadedFiles([]);
							}}
						>
							Create
						</Button>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default FileSystem;
