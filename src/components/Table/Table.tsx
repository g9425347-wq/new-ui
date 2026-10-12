import {
	FC,
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
	useMemo,
	useRef,
} from "react";
import {
	DataGrid,
	GridColDef,
	GridRowModel,
	useGridApiRef,
	GridColumnVisibilityModel,
	GridRenderCellParams,
	GridRow,
	GridRowProps,
} from "@mui/x-data-grid";
import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import moment from "moment-timezone";
import _ from "lodash";
import Operators from "../BasicTable/TableFilterOperators";

/**
 * Type for data to be returned to table
 */
export interface RemoteDataResult {
	data: GridRowModel[];
	page: number;
	pageSize: number;
	totalCount: number;
}

/**
 * Type for parameters for remote data
 */
export type RemoteDataParam = {
	search: string;
	filter: string;
	page: number;
	limit: number;
	sort: string;
	sortOrder: "asc" | "desc";
};

export type remoteData = (param: RemoteDataParam) => Promise<RemoteDataResult>;

export type GridColDefEx = GridColDef & {
	hide?: boolean;
};

export interface TableProps {
	id?: string;
	width?: number | string;
	height?: number | string;
	columns: GridColDefEx[];
	DetailPanelComponent: FC<any>;
	remoteData: remoteData;
	refresh?: boolean;
	exportCsv?: boolean;
	search?: string;
	onSelectionChange?(uid: string[]): any;
	isSelectBox?: boolean;
	timeZone?: string;
}

/**
 * Measure before paint on the client so the panel never
 * shows at the wrong height.
 */
const useEnhancedEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DETAIL_ROW_FLAG = "__detailRow__";

const isDetailRow = (row: any) => Boolean(row?.[DETAIL_ROW_FLAG]);

const getDataRowId = (row: any) => row.uid || row.id || row._id;

const getRowId = (row: any) =>
	isDetailRow(row) ? `${DETAIL_ROW_FLAG}${row.parentId}` : getDataRowId(row);

type DetailRowProps = GridRowProps & {
	tokens: any;
	DetailPanelComponent: FC<any>;
	onMeasure(parentId: string, height: number): void;
};

const DetailRow: FC<DetailRowProps> = ({
	row,
	rowId,
	index,
	dimensions,
	isNotVisible,
	tokens,
	DetailPanelComponent,
	onMeasure,
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const parentId = row.parentId as string;

	/**
	 * The virtualiser positions rows from its own height cache,
	 * so it has to know the real height of the panel.
	 */
	useEnhancedEffect(() => {
		const element = containerRef.current;

		if (!element) {
			return undefined;
		}

		const report = () =>
			onMeasure(
				parentId,
				Math.ceil(element.getBoundingClientRect().height),
			);

		report();

		const observer = new ResizeObserver(report);
		observer.observe(element);

		return () => observer.disconnect();
	}, [parentId, onMeasure]);

	if (isNotVisible) {
		return (
			<div
				role="presentation"
				style={{
					opacity: 0,
					width: 0,
					height: 0,
				}}
			/>
		);
	}

	return (
		<div
			ref={containerRef}
			role="row"
			data-id={rowId}
			data-rowindex={index}
			style={{
				width: dimensions.columnsTotalWidth || "100%",
				flexShrink: 0,
				boxSizing: "border-box",
			}}
		>
			{/* Kept in view while the grid is scrolled horizontally */}
			<Box
				sx={{
					position: dimensions.hasScrollX ? "sticky" : "static",
					left: 0,
					width: dimensions.hasScrollX
						? dimensions.viewportInnerSize.width
						: "100%",
					p: tokens.detailRow.padding,
					boxSizing: "border-box",
					backgroundColor: tokens.detailBackground,
					borderBottom: `1px solid ${tokens.border}`,
					borderLeft: `${tokens.detailRow.borderLeftWidth} solid ${tokens.accent}`,
				}}
			>
				<DetailPanelComponent row={row.parentRow} />
			</Box>
		</div>
	);
};

export const Table: FC<TableProps> = ({
	width = "100%",
	height = "100%",
	columns,
	exportCsv = false,
	DetailPanelComponent,
	remoteData,
	refresh = false,
	search = "",
	isSelectBox = true,
	onSelectionChange,
	timeZone = "UTC",
}) => {
	const theme = useTheme() as any;
	const tokens = theme.palette.table;

	const [loading, setLoading] = useState(false);

	const [page, setPage] = useState<number>(0);
	const [pageSize, setPageSize] = useState<number>(25);

	const [rows, setRows] = useState<GridRowModel[]>([]);

	const [rowCount, setRowCount] = useState<number>(0);

	const [sort, setSort] = useState("");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

	const [filter, setFilter] = useState("");

	const cols: GridColumnVisibilityModel = {};

	columns.forEach((item: GridColDefEx) => {
		if (item.type === "date" || item.type === "dateTime") {
			item.valueGetter = (value) => {
				return value && new Date(value);
			};
		}

		if (item.hide === true) {
			cols[item.field] = false;
		}
	});

	const handleSort = (model: any) => {
		setSort(model.length > 0 ? model[0].field : "");

		setSortOrder(model.length > 0 ? model[0].sort : "asc");
	};

	const processFilters = (FilterJson: any) => {
		const filters =
			typeof FilterJson !== "object"
				? JSON.parse(FilterJson)
				: FilterJson;

		const array = filters.items;
		const linkOperator = filters.logicOperator;

		let filterStr = "";

		array.forEach((item: any) => {
			if (item.value || item.value === false) {
				const colType = _.find(columns, ["field", item.field])?.type;

				let value = item.value;

				if (Array.isArray(value)) {
					value.map((val: any) => {
						return encodeURIComponent(
							val.replace(/\(/g, "%28").replace(/\)/g, "%29"),
						);
					});
				} else if (
					(colType === "date" || colType === "dateTime") &&
					timeZone
				) {
					value = moment.tz(item.value, timeZone).toISOString();
				} else if (colType === "boolean") {
					// Keep unchanged.
				} else {
					value = encodeURIComponent(
						item.value.replace(/\(/g, "%28").replace(/\)/g, "%29"),
					);
				}

				filterStr += `${filterStr ? linkOperator.toUpperCase() : ""}(${
					item.field
				}${Operators.get(item.operator)}${value})`;
			} else if (["isEmpty", "isNotEmpty"].includes(item.operator)) {
				filterStr += `${filterStr ? linkOperator.toUpperCase() : ""}(${
					item.field
				}${Operators.get(item.operator)})`;
			}
		});

		return filterStr;
	};

	const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

	const [detailHeights, setDetailHeights] = useState<Record<string, number>>(
		{},
	);

	const toggleRowExpansion = useCallback((rowId: string) => {
		setExpandedRows((prev) => {
			const next = new Set(prev);

			if (next.has(rowId)) {
				next.delete(rowId);
			} else {
				next.add(rowId);
			}

			return next;
		});
	}, []);

	const handleDetailMeasure = useCallback(
		(parentId: string, height: number) => {
			setDetailHeights((prev) =>
				prev[parentId] === height
					? prev
					: {
							...prev,
							[parentId]: height,
					  },
			);
		},
		[],
	);

	/**
	 * Each expanded row is followed by a synthetic
	 * row holding its panel.
	 */
	const gridRows = useMemo(() => {
		if (expandedRows.size === 0) {
			return rows;
		}

		const result: GridRowModel[] = [];

		rows.forEach((row) => {
			result.push(row);

			const rowId = getDataRowId(row);

			if (expandedRows.has(rowId)) {
				result.push({
					[DETAIL_ROW_FLAG]: true,
					parentId: rowId,
					parentRow: row,
				});
			}
		});

		return result;
	}, [rows, expandedRows]);

	const getRowHeight = useCallback(
		(params: any) =>
			isDetailRow(params.model)
				? detailHeights[params.model.parentId] ??
				  tokens.detailRow.estimatedHeight
				: tokens.row.height,
		[detailHeights, tokens.detailRow.estimatedHeight, tokens.row.height],
	);

	const expandColumn: GridColDefEx = useMemo(
		() => ({
			field: "__expand__",
			headerName: "",
			width: tokens.expandColumn.width,
			hide: false,
			sortable: false,
			filterable: false,
			disableColumnMenu: true,

			renderCell: (params: GridRenderCellParams) => {
				const rowId = getDataRowId(params.row);

				const isExpanded = expandedRows.has(rowId);

				return (
					<IconButton
						size="small"
						onClick={(e) => {
							e.stopPropagation();
							toggleRowExpansion(rowId);
						}}
						sx={{
							width: tokens.expandButton.width,
							height: tokens.expandButton.height,
							borderRadius: tokens.expandButton.borderRadius,
							backgroundColor: isExpanded
								? tokens.accentBackground
								: tokens.controlBackground,
							color: isExpanded
								? tokens.accent
								: tokens.textSecondary,
							border: "1px solid",
							borderColor: isExpanded
								? tokens.accentBorder
								: tokens.border,
							transition: tokens.expandButton.transition,

							"&:hover": {
								backgroundColor: tokens.accentBackground,
								color: tokens.accent,
								borderColor: tokens.accentBorder,
							},
						}}
					>
						{isExpanded ? (
							<RemoveIcon
								sx={{
									fontSize: tokens.expandButton.iconSize,
								}}
							/>
						) : (
							<AddIcon
								sx={{
									fontSize: tokens.expandButton.iconSize,
								}}
							/>
						)}
					</IconButton>
				);
			},
		}),
		[expandedRows, toggleRowExpansion, tokens],
	);

	const gridColumns = useMemo(
		() => [expandColumn, ...columns],
		[expandColumn, columns],
	);

	const CustomRow = useCallback(
		(props: GridRowProps) =>
			isDetailRow(props.row) ? (
				<DetailRow
					{...props}
					tokens={tokens}
					DetailPanelComponent={DetailPanelComponent}
					onMeasure={handleDetailMeasure}
				/>
			) : (
				<GridRow {...props} />
			),
		[tokens, DetailPanelComponent, handleDetailMeasure],
	);

	const handleFilter = (model: any) => {
		setFilter(processFilters(model));
	};

	const apiRef = useGridApiRef();

	const handleExport = async () => {
		if (exportCsv) {
			await apiRef.current.exportDataAsCsv();
		}
	};

	useEffect(() => {
		setLoading(true);

		const param: RemoteDataParam = {
			search,
			filter,
			page,
			limit: pageSize,
			sort,
			sortOrder,
		};

		remoteData(param)
			.then((result) => {
				setRows(result.data);
				setRowCount(result.totalCount);
			})
			.finally(() => setLoading(false));
	}, [page, pageSize, sort, sortOrder, refresh, search, filter, remoteData]);

	useEffect(() => {
		if (exportCsv) {
			handleExport();
		}
	}, [exportCsv]);

	return (
		<Box
			id={undefined}
			css={{
				width,
				height,
				maxHeight: tokens.container.maxHeight,
				backgroundColor: tokens.background,
				borderRadius: tokens.container.borderRadius,
				border: `1px solid ${tokens.border}`,
				boxShadow: tokens.shadow,
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<DataGrid
				initialState={{
					columns: {
						columnVisibilityModel: cols,
					},
				}}
				loading={loading}
				apiRef={apiRef}
				getRowId={getRowId}
				pagination
				paginationModel={{
					page,
					pageSize,
				}}
				onPaginationModelChange={(model) => {
					setPage(model.page);
					setPageSize(model.pageSize);
				}}
				pageSizeOptions={[10, 25, 50, 100]}
				columns={gridColumns}
				paginationMode="server"
				rows={gridRows}
				rowCount={rowCount}
				sortingMode="server"
				onSortModelChange={(model) => handleSort(model)}
				filterMode="server"
				onFilterModelChange={(model) => handleFilter(model)}
				checkboxSelection={isSelectBox}
				isRowSelectable={(params) => !isDetailRow(params.row)}
				onRowSelectionModelChange={(model) => {
					if (onSelectionChange) {
						onSelectionChange(model as string[]);
					}
				}}
				disableRowSelectionOnClick
				getRowHeight={getRowHeight}
				slots={{
					row: CustomRow,
				}}
				css={
					{
						flex: 1,
						minHeight: 0,
						border: "none !important",
						fontFamily: `${theme.typography.fontFamily} !important`,
						color: `${tokens.textPrimary} !important`,

						/* Virtual Scroller & Stacking Fix */
						"& .MuiDataGrid-main": {
							overflow: "hidden !important",
							display: "flex",
							flexDirection: "column",
						},

						"& .MuiDataGrid-virtualScroller": {
							overflowY: tokens.virtualScroller.overflowY,
							overflowX: tokens.virtualScroller.overflowX,
							overflowAnchor: "none !important",
							backgroundColor: "transparent !important",
							flex: 1,
						},

						/* Column Headers */
						"& .MuiDataGrid-columnHeaders": {
							position: "sticky",
							top: 0,
							zIndex: tokens.columnHeader.zIndex,
							backgroundColor: `${tokens.headerBackground} !important`,
							borderBottom: `1px solid ${tokens.border} !important`,
							color: `${tokens.textPrimary} !important`,
						},

						"& .MuiDataGrid-columnHeaderTitle": {
							fontWeight: `${tokens.columnHeader.fontWeight} !important`,
							fontSize: `${tokens.columnHeader.fontSize} !important`,
							color: `${tokens.textPrimary} !important`,
							letterSpacing: tokens.columnHeader.letterSpacing,
							fontFamily: "inherit",
						},

						"& .MuiDataGrid-iconButtonContainer": {
							color: `${tokens.textSecondary} !important`,
						},

						/* Keep menu icon visible without expanding outside header */
						"& .MuiDataGrid-menuIcon": {
							width: "auto !important",
							visibility: "visible !important",
						},

						"& .MuiDataGrid-menuIconButton": {
							color: `${tokens.textSecondary} !important`,
							visibility: "visible",
						},

						/* Row Styling */
						"& .MuiDataGrid-row": {
							borderBottom: `1px solid ${tokens.border} !important`,
							backgroundColor: `${tokens.background} !important`,
							color: `${tokens.textPrimary} !important`,
							transition: tokens.row.transition,

							"&:hover": {
								backgroundColor: `${tokens.rowHover} !important`,
							},

							"&.Mui-selected": {
								backgroundColor: `${tokens.rowSelected} !important`,

								"&:hover": {
									backgroundColor: `${tokens.rowSelectedHover} !important`,
								},
							},
						},

						/* Cell Styling */
						"& .MuiDataGrid-cell": {
							borderBottom: "none !important",
							color: `${tokens.textPrimary} !important`,
							fontSize: `${tokens.cell.fontSize} !important`,
							display: "flex",
							alignItems: "center",
							fontFamily: "inherit",
						},

						/* Outline removal on focus */
						"& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within":
							{
								outline: tokens.focus.outline,
							},

						/* Checkbox Styling */
						"& .MuiCheckbox-root": {
							color: `${tokens.checkbox} !important`,

							"&.Mui-checked": {
								color: `${tokens.accent} !important`,
							},
						},

						/* Footer & Pagination */
						"& .MuiDataGrid-footerContainer": {
							backgroundColor: `${tokens.headerBackground} !important`,
							borderTop: `1px solid ${tokens.border} !important`,
							color: `${tokens.textSecondary} !important`,
							fontSize: `${tokens.footer.fontSize} !important`,
						},

						"& .MuiTablePagination-root": {
							color: `${tokens.textSecondary} !important`,
						},

						"& .MuiTablePagination-actions .MuiIconButton-root": {
							color: `${tokens.accent} !important`,

							"&.Mui-disabled": {
								color: `${tokens.textDisabled} !important`,
							},
						},

						/* Loading Linear Progress */
						"& .MuiLinearProgress-root": {
							backgroundColor: `${tokens.linearProgress.background} !important`,

							"& .MuiLinearProgress-bar": {
								backgroundColor: `${tokens.accent} !important`,
							},
						},
					} as any
				}
			/>
		</Box>
	);
};

export default Table;
