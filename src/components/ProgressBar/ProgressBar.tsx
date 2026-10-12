import { FC } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material";

export const ProgressBar: FC = () => {
	const theme = useTheme() as any;

	const progressBar = theme?.palette?.progressBar;

	const renderProgressBar = () => (
		<Box
			css={{
				width: progressBar?.container?.width ?? "100%",
				height: progressBar?.container?.height ?? "35px",
			}}
		>
			<LinearProgress
				css={{
					backgroundColor: `${
						progressBar?.bar?.backgroundColor ?? "#F5F5F5"
					} !important`,
					height: `${progressBar?.bar?.height ?? "20px"} !important`,
					".css-5ir5xx-MuiLinearProgress-bar1": {
						background:
							progressBar?.gradient ??
							"linear-gradient(to right, #F5F5F5, #D8D8D8, #F5F5F5)",
						animation:
							progressBar?.animation?.bar1 ??
							"animation-ozg7p2 2.1s cubic-bezier(0, 0, 0, 0) infinite;",
					},
					".css-1r8wrcl-MuiLinearProgress-bar2": {
						background:
							progressBar?.gradient ??
							"linear-gradient(to right, #F5F5F5, #D8D8D8, #F5F5F5)",
						animation:
							progressBar?.animation?.bar2 ??
							"animation-ozg7p2 2.1s cubic-bezier(0, 0, 0, 0) 1.15s infinite",
					},
				}}
			/>
		</Box>
	);

	return (
		<div>
			{renderProgressBar()}
			{renderProgressBar()}
			{renderProgressBar()}
		</div>
	);
};
