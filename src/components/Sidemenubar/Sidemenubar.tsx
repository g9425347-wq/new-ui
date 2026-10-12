import React, { FC, useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";
import Constants from "../Constants";

/**
 * Props for sidebar Menu item
 */
export interface MenuItem {
	icon: IconType;
	label: string;
	name: string;
	subtext?: string;
	path?: string;
	privileges?: any[];
}

export interface SideMenuBarProps {
	id?: string;
	menuItems: Array<MenuItem>;
	selectedItemName?: string;
	onClick?(itemName: string): void;
	height?: string;
}

export const SideMenuBar: FC<SideMenuBarProps> = ({
	id,
	menuItems,
	selectedItemName,
	onClick,
	height,
}) => {
	const theme = useTheme() as any;
	const sideMenuBar = theme?.palette?.sideMenuBar ?? {};

	const [activeName, setActiveName] = useState(selectedItemName);
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	// Synchronize internal active state if controlled prop updates externally
	useEffect(() => {
		if (selectedItemName !== undefined) {
			setActiveName(selectedItemName);
		}
	}, [selectedItemName]);

	const getMenuItem = (item: MenuItem) => {
		const isActive = activeName === item.name;
		const isHovered = hoveredItem === item.name;
		const hasSubtext = Boolean(item.subtext);

		return (
			<div
				key={item.name}
				className={isActive ? "active" : ""}
				style={{
					position: "relative",
					display: "flex",
					alignItems: "center",
					padding: sideMenuBar.item?.padding,
					margin: sideMenuBar.item?.margin,
					borderRadius: sideMenuBar.item?.borderRadius,
					minHeight: sideMenuBar.item?.minHeight,
					boxSizing: "border-box",
					cursor: "pointer",
					backgroundColor: isActive
						? sideMenuBar.itemActiveBackground
						: isHovered
						? sideMenuBar.itemHoverBackground
						: "transparent",
					transition: sideMenuBar.transition?.item,
					userSelect: "none",
				}}
				onMouseEnter={() => setHoveredItem(item.name)}
				onMouseLeave={() => setHoveredItem(null)}
				onClick={() => {
					setActiveName(item.name);

					if (onClick) {
						onClick(item.name);
					}
				}}
			>
				{/* Active Indicator Bar (if configured with width > 0) */}
				{sideMenuBar.indicator?.width &&
					sideMenuBar.indicator.width !== "0px" && (
						<div
							style={{
								position: "absolute",
								left: sideMenuBar.indicator.left,
								top: sideMenuBar.indicator.top,
								bottom: sideMenuBar.indicator.bottom,
								width: sideMenuBar.indicator.width,
								borderRadius:
									sideMenuBar.indicator.borderRadius,
								backgroundColor:
									sideMenuBar.borderActiveIndicator,
								zIndex: sideMenuBar.indicator?.zIndex ?? 2,
								transform: isActive ? "scaleY(1)" : "scaleY(0)",
								opacity: isActive ? 1 : 0,
								transition: sideMenuBar.transition?.indicator,
							}}
						/>
					)}

				<div
					style={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						gap: sideMenuBar.row?.gap,
					}}
				>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0,
							width: sideMenuBar.icon?.width,
							height: sideMenuBar.icon?.height,
							borderRadius: sideMenuBar.icon?.borderRadius,
							fontSize: sideMenuBar.icon?.fontSize,
							color: isActive
								? sideMenuBar.iconActive
								: isHovered
								? sideMenuBar.iconHover ||
								  sideMenuBar.iconDefault
								: sideMenuBar.iconDefault,
							transform:
								isHovered &&
								!isActive &&
								sideMenuBar.hoverIconScale &&
								sideMenuBar.hoverIconScale !== 1
									? `scale(${sideMenuBar.hoverIconScale})`
									: "scale(1)",
							transition: sideMenuBar.transition?.icon,
						}}
					>
						<Icon name={item.icon} />
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							overflow: "hidden",
							minWidth: 0,
						}}
					>
						<span
							style={{
								fontWeight: isActive
									? sideMenuBar.label?.activeFontWeight
									: sideMenuBar.label?.fontWeight,
								fontSize: sideMenuBar.label?.fontSize,
								lineHeight: sideMenuBar.label?.lineHeight,
								color: isActive
									? sideMenuBar.textActive
									: isHovered
									? sideMenuBar.textHover ||
									  sideMenuBar.textPrimary
									: sideMenuBar.textPrimary,
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
								transition: sideMenuBar.transition?.text,
								fontFamily: theme.typography?.fontFamily,
							}}
						>
							{item.label}
						</span>

						{hasSubtext && (
							<span
								style={{
									color: sideMenuBar.textSecondary,
									lineHeight:
										sideMenuBar.subtext?.lineHeight,
									fontSize: sideMenuBar.subtext?.fontSize,
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									marginTop: sideMenuBar.subtext?.marginTop,
									opacity: isActive
										? sideMenuBar.subtext?.activeOpacity
										: sideMenuBar.subtext
												?.inactiveOpacity,
									transition:
										sideMenuBar.transition?.subtext,
									fontFamily: theme.typography?.fontFamily,
								}}
							>
								{item.subtext}
							</span>
						)}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div
			id={id}
			style={{
				flexBasis: sideMenuBar.container?.flexBasis,
				width: sideMenuBar.container?.width,
				height:
					height ||
					sideMenuBar.container?.height ||
					`calc(100vh - ${Constants.TopBarWithBannerHeight})`,
				borderRight: `1px solid ${sideMenuBar.border}`,
				boxShadow: sideMenuBar.shadow,
				display: "flex",
				flexDirection: "column",
				overflowY: "hidden",
				backgroundColor: sideMenuBar.background,
				boxSizing: "border-box",
				zIndex: sideMenuBar.container?.zIndex,
				fontFamily: theme.typography?.fontFamily,
			}}
		>
			<div
				style={{
					flex: 1,
					overflowY: "auto",
					width: "100%",
					padding: sideMenuBar.scrollList?.padding,
					boxSizing: "border-box",
					scrollbarWidth: "thin",
				}}
			>
				{menuItems?.map((item: MenuItem) => getMenuItem(item))}
			</div>
		</div>
	);
};

export default SideMenuBar;
