import { FC, useMemo } from "react";
import { useTheme } from "@mui/material";
// Base colors (theme.palette.base) merged with sizing (theme.palette.advancedCell)
type BaseTokens = Record<string, any>;

interface Props {
	data: string;
}

// Converts camelCase / PascalCase → Title Case (e.g. "fromPort" → "From Port")
const toTitleCase = (str: string): string =>
	str
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (s) => s.toUpperCase())
		.trim();

const isPrimitive = (val: unknown): val is string | number | boolean | null =>
	val === null ||
	typeof val === "string" ||
	typeof val === "number" ||
	typeof val === "boolean";

const isArrayOfPrimitives = (
	val: unknown
): val is (string | number | boolean | null)[] =>
	Array.isArray(val) && val.every(isPrimitive);

const isArrayOfObjects = (val: unknown): val is Record<string, unknown>[] =>
	Array.isArray(val) &&
	val.length > 0 &&
	val.every(
		(item) => typeof item === "object" && item !== null && !Array.isArray(item)
	);

// True when any value in the row is a non-primitive (object / array)
const hasComplexValues = (row: Record<string, unknown>): boolean =>
	Object.values(row).some((v) => !isPrimitive(v));

// ── Sub-components ────────────────────────────────────────────────────────────

const MiniTable: FC<{
	rows: Record<string, unknown>[];
	tokens: BaseTokens;
}> = ({ rows, tokens }) => {
	const columns = Array.from(
		rows.reduce((acc, row) => {
			Object.keys(row).forEach((k) => acc.add(k));
			return acc;
		}, new Set<string>())
	);

	return (
		<div
			style={{
				maxWidth: "100%",
				overflowX: "auto",
				margin: tokens.table.margin,
			}}
		>
			<div
				style={{
					display: "table",
					width: "100%",
					borderCollapse: "collapse",
					fontFamily: tokens.fontFamily,
				}}
			>
				{/* Header */}
				<div style={{ display: "table-row" }}>
					{columns.map((col) => (
						<div
							key={col}
							style={{
								display: "table-cell",
								padding: tokens.table.headerPadding,
								fontSize: tokens.table.headerFontSize,
								fontWeight: tokens.labelFontWeight,
								color: tokens.textMuted,
								borderBottom: `1px solid ${tokens.border}`,
								whiteSpace: "nowrap",
								textAlign: "left",
							}}
						>
							{toTitleCase(col)}
						</div>
					))}
				</div>
				{/* Rows */}
				{rows.map((row, rowIdx) => (
					<div key={rowIdx} style={{ display: "table-row" }}>
						{columns.map((col) => (
							<div
								key={col}
								style={{
									display: "table-cell",
									padding: tokens.table.cellPadding,
									fontSize: tokens.table.cellFontSize,
									color: tokens.textPrimary,
									borderBottom: `1px solid ${tokens.borderLight}`,
									whiteSpace: "nowrap",
								}}
							>
								{row[col] !== null && row[col] !== undefined
									? String(row[col])
									: "—"}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

// Key-Value Pair Row Layout
const KeyValueRow: FC<{
	label: string;
	value: string;
	tokens: BaseTokens;
	alignItems?: "baseline" | "flex-start";
	valueColor?: string;
}> = ({ label, value, tokens, alignItems = "baseline", valueColor }) => (
	<div
		style={{
			display: "flex",
			flexWrap: "wrap",
			gap: tokens.keyValue.gap,
			alignItems,
			marginBottom: tokens.keyValue.marginBottom,
			minWidth: 0,
			fontFamily: tokens.fontFamily,
		}}
	>
		<span
			style={{
				fontSize: tokens.keyValue.labelFontSize,
				fontWeight: tokens.labelFontWeight,
				color: tokens.textSecondary,
				flexShrink: 0,
				maxWidth: "100%",
				overflowWrap: "anywhere",
			}}
		>
			{label}:
		</span>
		<span
			style={{
				fontSize: tokens.keyValue.valueFontSize,
				color: valueColor ?? tokens.textPrimary,
				flex: "1 1 auto",
				minWidth: 0,
				overflowWrap: "anywhere",
			}}
		>
			{value}
		</span>
	</div>
);

// Renders a single cell value inside an ObjectCard
const CardCellValue: FC<{
	label: string;
	value: unknown;
	tokens: BaseTokens;
}> = ({ label, value, tokens }) => {
	// Primitive → KeyValueRow
	if (isPrimitive(value)) {
		return (
			<KeyValueRow
				label={label}
				value={value !== null ? String(value) : "—"}
				tokens={tokens}
			/>
		);
	}

	// Array of primitives → comma-separated text
	if (isArrayOfPrimitives(value)) {
		return (
			<KeyValueRow
				label={label}
				value={value.length === 0 ? "—" : value.map(String).join(", ")}
				tokens={tokens}
				alignItems="flex-start"
				valueColor={value.length === 0 ? tokens.textDisabled : undefined}
			/>
		);
	}

	return renderEntry(label, value, tokens);
};

// Card for a single complex array item
const ObjectCard: FC<{
	item: Record<string, unknown>;
	index: number;
	tokens: BaseTokens;
}> = ({ item, index, tokens }) => (
	<div
		style={{
			padding: tokens.card.padding,
			borderRadius: tokens.card.borderRadius,
			border: `1px solid ${tokens.border}`,
			backgroundColor: index % 2 === 0 ? tokens.surface : tokens.surfaceAlt,
			marginBottom: tokens.card.marginBottom,
			boxSizing: "border-box",
		}}
	>
		{Object.entries(item).map(([k, v]) => (
			<CardCellValue key={k} label={toTitleCase(k)} value={v} tokens={tokens} />
		))}
	</div>
);

const ObjectCardList: FC<{
	rows: Record<string, unknown>[];
	tokens: BaseTokens;
}> = ({ rows, tokens }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "column",
			margin: tokens.table.margin,
		}}
	>
		{rows.map((item, idx) => (
			<ObjectCard key={idx} item={item} index={idx} tokens={tokens} />
		))}
	</div>
);

const PrimitiveChips: FC<{
	items: (string | number | boolean | null)[];
	tokens: BaseTokens;
}> = ({ items, tokens }) => (
	<div
		style={{
			display: "flex",
			flexWrap: "wrap",
			gap: tokens.chips.gap,
			fontFamily: tokens.fontFamily,
			margin: tokens.chips.margin,
		}}
	>
		{items.map((item, idx) => (
			<span
				key={idx}
				style={{
					display: "inline-flex",
					alignItems: "center",
					padding: tokens.chips.padding,
					borderRadius: tokens.chips.borderRadius,
					fontSize: tokens.chips.fontSize,
					fontWeight: tokens.chips.fontWeight,
					color: tokens.textPrimary,
					backgroundColor: tokens.chipBg,
					border: `1px solid ${tokens.border}`,
					lineHeight: tokens.chips.lineHeight,
				}}
			>
				{item !== null && item !== undefined ? String(item) : "—"}
			</span>
		))}
	</div>
);

const SectionLabel: FC<{ text: string; tokens: BaseTokens }> = ({
	text,
	tokens,
}) => (
	<span
		style={{
			display: "block",
			fontSize: tokens.section.fontSize,
			fontWeight: tokens.section.fontWeight,
			color: tokens.textMuted,
			marginBottom: tokens.section.marginBottom,
			fontFamily: tokens.fontFamily,
		}}
	>
		{text}
	</span>
);

// ── Recursive value renderer ───────────────────────────────────────────────────

const renderEntry = (
	key: string,
	value: unknown,
	tokens: BaseTokens
): JSX.Element | null => {
	if (isPrimitive(value)) {
		return (
			<KeyValueRow
				key={key}
				label={toTitleCase(key)}
				value={value !== null ? String(value) : "—"}
				tokens={tokens}
			/>
		);
	}

	if (isArrayOfPrimitives(value)) {
		if (value.length === 0) {
			return (
				<KeyValueRow
					key={key}
					label={toTitleCase(key)}
					value="—"
					tokens={tokens}
				/>
			);
		}
		return (
			<div key={key} style={{ marginBottom: tokens.section.blockMarginBottom }}>
				<SectionLabel text={`${toTitleCase(key)}:`} tokens={tokens} />
				<PrimitiveChips items={value} tokens={tokens} />
			</div>
		);
	}

	if (isArrayOfObjects(value)) {
		const useCards = value.some(hasComplexValues);
		return (
			<div key={key} style={{ marginBottom: tokens.section.blockMarginBottom }}>
				<SectionLabel text={toTitleCase(key)} tokens={tokens} />
				{useCards ? (
					<ObjectCardList rows={value} tokens={tokens} />
				) : (
					<MiniTable rows={value} tokens={tokens} />
				)}
			</div>
		);
	}

	if (typeof value === "object" && value !== null) {
		return (
			<div key={key} style={{ marginBottom: tokens.section.blockMarginBottom }}>
				<SectionLabel text={`${toTitleCase(key)}:`} tokens={tokens} />
				<div
					style={{
						paddingLeft: tokens.section.nestedPaddingLeft,
						borderLeft: `${tokens.section.nestedBorderWidth} solid ${tokens.borderLight}`,
						marginLeft: tokens.section.nestedMarginLeft,
					}}
				>
					{Object.entries(value as Record<string, unknown>).map(([k, v]) =>
						renderEntry(k, v, tokens)
					)}
				</div>
			</div>
		);
	}

	return null;
};

// ── Main Component ─────────────────────────────────────────────────────────────

export const ObjectCell: FC<Props> = ({ data }) => {
	const theme = useTheme() as any;
	const objectCellTokens = useMemo<BaseTokens>(
		() => ({
			...theme.palette.base,
			...theme.palette.advancedCell,
			fontFamily: theme.typography.fontFamily,
		}),
		[theme]
	);

	let parsed: unknown;

	try {
		parsed = JSON.parse(data);
	} catch {
		return (
			<span
				style={{
					fontSize: objectCellTokens.valueFontSize,
					fontFamily: objectCellTokens.fontFamily,
					color: objectCellTokens.textMuted,
					wordBreak: "break-all",
				}}
			>
				{data || "—"}
			</span>
		);
	}

	if (isArrayOfObjects(parsed)) {
		const useCards = parsed.some(hasComplexValues);
		return useCards ? (
			<ObjectCardList rows={parsed} tokens={objectCellTokens} />
		) : (
			<MiniTable rows={parsed} tokens={objectCellTokens} />
		);
	}

	if (isArrayOfPrimitives(parsed)) {
		return <PrimitiveChips items={parsed} tokens={objectCellTokens} />;
	}

	if (isPrimitive(parsed)) {
		return (
			<span
				style={{
					fontSize: objectCellTokens.valueFontSize,
					fontFamily: objectCellTokens.fontFamily,
					color: objectCellTokens.textPrimary,
				}}
			>
				{parsed !== null ? String(parsed) : "—"}
			</span>
		);
	}

	// Plain object — iterate keys
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: objectCellTokens.listGap,
				width: "100%",
				boxSizing: "border-box",
			}}
		>
			{Object.entries(parsed as Record<string, unknown>).map(([key, value]) =>
				renderEntry(key, value, objectCellTokens)
			)}
		</div>
	);
};

export default ObjectCell;
