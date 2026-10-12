/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Typography } from "../Typography/Typography";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";

/* Props for ImageUpload component - only these attributes to be allowed */
export interface Props {
	id?: string;
	name?: string;
	value?: string; // holds the base64 data string
	disabled?: boolean;
	onChange?(value: string): any;
}

export const ImageUpload: FC<Props> = ({
	id,
	name,
	disabled = false,
	value,
	onChange,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.imageUpload ?? {};

	const allowedMimes = ["png", "jpg", "jpeg"];
	const [image, setImage] = useState<string | undefined>(value);
	const [error, setError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const defaultAvatar =
		"iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc0REIyMUFBRjdBMTFFQ0EwNTNBNDZCOUY2MEI0RTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc0REIyMUJBRjdBMTFFQ0EwNTNBNDZCOUY2MEI0RTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzREQjIxOEFGN0ExMUVDQTA1M0E0NkI5RjYwQjRFOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNzREQjIxOUFGN0ExMUVDQTA1M0E0NkI5RjYwQjRFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoHbHhIAAAqwSURBVHja1Flp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";

	useEffect(() => {
		setImage(value);
	}, [value]);

	const validateFileExtension = (file: File) => {
		const fileExtn = file.name
			.substring(file.name.lastIndexOf(".") + 1)
			.toLowerCase();

		if (allowedMimes.includes(fileExtn)) {
			if (file.size > 1000000) {
				setError(true);
				setErrorMessage("File size must be under 1MB.");
				return {
					code: "file-too-large",
					message: "File size must be under 1MB.",
				};
			}
			setError(false);
			setErrorMessage("");
			return null;
		} else {
			setError(true);
			setErrorMessage("Only JPG and PNG formats are allowed.");
			return {
				code: "file-type-notallowed",
				message: "Only JPG and PNG formats are allowed.",
			};
		}
	};

	const readFile = (file: File): Promise<string> => {
		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				const content = reader.result?.toString().split(",")[1];
				content
					? resolve(content)
					: reject(new Error("Empty file content"));
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	};

	const handleOnDrop = async (acceptedFiles: File[]) => {
		if (acceptedFiles.length >= 1) {
			try {
				const newImage = await readFile(acceptedFiles[0]);
				setImage(newImage);
				setError(false);
				setErrorMessage("");
				if (onChange) onChange(newImage);
			} catch (err) {
				setError(true);
				setErrorMessage("Failed to read image file.");
			}
		}
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		validator: validateFileExtension,
		disabled,
		multiple: false,
		accept: {
			"image/png": [".png"],
			"image/jpeg": [".jpg", ".jpeg"],
		},
		onDrop: handleOnDrop,
	});

	return (
		<Box
			{...getRootProps()}
			data-drag-active={isDragActive}
			data-error={error}
			data-disabled={disabled}
			css={styles.root}
		>
			<input {...getInputProps({ id, name })} />

			{/* Avatar Preview Thumbnail */}
			<div css={styles.avatar}>
				<img
					alt="Uploaded Avatar"
					src={`data:image/png;base64,${image || defaultAvatar}`}
				/>
			</div>

			{/* Instruction and Error Messages */}
			<div css={styles.text}>
				<Typography variant="subtitle2" className="image-upload-title">
					{isDragActive ? (
						"Drop the image here..."
					) : (
						<>
							Drop image here, or{" "}
							<span className="image-upload-browse">browse</span>
						</>
					)}
				</Typography>

				<Typography variant="caption" className="image-upload-hint">
					PNG, JPG or JPEG (max. 1MB)
				</Typography>

				{error && errorMessage && (
					<Typography variant="caption" className="image-upload-error">
						{errorMessage}
					</Typography>
				)}
			</div>
		</Box>
	);
};

export default ImageUpload;
