import { FC } from "react";
import { useTheme } from "@mui/material";
import { JsonToTable } from "react-json-to-table";
import { Json2HtmlStyle } from "./Json2HtmlStyle";
import { ToolTip } from "../ToolTip/ToolTip";
import { Icon } from "../Icon/Icon";

export interface Json2HtmlProps {
	json: any;
}

export const Json2Html: FC<Json2HtmlProps> = ({ json }) => {
	const theme = useTheme() as any;
	const styles = theme?.json2Html ?? {};

	const exportData = () => {
		const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
			JSON.stringify(json, null, 2),
		)}`;
		const link = document.createElement("a");
		link.href = jsonString;
		link.download = "data.json";
		link.click();
	};

	const isEmpty =
		json === null ||
		json === undefined ||
		(Array.isArray(json) && json.length === 0) ||
		(typeof json === "object" && Object.keys(json).length === 0);

	if (isEmpty) {
		return (
			<div css={styles.empty}>No data available</div>
		);
	}

	return (
		<Json2HtmlStyle>
			<div css={styles.root}>
				{/* Table Container with Dark/Light Theme Cascade Overrides */}
				<div css={styles.table}>
					<JsonToTable json={json} />
				</div>

				{/* Modern Action Bar */}
				<div css={styles.actions}>
					<ToolTip title="Download JSON">
						<button
							type="button"
							onClick={exportData}
							aria-label="Download JSON"
							css={styles.exportButton}
						>
							<Icon
								name="download"
								fontSize="small"
								color="inherit"
							/>
							<span>Export</span>
						</button>
					</ToolTip>
				</div>
			</div>
		</Json2HtmlStyle>
	);
};

export default Json2Html;
