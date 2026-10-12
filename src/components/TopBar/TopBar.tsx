/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, useState } from "react";
import { useTheme } from "@mui/material";

import { Dropdown } from "../Dropdown/Dropdown";
import { TopBarMenu, Props as TopBarMenuProps } from "./TopBarMenu";

export interface TopBarProps {
	logoUrl?: string;
	menuLogoUrl?: string;
	brandName?: string;
	brandInitial?: string;
	customers?: any;
	customerUid?: string;
	badgeContent?: string;
	userName?: string;
	userRole?: string;
	onChange?: any;

	topBarMenuProps: TopBarMenuProps;

	onLogoutClick?(event: React.MouseEvent<HTMLElement>): any;

	userAvatarMenuOnClick?(value: string): any;

	onDashboardClick?(event: React.MouseEvent<HTMLElement>): any;

	userAvtar?: any;

	onGlobalSearchClick?(event: React.MouseEvent<HTMLElement>): any;

	onNotificationClick?(event: React.MouseEvent<HTMLElement>): any;

	onWizardClick?(event: React.MouseEvent<HTMLElement>): any;

	wizard?: boolean;
	wizardName?: string;

	onMenuToggle?(open: boolean): void;

	defaultMenuOpen?: boolean;
}

export const TopBar: FC<TopBarProps> = ({
	logoUrl,
	menuLogoUrl,
	brandName,
	brandInitial,
	customers,
	customerUid = "ALL",
	badgeContent,
	userName,
	userRole,
	onChange,
	onLogoutClick,
	userAvatarMenuOnClick,
	onDashboardClick,
	onGlobalSearchClick,
	onNotificationClick,
	onWizardClick,
	userAvtar,
	wizard = false,
	wizardName = "Co-Agent",
	onMenuToggle,
	defaultMenuOpen = false,
	topBarMenuProps,
	...args
}) => {
	const theme = useTheme() as any;

	/**
	 * All visual values are provided by the active theme.
	 *
	 * LightTheme:
	 * theme.topBar
	 *
	 * DarkTheme:
	 * theme.topBar
	 */
	const tokens = theme?.topBar;

	const colors = tokens?.colors ?? {};
	const dimensions = tokens?.dimensions ?? {};
	const layout = tokens?.layout ?? {};
	const typography = tokens?.typography ?? {};
	const transition = tokens?.transition ?? {};

	const [topBarMenuOpen, setTopBarMenuOpen] = useState(defaultMenuOpen);

	/**
	 * Handle menu item clicks as well as
	 * sidebar collapse/expand.
	 */
	const handleMenuClick = (itemOrEvent?: any) => {
		const isMenuItem =
			!!itemOrEvent &&
			typeof itemOrEvent === "object" &&
			("name" in itemOrEvent ||
				"path" in itemOrEvent ||
				"subMenuItems" in itemOrEvent);

		/**
		 * If this is an actual menu item,
		 * forward it to the parent's callback.
		 */
		if (isMenuItem) {
			topBarMenuProps?.onClick?.(itemOrEvent);

			return;
		}

		/**
		 * Otherwise this is the sidebar
		 * expand/collapse action.
		 */
		const next = !topBarMenuOpen;

		setTopBarMenuOpen(next);

		onMenuToggle?.(next);
	};

	/**
	 * Calculate the left offset for the
	 * customer section based on sidebar state.
	 */
	const menuWidth = topBarMenuOpen
		? dimensions.expandedMenuWidth
		: dimensions.collapsedMenuWidth;

	const customerSectionPaddingLeft = `calc(${menuWidth} + ${dimensions.menuOffset})`;

	return (
		<header
			className="uicontrols-topbar"
			css={{
				position: layout.position,
				top: layout.top,
				zIndex: layout.zIndex,

				width: layout.width,
				marginLeft: layout.marginLeft,

				backgroundColor: colors.background,

				borderBottom: `1px solid ${colors.border}`,

				boxShadow: tokens.shadow,

				fontFamily: `${typography.fontFamily} !important`,

				transition: transition.container,

				isolation: layout.isolation,
			}}
		>
			{/* ---------------------------------------------------------
                Main TopBar Container
            --------------------------------------------------------- */}

			<div
				css={{
					display: layout.display,

					flexWrap: layout.flexWrap,

					height: dimensions.height,

					paddingLeft: customerSectionPaddingLeft,

					paddingRight: dimensions.paddingRight,

					alignItems: layout.alignItems,

					justifyContent: layout.justifyContent,

					position: "relative",

					boxSizing: layout.boxSizing,

					transition: transition.menuSpacing,
				}}
			>
				{/* -----------------------------------------------------
                    Left Section
                ----------------------------------------------------- */}

				<div
					css={{
						display: layout.display,

						alignItems: layout.alignItems,

						minWidth: layout.customerSectionMinWidth,
					}}
				>
					{/* -------------------------------------------------
                        Customer Dropdown
                    ------------------------------------------------- */}

					<div
						css={{
							width: dimensions.customerDropdownWidth,

							maxWidth: dimensions.customerDropdownMaxWidth,

							display: layout.display,

							alignItems: layout.alignItems,
						}}
					>
						<Dropdown
							id="CustomerDropDown"
							value={customerUid}
							options={customers}
							short={true}
							onChange={onChange}
						/>
					</div>
				</div>
			</div>

			{/* ---------------------------------------------------------
                Application Main Menu
            --------------------------------------------------------- */}

			<TopBarMenu
				open={topBarMenuOpen}
				handleMenuClick={handleMenuClick}
				activePath={topBarMenuProps.activePath}
				menuLogoUrl={menuLogoUrl}
				brandName={brandName}
				brandInitial={brandInitial}
				userName={userName}
				userRole={userRole}
				userAvtar={userAvtar}
				onGlobalSearchClick={onGlobalSearchClick}
				onNotificationClick={onNotificationClick}
				onLogoutClick={onLogoutClick}
				userAvatarMenuOnClick={userAvatarMenuOnClick}
				onDashboardClick={onDashboardClick}
				{...topBarMenuProps}
				{...args}
			/>
		</header>
	);
};

export default TopBar;
