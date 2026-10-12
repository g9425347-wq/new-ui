import { FC, useEffect, useRef, useState, forwardRef } from "react";
import {
	InputAdornment,
	TextField as MuiTextField,
	useTheme,
} from "@mui/material";
import { Icon } from "../Icon/Icon";

/* Props for Searchbar component - only these attributes to be allowed */
export interface SearchBarProps {
	id?: string;
	value?: string;
	onChange?(text: string): any;
	ref?: any;
}

// Searchbar Component
export const SearchBar: FC<SearchBarProps> = forwardRef(
	({ id, onChange, value = "" }, ref) => {
		const theme = useTheme() as any;
		const searchBar = theme.palette.searchBar;

		const [currValue, setCurrValue] = useState(value);
		const [prevValue, setPrevValue] = useState("");
		const timer = useRef<null | ReturnType<typeof setTimeout>>(null);

		const handleChange = (e: any) => {
			setCurrValue(e.target.value);
		};

		const handleClear = () => {
			setCurrValue("");

			if (onChange) {
				onChange("");
			}
		};

		useEffect(() => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				if (prevValue !== currValue) {
					setPrevValue(currValue);

					if (onChange) {
						onChange(currValue);
					}
				}
			}, 500);

			return () => {
				if (timer.current) {
					clearTimeout(timer.current);
				}
			};
		}, [currValue, prevValue, onChange]);

		return (
			<MuiTextField
				id={id}
				fullWidth
				value={currValue}
				inputRef={ref}
				placeholder="Search..."
				variant="outlined"
				size="small"
				autoComplete="off"
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment
							position="start"
							css={{
								marginRight:
									searchBar.searchAdornmentMarginRight,
							}}
						>
							<div
								css={{
									display: "flex",
									alignItems: "center",
									color: searchBar.iconColor,
									fontSize: searchBar.searchIconFontSize,
								}}
							>
								<Icon name="search" fontSize="inherit" />
							</div>
						</InputAdornment>
					),

					endAdornment: (
						<InputAdornment
							position="end"
							css={{
								marginLeft: searchBar.clearAdornmentMarginLeft,
							}}
						>
							{currValue.trim() !== "" && (
								<div
									title="Clear search"
									onClick={handleClear}
									css={{
										cursor: "pointer",
										width: searchBar.clearButton.width,
										height: searchBar.clearButton.height,
										borderRadius:
											searchBar.clearButton.borderRadius,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize:
											searchBar.clearButton.fontSize,
										color: searchBar.iconColor,
										backgroundColor:
											searchBar.clearButton.background,
										transition:
											searchBar.clearButton.transition,

										"&:hover": {
											backgroundColor:
												searchBar.clearButtonHoverBackground,
											color: searchBar.iconHover,
										},
									}}
								>
									<Icon name="close" fontSize="inherit" />
								</div>
							)}
						</InputAdornment>
					),
				}}
				css={{
					fontFamily: `${theme.typography.fontFamily} !important`,
					backgroundColor: searchBar.background,
					borderRadius: `${searchBar.borderRadius} !important`,
					transition: searchBar.outerTransition,

					"& .MuiInputBase-root": {
						borderRadius: `${searchBar.borderRadius} !important`,
						paddingLeft: searchBar.rootPaddingLeft,
						paddingRight: searchBar.rootPaddingRight,
						height: searchBar.inputHeight,
						backgroundColor: searchBar.background,
						transition: searchBar.backgroundTransition,
					},

					"& input": {
						padding: searchBar.inputPadding,
						color: `${searchBar.textPrimary} !important`,
						fontSize: searchBar.inputFontSize,
						fontWeight: searchBar.inputFontWeight,
						fontFamily: "inherit",

						"&::placeholder": {
							color: searchBar.textSecondary,
							opacity: searchBar.placeholderOpacity,
						},
					},

					".MuiOutlinedInput-notchedOutline": {
						borderColor: `${searchBar.border} !important`,
						borderWidth: `${searchBar.outlineBorderWidth} !important`,
						transition: searchBar.borderTransition,
					},

					"&:hover": {
						backgroundColor: searchBar.backgroundHover,

						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: `${searchBar.borderHover} !important`,
						},
					},

					".Mui-focused": {
						backgroundColor: `${searchBar.background} !important`,
					},

					".Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: `${searchBar.borderFocus} !important`,
						borderWidth: `${searchBar.focusedBorderWidth} !important`,
						boxShadow: "none !important",
					},
				}}
			/>
		);
	},
);

export default SearchBar;
