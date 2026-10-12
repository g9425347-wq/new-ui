import { FC, useState } from "react";
import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	Menu,
	useTheme,
} from "@mui/material";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";

/* Type for menu items */
export interface IconMenuItem {
	icon?: IconType;
	label: string;
	value: string;
	active?: boolean;
	disabled?: boolean;
}

/* Props for IconMenu component - only these attributes to be allowed */
export interface IconMenuProps {
	type?: "iconButton" | "icon";
	size?: "small" | "medium" | "large";
	iconInMenu?: boolean;
	menuItems: Array<IconMenuItem>;
	onClick?(label: string, value: string): any;
	icon?: IconType;
}

// IconMenu Component
export const IconMenu: FC<IconMenuProps> = ({
	size = "medium",
	menuItems = [],
	onClick,
	type = "iconButton",
	iconInMenu = true,
	icon = (type === "iconButton"
		? "vertical-kabab"
		: "arrow-drop-down") as IconType,
}) => {
	const theme = useTheme() as any;
	const menuTokens = theme?.palette?.iconMenu;

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (label: string, value: string) => {
		setAnchorEl(null);
		if (onClick) onClick(label, value);
	};

	return (
		<div>
			{type === "iconButton" ? (
				<IconButton
					icon={icon}
					size={size}
					title="More"
					active={open}
					onClick={handleClick}
				/>
			) : (
				<span
					onClick={handleClick}
					css={menuTokens?.triggerStyle?.(size, open)}
				>
					<span
						className="icon-span"
						css={menuTokens?.triggerIconStyle?.(size)}
					>
						<Icon name={icon} fontSize="inherit" color="inherit" />
					</span>
				</span>
			)}

			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				slotProps={{
					paper: {
						sx: menuTokens?.paperStyle?.(
							theme?.typography?.fontFamily,
						),
					},
				}}
			>
				{menuItems?.map((item) => (
					<MenuItem
						key={item.value}
						disabled={item.disabled}
						selected={item.active}
						onClick={() =>
							handleMenuItemClick(item.label, item.value)
						}
						css={menuTokens?.menuItemStyle?.(item.active)}
					>
						{iconInMenu && item.icon && (
							<ListItemIcon>
								<span
									className="menu-item-icon"
									css={menuTokens?.menuItemIconStyle?.(
										item.active,
									)}
								>
									<Icon name={item.icon} color="inherit" />
								</span>
							</ListItemIcon>
						)}
						<ListItemText primary={item.label} />
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default IconMenu;
