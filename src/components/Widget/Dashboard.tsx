import { FC, useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { HighChart } from "./HighChart";
import { PageLoader } from "../PageLoader/PageLoader";
import { DateRangePicker } from "../DateRangePicker/DateRangePicker";
import { Box } from "../Box/Box";
import { Dialog } from "../Dialog/Dialog";
import { useTheme } from "@mui/material";

/* Props for button component - only these attributes to be allowed */
export interface DashboardProps {
	groupUid: string;
	widgetUid: string;
	dashboard: dashboard;
	customerUid?: string;
	logoUrl?: string;
	widgetIndex?: number;
	getData?(
		groupUid: string,
		widgetUid: string,
		customerUid?: string,
		fromDate?: string,
		toDate?: string,
	): Promise<any>;
	onDrillDown?(
		groupUid: string,
		widgetUid: string,
		dashboard: dashboard,
		customerUid?: string,
		fromDate?: string,
		toDate?: string,
		point?: {
			series: string;
			category: string;
			name: string;
			x: string;
			y: string;
			z: string;
		},
	): any;
}

//Dashboard Details
export interface dashboard {
	uid: string;
	description: string;
	dashboardTypeUid: string;
	dashboardType: string;
	iframeUrl?: string;
	dashboardCategory: string;
	dashboardCategoryUid: string;
	aggregateTypeUid: string;
	aggregateType: string;
	aggregateFieldUid: string;
	graphTypeUid: string;
	graphType: string;
	groupBy: Array<GroupBy>;
	fromDate: string;
	toDate: string;
	dateRangeLabel: string;
	sort: string;
	limit: number;
	refreshInterval: number;
	drillDown?: boolean;
	script?: string;
	query?: string;
	drilldownQuery?: string;
	formatScript?: string;
	sortOrder: number;
	icon?: string;
	colorScheme?: string;
	trend?: string;
	trendType?: "up" | "down" | "neutral";
	headerActionText?: string;
	filterLabel?: string;
}

export interface GroupBy {
	fieldUid: string;
	interval: string;
}

// Dashboard Component
export const Dashboard: FC<DashboardProps> = ({
	groupUid,
	widgetUid,
	customerUid,
	logoUrl,
	dashboard,
	getData,
	onDrillDown,
	widgetIndex = 0,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.widget?.dashboard ?? {};

	const [data, setData] = useState<any>(null),
		[startDate, setStartDate] = useState<string>(),
		[endDate, setEndDate] = useState<string>(),
		[fullScreen, setFullScreen] = useState(false),
		// User may choose a different date range
		handleDateChange = (start: any, end: any) => {
			setStartDate(start);
			setEndDate(end);
		},
		getIFrame = () => {
			return (
				<div
					data-has-date={Boolean(dashboard.dateRangeLabel)}
					css={styles.iframe}
					dangerouslySetInnerHTML={{
						__html: `<iframe src="${dashboard?.iframeUrl}" width="100%" height="100%"></iframe>`,
					}}
				/>
			);
		};

	useEffect(() => {
		if (dashboard.dashboardTypeUid === "AGGREGATE") {
			if (getData)
				getData(
					groupUid,
					widgetUid,
					customerUid,
					startDate,
					endDate,
				).then((result) => setData(result));

			if (dashboard.refreshInterval > 0) {
				const interval = setInterval(() => {
					if (getData)
						getData(
							groupUid,
							widgetUid,
							customerUid,
							startDate,
							endDate,
						).then((result) => setData(result));
				}, dashboard.refreshInterval);

				return () => clearInterval(interval);
			}
		}
	}, [startDate, endDate]);

	const colorSchemes = styles.colorSchemes || [];
	const colorSchemeKey = (dashboard.colorScheme || "").toLowerCase();
	const schemeIndexMap: Record<string, number> = {
		orange: 0,
		purple: 1,
		blue: 2,
		amber: 3,
		green: 4,
		gray: 5,
	};
	const selectedIndex =
		colorSchemeKey in schemeIndexMap
			? schemeIndexMap[colorSchemeKey]
			: widgetIndex;
	const activeTheme =
		colorSchemes.length > 0
			? colorSchemes[selectedIndex % colorSchemes.length]
			: undefined;

	const resolvedIcon = (dashboard.icon || "vulnerability") as any;

	const formatValue = (val: any) => {
		if (val === null || val === undefined) return "";
		if (dashboard.formatScript) {
			try {
				const formatter = new Function(
					"data",
					`return \`${dashboard.formatScript}\`;`,
				);
				return formatter(val);
			} catch (e) {
				return typeof val === "number"
					? val.toLocaleString()
					: String(val);
			}
		}
		return typeof val === "number" ? val.toLocaleString() : String(val);
	};

	// IFrame
	if (dashboard.dashboardTypeUid === "IFRAME")
		return fullScreen ? (
			<Dialog
				fullScreen
				closeHandler={() => setFullScreen(false)}
				logoUrl={logoUrl}
				header={dashboard.description}
				padding={false}
			>
				<div>
					{dashboard.dateRangeLabel && (
						<div css={styles.fullScreenDate}>
							<Typography
								variant="subtitle1"
								css={styles.fullScreenDateText}
							>
								{dashboard.dateRangeLabel}
							</Typography>
						</div>
					)}
				</div>
				{getIFrame()}
			</Dialog>
		) : (
			<Box>
				<div css={styles.header}>
					<div css={styles.headerText}>
						<Typography variant="subtitle1" css={styles.title}>
							{dashboard.description}
						</Typography>
						{dashboard.dateRangeLabel && (
							<Typography
								variant="subtitle1"
								css={styles.subtitle}
							>
								{dashboard.dateRangeLabel}
							</Typography>
						)}
					</div>
					<div
						css={styles.fullScreenButton}
						onClick={() => setFullScreen(true)}
					>
						<Icon
							name={"full-screen"}
							fontSize="small"
							color="inherit"
						/>
					</div>
				</div>
				{getIFrame()}
			</Box>
		);
	// Aggregate
	else if (dashboard.dashboardTypeUid === "AGGREGATE")
		return (
			<div css={styles.aggregate}>
				{/* Top-Right Arrow link/drilldown */}
				<div
					role="button"
					tabIndex={0}
					css={styles.aggregateArrow}
					onClick={() =>
						onDrillDown &&
						onDrillDown(
							groupUid,
							widgetUid,
							dashboard,
							customerUid,
							startDate,
							endDate,
						)
					}
					title="View details"
				>
					<Icon name="arrow-right" fontSize="small" />
				</div>

				{dashboard.fromDate && dashboard.toDate && (
					<div css={styles.aggregateDatePicker}>
						<DateRangePicker
							onDateRangeChange={handleDateChange}
							startDate={dashboard.fromDate}
							endDate={dashboard.toDate}
						/>
					</div>
				)}

				<div css={styles.aggregateContent}>
					{/* Left Section: Icon badge & Trend indicator */}
					<div css={styles.aggregateLeftSection}>
						<div
							css={styles.aggregateIconBadge}
							style={
								activeTheme
									? {
											backgroundColor: activeTheme.bg,
											color: activeTheme.color,
									  }
									: undefined
							}
						>
							<Icon name={resolvedIcon} fontSize="medium" />
						</div>

						{dashboard.trend !== undefined && dashboard.trend !== null && (
							<div css={styles.aggregateTrend}>
								<span css={styles.aggregateTrendIcon}>
									↗
								</span>
								<span>{dashboard.trend}</span>
							</div>
						)}
					</div>

					{/* Right Section: Metric Value, Title, and Subtitle */}
					<div css={styles.aggregateBody}>
						{data != null ? (
							(() => {
								const valueTypography = (
									<Typography
										variant="h3"
										css={styles.aggregateValue}
									>
										{formatValue(data)}
									</Typography>
								);
								return dashboard.drillDown ? (
									<span
										css={styles.aggregateLink}
										onClick={() =>
											onDrillDown &&
											onDrillDown(
												groupUid,
												widgetUid,
												dashboard,
												customerUid,
												startDate,
												endDate,
											)
										}
									>
										{valueTypography}
									</span>
								) : (
									valueTypography
								);
							})()
						) : (
							<PageLoader />
						)}

						<Typography
							variant="subtitle1"
							css={styles.aggregateTitle}
							title={dashboard.description}
						>
							{dashboard.description}
						</Typography>

						<Typography
							variant="subtitle2"
							css={styles.aggregateRange}
						>
							{startDate
								? "Custom date range"
								: dashboard.dateRangeLabel || "Last 2 Weeks"}
						</Typography>
					</div>
				</div>
			</div>
		);
	else if (dashboard.dashboardTypeUid === "GRAPH")
		return (
			<HighChart
				getData={getData}
				groupUid={groupUid}
				customerUid={customerUid}
				logoUrl={logoUrl}
				widgetUid={widgetUid}
				dashboard={dashboard}
				onDrillDown={onDrillDown}
			/>
		);
	else return <></>;
};
