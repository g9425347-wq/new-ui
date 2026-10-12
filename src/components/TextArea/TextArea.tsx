import { ChangeEventHandler, forwardRef, useState, useMemo } from "react";
import { TextField as MuiTextField, useTheme } from "@mui/material";

export interface TextAreaProps {
	id?: string;
	name?: string;
	label?: string;
	disabled?: boolean;
	value?: string | null;
	rows?: number;
	helperText?: string | undefined;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
	onDrop?(id: string): any;
	mandatory?: boolean;
	error?: boolean;
	autoFocus?: boolean;
	placeholder?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			id,
			name,
			disabled = false,
			label,
			value = null,
			rows = 4,
			onChange,
			onDrop,
			mandatory = false,
			error = false,
			autoFocus = false,
			helperText,
			placeholder,
			...other
		},
		ref,
	) => {
		const theme = useTheme() as any;

		const tokens = useMemo(() => {
			return theme?.palette?.textArea;
		}, [theme]);

		const [isDragOver, setIsDragOver] = useState(false);

		const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
			setIsDragOver(false);

			const droppedId = event.dataTransfer.getData("text/plain");

			if (onDrop) {
				onDrop(droppedId);
			}
		};

		const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();

			if (!isDragOver) {
				setIsDragOver(true);
			}
		};

		const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
			setIsDragOver(false);
		};

		const activeBorderColor = isDragOver
			? tokens.borderDragOver
			: error
			? tokens.borderError
			: tokens.border;

		const hoverBorderColor = error
			? tokens.borderError
			: isDragOver
			? tokens.borderDragOver
			: tokens.borderHover;

		const focusBorderColor = error
			? tokens.borderError
			: tokens.borderFocus;

		return (
			<div
				css={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					width: "100%",
					boxSizing: "border-box",
					fontFamily: `${tokens.fontFamily} !important`,
				}}
			>
				{label && (
					<label
						css={{
							display: "inline-flex",
							alignItems: "center",
							gap: tokens.labelGap,
							marginBottom: tokens.labelMarginBottom,
							fontSize: tokens.labelFontSize,
							fontWeight: tokens.labelFontWeight,
							lineHeight: tokens.labelLineHeight,
							letterSpacing: tokens.labelLetterSpacing,
							color: disabled
								? tokens.textMuted
								: error
								? tokens.textError
								: tokens.textSecondary,
							userSelect: "none",
							fontFamily: "inherit",
						}}
					>
						<span>{label}</span>

						{mandatory && (
							<span
								title="Required"
								css={{
									color: tokens.accent,
									fontSize: tokens.mandatoryFontSize,
									fontWeight: tokens.mandatoryFontWeight,
									lineHeight: tokens.mandatoryLineHeight,
									marginLeft: tokens.mandatoryMarginLeft,
								}}
							>
								*
							</span>
						)}
					</label>
				)}

				<MuiTextField
					inputRef={ref}
					hiddenLabel
					fullWidth
					variant="outlined"
					id={id}
					name={name}
					onChange={onChange}
					value={value ?? ""}
					placeholder={placeholder}
					disabled={disabled}
					multiline
					minRows={rows}
					maxRows={Infinity}
					error={error}
					autoFocus={autoFocus}
					onDrop={handleDrop}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					slotProps={{
						formHelperText: {
							sx: {
								display: "none",
							},
						},
					}}
					css={{
						"& .MuiOutlinedInput-root": {
							backgroundColor: disabled
								? tokens.bgDisabled
								: isDragOver
								? tokens.bgDragOver
								: tokens.bgSurface,
							borderRadius: tokens.inputBorderRadius,
							fontSize: tokens.inputFontSize,
							lineHeight: tokens.inputLineHeight,
							boxShadow: tokens.shadow,
							padding: tokens.inputPadding,
							transition: tokens.inputTransition,
							fontFamily: "inherit",

							"& textarea": {
								color: disabled
									? tokens.textMuted
									: tokens.textPrimary,

								fontFamily: "inherit",

								WebkitTextFillColor: disabled
									? tokens.textMuted
									: tokens.textPrimary,

								whiteSpace: tokens.whiteSpace,
								overflowWrap: tokens.overflowWrap,
								wordBreak: tokens.wordBreak,

								"&::placeholder": {
									color: tokens.textMuted,
									opacity: 1,
									fontWeight: tokens.placeholderFontWeight,
								},
							},

							"& .MuiOutlinedInput-notchedOutline": {
								top: tokens.outlineTop,
								borderRadius: tokens.outlineBorderRadius,
								borderColor: `${activeBorderColor} !important`,
								borderWidth: isDragOver
									? tokens.dragOverBorderWidth
									: tokens.normalBorderWidth,
								borderStyle: isDragOver
									? tokens.dragOverBorderStyle
									: tokens.normalBorderStyle,
								transition: tokens.outlineTransition,

								"& legend": {
									display: "none",
								},
							},

							"&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline":
								{
									borderColor: `${hoverBorderColor} !important`,
								},

							"&.Mui-focused": {
								boxShadow: error
									? tokens.errorRing
									: tokens.focusRing,

								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: `${focusBorderColor} !important`,
									borderWidth: tokens.focusBorderWidth,
								},
							},
						},
					}}
					{...other}
				/>

				{helperText && (
					<span
						css={{
							marginTop: tokens.helperMarginTop,
							fontSize: tokens.helperFontSize,
							fontWeight: tokens.helperFontWeight,
							lineHeight: tokens.helperLineHeight,
							color: error
								? tokens.textError
								: tokens.textSecondary,
							display: "flex",
							alignItems: "center",
							gap: tokens.helperGap,
							fontFamily: "inherit",
						}}
					>
						{helperText}
					</span>
				)}
			</div>
		);
	},
);

TextArea.displayName = "TextArea";

export default TextArea;
