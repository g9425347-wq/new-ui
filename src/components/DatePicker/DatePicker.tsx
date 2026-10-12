import { useState, useEffect } from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment-timezone";
import { TextField, TextFieldProps, useTheme } from "@mui/material";

export interface DatePickerProps {
	label?: string | undefined;
	value?: string | null;
	onChange?(newValue: string | null): any;
	mandatory?: boolean;
	error?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	helperText?: string | undefined;
	name?: string | undefined;
	disableFuture?: boolean;
	disablePast?: boolean;
}

const DatePickerTextbox = (
	params: TextFieldProps & {
		_disabled?: boolean;
		_mandatory?: boolean;
		_error?: boolean;
		_tokens?: any;
	},
) => {
	const {
		_disabled = false,
		_mandatory = false,
		_error = false,
		_tokens,
		label,
		...rest
	} = params;

	const theme = useTheme() as any;
	const datePickerTokens = _tokens || theme?.palette?.datePicker;

	return (
		<TextField
			label={
				label ? (
					<>
						<span>{label}</span>
						{_mandatory && (
							<span
								title="Required"
								css={datePickerTokens?.requiredAsteriskStyle}
							>
								*
							</span>
						)}
					</>
				) : undefined
			}
			helperText={rest.helperText}
			variant="outlined"
			slotProps={{
				inputLabel: { shrink: true },
				formHelperText: { sx: { fontSize: "12px", mt: "4px" } },
			}}
			css={datePickerTokens?.textFieldStyle?.(
				_disabled,
				_error,
				datePickerTokens.fontFamily,
			)}
			{...rest}
		/>
	);
};

export const DatePicker = (params: DatePickerProps) => {
	const {
		label = "Date",
		value = null,
		mandatory = false,
		error = false,
		disabled = false,
		autoFocus = false,
		helperText = undefined,
		name = undefined,
		disableFuture = false,
		disablePast = false,
		onChange,
		...other
	} = params;

	const theme = useTheme() as any;
	const datePickerTokens = theme?.palette?.datePicker;

	const [dateValue, setValue] = useState<Moment | null>(
		value ? moment(value) : null,
	);

	useEffect(() => {
		setValue(value ? moment(value) : null);
	}, [value]);

	const onChangeHandler = (newValue: Moment | null) => {
		if (newValue?.isValid()) {
			setValue(newValue);
			if (onChange) {
				onChange(moment(newValue).format("YYYY-MM-DD").toString());
			}
		} else if (!newValue) {
			setValue(null);
			if (onChange) {
				onChange(null);
			}
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<MuiDatePicker
				name={name}
				label={label}
				format="DD-MMM-YYYY"
				defaultValue={dateValue}
				value={dateValue}
				autoFocus={autoFocus}
				disabled={disabled}
				disableFuture={disableFuture}
				disablePast={disablePast}
				onChange={onChangeHandler}
				slots={{
					textField: DatePickerTextbox,
				}}
				slotProps={{
					field: { disabled: true, format: "DD-MMM-YYYY" },
					textField: {
						_disabled: disabled,
						_mandatory: mandatory,
						_error: error,
						_tokens: datePickerTokens,
						helperText,
					} as any,
					popper: {
						sx: {
							"& .MuiPaper-root": {
								backgroundColor: `${datePickerTokens.bgInput} !important`,
								borderRadius: "12px",
								border: `1px solid ${datePickerTokens.border}`,
								boxShadow: datePickerTokens.dropdownShadow,
								fontFamily: `${datePickerTokens.fontFamily} !important`,
								marginTop: "6px",

								/* Header & Arrows */
								"& .MuiPickersCalendarHeader-label": {
									fontSize: "14px",
									fontWeight: 600,
									color: datePickerTokens.textPrimary,
								},
								"& .MuiPickersArrowSwitcher-button": {
									color: datePickerTokens.textSecondary,
									borderRadius: "6px",
									"&:hover": {
										backgroundColor:
											datePickerTokens.accentHover,
										color: datePickerTokens.accent,
									},
								},

								/* Day Column Headers */
								"& .MuiDayCalendar-weekDayLabel": {
									fontSize: "12px",
									fontWeight: 600,
									color: datePickerTokens.textSecondary,
								},

								/* Days */
								"& .MuiPickersDay-root": {
									fontSize: "13px",
									fontWeight: 500,
									borderRadius: "8px",
									color: datePickerTokens.textPrimary,
									transition: "all 0.15s ease",
									"&:hover": {
										backgroundColor:
											datePickerTokens.accentHover,
										color: datePickerTokens.accent,
									},
									"&.Mui-selected": {
										backgroundColor: `${datePickerTokens.accent} !important`,
										color: `${datePickerTokens.selectedDayText} !important`,
										fontWeight: 600,
									},
									"&.MuiPickersDay-today:not(.Mui-selected)":
										{
											border: `1.5px solid ${datePickerTokens.accent}`,
										},
									"&.Mui-disabled": {
										color: `${datePickerTokens.textDisabled} !important`,
										opacity: 0.6,
									},
								},

								/* Year & Month Selection Views */
								"& .MuiYearCalendar-root, & .MuiMonthCalendar-root":
									{
										"& .MuiPickersYear-yearButton, & .MuiPickersMonth-monthButton":
											{
												color: datePickerTokens.textPrimary,
												borderRadius: "8px",
												"&:hover": {
													backgroundColor:
														datePickerTokens.accentHover,
													color: datePickerTokens.accent,
												},
												"&.Mui-selected": {
													backgroundColor: `${datePickerTokens.accent} !important`,
													color: "#ffffff !important",
												},
											},
									},
							},
						},
					},
				}}
				{...other}
			/>
		</LocalizationProvider>
	);
};

export default DatePicker;
