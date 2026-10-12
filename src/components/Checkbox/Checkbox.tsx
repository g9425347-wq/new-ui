import { FC } from "react";
import { Checkbox, FormControlLabel, useTheme } from "@mui/material";

/* Props for Checkbox component - only these attributes to be allowed */
export interface Props {
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	value?: string;
	onChange?(value: string, check: boolean): any;
}

// Checkbox Component
export const CheckBox: FC<Props> = ({
	checked,
	disabled = false,
	label,
	value = "",
	onChange,
}) => {
	const theme = useTheme() as any;
	const checkTokens = theme?.palette?.checkbox;

	const handleCheck = (e: any) => {
		if (onChange) onChange(value, e.target.checked);
	};

	return (
		<div css={checkTokens?.rootStyle}>
			<FormControlLabel
				css={checkTokens?.labelStyle?.(
					disabled,
					theme?.typography?.fontFamily,
				)}
				control={
					<Checkbox
						className="checkbox"
						checked={checked}
						disabled={disabled}
						size="small"
						css={checkTokens?.checkboxStyle?.(disabled)}
					/>
				}
				value={value}
				label={label ? label : ""}
				onChange={handleCheck}
				checked={checked}
				disabled={disabled}
			/>
		</div>
	);
};

export default CheckBox;
