/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

import { useTheme } from "@mui/material";

import { Icon } from "../Icon/Icon";
import { ToolTip } from "../ToolTip/ToolTip";

/*
 * Child component for Topbar to display the main application menu
 */

export interface TopBarMenuProps {
	children?: ReactNode;
	id?: string;
	open?: boolean;
	onClose?: any;
	menuItems: Array<any>;
	icon?: any;
	onClick?: any;
	handleMenuClick?: any;
	activePath?: string;
	menuLogoUrl?: string;
	brandName?: string;
	brandInitial?: string;
	userName?: string;
	userRole?: string;
	userAvtar?: string;

	onGlobalSearchClick?(event: React.MouseEvent<HTMLElement>): any;

	onNotificationClick?(event: React.MouseEvent<HTMLElement>): any;

	onLogoutClick?(event: React.MouseEvent<HTMLElement>): any;

	userAvatarMenuOnClick?(value: string): any;

	onDashboardClick?(event: React.MouseEvent<HTMLElement>): any;
}

// Legacy alias support
export type Props = TopBarMenuProps;

// Matches only the leading segments of activePath that
// correspond to path, ignoring any trailing sub-route segments
const isPathMatch = (activePath?: string, path?: string) => {
	if (!activePath || !path) return false;

	const activeSegments = activePath.split("/").filter(Boolean);

	const pathSegments = path.split("/").filter(Boolean);

	if (activeSegments.length < pathSegments.length) {
		return false;
	}

	return pathSegments.every(
		(segment, index) => segment === activeSegments[index],
	);
};

export const TopBarMenu: FC<TopBarMenuProps> = ({
	menuItems: datasource,
	open,
	handleMenuClick,
	activePath,
	menuLogoUrl,
	brandName = "SecGenie",
	brandInitial = "SG",
	userName = "User",
	userRole = "Administrator",
	userAvtar,
	onGlobalSearchClick,
	onNotificationClick,
	onLogoutClick,
	userAvatarMenuOnClick,
	onDashboardClick,
	...args
}) => {
	const theme = useTheme() as any;

	/*
	 * All visual values now come from the active theme.
	 *
	 * LightTheme:
	 * theme.topBarMenu
	 *
	 * DarkTheme:
	 * theme.topBarMenu
	 */
	const tokens = theme?.topBarMenu;

	const colors = tokens?.colors;
	const dimensions = tokens?.dimensions;
	const spacing = tokens?.spacing;
	const typography = tokens?.typography;
	const radius = tokens?.radius;
	const shadows = tokens?.shadows;
	const transitions = tokens?.transitions;
	const layout = tokens?.layout;
	const scrollbar = tokens?.scrollbar;
	const animation = tokens?.animation;
	const indicator = tokens?.indicator;

	const [subMenu, setSubMenu] = useState(false);

	const [activeParent, setActiveParent] = useState<any>(null);

	const [userDropdownOpen, setUserDropdownOpen] = useState(false);

	const userMenuRef = useRef<HTMLDivElement>(null);

	/*
	 * Close submenu when sidebar is collapsed.
	 */
	useEffect(() => {
		if (!open) {
			setSubMenu(false);
			setActiveParent(null);
		}
	}, [open]);

	/*
	 * Close user dropdown when clicking outside.
	 */
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				userMenuRef.current &&
				!userMenuRef.current.contains(event.target as Node)
			) {
				setUserDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const menuClick = (item: any, event?: React.MouseEvent<HTMLElement>) => {
		if (!open) {
			if (item.subMenuItems && item.subMenuItems.length > 0) {
				if (handleMenuClick) {
					handleMenuClick();
				}

				setSubMenu(true);
				setActiveParent(item);
			} else {
				if (handleMenuClick) {
					handleMenuClick(item);
				}
			}

			return;
		}

		if (item.subMenuItems && item.subMenuItems.length > 0) {
			if (activeParent?.name === item.name) {
				backClick();
				return;
			}

			setSubMenu(true);
			setActiveParent(item);
		} else {
			setSubMenu(false);
			setActiveParent(null);

			if (handleMenuClick) {
				handleMenuClick(item);
			}
		}
	};

	const backClick = () => {
		setSubMenu(false);
		setActiveParent(null);
	};

	const handleLogoutAction = (e: React.MouseEvent<HTMLElement>) => {
		setUserDropdownOpen(false);

		if (onLogoutClick) {
			onLogoutClick(e);
		} else if (userAvatarMenuOnClick) {
			userAvatarMenuOnClick("logout");
		}
	};

	/*
	 * Component to render Menu Items
	 */
	const MenuItem = (props: any) => {
		const { item, isShrunk, isActive, isSubMenu, isOpenParent } = props;

		const isCollapsed = !open;

		return (
			<div
				onClick={(e) => menuClick(item, e)}
				css={{
					position: "relative",
					display: "block",
					width: "100%",
				}}
			>
				<a
					href={
						isCollapsed
							? item.subMenuItems?.length
								? "#"
								: item.path || "#"
							: item.subMenuItems
							? "#"
							: item.path || "#"
					}
					css={{
						display: "flex",
						alignItems: "center",

						justifyContent: isCollapsed ? "center" : "flex-start",

						textDecoration: "none",

						padding: isCollapsed
							? spacing.menuItemCollapsedPadding
							: spacing.menuItemPadding,

						margin: isCollapsed
							? spacing.menuItemCollapsedMargin
							: spacing.menuItemMargin,

						height: isShrunk
							? dimensions.menuItemHeightShrunk
							: isSubMenu
							? dimensions.menuItemHeightSubMenu
							: dimensions.menuItemHeight,

						borderRadius: radius.menuItem,

						boxSizing: layout.boxSizing,

						transition: transitions.standard,

						position: "relative",

						backgroundColor: isActive
							? colors.itemActiveBackground
							: colors.transparent,

						border: `1px solid ${colors.transparent}`,

						paddingLeft: isCollapsed
							? spacing.menuItemCollapsedPaddingLeft
							: isSubMenu
							? spacing.menuItemSubMenuPaddingLeft
							: spacing.menuItemPaddingLeft,

						cursor: "pointer",

						"&:hover": {
							backgroundColor: isActive
								? colors.itemActiveBackground
								: colors.itemHoverBackground,
						},

						"&:hover .menuhover": {
							color: isActive
								? colors.itemActiveText
								: colors.itemHoverText,
						},

						"&:hover .menuicon": {
							color: isActive
								? colors.itemActiveIcon
								: colors.itemHoverIcon,

							transform: isCollapsed
								? animation.collapsedIconScale
								: "none",
						},
					}}
				>
					{/* Active indicator bar */}
					{indicator?.width && indicator.width !== "0px" && (
						<span
							css={{
								position: "absolute",
								left: indicator.left,
								top: indicator.top,
								bottom: indicator.bottom,
								width: indicator.width,
								borderRadius: indicator.borderRadius,
								backgroundColor: colors.activeIndicator,
								zIndex: indicator.zIndex,
								transform: isActive ? "scaleY(1)" : "scaleY(0)",
								opacity: isActive ? 1 : 0,
								transition: transitions.standard,
							}}
						/>
					)}

					<div
						css={{
							display: "flex",
							alignItems: "center",

							justifyContent: isCollapsed
								? "center"
								: "flex-start",

							width: "100%",

							gap: isCollapsed
								? spacing.menuGapCollapsed
								: spacing.menuGap,
						}}
					>
						<div
							className="menuicon"
							css={{
								display:
									isShrunk && !isCollapsed
										? "none"
										: "inline-flex",

								alignItems: "center",

								justifyContent: "center",

								fontSize: isSubMenu
									? typography.submenuIconFontSize
									: typography.iconFontSize,

								flexShrink: 0,

								color: isActive
									? colors.itemActiveIcon
									: colors.textSecondary,

								transition: transitions.fast,
							}}
						>
							<Icon name={item.icon} />
						</div>

						<div
							css={{
								display: isCollapsed ? "none" : "block",

								flex: 1,

								overflow: "hidden",

								whiteSpace: "nowrap",

								textOverflow: "ellipsis",
							}}
						>
							<span
								className="menuhover"
								css={{
									fontWeight: isActive
										? typography.fontWeightSemiBold
										: isSubMenu
										? typography.fontWeightRegular
										: typography.fontWeightMedium,

									fontSize: isSubMenu
										? typography.submenuFontSize
										: typography.menuFontSize,

									color: isActive
										? colors.itemActiveText
										: isSubMenu
										? colors.textSecondary
										: colors.textPrimary,

									lineHeight: typography.menuLineHeight,

									transition: transitions.color,
								}}
							>
								{item.label}
							</span>
						</div>

						{!isCollapsed &&
							item.subMenuItems &&
							item.subMenuItems.length > 0 && (
								<div
									className="menuicon"
									css={{
										display: "inline-flex",

										alignItems: "center",

										justifyContent: "center",

										color: isActive
											? colors.itemActiveIcon
											: colors.textSecondary,

										marginLeft: "auto",

										transform: isOpenParent
											? animation.rotateNegative90
											: animation.rotate90,

										fontSize: typography.arrowFontSize,

										transition: transitions.arrow,
									}}
								>
									<Icon
										name="arrow-right"
										fontSize="inherit"
										htmlColor="currentColor"
									/>
								</div>
							)}
					</div>
				</a>
			</div>
		);
	};

	return (
		<>
			{/* TOP-RIGHT CORNER CLUSTER: INLINE WITH ZERO SIDE GAPS */}

			<div
				ref={userMenuRef}
				css={{
					position: layout.topBarPosition,

					top: spacing.topBarTop,

					right: 0,

					paddingRight: spacing.topBarPaddingRight,

					zIndex: layout.topBarZIndex,

					display: "flex",

					alignItems: "center",

					gap: spacing.topBarGap,

					boxSizing: layout.boxSizing,

					fontFamily: `${typography.fontFamily} !important`,
				}}
			>
				{/* Dashboard Icon Button */}

				<ToolTip title="Dashboard">
					<div
						onClick={onDashboardClick}
						css={{
							width: dimensions.topBarButtonWidth,

							height: dimensions.topBarButtonHeight,

							borderRadius: radius.topBarButton,

							backgroundColor: colors.bgPanel,

							border: `1px solid ${colors.border}`,

							boxShadow: shadows.topBarButton,

							display: "flex",

							alignItems: "center",

							justifyContent: "center",

							cursor: "pointer",

							color: colors.textSecondary,

							transition: transitions.fast,

							"&:hover": {
								color: colors.textActive,

								backgroundColor: colors.bgHover,

								borderColor: colors.borderSubtle,
							},
						}}
					>
						<span
							css={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: spacing.dashboardIconMarginBottom,
							}}
						>
							<Icon name="dashboard" fontSize="small" />
						</span>
					</div>
				</ToolTip>

				{/* Global Search Icon Button */}

				<ToolTip title="Global Search">
					<div
						onClick={onGlobalSearchClick}
						css={{
							width: dimensions.topBarButtonWidth,

							height: dimensions.topBarButtonHeight,

							borderRadius: radius.topBarButton,

							backgroundColor: colors.bgPanel,

							border: `1px solid ${colors.border}`,

							boxShadow: shadows.topBarButton,

							display: "flex",

							alignItems: "center",

							justifyContent: "center",

							cursor: "pointer",

							color: colors.textSecondary,

							transition: transitions.fast,

							"&:hover": {
								color: colors.textActive,

								backgroundColor: colors.bgHover,

								borderColor: colors.borderSubtle,
							},
						}}
					>
						<Icon name="global-search" fontSize="small" />
					</div>
				</ToolTip>

				{/* Notifications Icon Button */}

				{/*
                <ToolTip title="Notifications">
                    <div
                        onClick={onNotificationClick}
                        css={{
                            width:
                                dimensions.topBarButtonWidth,
                            height:
                                dimensions.topBarButtonHeight,
                            borderRadius:
                                radius.topBarButton,
                            backgroundColor:
                                colors.bgPanel,
                            border:
                                `1px solid ${colors.border}`,
                            boxShadow:
                                shadows.topBarButton,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color:
                                colors.textSecondary,
                            transition:
                                transitions.fast,
                            "&:hover": {
                                color:
                                    colors.textActive,
                                backgroundColor:
                                    colors.bgHover,
                                borderColor:
                                    colors.borderSubtle,
                            },
                        }}
                    >
                        <Icon
                            name="notification"
                            fontSize="small"
                        />
                    </div>
                </ToolTip>
                */}

				{/* User Avatar + Name/Role Capsule */}

				<div
					onClick={() => setUserDropdownOpen(!userDropdownOpen)}
					css={{
						display: "flex",

						alignItems: "center",

						gap: spacing.userCapsuleGap,

						padding: spacing.userCapsulePadding,

						backgroundColor: colors.bgPanel,

						border: `1px solid ${
							userDropdownOpen
								? colors.borderSubtle
								: colors.border
						}`,

						borderRadius: radius.userCapsule,

						boxShadow: shadows.userCapsule,

						cursor: "pointer",

						transition: transitions.user,

						userSelect: "none",

						boxSizing: layout.boxSizing,

						"&:hover": {
							backgroundColor: colors.bgHover,

							borderColor: colors.borderSubtle,
						},
					}}
				>
					{userAvtar ? (
						<img
							alt={userName}
							src={
								userAvtar.startsWith("data:") ||
								userAvtar.startsWith("http")
									? userAvtar
									: `data:image/png;base64,${userAvtar}`
							}
							css={{
								width: dimensions.avatarSize,

								height: dimensions.avatarSize,

								borderRadius: radius.avatar,

								objectFit: "cover",

								border: `${dimensions.avatarBorderWidth} solid ${colors.borderSubtle}`,

								flexShrink: 0,
							}}
						/>
					) : (
						<div
							css={{
								width: dimensions.avatarSize,

								height: dimensions.avatarSize,

								borderRadius: radius.avatar,

								backgroundColor: colors.bgActive,

								color: colors.textActive,

								fontWeight: typography.fontWeightBold,

								fontSize: typography.avatarFontSize,

								display: "flex",

								alignItems: "center",

								justifyContent: "center",

								border: `${dimensions.avatarBorderWidth} solid ${colors.borderSubtle}`,

								flexShrink: 0,
							}}
						>
							{userName
								? userName.slice(0, 2).toUpperCase()
								: "US"}
						</div>
					)}

					<div
						css={{
							display: "flex",

							flexDirection: "column",

							textAlign: "left",

							lineHeight: typography.userLineHeight,
						}}
					>
						<span
							css={{
								fontSize: typography.userNameFontSize,

								fontWeight: typography.fontWeightSemiBold,

								color: colors.textPrimary,

								whiteSpace: "nowrap",
							}}
						>
							{userName}
						</span>

						<span
							css={{
								fontSize: typography.userRoleFontSize,

								color: colors.accent,

								fontWeight: typography.fontWeightMedium,

								whiteSpace: "nowrap",
							}}
						>
							{userRole}
						</span>
					</div>

					<svg
						width={dimensions.dropdownArrowSize}
						height={dimensions.dropdownArrowSize}
						viewBox="0 0 24 24"
						fill="none"
						stroke={colors.textSecondary}
						strokeWidth={dimensions.dropdownArrowStrokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
						css={{
							marginLeft: spacing.dropdownArrowMarginLeft,

							transition: transitions.arrow,

							transform: userDropdownOpen
								? animation.rotate180
								: animation.rotate0,
						}}
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>

				{/* Profile Actions Dropdown Menu */}

				{userDropdownOpen && (
					<div
						css={{
							position: layout.dropdownPosition,

							top: layout.dropdownTop,

							right: layout.dropdownRight,

							width: dimensions.dropdownWidth,

							backgroundColor: colors.bgPanel,

							borderRadius: radius.dropdown,

							border: `1px solid ${colors.border}`,

							boxShadow: shadows.dropdown,

							padding: spacing.dropdownPadding,

							zIndex: layout.dropdownZIndex,

							animation: transitions.dropdownAnimation,
						}}
					>
						{/* Edit Profile */}

						<button
							type="button"
							onClick={() => {
								setUserDropdownOpen(false);

								userAvatarMenuOnClick?.("editUserProfile");
							}}
							css={{
								width: "100%",

								display: "flex",

								alignItems: "center",

								gap: spacing.dropdownItemGap,

								padding: spacing.dropdownItemPadding,

								borderRadius: radius.dropdownItem,

								border: "none",

								background: colors.transparent,

								fontFamily: "inherit",

								textAlign: "left",

								cursor: "pointer",

								"&:hover": {
									backgroundColor: colors.bgHover,
								},

								"&:hover .menuicon": {
									color: colors.textActive,
								},

								"&:hover .menuhover": {
									color: colors.textActive,
								},
							}}
						>
							<div
								className="menuicon"
								css={{
									display: "inline-flex",

									alignItems: "center",

									justifyContent: "center",

									fontSize: typography.iconFontSize,

									flexShrink: 0,

									color: colors.textSecondary,

									transition: transitions.fast,
								}}
							>
								<Icon name="edit" fontSize="inherit" />
							</div>

							<span
								className="menuhover"
								css={{
									fontWeight: typography.fontWeightMedium,

									fontSize: typography.menuFontSize,

									color: colors.textPrimary,

									lineHeight: typography.menuLineHeight,

									transition: transitions.color,
								}}
							>
								Edit Profile
							</span>
						</button>

						{/* Reset Password */}

						<button
							type="button"
							onClick={() => {
								setUserDropdownOpen(false);

								userAvatarMenuOnClick?.("resetPassword");
							}}
							css={{
								width: "100%",

								display: "flex",

								alignItems: "center",

								gap: spacing.dropdownItemGap,

								padding: spacing.dropdownItemPadding,

								borderRadius: radius.dropdownItem,

								border: "none",

								background: colors.transparent,

								fontFamily: "inherit",

								textAlign: "left",

								cursor: "pointer",

								"&:hover": {
									backgroundColor: colors.bgHover,
								},

								"&:hover .menuicon": {
									color: colors.textActive,
								},

								"&:hover .menuhover": {
									color: colors.textActive,
								},
							}}
						>
							<div
								className="menuicon"
								css={{
									display: "inline-flex",

									alignItems: "center",

									justifyContent: "center",

									fontSize: typography.iconFontSize,

									flexShrink: 0,

									color: colors.textSecondary,

									transition: transitions.fast,
								}}
							>
								<Icon name="lock" fontSize="inherit" />
							</div>

							<span
								className="menuhover"
								css={{
									fontWeight: typography.fontWeightMedium,

									fontSize: typography.menuFontSize,

									color: colors.textPrimary,

									lineHeight: typography.menuLineHeight,

									transition: transitions.color,
								}}
							>
								Reset Password
							</span>
						</button>

						{/* Divider */}

						<div
							css={{
								height: dimensions.dividerHeight,

								backgroundColor: colors.border,

								margin: spacing.dropdownDividerMargin,
							}}
						/>

						{/* Logout */}

						<button
							type="button"
							onClick={handleLogoutAction}
							css={{
								width: "100%",

								display: "flex",

								alignItems: "center",

								gap: spacing.dropdownItemGap,

								padding: spacing.dropdownItemPadding,

								borderRadius: radius.dropdownItem,

								border: "none",

								background: colors.transparent,

								fontFamily: "inherit",

								textAlign: "left",

								cursor: "pointer",

								"&:hover": {
									backgroundColor: colors.logoutHover,
								},
							}}
						>
							<div
								className="menuicon"
								css={{
									display: "inline-flex",

									alignItems: "center",

									justifyContent: "center",

									fontSize: typography.iconFontSize,

									flexShrink: 0,

									color: colors.logout,

									transition: transitions.fast,
								}}
							>
								<Icon name="logout" fontSize="inherit" />
							</div>

							<span
								className="menuhover"
								css={{
									fontWeight: typography.fontWeightMedium,

									fontSize: typography.menuFontSize,

									color: colors.logout,

									lineHeight: typography.menuLineHeight,

									transition: transitions.color,
								}}
							>
								Logout
							</span>
						</button>
					</div>
				)}
			</div>

			{/* Sliding Sidebar Menu Panel */}

			<div
				css={{
					position: layout.sidebarPosition,

					top: 0,

					left: 0,

					width: open
						? dimensions.expandedWidth
						: dimensions.collapsedWidth,

					height: layout.sidebarHeight,

					transition: transitions.menu,

					fontFamily: `${typography.fontFamily} !important`,

					backgroundColor: colors.bgPanel,

					borderRight: `1px solid ${colors.border}`,

					overflow: layout.overflow,

					boxShadow: shadows.sidebar,

					zIndex: layout.sidebarZIndex,

					boxSizing: layout.boxSizing,
				}}
			>
				<div
					css={{
						width: open
							? dimensions.expandedWidth
							: dimensions.collapsedWidth,

						height: "100%",

						display: "flex",

						flexDirection: "column",
					}}
				>
					{/* Brand / Company Logo Header */}

					<div
						css={{
							flexShrink: 0,

							height: dimensions.menuHeaderHeight,

							minHeight: dimensions.menuHeaderHeight,

							padding: open
								? spacing.brandHeaderPadding
								: spacing.brandHeaderCollapsedPadding,

							background: colors.bgPanel,

							borderBottom: `1px solid ${colors.border}`,

							display: "flex",

							alignItems: "center",

							justifyContent: open ? "flex-start" : "center",

							boxSizing: layout.boxSizing,
						}}
					>
						{open ? (
							menuLogoUrl ? (
								<img
									src={menuLogoUrl}
									alt="Company Logo"
									css={{
										height: dimensions.brandLogoHeight,

										maxWidth: dimensions.brandLogoMaxWidth,

										objectFit: "contain",
									}}
								/>
							) : (
								<div
									css={{
										display: "flex",

										alignItems: "center",

										gap: spacing.brandGap,
									}}
								>
									<div
										css={{
											width: dimensions.brandIconSize,

											height: dimensions.brandIconSize,

											borderRadius: radius.brand,

											backgroundColor: colors.bgActive,

											color: colors.accent,

											fontWeight:
												typography.fontWeightBold,

											fontSize:
												typography.brandInitialFontSize,

											display: "flex",

											alignItems: "center",

											justifyContent: "center",
										}}
									>
										{brandInitial}
									</div>

									<span
										css={{
											fontSize: typography.brandFontSize,

											fontWeight:
												typography.fontWeightBold,

											color: colors.textPrimary,

											letterSpacing:
												typography.brandLetterSpacing,
										}}
									>
										{brandName}
									</span>
								</div>
							)
						) : (
							<div
								css={{
									width: dimensions.collapsedBrandIconSize,

									height: dimensions.collapsedBrandIconSize,

									borderRadius: radius.brand,

									backgroundColor: colors.bgActive,

									color: colors.accent,

									fontWeight: typography.fontWeightBold,

									fontSize: typography.collapsedBrandFontSize,

									display: "flex",

									alignItems: "center",

									justifyContent: "center",

									border: `1px solid ${colors.borderSubtle}`,
								}}
							>
								{brandInitial}
							</div>
						)}
					</div>

					{/* Menu Items List */}

					<div
						css={{
							width: "100%",

							overflowY: layout.menuOverflowY,

							flex: 1,

							paddingBottom: spacing.menuListPaddingBottom,

							"&::-webkit-scrollbar": {
								width: scrollbar.width,
							},

							"&::-webkit-scrollbar-track": {
								background: colors.transparent,
							},

							"&::-webkit-scrollbar-thumb": {
								backgroundColor: colors.borderSubtle,

								borderRadius: scrollbar.thumbRadius,
							},
						}}
					>
						{datasource?.map((item: any, index: number) => {
							const isActiveParent =
								subMenu && activeParent?.name === item.name;

							const isShrunk = subMenu && !isActiveParent;

							const isCurrentPage = isPathMatch(
								activePath,
								item.path,
							);

							const hasActiveChild =
								!isCurrentPage &&
								item.subMenuItems?.some((sub: any) =>
									isPathMatch(activePath, sub.path),
								);

							return (
								<div key={item.name}>
									{item.categoryStart && index > 0 && (
										<div
											css={{
												height: dimensions.dividerHeight,

												background: colors.border,

												margin: spacing.categoryDividerMargin,
											}}
										/>
									)}

									<MenuItem
										item={item}
										isShrunk={isShrunk}
										isActive={
											isActiveParent ||
											isCurrentPage ||
											hasActiveChild
										}
										isOpenParent={isActiveParent}
									/>

									{/* Submenu Dropdown Container */}

									{isActiveParent &&
										item.subMenuItems &&
										item.subMenuItems.length > 0 && (
											<div
												css={{
													display: "flex",

													flexDirection: "column",

													backgroundColor:
														colors.submenuBackground,

													margin: spacing.submenuMargin,

													borderRadius:
														radius.menuItem,

													padding:
														spacing.submenuPadding,

													border: `1px solid ${colors.border}`,
												}}
											>
												{item.subMenuItems.map(
													(subItem: any) => (
														<div
															key={subItem.name}
															css={{
																width: "100%",
															}}
														>
															<MenuItem
																item={subItem}
																isShrunk={false}
																isActive={isPathMatch(
																	activePath,
																	subItem.path,
																)}
																isSubMenu={true}
																isOpenParent={
																	false
																}
															/>
														</div>
													),
												)}
											</div>
										)}
								</div>
							);
						})}
					</div>

					{/* Bottom Collapse/Expand Action Button */}

					<div
						css={{
							flexShrink: 0,

							padding: open
								? spacing.bottomActionPadding
								: spacing.bottomActionCollapsedPadding,

							display: "flex",

							alignItems: "center",

							justifyContent: open ? "flex-end" : "center",

							background: colors.bgPanel,

							borderTop: `1px solid ${colors.border}`,
						}}
					>
						<ToolTip title={open ? "Collapse Menu" : "Expand Menu"}>
							<button
								type="button"
								onClick={handleMenuClick}
								css={{
									cursor: "pointer",

									padding: spacing.collapseButtonPadding,

									borderRadius: radius.collapseButton,

									border: `1px solid ${colors.borderSubtle}`,

									backgroundColor: colors.bgHover,

									display: "flex",

									alignItems: "center",

									justifyContent: "center",

									color: colors.accent,

									outline: "none",

									transition: transitions.fast,

									"&:hover": {
										backgroundColor: colors.bgActive,

										transform: animation.hoverScale,
									},

									"&:active": {
										transform: animation.activeScale,
									},
								}}
							>
								<Icon
									name={open ? "arrow-left" : "arrow-right"}
									fontSize="small"
								/>
							</button>
						</ToolTip>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBarMenu;
