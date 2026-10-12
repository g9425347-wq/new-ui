import { useState } from "react";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField, TextFieldProps, useTheme } from "@mui/material";
import moment, { Moment } from "moment-timezone";

export interface DateTimePickerProps {
	label?: string | undefined;
	value?: string | null;
	onChange(newValue: any): any;
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
	},
) => {
	const {
		_disabled = false,
		_mandatory = false,
		_error = false,
		label,
		...rest
	} = params;

	const theme = useTheme() as any;
	const dt = theme?.palette?.dateTimePicker;

	return (
		<TextField
			label={
				label ? (
					<>
						<span>{label}</span>
						{_mandatory && (
							<span
								title="Required"
								css={dt?.requiredAsteriskStyle}
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
			css={dt?.textFieldStyle?.(
				_disabled,
				_error,
				theme?.typography?.fontFamily,
			)}
			{...rest}
		/>
	);
};

export const DateTimePicker = (params: DateTimePickerProps) => {
	const {
		label = "Date",
		value = null,
		mandatory = false,
		error = false,
		disabled = false,
		disableFuture = false,
		disablePast = false,
		helperText = undefined,
		autoFocus = false,
		name = undefined,
		onChange,
		...other
	} = params;

	const [dateValue, setDateValue] = useState<Moment | null>(
		value ? moment(value) : null,
	);

	const onChangeHandler = (newValue: Moment | null) => {
		if (newValue?.isValid()) {
			setDateValue(newValue);
			if (onChange) onChange(moment(newValue).format("YYYY-MM-DDTHH:mm"));
		} else if (!newValue) {
			setDateValue(null);
			if (onChange) onChange(null);
		}
	};

	const theme = useTheme() as any;
	const dt = theme?.palette?.dateTimePicker;
	const customThemeTokens = {
		bgCard: dt.popupBg || dt.bgInput,
		border: dt.popupBorder || dt.border,
		textPrimary: dt.textPrimary,
		textSecondary: dt.textSecondary,
		accentBlue: dt.accent,
		accentHover: dt.accentHover,
		shadow: dt.popupShadow || dt.dropdownShadow,
		fontFamily: theme?.typography?.fontFamily,
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<MuiDateTimePicker
				name={name}
				autoFocus={autoFocus}
				label={label}
				format="DD-MMM-YYYY hh:mm A"
				value={dateValue}
				disabled={disabled}
				disableFuture={disableFuture}
				disablePast={disablePast}
				onChange={onChangeHandler}
				ampm={false}
				ampmInClock={false}
				viewRenderers={{}}
				slotProps={{
					field: { disabled: true, format: "DD-MMM-YYYY hh:mm A" },
					textField: {
						_disabled: disabled,
						_mandatory: mandatory,
						_error: error,
						helperText,
					} as any,
					popper: {
						sx: {
							mt: "8px",
							"& .MuiPaper-root": {
								backgroundColor: `${customThemeTokens.bgCard} !important`,
								borderRadius: "12px",
								border: `1px solid ${customThemeTokens.border}`,
								boxShadow: customThemeTokens.shadow,
								overflow: "hidden",
								fontFamily: customThemeTokens.fontFamily,

								/* Header & Arrows */
								"& .MuiPickersCalendarHeader-label": {
									fontSize: "14px",
									fontWeight: 600,
									color: customThemeTokens.textPrimary,
								},
								"& .MuiPickersArrowSwitcher-button": {
									color: customThemeTokens.textSecondary,
									borderRadius: "6px",
									"&:hover": {
										backgroundColor:
											customThemeTokens.accentHover,
										color: customThemeTokens.accentBlue,
									},
								},

								/* Day Column Headers */
								"& .MuiDayCalendar-weekDayLabel": {
									fontSize: "12px",
									fontWeight: 600,
									color: customThemeTokens.textSecondary,
								},

								/* Days */
								"& .MuiPickersDay-root": {
									fontSize: "13px",
									fontWeight: 500,
									borderRadius: "8px",
									color: customThemeTokens.textPrimary,
									transition: "all 0.15s ease",
									"&:hover": {
										backgroundColor:
											customThemeTokens.accentHover,
										color: customThemeTokens.accentBlue,
									},
									"&.Mui-selected": {
										backgroundColor: `${customThemeTokens.accentBlue} !important`,
										color: "#ffffff !important",
										fontWeight: 600,
									},
									"&.MuiPickersDay-today:not(.Mui-selected)":
										{
											border: `1.5px solid ${customThemeTokens.accentBlue}`,
										},
									"&.Mui-disabled": {
										color: `${customThemeTokens.textSecondary} !important`,
										opacity: 0.6,
									},
								},

								/* Year & Month Selection Views */
								"& .MuiYearCalendar-root, & .MuiMonthCalendar-root":
									{
										"& .MuiPickersYear-yearButton, & .MuiPickersMonth-monthButton":
											{
												color: customThemeTokens.textPrimary,
												borderRadius: "8px",
												"&:hover": {
													backgroundColor:
														customThemeTokens.accentHover,
													color: customThemeTokens.accentBlue,
												},
												"&.Mui-selected": {
													backgroundColor: `${customThemeTokens.accentBlue} !important`,
													color: "#ffffff !important",
												},
											},
									},
							},
						},
					},
				}}
				slots={{
					textField: DatePickerTextbox,
				}}
				{...other}
			/>
		</LocalizationProvider>
	);
};

export default DateTimePicker;
