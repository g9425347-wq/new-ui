/* eslint-disable @typescript-eslint/no-unused-expressions */

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import { Typography } from "../Typography/Typography";
import HighChartScripts from "./HighChartScripts";
import highcharts3d from "highcharts/highcharts-3d";
import solidGauge from "highcharts/modules/solid-gauge.js";
import highchartsMore from "highcharts/highcharts-more.js";
import { DateRangePicker } from "../DateRangePicker/DateRangePicker";
import { PageLoader } from "../PageLoader/PageLoader";
import { Icon } from "../Icon/Icon";
import { Dialog } from "../Dialog/Dialog";
import darkUnica from "highcharts/themes/dark-unica";
import { useTheme } from "@mui/material";

highcharts3d(Highcharts);
highchartsMore(Highcharts);
solidGauge(Highcharts);

export const HighChart = (props: any) => {
	const {
		dashboard,
		getData,
		customerUid,
		groupUid,
		widgetUid,
		onDrillDown,
		logoUrl,
	} = props;

	const theme = useTheme() as any;
	const isDark = theme?.palette?.mode === "dark";

	const styles = theme?.widget?.chart ?? {};

	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	const [data, setData] = useState<any>();
	const [startDate, setStartDate] = useState<string>();
	const [endDate, setEndDate] = useState<string>();
	const [fullScreen, setFullScreen] = useState(false);

	const handleDateChange = (start: any, end: any) => {
		setStartDate(start);
		setEndDate(end);
	};

	const pointOnclick = (event: any) => {
		const point = {
			category: event.point.category,
			series: event.point.series.name,
			name: event.point.name,
			x: event.point.x,
			y: event.point.y,
			z: event.point.z,
		};

		onDrillDown &&
			onDrillDown(
				groupUid,
				widgetUid,
				dashboard,
				customerUid,
				startDate,
				endDate,
				point,
			);
	};

	/*
	 * Chart container
	 *
	 * flex: 1 allows the chart to consume all available space.
	 * minHeight: 0 is important when the parent is a flex container.
	 * No fixed height is used.
	 */
	const getHighChart = () => {
		return (
			<div css={styles.chartArea}>
				{data != null ? (
					<div css={styles.chartWrap}>
						<HighchartsReact
							containerProps={{
								className: "widget-chart-container",
							}}
							highcharts={Highcharts}
							options={HighChartScripts(
								dashboard,
								data,
								pointOnclick,
								isDark,
							)}
							ref={chartComponentRef}
						/>
					</div>
				) : (
					<div css={styles.loader}>
						<PageLoader />
					</div>
				)}
			</div>
		);
	};

	useEffect(() => {
		if (getData) {
			getData(groupUid, widgetUid, customerUid, startDate, endDate).then(
				(result: any) => {
					setData(result);
				},
			);
		}

		if (dashboard.refreshInterval > 0) {
			const interval = setInterval(() => {
				if (getData) {
					getData(
						groupUid,
						widgetUid,
						customerUid,
						startDate,
						endDate,
					).then((result: any) => setData(result));
				}
			}, dashboard.refreshInterval);

			return () => clearInterval(interval);
		}
	}, [
		startDate,
		endDate,
		dashboard,
		getData,
		groupUid,
		widgetUid,
		customerUid,
	]);

	useEffect(() => {
		if (isDark || theme?.name === "Dark Theme") {
			darkUnica(Highcharts);
		}
	}, [isDark, theme]);

	return fullScreen ? (
		<Dialog
			fullScreen
			closeHandler={() => setFullScreen(false)}
			logoUrl={logoUrl}
			header={dashboard.description}
			padding={false}
		>
			<div css={styles.fullScreen}>
				{/* Fullscreen Header */}
				<div css={styles.fullScreenHeaderWrap}>
					<div css={styles.fullScreenHeader}>
						<Typography
							variant="subtitle1"
							css={styles.fullScreenDate}
						>
							{startDate
								? "Custom date range"
								: dashboard.dateRangeLabel}
						</Typography>

						<DateRangePicker
							onDateRangeChange={handleDateChange}
							startDate={dashboard.fromDate}
							endDate={dashboard.toDate}
						/>
					</div>
				</div>

				{/* Fullscreen Chart */}
				<div css={styles.chartArea}>{getHighChart()}</div>
			</div>
		</Dialog>
	) : (
		<div css={styles.card}>
			{/* Normal Header */}
			<div css={styles.header}>
				<div css={styles.headerText}>
					<Typography variant="subtitle1" css={styles.title}>
						{dashboard.description}
					</Typography>

					{dashboard.dateRangeLabel && (
						<Typography variant="subtitle1" css={styles.subtitle}>
							{startDate
								? "Custom date range"
								: dashboard.dateRangeLabel}
						</Typography>
					)}
				</div>

				<div css={styles.actions}>
					{dashboard.filterLabel && (
						<div
							role="button"
							tabIndex={0}
							css={styles.headerFilterButton}
						>
							<span>{dashboard.filterLabel}</span>
							<Icon name="arrow-drop-down" fontSize="small" />
						</div>
					)}

					{dashboard.headerActionText && (
						<div
							role="button"
							tabIndex={0}
							css={styles.headerActionButton}
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
							<span>{dashboard.headerActionText}</span>
							<Icon name="arrow-right" fontSize="small" />
						</div>
					)}

					{!dashboard.headerActionText &&
						!dashboard.filterLabel &&
						dashboard.fromDate &&
						dashboard.toDate && (
							<DateRangePicker
								onDateRangeChange={handleDateChange}
								startDate={dashboard.fromDate}
								endDate={dashboard.toDate}
							/>
						)}

					<div
						role="button"
						tabIndex={0}
						css={styles.fullScreenButton}
						onClick={() => setFullScreen(true)}
						title="Fullscreen"
					>
						<Icon
							name={"full-screen"}
							fontSize="small"
							color="inherit"
						/>
					</div>
				</div>
			</div>

			{/* Normal Chart */}
			<div css={styles.body}>{getHighChart()}</div>
		</div>
	);
};

export default HighChart;
