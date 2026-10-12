import { CSSProperties, FC } from "react";
import { useTheme } from "@mui/material";

/* Props for Label component - only these attributes to be allowed */
export interface LabelProps {
	label: string;
	color?: string;
	htmlFor?: string;
	required?: boolean;
	disabled?: boolean;
}

export const Label: FC<LabelProps> = ({
	label,
	color,
	htmlFor,
	required = false,
	disabled = false,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.label ?? {};

	return (
		<label
			htmlFor={htmlFor}
			data-disabled={disabled}
			data-clickable={Boolean(htmlFor)}
			style={
				color ? ({ "--label-color": color } as CSSProperties) : undefined
			}
			css={styles.root}
		>
			<span>{label}</span>
			{required && (
				<span aria-hidden="true" css={styles.required}>
					*
				</span>
			)}
		</label>
	);
};

export default Label;
