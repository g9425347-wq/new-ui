import { CSSProperties, FC, memo } from "react";
import { useTheme } from "@mui/material";
import { infraIconBody } from "./infraIconPaths";
import { DEFAULT_PLATFORM_COLOR, resolveInfraNode } from "./infraCatalog";

export interface InfraIconProps {
	/** Catalogue glyph key, e.g. `SearchCode` or `HardDriveDownload`. */
	iconKey: string;
	/** Platform scope tag drawn in the corner, e.g. `AWS`, `AZ`, `DC`. */
	platformBadge?: string;
	/** Platform theme colour; falls back to the on-prem neutral. */
	platformColor?: string;
	/** Glyph size in px. The tile scales proportionally. */
	size?: number;
	/** Marks the node as part of the active attack path. */
	isCompromised?: boolean;
	/** Native tooltip; usually the resolved component label. */
	title?: string;
	className?: string;
	onClick?: () => void;
}

export const InfraIcon: FC<InfraIconProps> = memo(
	({
		iconKey,
		platformBadge,
		platformColor = DEFAULT_PLATFORM_COLOR,
		size = 24,
		isCompromised = false,
		title,
		className,
		onClick,
	}) => {
		const theme = useTheme() as any;
		const styles = theme?.infraIcon ?? {};

		const isInteractive = Boolean(onClick);
		const tileDimension = size + 22;
		const borderRadius = Math.max(8, Math.round(tileDimension * 0.24));

		return (
			<div
				className={className}
				title={title}
				onClick={onClick}
				role={isInteractive ? "button" : undefined}
				tabIndex={isInteractive ? 0 : undefined}
				onKeyDown={
					isInteractive
						? (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									onClick?.();
								}
						  }
						: undefined
				}
				data-compromised={isCompromised}
				data-interactive={isInteractive}
				style={
					{
						"--infra-platform-color": platformColor,
						"--infra-tile-size": `${tileDimension}px`,
						"--infra-tile-radius": `${borderRadius}px`,
					} as CSSProperties
				}
				css={styles.root}
			>
				{/* SVG Glyph */}
				<svg
					className="infra-icon-glyph"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden={title ? undefined : true}
					role={title ? "img" : undefined}
					aria-label={title}
					dangerouslySetInnerHTML={{ __html: infraIconBody(iconKey) }}
				/>

				{/* Compromised Alert Indicator Badge */}
				{isCompromised && (
					<span
						className="infra-icon-alert"
						aria-label="Compromised Node"
					/>
				)}

				{/* Platform Badge Overlay */}
				{platformBadge && (
					<span className="infra-icon-badge">{platformBadge}</span>
				)}
			</div>
		);
	},
);

InfraIcon.displayName = "InfraIcon";

export interface InfraAssetIconProps
	extends Omit<
		InfraIconProps,
		"iconKey" | "platformBadge" | "platformColor"
	> {
	/** Asset type id, label, or alias — e.g. `object_storage`, `S3`, `NETWORK`. */
	assetType?: string | null;
	/** Platform id, label, badge, or alias — e.g. `aws`, `AZ`, `on-prem`. */
	platform?: string | null;
}

export const InfraAssetIcon: FC<InfraAssetIconProps> = ({
	assetType,
	platform,
	title,
	...rest
}) => {
	const resolved = resolveInfraNode(assetType, platform);
	return (
		<InfraIcon
			{...rest}
			iconKey={resolved.iconKey}
			platformBadge={resolved.platformBadge}
			platformColor={resolved.platformColor}
			title={
				title ??
				(resolved.platformLabel
					? `${resolved.label} — ${resolved.platformLabel}`
					: resolved.label)
			}
		/>
	);
};

export default InfraIcon;
