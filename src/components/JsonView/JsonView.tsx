import {
	CSSProperties,
	FC,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useTheme } from "@mui/material";

/* Props for JsonView component - only these attributes to be allowed */
export interface JsonViewProps {
	/* Object/array to render, or a JSON string that will be parsed */
	data: unknown;
	/* Label shown for the outermost node */
	rootName?: string;
	/* Nodes up to this depth start expanded (0 = everything collapsed) */
	defaultExpandLevel?: number;
	/* Strings longer than this are truncated with an inline "more" toggle */
	collapseStringsAfterLength?: number;
	/* Toolbar with search, expand/collapse all and copy */
	showToolbar?: boolean;
	/* Search box inside the toolbar */
	searchable?: boolean;
	/* Per-node and whole-document copy to clipboard */
	enableCopy?: boolean;
	/* Render string values that look like links as anchors */
	linkifyUrls?: boolean;
	/* Show the value type next to primitives */
	showDataTypes?: boolean;
	maxHeight?: number | string;
	style?: CSSProperties;
	/* Fired after a node value is copied to the clipboard */
	onCopy?(value: unknown, path: string): void;
	/* Fired when a row is clicked, with its dot/bracket path */
	onSelect?(path: string, value: unknown): void;
}

type ValueKind =
	| "object"
	| "array"
	| "string"
	| "number"
	| "boolean"
	| "null"
	| "undefined";

interface Tokens {
	bg: string;
	border: string;
	rowHover: string;
	key: string;
	index: string;
	punctuation: string;
	meta: string;
	guide: string;
	caret: string;
	string: string;
	number: string;
	boolean: string;
	nullValue: string;
	link: string;
	highlightBg: string;
	highlightText: string;
	matchRowBg: string;
	toolbarBg: string;
	chipBg: string;
	textPrimary: string;
	textSecondary: string;
	accent: string;
	fontFamily: string;
	monoFamily: string;
}

const MONO_FAMILY =
	"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, 'Courier New', monospace";

// Classifies a value so the renderer can pick colors and the right row layout
const getKind = (value: unknown): ValueKind => {
	if (value === null) return "null";
	if (value === undefined) return "undefined";
	if (Array.isArray(value)) return "array";
	if (typeof value === "object") return "object";
	if (typeof value === "string") return "string";
	if (typeof value === "number") return "number";
	if (typeof value === "boolean") return "boolean";
	return "string";
};

const isContainer = (kind: ValueKind) => kind === "object" || kind === "array";

const URL_PATTERN = /^(https?:\/\/|www\.)[^\s]+$/i;

// Path segments use dot notation for keys and bracket notation for array items
const childPath = (parent: string, key: string, isArrayItem: boolean) =>
	isArrayItem ? `${parent}[${key}]` : `${parent}.${key}`;

interface SearchIndex {
	/* Nodes that matched the query themselves */
	matched: Set<string>;
	/* Matched nodes plus every ancestor - everything else is filtered out */
	visible: Set<string>;
	/* Ancestors of matches, force-expanded so the hit is on screen */
	expanded: Set<string>;
	hits: number;
}

const EMPTY_INDEX: SearchIndex = {
	matched: new Set(),
	visible: new Set(),
	expanded: new Set(),
	hits: 0,
};

/* Walks the tree once per query so filtering stays linear instead of
	 re-scanning each subtree while rendering */
const buildSearchIndex = (
	root: unknown,
	rootPath: string,
	rootName: string,
	query: string,
): SearchIndex => {
	const needle = query.trim().toLowerCase();
	if (!needle) return EMPTY_INDEX;

	const matched = new Set<string>();
	const visible = new Set<string>();
	const expanded = new Set<string>();
	let hits = 0;

	const walk = (path: string, key: string, value: unknown): boolean => {
		const kind = getKind(value);
		let selfMatch = key.toLowerCase().includes(needle);
		if (!selfMatch && !isContainer(kind)) {
			selfMatch = String(value).toLowerCase().includes(needle);
		}

		let childMatch = false;
		if (kind === "array") {
			(value as unknown[]).forEach((item, i) => {
				if (walk(childPath(path, String(i), true), String(i), item))
					childMatch = true;
			});
		} else if (kind === "object") {
			Object.keys(value as Record<string, unknown>).forEach((k) => {
				if (walk(childPath(path, k, false), k, (value as any)[k]))
					childMatch = true;
			});
		}

		if (selfMatch) {
			matched.add(path);
			hits += 1;
		}
		if (selfMatch || childMatch) visible.add(path);
		if (childMatch) expanded.add(path);
		return selfMatch || childMatch;
	};

	walk(rootPath, rootName, root);
	return { matched, visible, expanded, hits };
};

// Splits text around query occurrences so hits can be wrapped in a highlight
const splitOnQuery = (text: string, query: string) => {
	const needle = query.trim();
	if (!needle) return [{ text, hit: false }];
	const parts: { text: string; hit: boolean }[] = [];
	const lowerText = text.toLowerCase();
	const lowerNeedle = needle.toLowerCase();
	let cursor = 0;
	let found = lowerText.indexOf(lowerNeedle);
	while (found !== -1) {
		if (found > cursor)
			parts.push({ text: text.slice(cursor, found), hit: false });
		parts.push({
			text: text.slice(found, found + needle.length),
			hit: true,
		});
		cursor = found + needle.length;
		found = lowerText.indexOf(lowerNeedle, cursor);
	}
	if (cursor < text.length) parts.push({ text: text.slice(cursor), hit: false });
	return parts;
};

const Highlighted: FC<{ text: string; query: string; tokens: Tokens }> = ({
	text,
	query,
	tokens,
}) => {
	if (!query.trim()) return <>{text}</>;
	return (
		<>
			{splitOnQuery(text, query).map((part, i) =>
				part.hit ? (
					<span
						key={i}
						css={{
							backgroundColor: tokens.highlightBg,
							color: `${tokens.highlightText} !important`,
							borderRadius: "2px",
							padding: "0 1px",
						}}
					>
						{part.text}
					</span>
				) : (
					<span key={i}>{part.text}</span>
				),
			)}
		</>
	);
};

const Caret: FC<{ open: boolean; color: string }> = ({ open, color }) => (
	<svg
		viewBox="0 0 24 24"
		width="11"
		height="11"
		aria-hidden="true"
		css={{
			flexShrink: 0,
			fill: color,
			transition: "transform 0.15s ease",
			transform: open ? "rotate(90deg)" : "rotate(0deg)",
		}}
	>
		<path d="M8 5l8 7-8 7z" />
	</svg>
);

const CopyGlyph: FC<{ done: boolean }> = ({ done }) => (
	<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
		{done ? (
			<path
				d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"
				fill="currentColor"
			/>
		)}
	</svg>
);

// Clipboard API is unavailable on insecure origins, so fall back to execCommand
const writeToClipboard = async (text: string) => {
	try {
		if (navigator?.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return;
		}
	} catch {
		/* falls through to the textarea approach below */
	}
	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.style.position = "fixed";
	textarea.style.opacity = "0";
	document.body.appendChild(textarea);
	textarea.select();
	try {
		document.execCommand("copy");
	} catch {
		/* copying is best effort */
	}
	document.body.removeChild(textarea);
};

const stringify = (value: unknown) => {
	try {
		return typeof value === "string" ? value : JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
};

interface NodeProps {
	name: string;
	value: unknown;
	path: string;
	depth: number;
	isArrayItem: boolean;
	isLast: boolean;
	tokens: Tokens;
	query: string;
	search: SearchIndex;
	/* Filtering stops below a node that matched - its subtree is shown intact */
	insideMatch: boolean;
	isExpanded(path: string, depth: number): boolean;
	onToggle(path: string, currentlyOpen: boolean): void;
	collapseStringsAfterLength: number;
	enableCopy: boolean;
	linkifyUrls: boolean;
	showDataTypes: boolean;
	copiedPath: string | null;
	onCopyNode(path: string, value: unknown): void;
	onSelect?(path: string, value: unknown): void;
}

const JsonNode: FC<NodeProps> = memo((props) => {
	const {
		name,
		value,
		path,
		depth,
		isArrayItem,
		isLast,
		tokens,
		query,
		search,
		insideMatch,
		isExpanded,
		onToggle,
		collapseStringsAfterLength,
		enableCopy,
		linkifyUrls,
		showDataTypes,
		copiedPath,
		onCopyNode,
		onSelect,
	} = props;

	const [stringExpanded, setStringExpanded] = useState(false);
	const kind = getKind(value);
	const container = isContainer(kind);
	const filtering = query.trim() !== "" && !insideMatch;

	// A filtered-out branch holds neither a hit nor an ancestor of one
	if (filtering && !search.visible.has(path)) return null;

	const selfMatched = search.matched.has(path);
	const open = container && isExpanded(path, depth);
	const entries: [string, unknown][] = container
		? kind === "array"
			? (value as unknown[]).map((item, i) => [String(i), item])
			: Object.entries(value as Record<string, unknown>)
		: [];
	const openBrace = kind === "array" ? "[" : "{";
	const closeBrace = kind === "array" ? "]" : "}";
	const countLabel =
		kind === "array"
			? `${entries.length} ${entries.length === 1 ? "item" : "items"}`
			: `${entries.length} ${entries.length === 1 ? "key" : "keys"}`;

	const handleRowClick = () => {
		if (container && entries.length > 0) onToggle(path, open);
		if (onSelect) onSelect(path, value);
	};

	const renderValue = () => {
		if (kind === "string") {
			const text = value as string;
			const tooLong =
				collapseStringsAfterLength > 0 &&
				text.length > collapseStringsAfterLength;
			const shown =
				tooLong && !stringExpanded
					? text.slice(0, collapseStringsAfterLength)
					: text;
			const isLink = linkifyUrls && URL_PATTERN.test(text.trim());
			return (
				<span css={{ color: tokens.string, wordBreak: "break-word" }}>
					&quot;
					{isLink ? (
						<a
							href={
								text.trim().startsWith("www.")
									? `https://${text.trim()}`
									: text.trim()
							}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							css={{
								color: `${tokens.link} !important`,
								textDecoration: "underline",
								textUnderlineOffset: "2px",
							}}
						>
							<Highlighted
								text={shown}
								query={query}
								tokens={tokens}
							/>
						</a>
					) : (
						<Highlighted text={shown} query={query} tokens={tokens} />
					)}
					{tooLong && !stringExpanded && "…"}&quot;
					{tooLong && (
						<span
							role="button"
							tabIndex={0}
							onClick={(e) => {
								e.stopPropagation();
								setStringExpanded((prev) => !prev);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.stopPropagation();
									setStringExpanded((prev) => !prev);
								}
							}}
							css={{
								marginLeft: "6px",
								color: `${tokens.accent} !important`,
								cursor: "pointer",
								fontSize: "11px",
								fontWeight: 600,
								userSelect: "none",
								"&:hover": { textDecoration: "underline" },
							}}
						>
							{stringExpanded
								? "less"
								: `more (${text.length - collapseStringsAfterLength})`}
						</span>
					)}
				</span>
			);
		}
		if (kind === "number")
			return (
				<span css={{ color: tokens.number }}>
					<Highlighted
						text={String(value)}
						query={query}
						tokens={tokens}
					/>
				</span>
			);
		if (kind === "boolean")
			return (
				<span css={{ color: tokens.boolean, fontWeight: 600 }}>
					{String(value)}
				</span>
			);
		return (
			<span css={{ color: tokens.nullValue, fontStyle: "italic" }}>
				{kind === "undefined" ? "undefined" : "null"}
			</span>
		);
	};

	return (
		<div css={{ position: "relative" }}>
			<div
				onClick={handleRowClick}
				css={{
					display: "flex",
					alignItems: "flex-start",
					gap: "5px",
					padding: "1px 6px 1px 2px",
					borderRadius: "4px",
					cursor: container ? "pointer" : "default",
					backgroundColor: selfMatched
						? tokens.matchRowBg
						: "transparent",
					"&:hover": {
						backgroundColor: selfMatched
							? tokens.matchRowBg
							: tokens.rowHover,
					},
					"&:hover .json-view-copy": { opacity: 1 },
				}}
			>
				<span
					css={{
						width: "12px",
						flexShrink: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "18px",
					}}
				>
					{container && entries.length > 0 && (
						<Caret open={open} color={tokens.caret} />
					)}
				</span>

				<span
					css={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "baseline",
						gap: "4px",
						minWidth: 0,
						flex: 1,
						lineHeight: "18px",
					}}
				>
					<span
						css={{
							color: isArrayItem ? tokens.index : tokens.key,
							fontWeight: isArrayItem ? 400 : 600,
						}}
					>
						{isArrayItem ? `${name}` : `"${name}"`}
						<span css={{ color: tokens.punctuation }}>:</span>
					</span>

					{container ? (
						<>
							<span css={{ color: tokens.punctuation }}>
								{openBrace}
								{(!open || entries.length === 0) && (
									<>
										<span css={{ color: tokens.meta }}>
											{entries.length === 0 ? "" : " … "}
										</span>
										{closeBrace}
										{!isLast && ","}
									</>
								)}
							</span>
							{entries.length > 0 && (
								<span
									css={{
										color: tokens.meta,
										fontSize: "10.5px",
										backgroundColor: tokens.chipBg,
										borderRadius: "10px",
										padding: "0 6px",
										fontFamily: tokens.fontFamily,
									}}
								>
									{countLabel}
								</span>
							)}
						</>
					) : (
						<>
							{/* Kept in one inline box so the comma sits
							    flush against the value, not a flex gap away,
							    and so long strings wrap beside the key
							    instead of dropping to their own line */}
							<span css={{ flex: "1 1 0", minWidth: 0 }}>
								{renderValue()}
								{!isLast && (
									<span css={{ color: tokens.punctuation }}>
										,
									</span>
								)}
							</span>
							{showDataTypes && (
								<span
									css={{
										color: tokens.meta,
										fontSize: "10px",
										textTransform: "uppercase",
										letterSpacing: "0.04em",
										fontFamily: tokens.fontFamily,
									}}
								>
									{kind}
								</span>
							)}
						</>
					)}
				</span>

				{enableCopy && (
					<span
						className="json-view-copy"
						role="button"
						tabIndex={-1}
						title={copiedPath === path ? "Copied" : "Copy value"}
						onClick={(e) => {
							e.stopPropagation();
							onCopyNode(path, value);
						}}
						css={{
							opacity: copiedPath === path ? 1 : 0,
							flexShrink: 0,
							display: "flex",
							alignItems: "center",
							height: "18px",
							padding: "0 2px",
							cursor: "pointer",
							color:
								copiedPath === path
									? tokens.accent
									: tokens.meta,
							transition: "opacity 0.15s ease, color 0.15s ease",
							"&:hover": { color: tokens.accent },
						}}
					>
						<CopyGlyph done={copiedPath === path} />
					</span>
				)}
			</div>

			{container && open && entries.length > 0 && (
				<>
					<div
						css={{
							marginLeft: "7px",
							paddingLeft: "11px",
							borderLeft: `1px solid ${tokens.guide}`,
						}}
					>
						{entries.map(([childKey, childValue], i) => (
							<JsonNode
								{...props}
								key={childPath(path, childKey, kind === "array")}
								name={childKey}
								value={childValue}
								path={childPath(
									path,
									childKey,
									kind === "array",
								)}
								depth={depth + 1}
								isArrayItem={kind === "array"}
								isLast={i === entries.length - 1}
								insideMatch={insideMatch || selfMatched}
							/>
						))}
					</div>
					<div
						css={{
							color: tokens.punctuation,
							paddingLeft: "19px",
							lineHeight: "18px",
						}}
					>
						{closeBrace}
						{!isLast && ","}
					</div>
				</>
			)}
		</div>
	);
});

JsonNode.displayName = "JsonNode";

// JsonView Component
export const JsonView: FC<JsonViewProps> = ({
	data,
	rootName = "root",
	defaultExpandLevel = 1,
	collapseStringsAfterLength = 180,
	showToolbar = true,
	searchable = true,
	enableCopy = true,
	linkifyUrls = true,
	showDataTypes = false,
	maxHeight = 520,
	style,
	onCopy,
	onSelect,
}) => {
	const theme = useTheme() as any;
	const isDark = theme?.palette?.mode === "dark";

	const tokens: Tokens = useMemo(() => {
		const fontFamily =
			theme?.typography?.fontFamily ??
			"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
		if (isDark) {
			return {
				bg: theme?.palette?.background?.paper ?? "#1e1e1e",
				border: theme?.palette?.grey?.[800] ?? "#373737",
				rowHover: "rgba(255, 255, 255, 0.06)",
				key: "#9cdcfe",
				index: "#8a8f98",
				punctuation: "#8a8f98",
				meta: "#8a8f98",
				guide: "rgba(255, 255, 255, 0.12)",
				caret: "#a8b1bd",
				string: "#a5d6a7",
				number: "#f0a868",
				boolean: "#c792ea",
				nullValue: "#7f8a99",
				link: "#6cb6ff",
				highlightBg: "rgba(255, 210, 2, 0.32)",
				highlightText: "#ffffff",
				matchRowBg: "rgba(255, 210, 2, 0.10)",
				toolbarBg: "rgba(255, 255, 255, 0.04)",
				chipBg: "rgba(255, 255, 255, 0.08)",
				textPrimary: theme?.palette?.text?.primary ?? "#ffffff",
				textSecondary: theme?.palette?.text?.secondary ?? "#bbbbbb",
				accent: theme?.palette?.primary?.main ?? "#3477C7",
				fontFamily,
				monoFamily: MONO_FAMILY,
			};
		}
		return {
			bg: "#ffffff",
			border: "#e2e8f0",
			rowHover: "#f1f5f9",
			key: "#0b5394",
			index: "#94a3b8",
			punctuation: "#64748b",
			meta: "#94a3b8",
			guide: "#e2e8f0",
			caret: "#64748b",
			string: "#0f7b3f",
			number: "#b45309",
			boolean: "#7c3aed",
			nullValue: "#94a3b8",
			link: "#0284c7",
			highlightBg: "rgba(250, 204, 21, 0.55)",
			highlightText: "#0f172a",
			matchRowBg: "rgba(250, 204, 21, 0.16)",
			toolbarBg: "#f8fafc",
			chipBg: "#eef2f7",
			textPrimary: theme?.palette?.text?.primary ?? "#0f172a",
			textSecondary: theme?.palette?.text?.secondary ?? "#64748b",
			accent: theme?.palette?.primary?.main ?? "#0284c7",
			fontFamily,
			monoFamily: MONO_FAMILY,
		};
	}, [isDark, theme]);

	// A string input is treated as raw JSON so API payloads can be passed through
	const { parsed, parseError } = useMemo(() => {
		if (typeof data === "string") {
			try {
				return { parsed: JSON.parse(data), parseError: null };
			} catch (e) {
				return { parsed: null, parseError: (e as Error).message };
			}
		}
		return { parsed: data, parseError: null };
	}, [data]);

	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [overrides, setOverrides] = useState<Record<string, boolean>>({});
	const [bulkMode, setBulkMode] = useState<"expand" | "collapse" | null>(null);
	const [copiedPath, setCopiedPath] = useState<string | null>(null);
	const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedQuery(query), 250);
		return () => clearTimeout(timer);
	}, [query]);

	/* Toggles are tied to paths, so a new payload has to start from the
		 defaults. Keyed on the serialized value rather than object identity so a
		 caller passing an inline literal does not lose their expanded nodes on
		 every parent render. */
	const dataSignature = useMemo(() => stringify(parsed), [parsed]);
	const previousSignature = useRef<string | null>(null);
	useEffect(() => {
		if (previousSignature.current === null) {
			previousSignature.current = dataSignature;
			return;
		}
		if (previousSignature.current === dataSignature) return;
		previousSignature.current = dataSignature;
		setOverrides({});
		setBulkMode(null);
	}, [dataSignature]);

	useEffect(
		() => () => {
			if (copyTimer.current) clearTimeout(copyTimer.current);
		},
		[],
	);

	const rootPath = "$";
	const search = useMemo(
		() => buildSearchIndex(parsed, rootPath, rootName, debouncedQuery),
		[parsed, rootName, debouncedQuery],
	);

	const isExpanded = useCallback(
		(path: string, depth: number) => {
			if (path in overrides) return overrides[path];
			if (search.expanded.has(path)) return true;
			if (bulkMode === "expand") return true;
			if (bulkMode === "collapse") return false;
			return depth < defaultExpandLevel;
		},
		[overrides, search, bulkMode, defaultExpandLevel],
	);

	/* The node reports the state it is currently rendered in, which already
		 accounts for depth defaults, bulk mode and search auto-expansion */
	const handleToggle = useCallback((path: string, currentlyOpen: boolean) => {
		setOverrides((prev) => ({ ...prev, [path]: !currentlyOpen }));
	}, []);

	const flashCopied = useCallback((path: string) => {
		setCopiedPath(path);
		if (copyTimer.current) clearTimeout(copyTimer.current);
		copyTimer.current = setTimeout(() => setCopiedPath(null), 1400);
	}, []);

	const handleCopyNode = useCallback(
		(path: string, value: unknown) => {
			void writeToClipboard(stringify(value));
			flashCopied(path);
			if (onCopy) onCopy(value, path);
		},
		[flashCopied, onCopy],
	);

	const nodeCount = useMemo(() => {
		let count = 0;
		const walk = (value: unknown) => {
			count += 1;
			const kind = getKind(value);
			if (kind === "array") (value as unknown[]).forEach(walk);
			else if (kind === "object")
				Object.values(value as Record<string, unknown>).forEach(walk);
		};
		walk(parsed);
		return count;
	}, [parsed]);

	if (parseError) {
		return (
			<div
				style={style}
				css={{
					fontFamily: tokens.fontFamily,
					fontSize: "12.5px",
					color: theme?.palette?.error?.main ?? "#f44336",
					border: `1px solid ${theme?.palette?.error?.main ?? "#f44336"}`,
					borderRadius: "8px",
					padding: "12px 14px",
					backgroundColor: tokens.bg,
				}}
			>
				<strong>Invalid JSON</strong>
				<div
					css={{
						marginTop: "4px",
						fontFamily: tokens.monoFamily,
						fontSize: "11.5px",
						color: tokens.textSecondary,
					}}
				>
					{parseError}
				</div>
			</div>
		);
	}

	const toolbarButton = {
		display: "inline-flex",
		alignItems: "center",
		gap: "4px",
		height: "26px",
		padding: "0 10px",
		borderRadius: "13px",
		border: `1px solid ${tokens.border}`,
		backgroundColor: tokens.bg,
		color: tokens.textSecondary,
		fontFamily: tokens.fontFamily,
		fontSize: "11.5px",
		fontWeight: 500,
		cursor: "pointer",
		whiteSpace: "nowrap" as const,
		transition: "all 0.15s ease",
		"&:hover": {
			borderColor: tokens.accent,
			color: tokens.accent,
		},
	};

	return (
		<div
			style={style}
			css={{
				border: `1px solid ${tokens.border}`,
				borderRadius: "8px",
				backgroundColor: tokens.bg,
				overflow: "hidden",
				fontFamily: tokens.fontFamily,
			}}
		>
			{showToolbar && (
				<div
					css={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						flexWrap: "wrap",
						padding: "8px 10px",
						backgroundColor: tokens.toolbarBg,
						borderBottom: `1px solid ${tokens.border}`,
					}}
				>
					{searchable && (
						<div
							css={{
								display: "flex",
								alignItems: "center",
								gap: "6px",
								height: "28px",
								padding: "0 10px",
								flex: "1 1 180px",
								maxWidth: "320px",
								borderRadius: "14px",
								border: `1px solid ${tokens.border}`,
								backgroundColor: tokens.bg,
								"&:focus-within": {
									borderColor: tokens.accent,
								},
							}}
						>
							<svg
								viewBox="0 0 24 24"
								width="13"
								height="13"
								aria-hidden="true"
								css={{ flexShrink: 0, fill: tokens.meta }}
							>
								<path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
							</svg>
							<input
								value={query}
								placeholder="Search keys and values"
								onChange={(e) => setQuery(e.target.value)}
								css={{
									flex: 1,
									minWidth: 0,
									border: "none",
									outline: "none",
									background: "transparent",
									color: tokens.textPrimary,
									fontFamily: tokens.fontFamily,
									fontSize: "12px",
									"&::placeholder": {
										color: tokens.meta,
									},
								}}
							/>
							{query !== "" && (
								<span
									role="button"
									title="Clear search"
									onClick={() => setQuery("")}
									css={{
										cursor: "pointer",
										color: tokens.meta,
										fontSize: "14px",
										lineHeight: 1,
										"&:hover": { color: tokens.accent },
									}}
								>
									×
								</span>
							)}
						</div>
					)}

					{debouncedQuery.trim() !== "" && (
						<span
							css={{
								fontSize: "11.5px",
								color: tokens.textSecondary,
								whiteSpace: "nowrap",
							}}
						>
							{search.hits} {search.hits === 1 ? "match" : "matches"}
						</span>
					)}

					<span css={{ flex: 1 }} />

					<span
						css={{
							fontSize: "11px",
							color: tokens.meta,
							whiteSpace: "nowrap",
						}}
					>
						{nodeCount} nodes
					</span>

					<button
						type="button"
						onClick={() => {
							setOverrides({});
							setBulkMode("expand");
						}}
						css={toolbarButton}
					>
						Expand all
					</button>
					<button
						type="button"
						onClick={() => {
							setOverrides({});
							setBulkMode("collapse");
						}}
						css={toolbarButton}
					>
						Collapse all
					</button>
					{enableCopy && (
						<button
							type="button"
							onClick={() => handleCopyNode(rootPath, parsed)}
							css={toolbarButton}
						>
							<CopyGlyph done={copiedPath === rootPath} />
							{copiedPath === rootPath ? "Copied" : "Copy JSON"}
						</button>
					)}
				</div>
			)}

			<div
				css={{
					padding: "8px 10px 12px",
					overflow: "auto",
					maxHeight:
						typeof maxHeight === "number"
							? `${maxHeight}px`
							: maxHeight,
					fontFamily: tokens.monoFamily,
					fontSize: "12px",
					color: tokens.textPrimary,
				}}
			>
				{debouncedQuery.trim() !== "" && search.hits === 0 ? (
					<div
						css={{
							fontFamily: tokens.fontFamily,
							fontSize: "12.5px",
							color: tokens.textSecondary,
							padding: "16px 4px",
							textAlign: "center",
						}}
					>
						No keys or values match &quot;{debouncedQuery}&quot;
					</div>
				) : (
					<JsonNode
						name={rootName}
						value={parsed}
						path={rootPath}
						depth={0}
						isArrayItem={false}
						isLast
						tokens={tokens}
						query={debouncedQuery}
						search={search}
						insideMatch={false}
						isExpanded={isExpanded}
						onToggle={handleToggle}
						collapseStringsAfterLength={collapseStringsAfterLength}
						enableCopy={enableCopy}
						linkifyUrls={linkifyUrls}
						showDataTypes={showDataTypes}
						copiedPath={copiedPath}
						onCopyNode={handleCopyNode}
						onSelect={onSelect}
					/>
				)}
			</div>
		</div>
	);
};

export default JsonView;
