import {
	Typography as MuiTypography,
	TypographyProps as MuiTypographyProps,
} from '@mui/material';

/** Creates a Typography components */
const Typography: React.FC<MuiTypographyProps> = (Props) => {
	const { children, variant = 'button', ...other } = Props;

	return (
		<MuiTypography
			css={(theme: any) => ({
				fontFamily: `${theme.typography.fontFamily} !important`,
			})}
			variant={variant}
			//whiteSpace={"pre-line"}
			{...other}
		>
			{children}
		</MuiTypography>
	);
};
export { Typography };
