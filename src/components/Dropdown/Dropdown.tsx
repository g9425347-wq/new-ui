import {
	FormControl,
	FormHelperText,
	InputLabel,
	useTheme,
} from "@mui/material";
import { FC, useMemo } from "react";
import Select, { MultiValue, SingleValue, components } from "react-select";

/**
 * Type for passing data to Dropdown. Label is the caption and value is the data
 */
export type Option = { label: string; value: string; online?: boolean };

/* Props for Select component - only these attributes to be allowed */
export interface DropdownProps {
	id?: string;
	name?: string;
	label?: string;
	options?: Option[];
	disabled?: boolean;
	mandatory?: boolean;
	error?: boolean;
	short?: boolean;
	variant?: "single" | "multi";
	value?: string | Array<string>;
	onChange?(data: SingleValue<Option> | MultiValue<Option> | null): any;
	helperText?: string | undefined;
}

// Stable Custom Components
const CustomOption = (props: any) => {
	const tokens = props.selectProps?.tokens;

	return (
		<components.Option {...props}>
			<div css={tokens?.optionRowStyle}>
				<span css={tokens?.optionTextStyle}>{props.label}</span>
				{props.data.online && (
					<span css={tokens?.onlineDotStyle?.(tokens?.onlineDot)} />
				)}
			</div>
		</components.Option>
	);
};

const CustomSingleValue = (props: any) => {
	const tokens = props.selectProps?.tokens;

	return (
		<components.SingleValue {...props}>
			<div css={tokens?.singleValueRowStyle}>
				<span>{props.children}</span>
				{props.data.online && (
					<span css={tokens?.singleValueDotStyle?.(tokens?.onlineDot)} />
				)}
			</div>
		</components.SingleValue>
	);
};

export const Dropdown: FC<DropdownProps> = ({
	id,
	disabled = false,
	mandatory = false,
	error = false,
	short = false,
	variant = "single",
	value = undefined,
	onChange,
	options = [],
	helperText = undefined,
	label,
	...args
}) => {
	const theme = useTheme() as any;
	const dropdownTokens = theme?.palette?.dropdown;

	// Memoize default value
	const defaultValue = useMemo(() => {
		if (!options || options.length === 0 || value === undefined)
			return undefined;
		if (Array.isArray(value)) {
			return options.filter((x) => value.includes(x.value));
		}
		return options.find((x) => x.value === value);
	}, [options, value]);

	// Handlers
	const onChangeHandler = (
		data: SingleValue<Option> | MultiValue<Option> | null,
	) => {
		if (onChange) onChange(data);
	};

	// Memoized react-select dynamic styles
	const customStyles = useMemo(
		() =>
			dropdownTokens?.getSelectStyles?.({
				disabled,
				error,
				short,
				fontFamily: theme?.typography?.fontFamily,
			}) ?? {},
		[dropdownTokens, disabled, error, short, theme?.typography?.fontFamily],
	);
	const SelectWithTokens = Select as any;

	return (
		<FormControl
			variant="outlined"
			fullWidth
			hiddenLabel={true}
			css={dropdownTokens?.formControlStyle?.(
				theme?.typography?.fontFamily,
			)}
		>
			{label && (
				<InputLabel
					shrink={true}
					htmlFor={id}
					css={dropdownTokens?.inputLabelStyle?.(
						disabled,
						error,
						theme?.typography?.fontFamily,
					)}
				>
					<span>{label}</span>
					{mandatory && (
						<span
							title="Required"
							css={dropdownTokens?.requiredAsteriskStyle}
						>
							*
						</span>
					)}
				</InputLabel>
			)}

			<SelectWithTokens
				id={id}
				isMulti={variant === "multi"}
				options={options}
				isDisabled={disabled}
				isClearable={true}
				value={defaultValue}
				onChange={onChangeHandler}
				styles={customStyles}
				tokens={dropdownTokens}
				components={{
					Option: CustomOption,
					SingleValue: CustomSingleValue,
				}}
				menuPlacement="auto"
				menuPosition="absolute"
				menuPortalTarget={
					typeof document !== "undefined" ? document.body : undefined
				}
				{...args}
			/>

			{helperText && (
				<FormHelperText
					css={dropdownTokens?.helperTextStyle?.(
						error,
						theme?.typography?.fontFamily,
					)}
				>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default Dropdown;
