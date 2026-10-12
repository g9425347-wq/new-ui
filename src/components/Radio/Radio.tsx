import { FC, ChangeEventHandler } from "react";
import { FormControlLabel, Radio as MuiRadio, useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";

export interface RadioProps {
	label?: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
	name?: string;
}

export const Radio: FC<RadioProps> = ({
	checked = false,
	label = "",
	disabled = false,
	value,
	onChange,
	...args
}) => {
	const theme = useTheme() as any;
	const radio = theme.palette.radio;

	const borderColor = disabled ? radio.disabledColor : radio.color;

	return (
		<FormControlLabel
			value={value}
			checked={checked}
			disabled={disabled}
			onChange={(event) =>
				onChange?.(event as React.ChangeEvent<HTMLInputElement>)
			}
			control={
				<MuiRadio
					icon={
						<div
							css={{
								width: radio.size,
								height: radio.size,
								borderRadius: radio.borderRadius,
								border: `${radio.borderWidth} solid ${borderColor}`,
								backgroundColor: radio.uncheckedBackground,
								transition: radio.transition,
							}}
						/>
					}
					checkedIcon={
						<div
							css={{
								width: radio.size,
								height: radio.size,
								borderRadius: radio.borderRadius,
								border: `${radio.borderWidth} solid ${radio.color}`,
								backgroundColor: radio.color,
								display: radio.checkedDisplay,
								alignItems: radio.checkedAlignItems,
								justifyContent: radio.checkedJustifyContent,
								color: radio.checkedIconColor,
							}}
						>
							<span
								css={{
									display: radio.iconDisplay,
									alignItems: radio.iconAlignItems,
									justifyContent: radio.iconJustifyContent,
									fontSize: radio.iconSize,
									lineHeight: radio.iconLineHeight,
								}}
							>
								<Icon
									name={radio.iconName}
									fontSize={radio.iconFontSize}
									color={radio.iconColor}
								/>
							</span>
						</div>
					}
				/>
			}
			label={label}
			css={{
				margin: radio.margin,
				fontFamily: `${theme.typography.fontFamily} !important`,
				cursor: disabled ? radio.disabledCursor : radio.cursor,
				userSelect: radio.userSelect,

				"& .MuiFormControlLabel-label": {
					fontFamily: `${theme.typography.fontFamily} !important`,
					fontSize: radio.labelFontSize,
					fontWeight: radio.labelFontWeight,
					color: disabled
						? `${radio.textDisabled} !important`
						: `${radio.textPrimary} !important`,
				},

				"& .MuiRadio-root": {
					padding: radio.padding,
					color: radio.color,

					"&.Mui-disabled": {
						color: radio.disabledColor,
					},
				},
			}}
			{...args}
		/>
	);
};

export default Radio;
