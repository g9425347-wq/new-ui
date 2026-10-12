import { FC, useMemo } from "react";
import { useTheme } from "@mui/material";
import { MultiValue, SingleValue } from "react-select";

type Option = {
	label: string;
	value: string;
};

export interface TileSelectProps {
	id?: string;
	label?: string;
	options?: Option[];
	variant?: "single" | "multi";
	value?: string | Array<string>;
	onChange?(data: SingleValue<Option> | MultiValue<Option> | null): any;
	columns?: number;
}

export const TileSelect: FC<TileSelectProps> = ({
	id,
	label,
	options = [],
	variant = "single",
	value,
	onChange,
	columns = 3,
}) => {
	const theme = useTheme() as any;

	const tileTokens = useMemo(() => {
		return theme?.palette?.tileSelect;
	}, [theme]);

	const selectedValues: string[] = value
		? Array.isArray(value)
			? value
			: [value]
		: [];

	const isSelected = (optionValue: string) =>
		selectedValues.includes(optionValue);

	const handleClick = (option: Option) => {
		if (variant === "single") {
			if (isSelected(option.value)) {
				onChange?.(null);
			} else {
				onChange?.(option);
			}
		} else {
			let next: Option[];

			if (isSelected(option.value)) {
				next = options.filter(
					(o) =>
						o.value !== option.value &&
						selectedValues.includes(o.value),
				);
			} else {
				next = options.filter(
					(o) =>
						selectedValues.includes(o.value) ||
						o.value === option.value,
				);
			}

			onChange?.(next);
		}
	};

	return (
		<div
			id={id}
			css={{
				display: tileTokens.rootDisplay,
				flexDirection: tileTokens.rootFlexDirection,
				gap: tileTokens.rootGap,
				width: tileTokens.rootWidth,
				boxSizing: tileTokens.boxSizing,
				fontFamily: `${tileTokens.fontFamily} !important`,
			}}
		>
			{label && (
				<span
					css={{
						fontSize: tileTokens.labelFontSize,
						fontWeight: tileTokens.labelFontWeight,
						letterSpacing: tileTokens.labelLetterSpacing,
						color: tileTokens.textLabel,
					}}
				>
					{label}
				</span>
			)}

			<div
				css={{
					display: tileTokens.gridDisplay,
					gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
					gap: tileTokens.gridGap,
					width: tileTokens.gridWidth,
				}}
			>
				{options.map((option) => {
					const selected = isSelected(option.value);

					return (
						<button
							key={option.value}
							type="button"
							onClick={() => handleClick(option)}
							css={{
								display: tileTokens.tileDisplay,
								flexDirection: tileTokens.tileFlexDirection,
								alignItems: tileTokens.tileAlignItems,
								justifyContent: tileTokens.tileJustifyContent,
								gap: tileTokens.tileGap,
								minHeight: tileTokens.tileMinHeight,
								padding: tileTokens.tilePadding,
								borderRadius: tileTokens.tileBorderRadius,
								boxSizing: tileTokens.boxSizing,
								border: `1px solid ${
									selected
										? tileTokens.borderSelected
										: tileTokens.border
								}`,
								backgroundColor: selected
									? tileTokens.bgSelected
									: tileTokens.bgSurface,
								boxShadow: selected
									? `inset 0 0 0 1px ${tileTokens.borderSelected}, ${tileTokens.shadow}`
									: tileTokens.shadow,
								cursor: tileTokens.tileCursor,
								outline: tileTokens.tileOutline,
								userSelect: tileTokens.tileUserSelect,
								transition: tileTokens.tileTransition,

								"&:hover": {
									borderColor: selected
										? tileTokens.borderSelected
										: tileTokens.borderHover,
									backgroundColor: selected
										? tileTokens.bgSelected
										: tileTokens.bgHover,
									boxShadow: selected
										? `inset 0 0 0 1px ${tileTokens.borderSelected}, ${tileTokens.shadowHover}`
										: tileTokens.shadowHover,
								},

								"&:active": {
									transform: tileTokens.activeTransform,
								},

								"&:focus-visible": {
									boxShadow: `${tileTokens.focusRing}, ${tileTokens.shadow}`,
									borderColor: tileTokens.borderSelected,
								},
							}}
						>
							<span
								css={{
									fontSize: tileTokens.textFontSize,
									fontWeight: selected
										? tileTokens.textSelectedFontWeight
										: tileTokens.textFontWeight,
									letterSpacing: tileTokens.textLetterSpacing,
									lineHeight: tileTokens.textLineHeight,
									textAlign: tileTokens.textAlign,
									wordBreak: tileTokens.textWordBreak,
									color: selected
										? tileTokens.textSelected
										: tileTokens.textPrimary,
									transition: tileTokens.textTransition,
								}}
							>
								{option.label}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default TileSelect;
