/* eslint-disable @typescript-eslint/no-unused-expressions */
import Highcharts from "highcharts";
import _ from "lodash";

export default (
	dashboard: any,
	data: any,
	pointOnclick: any,
	isDark: boolean = false,
) => {
	const graphScript: { key: string; value: {} }[] = [
		{
			key: "LINE",
			value: {
				chart: { type: "line" },
				plotOptions: {
					line: {
						lineWidth: 2.5,
						marker: {
							radius: 4,
							symbol: "circle",
							lineWidth: 1.5,
							lineColor: isDark ? "#1e1e1e" : "#ffffff",
						},
					},
				},
			},
		},
		{
			key: "SPLINE",
			value: {
				chart: { type: "spline" },
				plotOptions: {
					spline: {
						lineWidth: 2.5,
						marker: {
							radius: 4,
							symbol: "circle",
							lineWidth: 1.5,
							lineColor: isDark ? "#1e1e1e" : "#ffffff",
						},
					},
				},
			},
		},
		{
			key: "AREA",
			value: {
				chart: { type: "area" },
				plotOptions: {
					area: {
						lineWidth: 2,
						fillOpacity: isDark ? 0.25 : 0.12,
						marker: { radius: 3, symbol: "circle" },
					},
				},
			},
		},
		{
			key: "STACKEDAREA",
			value: {
				chart: { type: "area" },
				plotOptions: {
					series: { stacking: "normal" },
					area: {
						lineWidth: 1.5,
						fillOpacity: 0.35,
						marker: { enabled: false },
					},
				},
			},
		},
		{
			key: "BASICBAR",
			value: {
				chart: { type: "bar" },
				legend: { enabled: false },
				plotOptions: {
					series: {
						colorByPoint: true,
						borderRadius: 6,
						borderWidth: 0,
					},
				},
			},
		},
		{
			key: "BAR",
			value: {
				chart: { type: "bar" },
				plotOptions: {
					bar: { borderRadius: 6, borderWidth: 0 },
				},
			},
		},
		{
			key: "BASICCOLUMN",
			value: {
				chart: { type: "column" },
				legend: { enabled: false },
				plotOptions: {
					series: {
						colorByPoint: true,
						borderRadius: 6,
						borderWidth: 0,
					},
				},
			},
		},
		{
			key: "COLUMN",
			value: {
				chart: { type: "column" },
				plotOptions: {
					column: { borderRadius: 6, borderWidth: 0 },
				},
			},
		},
		{
			key: "STACKEDBAR",
			value: {
				chart: { type: "bar" },
				plotOptions: {
					series: { stacking: "normal", borderWidth: 0 },
					bar: { borderRadius: 4 },
				},
			},
		},
		{
			key: "STACKEDCOLUMN",
			value: {
				chart: { type: "column" },
				plotOptions: {
					column: {
						stacking: "normal",
						borderRadius: 4,
						borderWidth: 0,
					},
				},
			},
		},
		{
			key: "STACKEDGROUPEDCOLUMN",
			value: {
				chart: { type: "column" },
				legend: {
					labelFormatter: function (): string {
						return (
							(this as any).userOptions.stack +
							" (" +
							(this as any).name +
							")"
						);
					},
				},
				plotOptions: {
					column: {
						stacking: "normal",
						borderRadius: 4,
						borderWidth: 0,
					},
				},
			},
		},
		{
			key: "PIE",
			value: {
				chart: { type: "pie" },
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: "pointer",
						borderWidth: 2,
						borderColor: isDark ? "#1e1e1e" : "#ffffff",
						shadow: false,
						size: "92%",
						center: ["42%", "50%"],
						dataLabels: { enabled: false },
					},
				},
			},
		},
		{
			key: "3DPIE",
			value: {
				chart: {
					type: "pie",
					options3d: { enabled: true, alpha: 45 },
				},
				plotOptions: {
					pie: {
						innerSize: 100,
						depth: 45,
						borderWidth: 1.5,
						borderColor: isDark ? "#1e1e1e" : "#ffffff",
					},
				},
			},
		},
		{
			key: "DONUT",
			value: {
				chart: { type: "pie" },
				series: {
					borderWidth: 2,
					borderColor: isDark ? "#1e1e1e" : "#ffffff",
					colorByPoint: true,
					type: "pie",
					size: "88%", // Slightly reduced from 92% to prevent edge clipping
					innerSize: "72%",
					center: ["50%", "50%"], // Reset from 42% to 50% to prevent left-side cut-off
					dataLabels: { enabled: false },
				},
			},
		},
		{
			key: "SEMIDONUT",
			value: {
				chart: { type: "pie" },
				plotOptions: {
					series: {
						innerSize: "65%",
						borderWidth: 2,
						borderColor: isDark ? "#1e1e1e" : "#ffffff",
					},
					pie: {
						dataLabels: {
							enabled: true,
							distance: -30,
							style: {
								fontSize: "12px",
								fontWeight: "600",
								color: isDark ? "#ffffff" : "#0f172a",
								textOutline: "none",
							},
						},
						startAngle: -90,
						endAngle: 90,
						center: ["50%", "75%"],
						size: "110%",
					},
				},
			},
		},
		{
			key: "ACTIVITYGAUGE",
			value: { chart: { type: "solidgauge" } },
		},
		{
			key: "SCATTER",
			value: {
				chart: { type: "scatter" },
				plotOptions: {
					scatter: {
						marker: {
							radius: 4,
							symbol: "circle",
							lineWidth: 1,
							lineColor: isDark ? "#1e1e1e" : "#ffffff",
						},
					},
				},
			},
		},
		{
			key: "BUBBLE",
			value: { chart: { type: "bubble" } },
		},
	];

	const options: any = {
		colors: isDark
			? [
					"#38bdf8",
					"#818cf8",
					"#4ade80",
					"#fbbf24",
					"#a78bfa",
					"#f472b6",
					"#22d3ee",
					"#94a3b8",
			  ]
			: [
					"#0284c7",
					"#8b5cf6",
					"#f59e0b",
					"#f43f5e",
					"#10b981",
					"#64748b",
					"#6366f1",
					"#06b6d4",
			  ],
		chart: {
			backgroundColor: "transparent",
			spacing: [0, 0, 0, 0],
			style: {
				fontFamily:
					"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
			},
		},
		credits: { enabled: false },
		title: { text: "" },
		xAxis: {
			lineColor: isDark ? "#373737" : "#e2e8f0",
			tickColor: isDark ? "#373737" : "#e2e8f0",
			gridLineColor: isDark ? "rgba(255, 255, 255, 0.04)" : "#f8fafc",
			gridLineWidth: 1,
			labels: {
				style: {
					color: isDark ? "#bbbbbb" : "#64748b",
					fontSize: "11px",
				},
			},
		},
		yAxis: {
			title: { text: "" },
			lineColor: "transparent",
			gridLineColor: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
			gridLineWidth: 1,
			labels: {
				style: {
					color: isDark ? "#bbbbbb" : "#64748b",
					fontSize: "11px",
				},
			},
		},
		legend: {
			enabled: true,
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
			floating: false,
			itemStyle: {
				color: isDark ? "#ffffff" : "#334155",
				fontSize: "11px",
				fontWeight: "500",
				textOverflow: "ellipsis",
			},
			itemHoverStyle: {
				color: isDark ? "#70b5f9" : "#0f172a",
			},
			labelFormatter: function (this: any) {
				if (this.y !== undefined && this.percentage !== undefined) {
					return `<span style="display: inline-block; width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: ${
						isDark ? "#ffffff" : "#0f172a"
					};" title="${this.name}">${
						this.name
					}</span><span style="display: inline-block; width: 28px; text-align: right; font-weight: 600; color: ${
						isDark ? "#ffffff" : "#0f172a"
					};">${
						this.y
					}</span><span style="display: inline-block; width: 24px; text-align: right; color: #64748B; font-weight: 500;">${Math.round(
						this.percentage,
					)}%</span>`;
				}
				return `<span style="display: inline-block; width: 95px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: ${
					isDark ? "#ffffff" : "#0f172a"
				};" title="${this.name}">${this.name}</span>`;
			},
			useHTML: true,
			symbolRadius: 3,
			itemMarginBottom: 2,
			maxHeight: 180,
			navigation: {
				activeColor: "#0284c7",
				inactiveColor: "#cbd5e1",
			},
		},
		tooltip: {
			backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
			borderColor: isDark ? "#373737" : "#e2e8f0",
			borderWidth: 1,
			borderRadius: 8,
			shadow: {
				color: isDark ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.08)",
				offsetX: 0,
				offsetY: 4,
				opacity: 1,
				width: 10,
			},
			style: {
				color: isDark ? "#ffffff" : "#0f172a",
				fontSize: "12px",
			},
			useHTML: true,
		},
		plotOptions: {
			series: {
				cursor: "pointer",
				animation: { duration: 350 },
				point: {
					events: {
						click: function (event: any) {
							pointOnclick(event);
						},
					},
				},
			},
		},
	};

	const graphOptions = _.find(graphScript, [
		"key",
		dashboard.graphTypeUid,
	])?.value;

	_.merge(options, graphOptions);

	_.merge(
		options,
		{ xAxis: { categories: data?.categories } },
		{ series: data?.series ? data.series : data },
	);

	if (
		dashboard.script &&
		dashboard.script != null &&
		dashboard.script.trim() != ""
	) {
		const scriptToJsonString = dashboard.script.replace(
			/(\w+:)|(\w+ :)/g,
			function (s: any) {
				return '"' + s.substring(0, s.length - s.length - 1 + 1) + '":';
			},
		);
		_.merge(options, JSON.parse(scriptToJsonString));
	}

	return options;
};
