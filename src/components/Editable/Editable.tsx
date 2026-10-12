/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactNode, useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material";

/* Props for Editable component - only these attributes to be allowed */
export interface Props {
	children?: ReactNode;
	label?: string;
	text?: string;
	type?: string;
}

// Editable Component
export const Editable: FC<Props> = ({
	label,
	children,
	text = "NA",
	type,
	...props
}) => {
	const [isEditing, setEditing] = useState(false);
	const editContainerRef = useRef<HTMLDivElement>(null);

	const theme = useTheme() as any;
	const editableTokens = theme?.palette?.editable;

	const displayText = text || label || "";
	const isPlaceholder = displayText === "NA" || !displayText;

	// Auto-focus input/textarea upon entering edit mode
	useEffect(() => {
		if (isEditing && editContainerRef.current) {
			const inputElement = editContainerRef.current.querySelector<
				HTMLInputElement | HTMLTextAreaElement
			>("input, textarea");
			if (inputElement) {
				inputElement.focus();
				if (inputElement.setSelectionRange && inputElement.value) {
					const len = inputElement.value.length;
					inputElement.setSelectionRange(len, len);
				}
			}
		}
	}, [isEditing]);

	// Handle blur safely without closing prematurely during clicks
	const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
		if (!e.currentTarget.contains(e.relatedTarget as Node)) {
			setEditing(false);
		}
	};

	return (
		<section
			{...props}
			css={editableTokens?.sectionStyle?.(
				theme?.typography?.fontFamily,
			)}
		>
			{isEditing ? (
				<div
					ref={editContainerRef}
					onBlur={handleBlur}
					css={editableTokens?.editContainerStyle}
				>
					{children}
				</div>
			) : (
				<div
					onClick={() => setEditing(true)}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							setEditing(true);
						}
					}}
					css={editableTokens?.previewContainerStyle}
				>
					<span
						css={editableTokens?.previewTextStyle?.(
							isPlaceholder,
						)}
					>
						{displayText}
					</span>

					<span
						className="edit-pencil-icon"
						aria-hidden="true"
						css={editableTokens?.pencilIconStyle}
					>
						✎
					</span>
				</div>
			)}
		</section>
	);
};

export default Editable;
