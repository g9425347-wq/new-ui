import { FC, ChangeEventHandler, forwardRef } from "react";
import { TextField as MuiTextField, useTheme } from "@mui/material";

export interface TextFieldProps {
	id?: string | undefined;
	name?: string | undefined;
	label?: string | undefined;
	helperText?: string | undefined;
	value?: string | number | undefined;
	type?: "text" | "email" | "password" | "number";
	disabled?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	mandatory?: boolean;
	error?: boolean;
	autoFocus?: boolean;
	ref?: any;
	placeholder?: string;
	css?: any;
}

export const TextField: FC<TextFieldProps> = forwardRef(
	(
		{
			id = undefined,
			name = undefined,
			type = "text",
			label = undefined,
			helperText = undefined,
			disabled = false,
			value = undefined,
			onChange = undefined,
			mandatory = false,
			error = false,
			autoFocus = false,
			placeholder = undefined,
			...other
		},
		ref,
	) => {
		const theme = useTheme() as any;
		const tokens = theme?.palette?.textField;

		const primaryMain = theme?.palette?.primary?.main ?? tokens.primaryMain;

		const errorMain = theme?.palette?.error?.main ?? tokens.errorMain;

		const borderFocus = error ? errorMain : primaryMain;
		const borderHover = error ? errorMain : tokens.borderHover;
		const borderActive = error ? errorMain : tokens.border;

		return (
			<div
				css={{
					display: tokens.containerDisplay,
					flexDirection: tokens.containerFlexDirection,
					width: tokens.containerWidth,
					boxSizing: tokens.boxSizing,
				}}
			>
				{label && (
					<label
						css={{
							display: tokens.labelDisplay,
							alignItems: tokens.labelAlignItems,
							gap: tokens.labelGap,
							marginBottom: tokens.labelMarginBottom,
							fontSize: tokens.labelFontSize,
							fontWeight: tokens.labelFontWeight,
							lineHeight: tokens.labelLineHeight,
							fontFamily: `${tokens.fontFamily} !important`,
							color: disabled
								? tokens.textMuted
								: error
								? tokens.textError
								: tokens.textSecondary,
							transition: tokens.labelTransition,
							userSelect: tokens.labelUserSelect,
						}}
					>
						<span>{label}</span>

						{mandatory && (
							<span
								title="Required"
								css={{
									color: primaryMain,
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
					helperText={helperText}
					fullWidth
					variant="outlined"
					id={id}
					name={name}
					type={type}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					error={error}
					autoComplete="off"
					autoFocus={autoFocus}
					{...other}
					slotProps={{
						inputLabel: {
							shrink: false,
						},
						formHelperText: {
							sx: {
								fontSize: tokens.helperFontSize,
								margin: tokens.helperMargin,
							},
						},
					}}
					css={{
						width: tokens.fieldWidth,
						display: tokens.fieldDisplay,
						flexDirection: tokens.fieldFlexDirection,
						backgroundColor: tokens.fieldBackground,

						"& .MuiOutlinedInput-root": {
							backgroundColor: disabled
								? tokens.bgDisabled
								: tokens.bgSurface,
							borderRadius: tokens.inputBorderRadius,
							fontSize: tokens.inputFontSize,
							boxShadow: disabled ? tokens.shadow : undefined,
							transition: tokens.inputTransition,
						},

						"& input": {
							padding: tokens.inputPadding,
							height: tokens.inputHeight,
							fontWeight: tokens.inputFontWeight,
							color: disabled
								? tokens.textMuted
								: tokens.textPrimary,
							WebkitTextFillColor: disabled
								? tokens.textMuted
								: tokens.textPrimary,
						},

						"& .MuiOutlinedInput-root.Mui-disabled": {
							"& input": {
								color: tokens.textMuted,
								WebkitTextFillColor: tokens.textMuted,

								"&::placeholder": {
									color: tokens.textMuted,
									opacity: tokens.placeholderOpacity,
									fontWeight: tokens.placeholderFontWeight,
								},
							},

							"& .MuiOutlinedInput-notchedOutline": {
								borderColor: tokens.borderDisabled,
								borderWidth: tokens.disabledBorderWidth,
							},
						},

						"& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus":
							{
								WebkitBoxShadow: `0 0 0 100px ${tokens.bgSurface} inset !important`,
								WebkitTextFillColor: `${
									disabled
										? tokens.textMuted
										: tokens.textPrimary
								} !important`,
								transition: tokens.autofillTransition,
							},

						".MuiOutlinedInput-notchedOutline": {
							borderColor: borderActive,
							borderWidth: tokens.normalBorderWidth,
							transition: tokens.outlineTransition,
						},

						"& .MuiOutlinedInput-root:not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline":
							{
								borderColor: borderHover,
							},

						".Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: `${borderFocus} !important`,
							borderWidth: tokens.focusBorderWidth,
						},

						"& .MuiOutlinedInput-root.Mui-focused": {
							boxShadow: error
								? tokens.errorRing
								: tokens.focusRing,
						},

						".MuiFormHelperText-root": {
							color: tokens.textSecondary,
							backgroundColor: tokens.helperBackgroundColor,
							margin: tokens.helperMargin,
							padding: tokens.helperPadding,
						},

						".MuiFormHelperText-root.Mui-error": {
							color: `${tokens.textError} !important`,
						},
					}}
				/>
			</div>
		);
	},
);

export default TextField;
