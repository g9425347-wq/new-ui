import { FC, useEffect, useState, useMemo } from "react";
import {
	DataGrid,
	GridColDef,
	GridRowModel,
	useGridApiRef,
	GridColumnVisibilityModel,
	GridRenderCellParams,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import moment from "moment-timezone";
import _ from "lodash";
import Operators from "./TableFilterOperators";

/* Type for data to be returned to table */
export interface RemoteDataResult {
	data: GridRowModel[];
	page: number;
	pageSize: number;
	totalCount: number;
}

/* Type for parameters for remote data */
export type RemoteDataParam = {
	search: string;
	filter: string;
	page: number;
	limit: number;
	sort: string;
	sortOrder: "asc" | "desc";
};

/* Client method to fetch data the grid will pass all the grid props to this*/
export type remoteData = (param: RemoteDataParam) => Promise<RemoteDataResult>;

export type GridColDefEx = GridColDef & {
	hide: boolean;
};

/* Props for the table */
export interface BasicTableProps {
	id?: string;
	width?: number | string;
	height?: number | string;
	paginationMode?: "client" | "server";
	columns: GridColDefEx[];
	data?: GridRowModel[];
	remoteData?: remoteData;
	refresh?: boolean;
	exportCsv?: boolean;
	search?: string;
	onSelectionChange?(uid: string[]): any;
	isSelectBox?: boolean;
	timeZone?: string;
}

/* Render the table */
export const BasicTable: FC<BasicTableProps> = ({
	id,
	width = "",
	height = "",
	paginationMode = "client",
	columns,
	data = [],
	remoteData = undefined,
	refresh = false,
	exportCsv = false,
	search = "",
	isSelectBox = false,
	onSelectionChange,
	timeZone = "UTC",
}) => {
	const theme = useTheme() as any;
	const tableTheme = theme.palette.basicTable;
	const fontFamily = theme.typography.fontFamily;

	const [loading, setLoading] = useState(false),
		[page, setPage] = useState<number>(0),
		[pageSize, setPageSize] = useState<number>(10),
		[rows, setRows] = useState<GridRowModel[]>(data),
		[rowCount, setRowCount] = useState<number>(
			paginationMode === "client" ? data.length : 0
		),
		[sort, setSort] = useState(""),
		[sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"),
		[filter, setFilter] = useState("");

	const { processedColumns, columnVisibilityModel } = useMemo(() => {
		const visibility: GridColumnVisibilityModel = {};
		const cols = columns.map((item: GridColDefEx) => {
			const colCopy = { ...item };

			if (colCopy.type === "date" || colCopy.type === "dateTime") {
				colCopy.valueGetter = (value) => {
					return value && new Date(value);
				};
			}

			if (colCopy.hide === true) {
				visibility[colCopy.field] = false;
			}

			if (colCopy.type === "boolean" && !colCopy.renderCell) {
				colCopy.renderCell = (params: GridRenderCellParams) => {
					const isTrue = Boolean(params.value);
					const tone = isTrue ? "green" : "red";
					return (
						<span
							style={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: tableTheme.boolBadge.size,
								height: tableTheme.boolBadge.size,
								borderRadius: tableTheme.boolBadge.radius,
								fontSize: tableTheme.boolBadge.fontSize,
								fontWeight: tableTheme.boolBadge.fontWeight,
								lineHeight: 1,
								backgroundColor: tableTheme[`${tone}Bg`],
								color: tableTheme[`${tone}Text`],
								border: `1px solid ${tableTheme[`${tone}Border`]}`,
								userSelect: "none",
							}}
						>
							{isTrue ? "✓" : "✕"}
						</span>
					);
				};
			}

			return colCopy;
		});

		return { processedColumns: cols, columnVisibilityModel: visibility };
	}, [columns, tableTheme]);

	const handleSort = (model: any) => {
		setSort(model.length > 0 ? model[0].field : "");
		setSortOrder(model.length > 0 ? model[0].sort : "asc");
	};

	const processFilters = (FilterJson: any) => {
		const filters =
			typeof FilterJson !== "object" ? JSON.parse(FilterJson) : FilterJson;
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
							val.replace(/\(/g, "%28").replace(/\)/g, "%29")
						);
					});
				} else if ((colType === "date" || colType === "dateTime") && timeZone) {
					value = moment.tz(item.value, timeZone).toISOString();
				} else if (colType === "boolean") {
					// keep intact
				} else {
					value = encodeURIComponent(
						item.value.replace(/\(/g, "%28").replace(/\)/g, "%29")
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

	const handleFilter = (model: any) => {
		setFilter(processFilters(model));
	};

	const apiRef = useGridApiRef();

	const handleExport = async () => {
		if (exportCsv) {
			await apiRef.current.exportDataAsCsv();
			exportCsv = true;
		}
	};

	useEffect(() => {
		if (paginationMode === "client") {
			setRows(data);
			setRowCount(data.length);
		}
	}, [data, paginationMode]);

	useEffect(() => {
		if (paginationMode === "server" && remoteData) {
			setLoading(true);

			const param: RemoteDataParam = {
				search: search,
				filter: filter,
				page: page,
				limit: pageSize,
				sort: sort,
				sortOrder: sortOrder,
			};

			remoteData(param)
				.then((result) => {
					setRows(result.data);
					setRowCount(result.totalCount);
				})
				.finally(() => setLoading(false));
		}
	}, [
		page,
		pageSize,
		sort,
		sortOrder,
		refresh,
		search,
		filter,
		paginationMode,
		remoteData,
	]);

	useEffect(() => {
		handleExport();
	}, [exportCsv]);

	return (
		<div
			id={id}
			css={{
				width: width,
				height: height,
				maxHeight: "100vh",
				backgroundColor: tableTheme.bgCard,
				borderRadius: tableTheme.containerRadius,
				border: `1px solid ${tableTheme.border}`,
				boxShadow: tableTheme.shadow,
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
				transition: tableTheme.containerTransition,
			}}
		>
			<DataGrid
				initialState={{
					columns: {
						columnVisibilityModel: columnVisibilityModel,
					},
				}}
				loading={loading}
				apiRef={apiRef}
				getRowId={(row) => row.uid || row.id || row._id}
				pagination
				paginationModel={{ page: page, pageSize: pageSize }}
				onPaginationModelChange={(model) => {
					setPage(model.page);
					setPageSize(model.pageSize);
				}}
				pageSizeOptions={[10, 25, 50, 100]}
				columns={processedColumns}
				paginationMode={paginationMode}
				rows={rows}
				rowCount={rowCount}
				sortingMode={paginationMode}
				checkboxSelection={isSelectBox}
				onRowSelectionModelChange={(model) => {
					if (onSelectionChange) onSelectionChange(model as string[]);
				}}
				onSortModelChange={(model) => handleSort(model)}
				filterMode={paginationMode}
				onFilterModelChange={(model) => handleFilter(model)}
				disableRowSelectionOnClick
				css={{
					border: "none !important",
					fontFamily: `${fontFamily} !important`,

					/* Column Headers */
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: `${tableTheme.bgHeader} !important`,
						borderBottom: `1px solid ${tableTheme.border} !important`,
					},
					"& .MuiDataGrid-columnHeaderTitle": {
						fontWeight: `${tableTheme.headerFontWeight} !important`,
						fontSize: `${tableTheme.headerFontSize} !important`,
						color: `${tableTheme.textPrimary} !important`,
						letterSpacing: tableTheme.headerLetterSpacing,
					},
					"& .MuiDataGrid-iconButtonContainer": {
						color: `${tableTheme.textSecondary} !important`,
					},

					/* Three Dots Menu Button */
					"& .MuiDataGrid-menuIcon": {
						width: "auto !important",
						visibility: "visible",
					},
					"& .MuiDataGrid-menuIconButton": {
						visibility: "visible",
						width: `${tableTheme.menuButtonSize} !important`,
						height: `${tableTheme.menuButtonSize} !important`,
						borderRadius: `${tableTheme.menuButtonRadius} !important`,
						color: `${tableTheme.textSecondary} !important`,
						border: "1px solid transparent !important",
						"&:hover": {
							backgroundColor: `${tableTheme.accentHover} !important`,
							color: `${tableTheme.accentBlue} !important`,
							borderColor: `${tableTheme.borderHover} !important`,
						},
					},

					/* Row Styling */
					"& .MuiDataGrid-row": {
						borderBottom: `1px solid ${tableTheme.borderSubtle} !important`,
						backgroundColor: `${tableTheme.bgCard} !important`,
						color: `${tableTheme.textPrimary} !important`,
						"&:hover": {
							backgroundColor: `${tableTheme.bgRowHover} !important`,
						},
						"&.Mui-selected": {
							backgroundColor: `${tableTheme.bgSelected} !important`,
							"&:hover": {
								backgroundColor: `${tableTheme.bgSelectedHover} !important`,
							},
						},
					},

					/* Cell Styling */
					"& .MuiDataGrid-cell": {
						borderBottom: "none !important",
						color: `${tableTheme.textPrimary} !important`,
						fontSize: `${tableTheme.cellFontSize} !important`,
						display: "flex",
						alignItems: "center",
					},

					/* Solid Red / Green for Native Boolean Cell fallback */
					"& .MuiDataGrid-booleanCell[data-value='true']": {
						color: `${tableTheme.greenText} !important`,
					},
					"& .MuiDataGrid-booleanCell[data-value='false']": {
						color: `${tableTheme.redText} !important`,
					},

					/* Focus Ring Cleanup */
					"& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within":
						{
							outline: "none !important",
						},

					/* Checkbox Styling */
					"& .MuiCheckbox-root": {
						color: `${tableTheme.textMuted} !important`,
						"&.Mui-checked": {
							color: `${tableTheme.accentBlue} !important`,
						},
					},

					/* Footer & Pagination (Clean Background, No Header Color) */
					"& .MuiDataGrid-footerContainer": {
						backgroundColor: `${tableTheme.bgCard} !important`,
						borderTop: `1px solid ${tableTheme.border} !important`,
						color: `${tableTheme.textSecondary} !important`,
						fontSize: `${tableTheme.footerFontSize} !important`,
					},
					"& .MuiTablePagination-root": {
						color: `${tableTheme.textSecondary} !important`,
					},
					"& .MuiTablePagination-actions .MuiIconButton-root": {
						color: `${tableTheme.accentBlue} !important`,
						"&.Mui-disabled": {
							color: `${tableTheme.textMuted} !important`,
						},
					},

					/* Linear Progress Loader */
					"& .MuiLinearProgress-root": {
						backgroundColor: `${tableTheme.borderSubtle} !important`,
						"& .MuiLinearProgress-bar": {
							backgroundColor: `${tableTheme.accentBlue} !important`,
						},
					},

					/* Dropdown Menu (Three dots column options) */
					"& .MuiPaper-root": {
						backgroundColor: `${tableTheme.menuBg} !important`,
						borderRadius: `${tableTheme.menuRadius} !important`,
						border: `1px solid ${tableTheme.border} !important`,
						boxShadow: `${tableTheme.menuShadow} !important`,
						"& .MuiMenuItem-root": {
							fontSize: `${tableTheme.menuItemFontSize} !important`,
							color: `${tableTheme.textPrimary} !important`,
							borderRadius: `${tableTheme.menuItemRadius} !important`,
							margin: `${tableTheme.menuItemMargin} !important`,
							padding: `${tableTheme.menuItemPadding} !important`,
							"&:hover": {
								backgroundColor: `${tableTheme.accentHover} !important`,
								color: `${tableTheme.accentBlue} !important`,
							},
						},
						"& .MuiListItemIcon-root": {
							color: `${tableTheme.textSecondary} !important`,
							minWidth: `${tableTheme.menuIconMinWidth} !important`,
						},
					},
				}}
			/>
		</div>
	);
};

export default BasicTable;
