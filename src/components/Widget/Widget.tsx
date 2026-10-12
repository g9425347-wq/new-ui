import { FC } from "react";
import { WidgetStyle } from "./WidgetStyle";
import { Receiver } from "./Receiver";
import { Sender } from "./Sender";
import { Display } from "./Display";

/**
 * Dashboard that will be displayed inside a widget
 */
export interface dashboard {
	uid: string;
	description: string;
	fromDate: string;
	toDate: string;
	dateRangeLabel?: string;
	dashboardCategory: string;
	dashboardTypeUid: string;
	dashboardType: string;
	graphTypeUid: string;
	graphType: string;
	refreshInterval: string;
	sortOrder: string;
	sort: string;
	limit: string;
	groupBy: string;
	drillDown?: boolean;
	iframeCode?: string;
	script?: string;
	drilldownQuery?: string;
	query?: string;
	formatScript?: any;
	icon?: string;
	colorScheme?: string;
	trend?: string;
	trendType?: "up" | "down" | "neutral";
	headerActionText?: string;
	filterLabel?: string;
}

/**
 * Widget will contian a dashboard and take the rendering properties
 */
export interface widget {
	i: string;
	x: number;
	y: number;
	w: number;
	h: number;
	dashboard: dashboard;
}

export interface WidgetProps {
	id?: string; // Reqired for display type
	type: "receiver" | "sender" | "display"; // mandatory
	widgets: widget[];
	customerUid?: string;
	logoUrl?: string;
	onLayoutChange?(widgets: widget[]): any; // required for receiver
	getData?(
		groupUid: string,
		widgetUid: string,
		customerUid?: string,
		fromDate?: string,
		toDate?: string,
	): Promise<any>;
	onDrillDown?(
		groupUid: string,
		dashboard: dashboard,
		widgetUid: string,
		customerUid?: string,
		fromDate?: Date,
		toDate?: Date,
		event?: any,
	): any;
	onEditClick?(widgetId: string): any;
}

export const Widget: FC<WidgetProps> = ({
	id,
	type,
	widgets,
	customerUid,
	logoUrl,
	onLayoutChange,
	getData,
	onDrillDown,
	onEditClick,
}) => {
	const handleEditClick = (uid: string) => {
		if (onEditClick) onEditClick(uid);
	};
	return (
		<WidgetStyle>
			{type === "receiver" && (
				<Receiver
					widgets={widgets}
					onLayoutChange={onLayoutChange}
					handleEditClick={handleEditClick}
				/>
			)}
			{type === "sender" && <Sender widgets={widgets} />}
			{type === "display" && (
				<Display
					id={id}
					widgets={widgets}
					customerUid={customerUid}
					logoUrl={logoUrl}
					getData={getData}
					onDrillDown={onDrillDown}
				/>
			)}
		</WidgetStyle>
	);
};
