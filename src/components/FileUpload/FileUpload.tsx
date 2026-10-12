/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/material";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";
import { Dialog } from "../Dialog/Dialog";
import { base64StringToBlob } from "blob-util";

/* File type */
export interface Base64File {
	fileName: string;
	fileType: string;
	fileContent: string;
	fileSize?: number;
}

/* Props for FileUpload component - only these attributes to be allowed */
export interface FileUploadProps {
	id?: string;
	name?: string;
	value?: Base64File[];
	allowedFileTypes: string;
	allowedFileSize?: number;
	disabled?: boolean;
	flex?: boolean;
	onChange?(value: Base64File[] | undefined): any;
}

interface FileThumbnailCardProps {
	file: Base64File;
	index: number;
	tokens: any;
	onDelete: (index: number) => void;
	onView: (file: Base64File) => void;
	onDownload: (file: Base64File) => void;
	getFileSize: (content: string) => string;
}

const FileThumbnailCard: FC<FileThumbnailCardProps> = ({
	file,
	index,
	tokens,
	onDelete,
	onView,
	onDownload,
	getFileSize,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [deleteHover, setDeleteHover] = useState(false);
	const [viewHover, setViewHover] = useState(false);
	const [downloadHover, setDownloadHover] = useState(false);

	const getFileIconName = (fileType: string) => {
		if (fileType === "application/pdf") return "pdf";
		if (
			fileType === "application/msword" ||
			fileType ===
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		)
			return "ms-word";
		if (
			fileType === "application/vnd.ms-excel" ||
			fileType ===
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		)
			return "xls";
		return "lookup";
	};

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={tokens?.cardStyle?.(isHovered, tokens.fontFamily)}
		>
			<div style={tokens?.cardInnerStyle}>
				<div
					style={tokens?.iconContainerStyle?.(
						tokens.iconBg,
						tokens.iconBorder,
						tokens.accentColor,
					)}
				>
					<Icon
						name={getFileIconName(file.fileType)}
						fontSize="medium"
						color="inherit"
					/>
				</div>
				<div style={tokens?.fileNameStyle?.(tokens.textPrimary)}>
					{file.fileName}
				</div>
				<div style={tokens?.fileSizeStyle?.(tokens.textSecondary)}>
					{getFileSize(file.fileContent)}
				</div>
			</div>

			{/* Hover Action Overlay */}
			<div style={tokens?.overlayStyle?.(isHovered)}>
				<div
					onClick={() => onDelete(index)}
					onMouseEnter={() => setDeleteHover(true)}
					onMouseLeave={() => setDeleteHover(false)}
					title="Delete File"
					style={tokens?.actionBtnStyle?.(
						tokens.dangerColor,
						deleteHover,
					)}
				>
					<Icon name="delete" fontSize="small" color="inherit" />
				</div>
				<div
					onClick={() => onView(file)}
					onMouseEnter={() => setViewHover(true)}
					onMouseLeave={() => setViewHover(false)}
					title="View File"
					style={tokens?.actionBtnStyle?.(
						tokens.accentColor,
						viewHover,
					)}
				>
					<Icon name="view" fontSize="small" color="inherit" />
				</div>
				<div
					onClick={() => onDownload(file)}
					onMouseEnter={() => setDownloadHover(true)}
					onMouseLeave={() => setDownloadHover(false)}
					title="Download File"
					style={tokens?.actionBtnStyle?.(
						tokens.successColor,
						downloadHover,
					)}
				>
					<Icon name="download" fontSize="small" color="inherit" />
				</div>
			</div>
		</div>
	);
};

interface RejectedThumbnailCardProps {
	fileName: string;
	index: number;
	tokens: any;
	onDelete: (index: number) => void;
}

const RejectedThumbnailCard: FC<RejectedThumbnailCardProps> = ({
	fileName,
	index,
	tokens,
	onDelete,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={tokens?.rejectedCardStyle?.(tokens.fontFamily)}
		>
			<div style={tokens?.cardInnerStyle}>
				<div
					style={tokens?.rejectedIconWrapperStyle?.(tokens.textError)}
				>
					<Icon name="lookup" fontSize="medium" color="inherit" />
				</div>
				<div style={tokens?.fileNameStyle?.(tokens.textError)}>
					{fileName}
				</div>
			</div>
			<div style={tokens?.overlayStyle?.(isHovered)}>
				<div
					onClick={() => onDelete(index)}
					title="Remove Rejected File"
					style={tokens?.actionBtnStyle?.(tokens.dangerColor, false)}
				>
					<Icon name="delete" fontSize="small" color="inherit" />
				</div>
			</div>
		</div>
	);
};

export const FileUpload: FC<FileUploadProps> = ({
	id,
	name,
	value: base64Files = [],
	allowedFileTypes,
	allowedFileSize = 1,
	disabled = false,
	flex = false,
	onChange,
}) => {
	const theme = useTheme() as any;
	const fuTokens = {
		...theme?.palette?.fileUpload,
		fontFamily:
			theme?.typography?.fontFamily ??
			"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
	};

	const [files, setFiles] = useState<Base64File[] | undefined>(base64Files);
	const [viewfile, setviewfile] = useState<boolean>(false);
	const [base64Data, setBase64Data] = useState<Base64File>();
	const [rejectFiles, setRejectFiles] = useState<string[]>([]);
	const [error, setError] = useState(false);
	const [urlForDisplay, setUrlForDisplay] = useState<string | undefined>();

	const allowedMimes = useMemo(
		() => allowedFileTypes.split(",").map((t) => t.trim().toLowerCase()),
		[allowedFileTypes],
	);

	const validateFileExtension = (file: any) => {
		const fileExtn = file.name
			.substring(file.name.lastIndexOf(".") + 1)
			.toLowerCase();
		const fileSize = file.size;
		if (allowedMimes?.some((item: string) => item === fileExtn)) {
			if (fileSize / 1000000 > allowedFileSize) {
				setError(true);
				return {
					code: "file-size_too_large",
					message: `This file size is too large.`,
				};
			}
			setError(false);
			return null;
		} else {
			setError(true);
			return {
				code: "file-type-notallowed",
				message: `This file type is not allowed.`,
			};
		}
	};

	const getFileSize = (base64String: string) => {
		const padding = base64String.endsWith("==")
			? 2
			: base64String.endsWith("=")
			? 1
			: 0;
		const sizeInBytes = (base64String.length * 3) / 4 - padding;

		if (sizeInBytes < 1024) {
			return `${sizeInBytes} B`;
		} else if (sizeInBytes < 1024 * 1024) {
			return `${(sizeInBytes / 1024).toFixed(2)} KB`;
		} else {
			return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
		}
	};

	const readFile = (file: any): Promise<string> => {
		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				const content = reader.result?.toString().split(",")[1];
				content ? resolve(content) : reject(new Error("Empty content"));
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	};

	const handleDelete = (index: number) => {
		const deleteFile: Base64File[] | undefined = files
			? [...files]
			: undefined;
		deleteFile?.splice(index, 1);
		setFiles(deleteFile);
		if (onChange) onChange(deleteFile);
	};

	const handleRejectedDelete = (index: number) => {
		const deleteFile: string[] | undefined = rejectFiles
			? [...rejectFiles]
			: undefined;
		deleteFile?.splice(index, 1);
		setRejectFiles(deleteFile ?? []);
	};

	const handleDownload = (file: Base64File) => {
		const linkSource = `data:${file.fileType};base64,${file.fileContent}`;
		const downloadLink = document.createElement("a");
		downloadLink.href = linkSource;
		downloadLink.download = file.fileName;
		downloadLink.click();
	};

	const handleViewFile = (file: Base64File) => {
		const blobUrl = URL.createObjectURL(
			base64StringToBlob(file.fileContent, file.fileType),
		);
		setUrlForDisplay(blobUrl);
		setBase64Data(file);
		setviewfile(true);
	};

	const handleCloseDialog = () => {
		if (urlForDisplay) {
			URL.revokeObjectURL(urlForDisplay);
		}
		setUrlForDisplay(undefined);
		setviewfile(false);
	};

	const handleOnDrop = async (
		acceptedFiles: any[],
		fileRejections: { file: any }[],
	) => {
		const newFiles = await Promise.all(
			acceptedFiles.map(async (file) => {
				const content = await readFile(file);
				return {
					fileName: file.name,
					fileType: file.type,
					fileContent: content,
					fileSize: file.size,
				};
			}),
		);

		if (newFiles.length > 0) {
			const updatedFiles = files ? files.concat(newFiles) : newFiles;
			setFiles(updatedFiles);
			if (onChange) onChange(updatedFiles);
		}

		const newRejectfiles = fileRejections?.map(({ file }) => file.name);
		setRejectFiles(
			rejectFiles ? rejectFiles.concat(newRejectfiles) : newRejectfiles,
		);
	};

	const { getRootProps, getInputProps } = useDropzone({
		validator: validateFileExtension,
		disabled,
		onDrop: handleOnDrop,
	});

	return (
		<div style={fuTokens?.rootContainerStyle?.(flex, fuTokens.fontFamily)}>
			<Box
				{...getRootProps({ className: "dropzone" })}
				css={fuTokens?.dropzoneStyle?.(flex, error, disabled)}
			>
				<input {...getInputProps({ id, name })} />
				<div style={fuTokens?.dropzoneInnerStyle}>
					<div
						style={fuTokens?.dropzoneIconWrapperStyle?.(
							fuTokens.iconBg,
							fuTokens.accentColor,
						)}
					>
						<Icon name="add" fontSize="medium" color="inherit" />
					</div>
					<Typography
						variant="subtitle1"
						style={fuTokens?.dropzonePrimaryTextStyle?.(
							error,
							fuTokens.textError,
							fuTokens.textPrimary,
						)}
					>
						Drag & drop files here, or{" "}
						<span
							style={fuTokens?.dropzoneBrowseTextStyle?.(
								fuTokens.accentColor,
							)}
						>
							browse
						</span>
					</Typography>
				</div>
			</Box>

			<Box css={fuTokens?.filesContainerStyle?.(Boolean(files && files.length > 0))}>
				{files?.map((file, index) => (
					<FileThumbnailCard
						key={`${file.fileName}-${index}`}
						file={file}
						index={index}
						tokens={fuTokens}
						onDelete={handleDelete}
						onView={handleViewFile}
						onDownload={handleDownload}
						getFileSize={getFileSize}
					/>
				))}

				{rejectFiles?.map((fileName, index) => (
					<RejectedThumbnailCard
						key={`${fileName}-${index}`}
						fileName={fileName}
						index={index}
						tokens={fuTokens}
						onDelete={handleRejectedDelete}
					/>
				))}

				{viewfile && (
					<Dialog
						closeHandler={handleCloseDialog}
						size="large"
						fullScreen={true}
						header={base64Data?.fileName}
					>
						<iframe
							src={urlForDisplay}
							width="99%"
							height="98%"
							style={fuTokens?.iframeStyle}
							title="File Viewer"
						/>
					</Dialog>
				)}
			</Box>
		</div>
	);
};

export default FileUpload;
