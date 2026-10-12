import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Popover, Button, Box, Typography, useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import moment, { Moment } from "moment";

/**
 * DateRangePicker props
 */
export interface DateRangePickerProps {
	startDate?: string;
	endDate?: string;
	onDateRangeChange: any;
}

interface ShortcutItem {
	label: string;
	getValue: () => [Moment, Moment];
}

const shortcutsItems: ShortcutItem[] = [
	{
		label: "Today",
		getValue: () => [moment(), moment()],
	},
	{
		label: "Last 7 Days",
		getValue: () => [moment().subtract(6, "day"), moment()],
	},
	{
		label: "Current Week",
		getValue: () => [moment().startOf("week"), moment().endOf("week")],
	},
	{
		label: "Last 14 Days",
		getValue: () => [moment().subtract(13, "day"), moment()],
	},
	{
		label: "Current Month",
		getValue: () => [moment().startOf("month"), moment().endOf("month")],
	},
	{
		label: "Last 6 Month",
		getValue: () => [moment().subtract(6, "month"), moment()],
	},
];

/**
 * DateRangePicker component - renders daterangepicker
 * Input params start and end date, event handler to handle datechange
 * @param props
 */
export const DateRangePicker = (props: DateRangePickerProps) => {
	const { startDate, endDate, onDateRangeChange } = props;
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [start, setStart] = useState<Moment | null>(
		startDate ? moment(startDate) : null,
	);
	const [end, setEnd] = useState<Moment | null>(
		endDate ? moment(endDate) : null,
	);

	const theme = useTheme() as any;
	const rangeTokens = theme?.palette?.dateRangePicker;

	const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const applyRange = (s: Moment | null, e: Moment | null) => {
		if (s && e) {
			const startFormatted = moment(s).format("YYYY-MM-DD 00:00:00");
			const endFormatted = moment(e).format("YYYY-MM-DD 23:59:59");
			setStart(moment(startFormatted));
			setEnd(moment(endFormatted));
			onDateRangeChange(startFormatted, endFormatted);
			handleClose();
		}
	};

	const handleShortcut = (item: ShortcutItem) => {
		const [s, e] = item.getValue();
		setStart(s);
		setEnd(e);
		applyRange(s, e);
	};

	const handleStartChange = (value: Moment | null) => {
		setStart(value);
		if (value && end) applyRange(value, end);
	};

	const handleEndChange = (value: Moment | null) => {
		setEnd(value);
		if (start && value) applyRange(start, value);
	};

	const isOpen = Boolean(anchorEl);

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			{/* Trigger Button */}
			<span
				onClick={handleButtonClick}
				css={rangeTokens?.triggerBtnStyle?.(isOpen)}
			>
				<Icon name="calendar-range" fontSize="small" color="inherit" />
			</span>

			{/* Dropdown Popover */}
			<Popover
				open={isOpen}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				transformOrigin={{ vertical: "top", horizontal: "left" }}
				slotProps={{
					paper: {
						sx: rangeTokens?.popoverPaperStyle,
					},
				}}
			>
				<Box
					sx={rangeTokens?.popoverContentStyle?.(
						rangeTokens?.fontFamily || theme?.typography?.fontFamily,
					)}
				>
					{/* Presets Sidebar */}
					<Box sx={rangeTokens?.sidebarStyle}>
						<Typography
							variant="caption"
							sx={rangeTokens?.sectionHeaderStyle?.(
								rangeTokens?.textMuted,
							)}
						>
							Presets
						</Typography>
						{shortcutsItems.map((item) => (
							<Button
								key={item.label}
								size="small"
								onClick={() => handleShortcut(item)}
								sx={rangeTokens?.shortcutBtnStyle?.(
									rangeTokens?.textPrimary,
									rangeTokens?.accentHover,
									rangeTokens?.accentBlue,
								)}
							>
								{item.label}
							</Button>
						))}
					</Box>

					{/* Date Pickers Section */}
					<Box sx={rangeTokens?.customRangeSectionStyle}>
						<Typography
							variant="caption"
							sx={rangeTokens?.sectionHeaderStyle?.(
								rangeTokens?.textMuted,
							)}
						>
							Custom Range
						</Typography>
						<Box sx={rangeTokens?.customRangeRowStyle}>
							<DatePicker
								label="Start Date"
								value={start}
								onChange={handleStartChange}
								format="DD-MMM-YYYY"
								slotProps={{
									textField: {
										size: "small",
										sx: rangeTokens?.dateInputStyle?.(
											rangeTokens?.bgCard,
											rangeTokens?.textPrimary,
											rangeTokens?.border,
											rangeTokens?.borderHover,
											rangeTokens?.accentBlue,
											rangeTokens?.textSecondary,
										),
									},
								}}
							/>
							<Box
								component="span"
								sx={rangeTokens?.toSeparatorStyle?.(
									rangeTokens?.textMuted,
								)}
							>
								to
							</Box>
							<DatePicker
								label="End Date"
								value={end}
								onChange={handleEndChange}
								minDate={start || undefined}
								format="DD-MMM-YYYY"
								slotProps={{
									textField: {
										size: "small",
										sx: rangeTokens?.dateInputStyle?.(
											rangeTokens?.bgCard,
											rangeTokens?.textPrimary,
											rangeTokens?.border,
											rangeTokens?.borderHover,
											rangeTokens?.accentBlue,
											rangeTokens?.textSecondary,
										),
									},
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Popover>
		</LocalizationProvider>
	);
};

export default DateRangePicker;
