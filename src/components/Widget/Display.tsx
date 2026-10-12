/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useTheme } from "@mui/material";
import { Dashboard } from "./Dashboard";

export interface DisplayProps {
	id?: string;
	widgets?: Array<any>;
	customerUid?: string;
	getData?: any;
	onDrillDown?: any;
	logoUrl?: string;
}

export const Display: FC<DisplayProps> = ({
	id,
	widgets,
	customerUid,
	getData,
	onDrillDown,
	logoUrl,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.widget?.display ?? {};

	const ResponsiveReactGridLayout = WidthProvider(Responsive);

	return (
		<ResponsiveReactGridLayout
			key={id}
			cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
			isResizable={false}
			isDraggable={false}
		>
			{widgets?.map((widget: any, index: number) => (
				<div
					id={widget.i}
					key={widget.i}
					data-grid={{
						x: widget?.x,
						y: widget?.y,
						w: widget?.w,
						h: widget?.h,
						i: widget.i,
					}}
					css={styles.card}
				>
					<Dashboard
						groupUid={id || ""}
						widgetUid={widget.i}
						customerUid={customerUid}
						logoUrl={logoUrl}
						dashboard={widget.dashboard}
						getData={getData}
						onDrillDown={onDrillDown}
						widgetIndex={index}
					/>
				</div>
			))}
		</ResponsiveReactGridLayout>
	);
};

export default Display;
