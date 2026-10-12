import { FC, useState } from "react";
import { base64StringToBlob } from "blob-util";
import { useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { Dialog } from "../Dialog/Dialog";

/* File type */
export interface Base64File {
	fileName: string;
	fileType: string;
	fileContent: string;
}

/* Props for FilePreview component - only these attributes to be allowed */
export interface FilePreviewProps {
	value?: Base64File[];
	remove?: boolean;
	onChange?(value: Base64File[] | undefined): any;
}

interface ThumbnailCardProps {
	file: Base64File;
	index: number;
	remove: boolean;
	tokens: any;
	onDelete: (index: number) => void;
	onView: (file: Base64File) => void;
	onDownload: (file: Base64File) => void;
}

const ThumbnailCard: FC<ThumbnailCardProps> = ({
	file,
	index,
	remove,
	tokens,
	onDelete,
	onView,
	onDownload,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [deleteHover, setDeleteHover] = useState(false);
	const [viewHover, setViewHover] = useState(false);
	const [downloadHover, setDownloadHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={tokens?.cardStyle?.(isHovered, tokens.fontFamily)}
		>
			{/* File Icon & Info Section */}
			<div style={tokens?.cardInnerStyle}>
				<div
					style={tokens?.iconBoxStyle?.(
						tokens.iconBg,
						tokens.iconBorder,
						tokens.accentColor,
					)}
				>
					<Icon name="file" fontSize="medium" color="inherit" />
				</div>
				<div style={tokens?.fileNameStyle?.(tokens.textPrimary)}>
					{file.fileName}
				</div>
			</div>

			{/* Hover Action Overlay */}
			<div style={tokens?.overlayStyle?.(isHovered)}>
				{remove && (
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
				)}
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

export const FilePreview: FC<FilePreviewProps> = ({
	value,
	remove = false,
	onChange,
}) => {
	const theme = useTheme() as any;
	const filePreviewTokens = {
		...theme?.palette?.filePreview,
		fontFamily:
			theme?.typography?.fontFamily ??
			"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
	};

	const [viewfile, setviewfile] = useState<boolean>(false);
	const [base64Data, setBase64Data] = useState<Base64File | undefined>();
	const [urlForDisplay, setUrlForDisplay] = useState<string | undefined>();

	const handleDelete = (index: number) => {
		const updated = value ? [...value] : [];
		updated.splice(index, 1);
		if (onChange) onChange(updated.length > 0 ? updated : undefined);
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

	return (
		<div style={filePreviewTokens?.containerStyle}>
			{value?.map((file, index) => (
				<ThumbnailCard
					key={`${file.fileName}-${index}`}
					file={file}
					index={index}
					remove={remove}
					tokens={filePreviewTokens}
					onDelete={handleDelete}
					onView={handleViewFile}
					onDownload={handleDownload}
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
						width="100%"
						height="100%"
						style={filePreviewTokens?.iframeStyle}
						title="File Viewer"
					/>
				</Dialog>
			)}
		</div>
	);
};

export default FilePreview;
