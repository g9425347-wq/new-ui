import { FC, useCallback, useMemo, useState, useEffect, useRef } from "react";
import {
	Query,
	Builder,
	Utils as QbUtils,
	BasicConfig,
	JsonGroup,
	Config,
	ImmutableTree,
	BuilderProps,
} from "@react-awesome-query-builder/ui";
import { ExpressionBuilderStyle } from "./ExpressionBuilderStyle";

/* Props for Expression Builder */
export interface FieldItem {
	uid: string;
	label: string;
	type: string;
}

// Preserve existing RAQB configuration settings
const InitialConfig = {
	...BasicConfig,
	settings: {
		...BasicConfig.settings,
		removeIncompleteRulesOnLoad: false,
		removeEmptyRulesOnLoad: false,
		removeEmptyGroupsOnLoad: false,
	},
};

export interface ExpressionBuilderProps {
	fields: Array<FieldItem>;
	expression?: JsonGroup;
	onChange?(expression: string, elasticQuery: string, jsonLogic: string): any;
}

export const ExpressionBuilder: FC<ExpressionBuilderProps> = ({
	fields,
	expression,
	onChange,
}) => {
	// 1. Memoize RAQB fields conversion
	const expFields = useMemo(() => {
		return (fields || []).reduce(
			(accumulator, item) => ({
				...accumulator,
				[item.uid]: {
					label: item.label,
					excludeOperators: ["proximity"],
					type:
						item.type?.toLowerCase() === "date" ||
						item.type?.toLowerCase() === "datetime"
							? item.type.toLowerCase()
							: "text",
				},
			}),
			{},
		);
	}, [fields]);

	// 2. Stable RAQB config
	const config: Config = useMemo(
		() => ({ ...InitialConfig, fields: expFields }),
		[expFields],
	);

	// 3. Stable tree initialization
	const [tree, setTree] = useState<ImmutableTree>(() => {
		const queryValue: JsonGroup = expression
			? expression
			: { id: QbUtils.uuid(), type: "group" };
		return QbUtils.loadTree(queryValue);
	});

	// Reference to prevent unnecessary re-serialization loops
	const lastExportedJsonRef = useRef<string>(
		expression ? JSON.stringify(expression) : "",
	);

	// Sync tree if external expression prop changes
	useEffect(() => {
		if (expression) {
			const incomingJson = JSON.stringify(expression);
			if (incomingJson !== lastExportedJsonRef.current) {
				lastExportedJsonRef.current = incomingJson;
				setTree(QbUtils.loadTree(expression));
			}
		}
	}, [expression]);

	// 4. Change handler
	const handleChange = useCallback(
		(immutableTree: ImmutableTree, currentConfig: any) => {
			setTree(immutableTree);
			if (onChange) {
				const treeJson = QbUtils.getTree(immutableTree);
				lastExportedJsonRef.current = JSON.stringify(treeJson);

				onChange(
					JSON.stringify(treeJson), // expression
					JSON.stringify(
						QbUtils.elasticSearchFormat(
							immutableTree,
							currentConfig,
						),
					), // Elastic Query
					JSON.stringify(
						QbUtils.jsonLogicFormat(immutableTree, currentConfig)
							.logic,
					), // jsonLogic
				);
			}
		},
		[onChange],
	);

	// 5. Stable builder render
	const renderBuilder = useCallback(
		(props: BuilderProps) => (
			<div className="query-builder-container">
				<div className="query-builder qb-lite">
					<Builder {...props} />
				</div>
			</div>
		),
		[],
	);

	return (
		<ExpressionBuilderStyle>
			<Query
				{...config}
				value={tree}
				onChange={handleChange}
				renderBuilder={renderBuilder}
			/>
		</ExpressionBuilderStyle>
	);
};

export default ExpressionBuilder;
