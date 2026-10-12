import { FC, MouseEventHandler, ReactNode } from "react";
import { Link, useTheme } from "@mui/material";

/* Props for link component - only these attributes to be allowed */
export interface HyperlinkProps {
	children: ReactNode;
	href?: string;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	target?: string;
	fontSize?: number;
	fontWeight?: number;
}

export const Hyperlink: FC<HyperlinkProps> = ({
	children,
	href,
	disabled = false,
	onClick,
	target,
	fontSize = 13.5,
	fontWeight = 500,
	...other
}) => {
	const theme = useTheme() as any;

	const hyperlink = theme.palette.hyperlink;

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		if (disabled) {
			e.preventDefault();
			return;
		}

		if (onClick) onClick(e);
	};

	return (
		<Link
			{...other}
			href={disabled ? undefined : href}
			target={disabled ? undefined : target}
			onClick={handleClick}
			underline="none"
			aria-disabled={disabled}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			css={{
				...hyperlink.container,
				fontFamily: `${theme.typography.fontFamily} !important`,
				fontSize: `${fontSize}px !important`,
				fontWeight: `${fontWeight} !important`,
				color: disabled
					? `${hyperlink.colorDisabled} !important`
					: `${hyperlink.color} !important`,
				...(disabled ? hyperlink.disabled : hyperlink.enabled),

				"&:hover": {
					...(disabled
						? {
								...hyperlink.disabledHover,
								color: hyperlink.colorDisabled,
							}
						: {
								...hyperlink.hover,
								color: `${hyperlink.colorHover} !important`,
							}),
				},

				"&:focus-visible": disabled
					? hyperlink.disabledFocus
					: hyperlink.focus,
			}}
		>
			{children}
		</Link>
	);
};

export default Hyperlink;