import { accordionTheme } from "./components/accordion";
import { advancedCellTheme } from "./components/advancedCell";
import { assetGraphTheme } from "./components/assetGraph";
import { attackPathTheme } from "./components/attackPath";
import { attackPathGraphTheme } from "./components/attackPathGraph";
import { bannerTheme } from "./components/banner";
import { baseTheme } from "./components/base";
import { basicTableTheme } from "./components/basicTable";
import { boxTheme } from "./components/box";
import { buttonTheme } from "./components/button";
import { calendarTheme } from "./components/calendar";
import { chatBotTheme } from "./components/chatBot";
import { chatMessageTheme } from "./components/chatMessage";
import { groupByTheme } from "./components/groupBy";
import { htmlEditorTheme } from "./components/htmlEditor";
import { hyperlinkTheme } from "./components/hyperlink";
import { robotAgentFaceTheme } from "./components/robotAgentFace";

const DARK = {
	colors: {
		primary: "#3477C7",
		primaryLight: "#70b5f9",
		surface: "#1e1e1e",
		surfaceDark: "#141414",
		border: "#373737",
		borderHover: "#555555",
		white: "#ffffff",
		textSecondary: "#bbbbbb",
		textMuted: "#777777",
		textDisabled: "#666666",
	},

	fontFamily:
		"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

	shadows: {
		small: "0 1px 2px 0 rgba(0, 0, 0, 0.45)",
		card: "0 1px 3px rgba(0, 0, 0, 0.45)",
	},
};

const DarkTheme = {
	name: "Dark Theme",

	palette: {
		mode: "dark",

		primary: {
			main: DARK.colors.primary,
			dark: DARK.colors.border,
			light: "#eeeeee",
			contrastText: DARK.colors.white,
			contrastTextAlt: "#FFD300",
			disabled: "#424242",
		},

		secondary: {
			main: "#000000",
			dark: "#eeeeee",
			light: "#a3adc4",
			contrastText: "#3fa8ff",
		},

		background: {
			default: "#121212",
			paper: DARK.colors.surface,
			dark: "#000000",
		},

		text: {
			primary: DARK.colors.white,
			secondary: DARK.colors.textSecondary,
			disabled: DARK.colors.textDisabled,
			error: "#E93946",
		},

		shadow: {
			light: "#616161",
			dark: "#bdbdbd",
		},

		priority: {
			critical: "#d9534f",
			high: "#f57c00",
			medium: "#60a5fa",
			low: "#51C926",
		},

		error: {
			main: "#f44336",
			dark: "#d32f2f",
			light: "#e57373",
			contrastText: "#000000",
		},

		success: {
			main: "#4caf50",
			dark: "#388e3c",
			light: "#81c784",
			contrastText: "#000000",
		},

		info: {
			main: "#2196f3",
			dark: "#0b79d0",
			light: "#bbdefb",
			contrastText: "#000000",
		},

		warning: {
			main: "#FFA200",
			dark: "#f57c00",
			light: "#ffb74d",
			contrastText: "#000000",
		},

		common: {
			black: "#000",
			white: "#fff",
		},

		activity: {
			open: "#d9d904",
			assign: "#FFA200",
			escalate: "#FF4500",
			action: "#008080",
			review: "#800080",
			close: "#27ae60",
			notification: "#FFD300",
			email: "#008080",
			note: "#3498db",
			incident: "#8e44ad",
		},

		topBar: {
			background: DARK.colors.border,
			contrastText: DARK.colors.white,
		},

		sideMenu: {
			background: "#000000",
			contrastText: DARK.colors.white,
			border: "#ffffff59",
		},

		loader: {
			background: DARK.colors.white,
			overlayOpacity: 0.1,
			zIndex: 9999,
			contentZIndex: 10000,
		},

		priorityBadge: {
			backgroundAlpha: 0.22,

			sizes: {
				small: {
					padding: "2px 9px",
					fontSize: "11px",
					dotSize: "6px",
					gap: "5px",
				},

				medium: {
					padding: "4px 12px",
					fontSize: "12px",
					dotSize: "7px",
					gap: "6px",
				},
			},

			display: "inline-flex",
			alignItems: "center",
			borderRadius: "999px",
			fontWeight: 600,
			letterSpacing: "0.04em",
			lineHeight: 1.4,
			whiteSpace: "nowrap",
			userSelect: "none",
			transition: "background-color 0.15s ease, color 0.15s ease",

			dotBorderRadius: "50%",
			dotFlexShrink: 0,
		},

		grey: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#eeeeee",
			300: "#e0e0e0",
			400: "#bdbdbd",
			500: "#9e9e9e",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			A100: "#f5f5f5",
			A200: "#eeeeee",
			A400: "#bdbdbd",
			A700: "#616161",
		},

		transparent: "#ffffff00",

		contrastThreshold: 3,

		getContrastText: () => {},

		argmentColor: () => {},

		tonalOffset: 0.2,

		divider: DARK.colors.white,

		action: {
			active: "rgba(0,107,166,100)",
			hover: "#757575",
			hoverOpacity: 0.04,
			selected: "rgba(0,107,166,100)",
			selectedOpacity: 0.08,
			disabled: "rgba(250,250,250,100)",
			disabledBackground: "rgba(250,250,250,100)",
			disabledOpacity: 0.38,
			focus: "rgba(0,107,166,100)",
			activatedOpacity: 0.12,
		},

		accordion: accordionTheme.dark,

		advancedCell: advancedCellTheme,

		assetGraph: assetGraphTheme.dark,

		attackPath: attackPathTheme.dark,

		attackPathGraph: attackPathGraphTheme.dark,

		banner: bannerTheme.dark,

		base: baseTheme.dark,

		basicTable: basicTableTheme.dark,

		box: boxTheme.dark,

		button: buttonTheme.dark,

		calendar: calendarTheme.dark,

		chatBot: chatBotTheme.dark,

		chatMessage: chatMessageTheme.dark,

		robotAgentFace: robotAgentFaceTheme.dark,

		groupBy: groupByTheme.dark,

		htmlEditor: htmlEditorTheme.dark,

		hyperlink: hyperlinkTheme.dark,

		checkbox: {
			textPrimary: DARK.colors.white,
			textDisabled: DARK.colors.textDisabled,
			borderDefault: DARK.colors.border,
			borderHover: DARK.colors.borderHover,
			primary: DARK.colors.primary,
			primaryHover: DARK.colors.primaryLight,
			hoverGlow: "rgba(52, 119, 199, 0.16)",
			height: "32px",
			labelFontSize: "13.5px",
			labelFontWeight: 500,
			labelLetterSpacing: "0.01em",
			padding: "6px",
			borderRadius: "6px",
			svgFontSize: "18px",
			rootStyle: {
				display: "inline-flex",
				alignItems: "center",
			},
			labelStyle: (disabled: boolean, fontFamily?: string) => ({
				fontFamily,
				height: "32px",
				margin: "0px !important",
				gap: "4px",
				userSelect: "none" as const,
				cursor: disabled ? "not-allowed" : "pointer",
				"& .MuiFormControlLabel-label": {
					fontSize: "13.5px",
					fontWeight: 500,
					color: disabled
						? DARK.colors.textDisabled
						: DARK.colors.white,
					letterSpacing: "0.01em",
					transition: "color 0.15s ease",
				},
				"&:hover": {
					"& .MuiFormControlLabel-label": {
						color: disabled
							? DARK.colors.textDisabled
							: DARK.colors.primary,
					},
				},
			}),
			checkboxStyle: (disabled: boolean) => ({
				padding: "6px",
				color: DARK.colors.border,
				borderRadius: "6px",
				transition: "background-color 0.15s ease, color 0.15s ease",
				"&:hover": {
					backgroundColor: disabled
						? "transparent"
						: "rgba(52, 119, 199, 0.16)",
					color: disabled
						? DARK.colors.border
						: DARK.colors.borderHover,
				},
				"&.Mui-checked": {
					color: `${DARK.colors.primary} !important`,
					"&:hover": {
						backgroundColor: "rgba(52, 119, 199, 0.16)",
						color: `${DARK.colors.primaryLight} !important`,
					},
				},
				"&.Mui-disabled": {
					color: `${DARK.colors.border} !important`,
					opacity: 0.6,
				},
				"& .MuiSvgIcon-root": {
					fontSize: "18px",
				},
			}),
		},

		confirm: {
			bgCard: DARK.colors.surface,
			border: DARK.colors.border,
			textPrimary: DARK.colors.white,
			shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
			backdrop: "rgba(0, 0, 0, 0.65)",
			borderRadius: "12px",
			padding: "12px",
			minWidth: "360px",
			maxWidth: "460px",
			titleFontSize: "15.5px",
			titleFontWeight: 600,
			titlePadding: "12px 14px 8px 14px",
			titleLineHeight: 1.45,
			titleLetterSpacing: "-0.01em",
			actionsPadding: "12px 14px 6px 14px",
			actionsGap: "8px",
			dialogPaperStyle: {
				"& .MuiBackdrop-root": {
					backgroundColor: "rgba(0, 0, 0, 0.65)",
					backdropFilter: "blur(2px)",
				},
				"& .MuiDialog-paper": {
					backgroundColor: `${DARK.colors.surface} !important`,
					borderRadius: "12px !important",
					border: `1px solid ${DARK.colors.border} !important`,
					boxShadow:
						"0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.4) !important",
					padding: "12px",
					minWidth: "360px",
					maxWidth: "460px",
					boxSizing: "border-box" as const,
				},
			},
			titleStyle: (fontFamily?: string) => ({
				fontFamily,
				fontSize: "15.5px",
				fontWeight: 600,
				color: DARK.colors.white,
				padding: "12px 14px 8px 14px",
				lineHeight: 1.45,
				letterSpacing: "-0.01em",
			}),
			actionsStyle: {
				padding: "12px 14px 6px 14px",
				gap: "8px",
				justifyContent: "flex-end",
			},
		},

		datePicker: {
			bgInput: DARK.colors.surface,
			bgMuted: "rgba(255, 255, 255, 0.03)",
			border: "#4b5563",
			borderDisabled: DARK.colors.border,
			borderHover: "#6b7280",
			borderFocus: DARK.colors.primary,
			focusRing: "rgba(52, 119, 199, 0.2)",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textDisabled,
			textMuted: DARK.colors.textDisabled,
			labelText: DARK.colors.textSecondary,
			labelDisabled: DARK.colors.textDisabled,
			labelError: "#f87171",
			accent: DARK.colors.primary,
			accentHover: "rgba(52, 119, 199, 0.16)",
			error: "#f87171",
			errorBg: "rgba(244, 67, 54, 0.12)",
			errorRing: "rgba(239, 68, 68, 0.2)",
			shadow: DARK.shadows.small,
			dropdownShadow:
				"0 12px 28px -4px rgba(0, 0, 0, 0.7), 0 4px 10px -2px rgba(0, 0, 0, 0.4)",
			popupBg: DARK.colors.surface,
			popupBackground: DARK.colors.surface,
			popupBorder: DARK.colors.border,
			popupShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.7)",
			selectedDayBg: DARK.colors.primary,
			selectedDayText: DARK.colors.white,
			hoverDayBg: "rgba(52, 119, 199, 0.16)",
			todayBorder: DARK.colors.primary,
			requiredAsteriskStyle: {
				color: DARK.colors.primary,
				fontSize: "13px",
				fontWeight: 700,
				lineHeight: 1,
				marginLeft: "2px",
			},
			textFieldStyle: (
				_disabled: boolean,
				_error: boolean,
				fontFamily?: string,
			) => ({
				width: "100%",
				fontFamily: `${fontFamily}  `,
				"& .MuiInputLabel-root": {
					position: "static",
					transform: "none",
					display: "inline-flex",
					alignItems: "center",
					gap: "4px",
					fontSize: "13px",
					fontWeight: 600,
					lineHeight: 1.4,
					letterSpacing: "normal",
					maxWidth: "100%",
					whiteSpace: "normal",
					overflow: "visible",
					textOverflow: "clip",
					pointerEvents: "auto",
					color: `${
						_disabled
							? DARK.colors.textDisabled
							: _error
							? "#f87171"
							: DARK.colors.textSecondary
					} !important`,
					backgroundColor: "transparent",
					padding: "0",
					marginBottom: "4px",
					zIndex: 1,
					userSelect: "none" as const,
					transition: "color 0.15s ease",
				},
				"& .MuiOutlinedInput-root": {
					backgroundColor: _disabled
						? "rgba(255, 255, 255, 0.03)"
						: DARK.colors.surface,
					borderRadius: "8px",
					fontSize: "13.5px",
					fontWeight: 400,
					color: _disabled
						? DARK.colors.textDisabled
						: DARK.colors.white,
					boxShadow: _disabled ? DARK.shadows.small : undefined,
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, color 0.15s ease",
					cursor: _disabled ? "not-allowed" : "pointer",
					"& legend": { display: "none" },
					"& input": {
						padding: "10px 14px",
						height: "20px",
						cursor: _disabled ? "not-allowed" : "pointer",
						WebkitTextFillColor: _disabled
							? DARK.colors.textDisabled
							: DARK.colors.white,
					},
					"& .MuiIconButton-root": {
						color: _disabled
							? DARK.colors.textDisabled
							: DARK.colors.primary,
						padding: "6px",
						marginRight: "4px",
						transition:
							"color 0.15s ease, background-color 0.15s ease",
						"&:hover": {
							backgroundColor: "rgba(52, 119, 199, 0.16)",
						},
					},
					"& .MuiOutlinedInput-notchedOutline": {
						top: 0,
						borderRadius: "8px",
						borderColor: `${
							_disabled
								? DARK.colors.border
								: _error
								? "#f87171"
								: "#4b5563"
						} !important`,
						borderWidth: "1px !important",
						transition: "border-color 0.15s ease",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: `${
							_disabled
								? DARK.colors.border
								: _error
								? "#f87171"
								: "#6b7280"
						} !important`,
					},
					"&.Mui-focused": {
						boxShadow: `0 0 0 2px ${
							_error
								? "rgba(239, 68, 68, 0.2)"
								: "rgba(52, 119, 199, 0.2)"
						}`,
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: `${
								_error ? "#f87171" : DARK.colors.primary
							} !important`,
							borderWidth: "1.5px !important",
						},
					},
				},
				"& .MuiFormHelperText-root": {
					fontFamily: "inherit",
					fontSize: "12px",
					fontWeight: 400,
					margin: "4px 0 0 0",
					padding: 0,
					color: _error ? "#f87171" : DARK.colors.textSecondary,
				},
			}),
		},

		dateRangePicker: {
			bgCard: DARK.colors.surface,
			bgSidebar: DARK.colors.surfaceDark,
			border: DARK.colors.border,
			borderSubtle: "#212121",
			borderHover: "#757575",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textMuted: DARK.colors.textDisabled,
			accentBlue: DARK.colors.primary,
			accentHover: "rgba(52, 119, 199, 0.16)",
			accentBorder: DARK.colors.primary,
			shadowSm: DARK.shadows.small,
			shadow: "0 10px 25px -4px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
			triggerBtnStyle: (isOpen: boolean) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "34px",
				height: "34px",
				borderRadius: "8px",
				cursor: "pointer",
				backgroundColor: isOpen
					? "rgba(52, 119, 199, 0.16)"
					: DARK.colors.surface,
				border: `1px solid ${
					isOpen ? DARK.colors.primary : DARK.colors.border
				}`,
				color: isOpen ? DARK.colors.primary : DARK.colors.textSecondary,
				boxShadow: DARK.shadows.small,
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "rgba(52, 119, 199, 0.16)",
					borderColor: "#757575",
					color: DARK.colors.primary,
				},
			}),
			popoverPaperStyle: {
				mt: "8px",
				backgroundColor: DARK.colors.surface,
				borderRadius: "12px",
				border: `1px solid ${DARK.colors.border}`,
				boxShadow:
					"0 10px 25px -4px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
				overflow: "hidden",
			},
			popoverContentStyle: (fontFamily?: string) => ({
				display: "flex",
				p: 2,
				gap: 2.5,
				alignItems: "stretch",
				fontFamily,
			}),
			sidebarStyle: {
				display: "flex",
				flexDirection: "column",
				gap: 0.5,
				borderRight: `1px solid ${DARK.colors.border}`,
				pr: 2,
				minWidth: "125px",
			},
			sectionHeaderStyle: (textColor: string) => ({
				fontSize: "11px",
				fontWeight: 700,
				color: textColor,
				textTransform: "uppercase",
				letterSpacing: "0.05em",
				mb: 0.5,
				px: 1,
			}),
			shortcutBtnStyle: (
				textPrimary: string,
				accentHover: string,
				accentBlue: string,
			) => ({
				justifyContent: "flex-start",
				fontSize: "12.5px",
				fontWeight: 500,
				textTransform: "none",
				color: textPrimary,
				px: 1.25,
				py: 0.6,
				borderRadius: "6px",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: accentHover,
					color: accentBlue,
				},
			}),
			customRangeSectionStyle: {
				display: "flex",
				flexDirection: "column",
				gap: 1.5,
				justifyContent: "center",
			},
			customRangeRowStyle: {
				display: "flex",
				gap: 1.5,
				alignItems: "center",
			},
			dateInputStyle: (
				bgCard: string,
				textPrimary: string,
				border: string,
				borderHover: string,
				accentBlue: string,
				textSecondary: string,
			) => ({
				width: "155px",
				"& .MuiOutlinedInput-root": {
					borderRadius: "8px",
					fontSize: "13px",
					backgroundColor: bgCard,
					color: textPrimary,
					"& fieldset": {
						borderColor: border,
					},
					"&:hover fieldset": {
						borderColor: borderHover,
					},
					"&.Mui-focused fieldset": {
						borderColor: accentBlue,
					},
				},
				"& .MuiInputLabel-root": {
					fontSize: "13px",
					color: textSecondary,
					"&.Mui-focused": {
						color: accentBlue,
					},
				},
				"& .MuiIconButton-root": {
					color: accentBlue,
				},
			}),
			toSeparatorStyle: (textColor: string) => ({
				color: textColor,
				fontWeight: 500,
				fontSize: "13px",
			}),
		},

		dateTimePicker: {
			bgInput: DARK.colors.surface,
			bgMuted: "rgba(255, 255, 255, 0.03)",
			border: "#4b5563",
			borderDisabled: DARK.colors.border,
			borderHover: "#6b7280",
			borderFocus: DARK.colors.primary,
			focusRing: "rgba(52, 119, 199, 0.2)",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textDisabled,
			textMuted: DARK.colors.textDisabled,
			labelText: DARK.colors.textSecondary,
			labelDisabled: DARK.colors.textDisabled,
			labelError: "#f87171",
			accent: DARK.colors.primary,
			accentHover: "rgba(52, 119, 199, 0.16)",
			error: "#f87171",
			errorBg: "rgba(244, 67, 54, 0.12)",
			errorRing: "rgba(239, 68, 68, 0.2)",
			shadow: DARK.shadows.small,
			dropdownShadow:
				"0 12px 28px -4px rgba(0, 0, 0, 0.7), 0 4px 10px -2px rgba(0, 0, 0, 0.4)",
			popupBg: DARK.colors.surface,
			popupBorder: DARK.colors.border,
			popupShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.7)",
			requiredAsteriskStyle: {
				color: DARK.colors.primary,
				fontSize: "13px",
				fontWeight: 700,
				lineHeight: 1,
				marginLeft: "2px",
			},
			textFieldStyle: (
				_disabled: boolean,
				_error: boolean,
				fontFamily?: string,
			) => ({
				width: "100%",
				fontFamily: `${fontFamily} !important`,
				"& .MuiInputLabel-root": {
					position: "static",
					transform: "none",
					display: "inline-flex",
					alignItems: "center",
					gap: "4px",
					fontFamily: "inherit",
					fontSize: "13px",
					fontWeight: 600,
					lineHeight: 1.4,
					letterSpacing: "normal",
					maxWidth: "100%",
					whiteSpace: "normal",
					overflow: "visible",
					textOverflow: "clip",
					pointerEvents: "auto",
					color: `${
						_disabled
							? DARK.colors.textDisabled
							: _error
							? "#f87171"
							: DARK.colors.textSecondary
					} !important`,
					backgroundColor: "transparent",
					padding: "0",
					marginBottom: "4px",
					zIndex: 1,
					userSelect: "none" as const,
					transition: "color 0.15s ease",
				},
				"& .MuiOutlinedInput-root": {
					backgroundColor: _disabled
						? "rgba(255, 255, 255, 0.03)"
						: DARK.colors.surface,
					borderRadius: "8px",
					fontSize: "13.5px",
					fontWeight: 400,
					color: _disabled
						? DARK.colors.textDisabled
						: DARK.colors.white,
					boxShadow: _disabled ? DARK.shadows.small : undefined,
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, color 0.15s ease",
					cursor: _disabled ? "not-allowed" : "pointer",
					"& legend": { display: "none" },
					"& input": {
						padding: "10px 14px",
						height: "20px",
						cursor: _disabled ? "not-allowed" : "pointer",
						WebkitTextFillColor: _disabled
							? DARK.colors.textDisabled
							: DARK.colors.white,
					},
					"& .MuiIconButton-root": {
						color: _disabled
							? DARK.colors.textDisabled
							: DARK.colors.primary,
						padding: "6px",
						marginRight: "4px",
						transition:
							"color 0.15s ease, background-color 0.15s ease",
						"&:hover": {
							backgroundColor: "rgba(52, 119, 199, 0.16)",
						},
					},
					"& .MuiOutlinedInput-notchedOutline": {
						top: 0,
						borderRadius: "8px",
						borderColor: `${
							_disabled
								? DARK.colors.border
								: _error
								? "#f87171"
								: "#4b5563"
						} !important`,
						borderWidth: "1px !important",
						transition: "border-color 0.15s ease",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: `${
							_disabled
								? DARK.colors.border
								: _error
								? "#f87171"
								: "#6b7280"
						} !important`,
					},
					"&.Mui-focused": {
						boxShadow: `0 0 0 2px ${
							_error
								? "rgba(239, 68, 68, 0.2)"
								: "rgba(52, 119, 199, 0.2)"
						}`,
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: `${
								_error ? "#f87171" : DARK.colors.primary
							} !important`,
							borderWidth: "1.5px !important",
						},
					},
				},
				"& .MuiFormHelperText-root": {
					fontFamily: "inherit",
					fontSize: "12px",
					fontWeight: 400,
					margin: "4px 0 0 0",
					padding: 0,
					color: _error ? "#f87171" : DARK.colors.textSecondary,
				},
			}),
		},

		dialog: {
			bgCard: DARK.colors.surface,
			bgHeader: DARK.colors.surface,
			bgSubHeader: "#121212",
			border: "#424242",
			borderSubtle: "#212121",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textMuted: DARK.colors.textDisabled,
			accent: DARK.colors.primary,
			accentHover: "rgba(52, 119, 199, 0.16)",
			accentBadge: "rgba(52, 119, 199, 0.2)",
			shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
			backdrop: "rgba(0, 0, 0, 0.65)",
			borderRadius: "12px",
			paperStyle: (fullScreen: boolean, fontFamily?: string) => ({
				"& .MuiBackdrop-root": {
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					backdropFilter: "blur(4px)",
				},
				"& .MuiDialog-paper": {
					borderRadius: fullScreen
						? "0px !important"
						: "14px !important",
					backgroundColor: `${DARK.colors.surface} !important`,
					border: fullScreen
						? "none"
						: "1px solid #424242 !important",
					boxShadow: fullScreen
						? "none"
						: "0 25px 50px -12px rgba(0, 0, 0, 0.75) !important",
					overflow: "hidden",
					display: "flex",
					flexDirection: "column" as const,
					fontFamily: `${fontFamily} !important`,
					transition:
						"background-color 0.2s ease, border-color 0.2s ease",
				},
			}),
			appBarStyle: {
				position: "relative" as const,
				backgroundColor: `${DARK.colors.surface} !important`,
				color: `${DARK.colors.white} !important`,
				boxShadow: "none !important",
				borderBottom: "1px solid #424242 !important",
				transition:
					"background-color 0.2s ease, border-color 0.2s ease",
				"& .MuiToolbar-root": {
					minHeight: "52px !important",
					paddingLeft: "18px !important",
					paddingRight: "14px !important",
				},
			},
			titleStyle: {
				color: `${DARK.colors.white} !important`,
				fontSize: "15px !important",
				fontWeight: "600 !important",
				fontFamily: "inherit !important",
				letterSpacing: "-0.01em",
				userSelect: "none" as const,
			},
			toolbarStyle: (fullScreen: boolean) => ({
				cursor: fullScreen ? "default" : "grab",
				"&:active": {
					cursor: fullScreen ? "default" : "grabbing",
				},
			}),
			headerBoxStyle: {
				display: "flex",
				justifyContent: "space-between",
				width: "100%",
				alignItems: "center",
				position: "relative",
			},
			logoStyle: (logoUrl?: string) => ({
				height: "36px",
				width: "110px",
				background: `url(${logoUrl}) center center no-repeat`,
				backgroundSize: "contain",
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
			}),
			closeBtnStyle: (
				textSecondary: string,
				accentHover: string,
				accent: string,
			) => ({
				width: "32px",
				height: "32px",
				borderRadius: "8px",
				color: textSecondary,
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: accentHover,
					color: accent,
				},
			}),
			subHeaderContainerStyle: (bgSubHeader: string, border: string) => ({
				display: "flex",
				alignItems: "center",
				gap: "14px",
				width: "100%",
				backgroundColor: bgSubHeader,
				padding: "14px 20px",
				boxSizing: "border-box",
				borderBottom: `1px solid ${border}`,
				fontFamily: "inherit",
				transition:
					"background-color 0.2s ease, border-color 0.2s ease",
			}),
			subHeaderIconWrapperStyle: (
				accentBadge: string,
				accent: string,
			) => ({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "38px",
				height: "38px",
				borderRadius: "10px",
				backgroundColor: accentBadge,
				color: accent,
				flexShrink: 0,
			}),
			subHeaderContentStyle: {
				display: "flex",
				flexDirection: "column",
				gap: "2px",
				minWidth: 0,
			},
			subHeaderTitleStyle: (textPrimary: string) => ({
				color: textPrimary,
				fontSize: "12.5px",
				fontWeight: 700,
				textTransform: "uppercase",
				letterSpacing: "0.04em",
				lineHeight: 1.3,
			}),
			subHeaderDescriptionStyle: (textSecondary: string) => ({
				color: textSecondary,
				fontSize: "13px",
				lineHeight: 1.4,
			}),
			contentStyle: (
				padding: boolean,
				bgCard: string,
				textPrimary: string,
			) => ({
				padding: padding ? "20px 24px" : 0,
				backgroundColor: bgCard,
				color: textPrimary,
				fontFamily: "inherit",
				overflowY: "auto",
				flex: 1,
				transition: "background-color 0.2s ease, color 0.2s ease",
			}),
			actionsStyle: (border: string, bgCard: string) => ({
				padding: "12px 20px",
				borderTop: `1px solid ${border}`,
				backgroundColor: bgCard,
				gap: 1.5,
			}),
		},

		dividerComponent: {
			labelColor: DARK.colors.primary,
			lineColor: DARK.colors.border,
			fontSize: "13px",
			fontWeight: 600,
			gap: "8px",
			lineHeight: "1px",
			rootStyle: {
				display: "flex",
				alignItems: "center",
				width: "100%",
				gap: "8px",
			},
			labelStyle: (fontFamily?: string) => ({
				fontFamily: `${fontFamily} !important`,
				fontWeight: 600,
				fontSize: "13px",
				color: DARK.colors.primary,
				textAlign: "left" as const,
				textTransform: "uppercase" as const,
				whiteSpace: "nowrap" as const,
			}),
			lineStyle: {
				width: "100%",
				backgroundColor: DARK.colors.border,
				height: "1px",
			},
		},

		dropdown: {
			bgInput: DARK.colors.surface,
			bgDisabled: "rgba(255, 255, 255, 0.03)",
			bgHover: "rgba(56, 189, 248, 0.08)",
			bgOptionSelected: "rgba(56, 189, 248, 0.2)",
			border: "#4b5563",
			borderDisabled: DARK.colors.border,
			borderHover: "#6b7280",
			borderFocus: DARK.colors.primary,
			focusRing: "0 0 0 2px rgba(52, 119, 199, 0.2)",
			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.2)",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textDisabled,
			textMuted: DARK.colors.textDisabled,
			labelText: DARK.colors.textSecondary,
			labelDisabled: DARK.colors.textDisabled,
			labelError: "#f87171",
			accent: DARK.colors.primary,
			accentHover: "rgba(56, 189, 248, 0.15)",
			error: "#f87171",
			onlineDot: "#4ade80",
			shadow: DARK.shadows.small,
			menuShadow:
				"0 12px 28px -4px rgba(0, 0, 0, 0.7), 0 4px 10px -2px rgba(0, 0, 0, 0.4)",
			multiValueBg: "rgba(56, 189, 248, 0.15)",
			multiValueBorder: "rgba(56, 189, 248, 0.3)",
			multiValueRemoveHoverBg: "rgba(244, 67, 54, 0.25)",
			multiValueRemoveHoverColor: "#f87171",
			borderRadius: "8px",
			getSelectStyles: ({
				disabled,
				error,
				short,
				fontFamily,
			}: {
				disabled?: boolean;
				error?: boolean;
				short?: boolean;
				fontFamily?: string;
			}) => ({
				menuPortal: (provided: any) => ({
					...provided,
					zIndex: 9999,
				}),
				menu: (provided: any) => ({
					...provided,
					zIndex: 9999,
					backgroundColor: DARK.colors.surface,
					borderRadius: "10px",
					border: "1px solid #4b5563",
					boxShadow:
						"0 12px 28px -4px rgba(0, 0, 0, 0.7), 0 4px 10px -2px rgba(0, 0, 0, 0.4)",
					padding: "4px",
					marginTop: "6px",
				}),
				option: (provided: any, state: any) => ({
					...provided,
					borderRadius: "6px",
					padding: "7px 12px",
					fontSize: "13.5px",
					fontFamily,
					fontWeight: state.isSelected ? 600 : 500,
					color: state.isSelected
						? DARK.colors.primary
						: DARK.colors.white,
					backgroundColor: state.isSelected
						? "rgba(56, 189, 248, 0.2)"
						: state.isFocused
						? "rgba(56, 189, 248, 0.08)"
						: "transparent",
					cursor: "pointer",
					transition: "all 0.12s ease",
					"&:active": {
						backgroundColor: "rgba(56, 189, 248, 0.2)",
					},
				}),
				valueContainer: (provided: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 14px",
					gap: "4px",
				}),
				placeholder: (provided: any) => ({
					...provided,
					color: DARK.colors.textDisabled,
					fontSize: "13.5px",
					fontFamily,
					fontWeight: 400,
				}),
				singleValue: (provided: any) => ({
					...provided,
					color: disabled
						? DARK.colors.textDisabled
						: DARK.colors.white,
					fontSize: "13.5px",
					fontFamily,
					fontWeight: 400,
				}),
				multiValue: (provided: any) => ({
					...provided,
					backgroundColor: "rgba(56, 189, 248, 0.15)",
					border: "1px solid rgba(56, 189, 248, 0.3)",
					borderRadius: "6px",
					padding: "1px 3px",
				}),
				multiValueLabel: (provided: any) => ({
					...provided,
					color: DARK.colors.primary,
					fontSize: "12px",
					fontFamily,
					fontWeight: 600,
				}),
				multiValueRemove: (provided: any) => ({
					...provided,
					color: DARK.colors.primary,
					borderRadius: "4px",
					cursor: "pointer",
					"&:hover": {
						backgroundColor: "rgba(244, 67, 54, 0.25)",
						color: "#f87171",
					},
				}),
				dropdownIndicator: (provided: any, state: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 10px",
					color: disabled
						? DARK.colors.textDisabled
						: state.isFocused
						? DARK.colors.primary
						: DARK.colors.textSecondary,
					transition: "transform 0.15s ease, color 0.15s ease",
					transform: state.selectProps.menuIsOpen
						? "rotate(180deg)"
						: "none",
				}),
				clearIndicator: (provided: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 10px",
					color: DARK.colors.textSecondary,
					cursor: "pointer",
					"&:hover": {
						color: "#f87171",
					},
				}),
				indicatorSeparator: () => ({ display: "none" }),
				input: (provided: any) => ({
					...provided,
					margin: "0px",
					padding: "0px",
					color: DARK.colors.white,
					fontFamily,
					fontSize: "13.5px",
				}),
				control: (provided: any, state: any) => ({
					...provided,
					minHeight: short ? "32px" : "42px",
					backgroundColor: disabled
						? "rgba(255, 255, 255, 0.03)"
						: DARK.colors.surface,
					borderRadius: "8px",
					cursor: disabled ? "not-allowed" : "pointer",
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease",
					borderColor: disabled
						? DARK.colors.border
						: error
						? "#f87171"
						: state.isFocused
						? DARK.colors.primary
						: "#4b5563",
					borderWidth: state.isFocused && !disabled ? "1.5px" : "1px",
					boxShadow: disabled
						? DARK.shadows.small
						: state.isFocused
						? error
							? "0 0 0 2px rgba(239, 68, 68, 0.2)"
							: "0 0 0 2px rgba(52, 119, 199, 0.2)"
						: "none",
					"&:hover": {
						borderColor: disabled
							? DARK.colors.border
							: error
							? "#f87171"
							: state.isFocused
							? DARK.colors.primary
							: "#6b7280",
					},
				}),
			}),
			optionRowStyle: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
			},
			optionTextStyle: {
				flex: 1,
			},
			onlineDotStyle: (onlineDotColor: string) => ({
				height: "7px",
				width: "7px",
				borderRadius: "50%",
				backgroundColor: onlineDotColor,
				boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.25)",
			}),
			singleValueRowStyle: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
			},
			singleValueDotStyle: (onlineDotColor: string) => ({
				height: "7px",
				width: "7px",
				borderRadius: "50%",
				backgroundColor: onlineDotColor,
			}),
			formControlStyle: (fontFamily?: string) => ({
				position: "relative" as const,
				fontFamily: `${fontFamily} !important`,
			}),
			inputLabelStyle: (
				disabled: boolean,
				error: boolean,
				fontFamily?: string,
			) => ({
				position: "static !important" as const,
				transform: "none !important",
				display: "inline-flex !important",
				alignItems: "center",
				gap: "4px",
				backgroundColor: "transparent !important",
				padding: "0 !important",
				marginBottom: "4px !important",
				fontSize: "13px !important",
				fontWeight: "600 !important",
				lineHeight: 1.4,
				fontFamily: `${fontFamily} !important`,
				color: `${
					disabled
						? DARK.colors.textDisabled
						: error
						? "#f87171"
						: DARK.colors.textSecondary
				} !important`,
				userSelect: "none" as const,
				transition: "color 0.15s ease",
			}),
			requiredAsteriskStyle: {
				color: DARK.colors.primary,
				fontSize: "13px",
				fontWeight: 700,
				lineHeight: 1,
				marginLeft: "2px",
			},
			helperTextStyle: (error: boolean, fontFamily?: string) => ({
				fontSize: "12px !important",
				fontWeight: "400 !important",
				fontFamily: `${fontFamily} !important`,
				margin: "4px 0 0 0 !important",
				padding: "0 !important",
				color: `${
					error ? "#f87171" : DARK.colors.textSecondary
				} !important`,
			}),
		},

		editable: {
			textPrimary: DARK.colors.white,
			textMuted: DARK.colors.textDisabled,
			bgHover: "rgba(255, 255, 255, 0.05)",
			borderHover: "#616161",
			borderFocus: DARK.colors.primary,
			accent: DARK.colors.primary,
			focusRing: "rgba(52, 119, 199, 0.25)",
			borderRadius: "6px",
			padding: "4px 8px",
			sectionStyle: (fontFamily?: string) => ({
				fontFamily: `${fontFamily} !important`,
				display: "inline-flex",
				width: "100%",
				minHeight: "36px",
				boxSizing: "border-box" as const,
			}),
			editContainerStyle: {
				width: "100%",
				display: "flex",
				alignItems: "center",
			},
			previewContainerStyle: {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "100%",
				minHeight: "36px",
				padding: "6px 10px",
				borderRadius: "8px",
				border: "1px dashed transparent",
				cursor: "pointer",
				transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
				boxSizing: "border-box" as const,
				backgroundColor: "transparent",
				"&:hover": {
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					borderColor: "#616161",
					"& .edit-pencil-icon": {
						opacity: 1,
						transform: "translateX(0)",
					},
				},
				"&:focus-visible": {
					outline: "none",
					borderColor: DARK.colors.primary,
					boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
				},
			},
			previewTextStyle: (isPlaceholder: boolean) => ({
				fontSize: "13.5px",
				fontWeight: 500,
				lineHeight: 1.4,
				color: isPlaceholder
					? DARK.colors.textDisabled
					: DARK.colors.white,
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				transition: "color 0.15s ease",
			}),
			pencilIconStyle: {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				opacity: 0,
				transform: "translateX(-4px)",
				color: DARK.colors.primary,
				fontSize: "12px",
				lineHeight: 1,
				marginLeft: "8px",
				userSelect: "none" as const,
				transition: "all 0.15s ease",
			},
		},

		expressionBuilder: {
			bgGroup: "#121212",
			bgRule: DARK.colors.surface,
			bgRuleGroup: "rgba(255, 255, 255, 0.03)",
			borderGroup: DARK.colors.border,
			borderRule: "#424242",
			borderRuleGroup: "#2a2a2a",
			borderTreeLine: "#555555",
			treeLineMuted: "rgba(255, 255, 255, 0.08)",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			inputBg: DARK.colors.surface,
			inputBorder: "#616161",
			inputBorderFocus: DARK.colors.primary,
			focusRing: "rgba(52, 119, 199, 0.25)",
			ruleShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
			accent: DARK.colors.primary,
			accentHover: "#2a62a6",
			conjActiveBg: DARK.colors.primary,
			conjActiveBorder: DARK.colors.primary,
			conjActiveText: "#ffffff",
			conjInactiveBg: "rgba(255, 255, 255, 0.05)",
			conjInactiveBorder: "#616161",
			conjInactiveText: DARK.colors.textSecondary,
			conjHoverBg: "rgba(255, 255, 255, 0.1)",
			deleteColor: "#f87171",
			deleteHoverBg: "rgba(244, 67, 54, 0.15)",
			errorBorder: "#f44336",
			errorText: "#ef5350",
			builderStyle: (fontFamily?: string) => ({
				".qb-drag-handler, .qb-draggable, .query-builder": {
					userSelect: "none" as const,
				},
				".rule--header:after": {
					content: "none",
					display: "table",
					clear: "both" as const,
				},
				".group--header, .group--footer": {
					display: "flex",
					alignItems: "center",
					paddingLeft: "8px",
					paddingRight: "8px",
					marginTop: "6px",
					marginBottom: "6px",
				},
				".query-builder": {
					overflow: "hidden",
					fontFamily:
						fontFamily || "Montserrat, -apple-system, sans-serif",
					fontSize: "13px",
					lineHeight: "1.3",
					color: DARK.colors.white,
				},
				".query-builder *, .query-builder *::before, .query-builder *::after":
					{
						boxSizing: "border-box" as const,
					},
				"body.qb-dragging .ant-tooltip": {
					display: "none",
				},
				".query-builder.qb-dragging": {
					cursor: "grabbing",
				},
				".query-builder.qb-dragging button": {
					pointerEvents: "none" as const,
				},
				".query-builder .rule--field-wrapper, .query-builder .rule--field--func, .query-builder .rule--func--wrapper, .query-builder .rule--func--args, .query-builder .rule--func--arg, .query-builder .rule--func--arg-value, .query-builder .rule--func--arg-value > .rule--widget, .query-builder .widget--func":
					{
						display: "contents",
					},
				".group": {
					backgroundColor: "#121212 !important",
					border: `1px solid ${DARK.colors.border} !important`,
					borderRadius: "10px !important",
					padding: "12px !important",
					transition:
						"background-color 0.2s ease, border-color 0.2s ease",
				},
				".rule-with-error .rule": {
					border: "1px solid #f44336 !important",
				},
				".rule--body--wrapper": {
					flex: 1,
					display: "flex",
					flexDirection: "column" as const,
				},
				".rule--error": {
					color: "#ef5350",
					fontSize: "11px",
					fontWeight: 500,
					marginBottom: "-4px",
					marginTop: "4px",
				},
				".group-or-rule": {
					borderRadius: "8px",
					position: "relative" as const,
				},
				".qb-draggable": {
					pointerEvents: "none" as const,
					position: "absolute" as const,
					opacity: "0.75",
					zIndex: 1000,
				},
				".qb-placeholder": {
					border: "1px dashed #555555",
					borderRadius: "6px",
				},
				".locked": {
					border: "1px dashed #f44336",
				},
				".group--children > .group-or-rule-container > .group-or-rule:before":
					{
						top: "-4px",
						borderWidth: "0 0 2px 2px",
					},
				".group--children > .group-or-rule-container > .group-or-rule::after":
					{
						top: "50%",
						borderWidth: "0 0 0 2px",
					},
				".group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after":
					{
						content: '""',
						position: "absolute" as const,
						left: "-14px",
						width: "14px",
						height: "calc(50% + 8px)",
						borderColor: "#555555",
						borderStyle: "solid",
						boxSizing: "border-box" as const,
					},
				".group--children.hide--conjs > .group-or-rule-container:first-of-type > .group-or-rule::before":
					{
						display: "none",
					},
				".group--children.hide--conjs > .group-or-rule-container:first-of-type > .group-or-rule::after":
					{
						borderRadius: "4px 0 0 0",
						borderWidth: "2px 0 0 2px",
					},
				".group--children.rule_group--children > .group-or-rule-container:first-of-type > .group-or-rule::before":
					{
						display: "none",
					},
				".group--children.rule_group--children > .group-or-rule-container:first-of-type > .group-or-rule::after":
					{
						borderRadius: "4px 0 0 0",
						borderWidth: "2px 0 0 2px",
					},
				".group--children > .group-or-rule-container:first-of-type > .group-or-rule::before":
					{
						top: "-12px",
						height: "calc(50% + 14px)",
					},
				".group--children > .group-or-rule-container:last-child > .group-or-rule::before":
					{
						borderRadius: "0 0 0 4px",
					},
				".group--children > .group-or-rule-container:last-child > .group-or-rule::after":
					{
						display: "none",
					},
				".group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after":
					{
						borderColor: "rgba(255, 255, 255, 0.08)",
					},
				".qb-draggable::before, .qb-draggable::after": {
					display: "none",
				},
				".qb-drag-handler": {
					cursor: "grab",
					color: DARK.colors.textSecondary,
					"&:active": {
						cursor: "grabbing",
					},
				},
				".group--drag-handler": {
					marginRight: "8px",
					position: "relative" as const,
					top: "1px",
				},
				".group--conjunctions .group--drag-handler": {
					marginLeft: "10px",
				},
				".group--conjunctions.hide--conj": {
					opacity: "0.3",
				},
				".group--actions": {
					marginLeft: "10px",
					flex: 1,
					display: "flex",
					alignItems: "center",
					gap: "8px",
				},
				".group--actions--tl, .group--actions--bl": {
					justifyContent: "flex-start",
				},
				".group--actions--tl": {
					marginLeft: "16px",
				},
				".group--actions--tc, .group--actions--bc": {
					justifyContent: "center",
				},
				".group--actions--tr, .group--actions--br": {
					justifyContent: "flex-end",
				},
				".group--actions button": {
					fontFamily: "inherit",
					fontSize: "12px",
					fontWeight: 600,
					padding: "4px 10px",
					borderRadius: "6px",
					cursor: "pointer",
					transition: "all 0.15s ease",
					border: "1px solid #424242",
					backgroundColor: DARK.colors.surface,
					color: DARK.colors.white,
					"&:hover": {
						backgroundColor: "rgba(255, 255, 255, 0.05)",
						borderColor: DARK.colors.primary,
						color: DARK.colors.primary,
					},
				},
				".group--actions .action--DELETE, .rule--header .action--DELETE":
					{
						backgroundColor: "transparent !important",
						borderColor: "transparent !important",
						color: "#f87171 !important",
						borderRadius: "6px",
						padding: "4px 8px",
						"&:hover": {
							backgroundColor:
								"rgba(244, 67, 54, 0.15) !important",
						},
					},
				".case_group": {
					borderWidth: "2px",
				},
				".switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after":
					{
						height: "calc(50% + 12px)",
					},
				".case_group--body": {
					display: "flex",
					flexDirection: "row" as const,
					marginTop: "10px",
					marginBottom: "10px",
				},
				".case_group--body .case_group--children": {
					flex: "auto",
					marginTop: "0 !important",
					marginBottom: "0 !important",
				},
				".case_group--body .case_group--value": {
					marginTop: 0,
					marginBottom: 0,
					marginRight: "10px",
				},
				".rule_group": {
					backgroundColor: "rgba(255, 255, 255, 0.03) !important",
					border: "1px solid #2a2a2a !important",
					borderRadius: "8px",
					display: "flex",
					paddingLeft: "10px",
				},
				".rule_group .group--drag-handler, .rule_group .group--field, .rule_group .group--actions":
					{
						alignSelf: "center",
					},
				".rule_group .group--actions": {
					flex: 0,
				},
				".rule_group .rule_group--children": {
					flex: 1,
					marginTop: "5px",
					marginBottom: "5px",
					paddingLeft: "18px",
				},
				".rule_group .rule_group--children .group-or-rule-container": {
					marginBottom: "5px",
					marginTop: "5px",
					paddingRight: "5px",
				},
				".rule_group .rule_group--children.one--child": {
					paddingLeft: "10px",
				},
				".rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::after":
					{
						left: "-10px",
						width: "10px",
						height: "calc(50% + 8px)",
					},
				".group--header.hide--drag.with--conjs > .group--field--count--rule":
					{
						marginLeft: "20px",
					},
				".rule": {
					backgroundColor: `${DARK.colors.surface} !important`,
					border: "1px solid #424242 !important",
					borderRadius: "8px !important",
					padding: "8px 12px",
					flex: 1,
					display: "flex",
					alignItems: "center",
					boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
					transition:
						"background-color 0.2s ease, border-color 0.2s ease",
				},
				".rule select, .rule input, .rule button": {
					fontFamily: "inherit",
					fontSize: "12.5px",
					padding: "6px 10px",
					borderRadius: "6px",
					backgroundColor: DARK.colors.surface,
					color: DARK.colors.white,
					border: "1px solid #616161",
					outline: "none",
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease",
					"&:focus": {
						borderColor: DARK.colors.primary,
						boxShadow: "0 0 0 2px rgba(52, 119, 199, 0.25)",
					},
				},
				".rule--header": {
					marginLeft: "auto",
					display: "flex",
					alignItems: "center",
					paddingLeft: "10px",
				},
				".rule--drag-handler": {
					display: "flex",
					alignItems: "center",
					marginRight: "8px",
				},
				".rule--field > select": {
					minWidth: "140px",
				},
				".rule--operator > select": {
					minWidth: "90px",
				},
				".rule--field, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget":
					{
						display: "inline-block",
					},
				".mui .widget--sep, .mui .operator--options--sep, .mui .rule--func--bracket-before, .mui .rule--func--bracket-after, .mui .rule--func--arg-sep":
					{
						verticalAlign: "bottom",
						alignSelf: "flex-end",
						marginBottom: "8px",
					},
				".mui .rule--operator-options, .mui .widget--valuesrc": {
					verticalAlign: "bottom",
				},
				".rule--operator, .widget--widget, .widget--valuesrc, .widget--sep":
					{
						marginLeft: "8px",
					},
				".widget--valuesrc": {
					marginRight: "-8px",
				},
				".widget--valuesrc span i": {
					transform: "rotate(90deg)",
				},
				".operator--options--sep": {
					marginRight: "8px",
				},
				"div.tooltip-inner": {
					maxWidth: "500px",
				},
				".rule--field label, .group--field label, .rule--operator label, .widget--widget label":
					{
						display: "block",
						fontWeight: 600,
						fontSize: "11.5px",
						color: DARK.colors.textSecondary,
						marginBottom: "2px",
					},
				".conjunction": {
					display: "inline-block",
				},
				".conjunction label": {
					display: "inline-block",
					border: "1px solid #616161",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					color: DARK.colors.textSecondary,
					cursor: "pointer",
					textTransform: "uppercase" as const,
					padding: "4px 10px",
					fontSize: "11.5px",
					fontWeight: 700,
					letterSpacing: "0.04em",
					transition: "all 0.15s ease",
					userSelect: "none" as const,
				},
				".conjunction input": {
					display: "none",
				},
				'.conjunction [data-state="active"] label': {
					backgroundColor: `${DARK.colors.primary} !important`,
					borderColor: `${DARK.colors.primary} !important`,
					color: "#ffffff !important",
				},
				'.conjunction [data-state="inactive"] label:hover': {
					backgroundColor: "rgba(255, 255, 255, 0.1)",
					color: DARK.colors.white,
				},
				".conjunction:first-of-type label": {
					borderRadius: "6px 0 0 6px",
				},
				".conjunction:last-child label": {
					borderRadius: "0 6px 6px 0",
					borderLeft: "none",
				},
				".conjunction:first-of-type:last-child label": {
					borderRadius: "6px",
					borderLeft: "1px solid #616161",
				},
				".rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep":
					{
						display: "inline-block",
					},
				".rule--func--bracket-before, .rule--func--bracket-after": {
					marginLeft: "3px",
					marginRight: "3px",
					color: DARK.colors.textSecondary,
					fontWeight: 600,
				},
				".rule--func--bracket-before": {
					marginLeft: "5px",
				},
				".rule--func--arg-value > .rule--widget": {
					marginLeft: "-10px",
				},
				".rule--func--arg-sep": {
					marginLeft: "3px",
					marginRight: "6px",
					color: DARK.colors.textSecondary,
				},
				".rule--func--arg-label-sep": {
					marginLeft: "1px",
					marginRight: "6px",
				},
				".group-or-rule-container": {
					paddingRight: "8px",
					marginTop: "8px",
					marginBottom: "8px",
				},
				".group-or-rule-container:first-of-type": {
					marginTop: "0px !important",
				},
				".group-or-rule-container:last-child": {
					marginBottom: "0px !important",
				},
				".group--children": {
					paddingLeft: "24px",
					marginTop: "8px",
					marginBottom: "8px",
					paddingRight: "8px",
				},
				".rule--body.can--shrink--value": {
					display: "flex",
					alignItems: "center",
				},
				".rule--body.can--shrink--value .rule--value": {
					flex: 1,
				},
				".rule--body.can--shrink--value .rule--value > .rule--widget": {
					display: "flex",
				},
				".rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget":
					{
						flex: 1,
					},
				".rule--body.can--shrink--value .rule--value > .rule--widget > .widget--valuesrc":
					{
						display: "flex",
						alignItems: "center",
					},
				".rule--value > .rule--widget > .widget--valuesrc .anticon": {
					height: "100%",
				},
				".rule--value > .rule--widget > .widget--valuesrc .anticon svg":
					{
						height: "100%",
					},
			}),
		},

		fieldDragAndDrop: {
			disabledOpacity: 0.75,
			bgDefault: DARK.colors.surface,
			bgGreyed: "#121212",
			bgHover: "rgba(255, 255, 255, 0.05)",
			borderDefault: "#424242",
			borderSelected: DARK.colors.primary,
			borderHover: "#757575",
			textPrimary: DARK.colors.white,
			textMuted: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textDisabled,
			attributeHoverBg: "rgba(52, 119, 199, 0.2)",
			shadowSm: "0 1px 3px rgba(0, 0, 0, 0.45)",
			shadowSelected: "0 4px 12px rgba(0, 0, 0, 0.65)",
			containerStyle: (fontFamily?: string) => ({
				display: "flex",
				flexWrap: "wrap" as const,
				boxSizing: "border-box" as const,
				fontFamily,
				width: "100%",
				"& .greyed, & [data-greyed='true'], & [disabled]": {
					opacity: 0.75,
				},
			}),
			itemRootStyle: ({
				backgroundColor,
				borderColor,
				textColor,
				width,
				height,
				isSelected,
				disabled,
				fontFamily,
			}: any) => ({
				borderRadius: "8px",
				backgroundColor,
				border: `1px solid ${borderColor}`,
				fontFamily,
				color: textColor,
				margin: "6px",
				display: "inline-flex",
				flexFlow: "row nowrap",
				alignItems: "center",
				width,
				height,
				boxSizing: "border-box" as const,
				boxShadow: isSelected
					? "0 4px 12px rgba(0, 0, 0, 0.65)"
					: "0 1px 3px rgba(0, 0, 0, 0.45)",
				transition:
					"background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
				cursor: disabled ? "not-allowed" : "default",
				position: "relative" as const,
				overflow: "hidden",
			}),
			dragIconStyle: (
				greyed: boolean,
				textDisabled: string,
				textMuted: string,
			) => ({
				cursor: "grab",
				marginLeft: "8px",
				marginRight: "4px",
				color: greyed ? textDisabled : textMuted,
				display: "flex",
				alignItems: "center",
				flexShrink: 0,
			}),
			labelContainerStyle: (
				width: string,
				height: string,
				disabled: boolean,
			) => ({
				lineHeight: height,
				textAlign: "left" as const,
				paddingLeft: `${disabled ? 10 : 2}px`,
				width: `calc(${width} - 32px)`,
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "flex",
				alignItems: "center",
				flex: 1,
				minWidth: 0,
			}),
			labelTextStyle: {
				fontSize: "13px",
				fontWeight: 500,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap" as const,
				color: "inherit",
			},
			attrActionStyle: (
				isAttrHovered: boolean,
				textPrimary: string,
				textMuted: string,
				attributeHoverBg: string,
			) => ({
				cursor: "pointer",
				borderRadius: "0 8px 8px 0",
				padding: "0 6px",
				height: "100%",
				color: isAttrHovered ? textPrimary : textMuted,
				backgroundColor: isAttrHovered
					? attributeHoverBg
					: "transparent",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexShrink: 0,
				transition: "background-color 0.15s ease, color 0.15s ease",
			}),
		},

		filePreview: {
			bgSurface: DARK.colors.surface,
			bgHover: "rgba(255, 255, 255, 0.05)",
			border: "#424242",
			borderHover: DARK.colors.primary,
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			accentColor: DARK.colors.primary,
			iconBg: "rgba(52, 119, 199, 0.18)",
			iconBorder: "rgba(52, 119, 199, 0.35)",
			dangerColor: "#ef4444",
			successColor: "#10b981",
			overlayBg: "rgba(0, 0, 0, 0.75)",
			shadowSm: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
			shadowHover: "0 4px 12px 0 rgba(0, 0, 0, 0.6)",
			containerStyle: {
				display: "flex",
				flexWrap: "wrap" as const,
				gap: "4px",
			},
			iframeStyle: {
				border: "none",
			},
			cardStyle: (isHovered: boolean, fontFamily?: string) => ({
				display: "inline-flex",
				flexDirection: "column" as const,
				alignItems: "center",
				marginRight: "10px",
				marginBottom: "10px",
				width: "130px",
				height: "110px",
				backgroundColor: isHovered
					? "rgba(255, 255, 255, 0.05)"
					: DARK.colors.surface,
				border: `1px solid ${
					isHovered ? DARK.colors.primary : "#424242"
				}`,
				borderRadius: "10px",
				boxShadow: isHovered
					? "0 4px 12px 0 rgba(0, 0, 0, 0.6)"
					: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
				position: "relative" as const,
				boxSizing: "border-box" as const,
				overflow: "hidden",
				fontFamily,
				transform: isHovered ? "translateY(-2px)" : "translateY(0)",
				transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
				cursor: "default",
			}),
			cardInnerStyle: {
				display: "flex",
				flexDirection: "column" as const,
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				padding: "10px",
				boxSizing: "border-box" as const,
			},
			iconBoxStyle: (
				iconBg: string,
				iconBorder: string,
				accentColor: string,
			) => ({
				marginBottom: "6px",
				width: "42px",
				height: "42px",
				borderRadius: "10px",
				backgroundColor: iconBg,
				border: `1px solid ${iconBorder}`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
				color: accentColor,
			}),
			fileNameStyle: (textColor: string) => ({
				width: "100%",
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				fontSize: "12px",
				fontWeight: 500,
				textAlign: "center" as const,
				color: textColor,
			}),
			overlayStyle: (isHovered: boolean) => ({
				position: "absolute" as const,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.75)",
				backdropFilter: "blur(4px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "8px",
				opacity: isHovered ? 1 : 0,
				pointerEvents: isHovered
					? ("auto" as const)
					: ("none" as const),
				transition: "opacity 0.2s ease",
				borderRadius: "10px",
			}),
			actionBtnStyle: (btnColor: string, isHovered: boolean) => ({
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				backgroundColor: isHovered
					? btnColor
					: "rgba(255, 255, 255, 0.15)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				color: "#FFFFFF",
				transition: "background-color 0.15s ease",
			}),
		},

		fileSystem: {
			bgSurface: DARK.colors.surface,
			bgHover: "rgba(255, 255, 255, 0.04)",
			borderSubtle: "#424242",
			borderHover: "#757575",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			folderColor: "#F59E0B",
			fileColor: DARK.colors.primary,
			shadowSm: "0 1px 3px rgba(0, 0, 0, 0.45)",
			dangerColor: "#f87171",
			containerStyle: (
				height?: string,
				width?: string,
				fontFamily?: string,
			) => ({
				height,
				width,
				overflow: "hidden",
				display: "flex",
				flexDirection: "column" as const,
				backgroundColor: DARK.colors.surface,
				border: "1px solid #424242",
				borderRadius: "12px",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
				fontFamily,
				boxSizing: "border-box" as const,
				transition:
					"background-color 0.2s ease, border-color 0.2s ease",
			}),
			headerLeftStyle: {
				display: "flex",
				alignItems: "center",
				gap: "10px",
			},
			headerTitleStyle: (textColor: string) => ({
				fontSize: "14px",
				fontWeight: 600,
				color: textColor,
			}),
			headerRightStyle: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
			},
			listContainerStyle: {
				flex: 1,
				overflowY: "auto" as const,
				padding: "4px 0",
			},
			rowStyle: (isHovered: boolean) => ({
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 16px",
				borderBottom: "1px solid #424242",
				backgroundColor: isHovered
					? "rgba(255, 255, 255, 0.04)"
					: "transparent",
				transition: "background-color 0.15s ease",
			}),
			itemClickableStyle: {
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				minWidth: 0,
				flex: 1,
			},
			itemIconWrapperStyle: (color: string) => ({
				marginRight: "10px",
				display: "flex",
				alignItems: "center",
				color,
			}),
			itemNameStyle: (textColor: string) => ({
				fontSize: "13.5px",
				fontWeight: 500,
				color: textColor,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap" as const,
			}),
			itemActionsStyle: {
				display: "flex",
				alignItems: "center",
				gap: "6px",
				flexShrink: 0,
				marginLeft: "8px",
			},
			actionIconStyle: (color: string) => ({
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
				padding: "4px",
				borderRadius: "4px",
				color,
			}),
			dialogContentStyle: {
				padding: "24px",
				display: "flex",
				flexDirection: "column" as const,
				gap: "16px",
			},
			dialogActionsStyle: {
				display: "flex",
				justifyContent: "flex-end",
				gap: "10px",
			},
		},

		fileUpload: {
			bgSurface: DARK.colors.surface,
			bgHover: "rgba(255, 255, 255, 0.05)",
			borderDefault: "#424242",
			borderHover: DARK.colors.primary,
			borderError: "#ef4444",
			bgError: "rgba(239, 68, 68, 0.12)",
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textError: "#f87171",
			accentColor: DARK.colors.primary,
			iconBg: "rgba(52, 119, 199, 0.18)",
			iconBorder: "rgba(52, 119, 199, 0.35)",
			dangerColor: "#ef4444",
			successColor: "#10b981",
			overlayBg: "rgba(0, 0, 0, 0.75)",
			shadowSm: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
			shadowHover: "0 4px 12px 0 rgba(0, 0, 0, 0.6)",
			iframeStyle: {
				border: "none",
			},
			rejectedIconWrapperStyle: (textColor: string) => ({
				marginBottom: "6px",
				color: textColor,
			}),
			dropzonePrimaryTextStyle: (
				error: boolean,
				textError: string,
				textPrimary: string,
			) => ({
				color: error ? textError : textPrimary,
				fontSize: "13.5px",
				fontWeight: 500,
			}),
			dropzoneBrowseTextStyle: (accentColor: string) => ({
				color: accentColor,
				fontWeight: 600,
			}),
			rootContainerStyle: (flex: boolean, fontFamily?: string) => ({
				display: flex ? "flex" : "block",
				alignItems: flex ? "center" : "unset",
				gap: flex ? "20px" : "unset",
				fontFamily,
			}),
			dropzoneInnerStyle: {
				display: "flex",
				flexDirection: "column" as const,
				alignItems: "center",
				gap: "8px",
			},
			dropzoneIconWrapperStyle: (
				iconBg: string,
				accentColor: string,
			) => ({
				width: "40px",
				height: "40px",
				borderRadius: "50%",
				backgroundColor: iconBg,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: accentColor,
			}),
			filesContainerStyle: (hasFiles: boolean) => ({
				display: "flex",
				flexDirection: "row" as const,
				flexWrap: "wrap" as const,
				marginTop: hasFiles ? "12px" : "0px",
			}),
			cardStyle: (isHovered: boolean, fontFamily?: string) => ({
				display: "inline-flex",
				flexDirection: "column" as const,
				alignItems: "center",
				marginRight: "10px",
				marginBottom: "10px",
				width: "130px",
				height: "110px",
				backgroundColor: isHovered
					? "rgba(255, 255, 255, 0.05)"
					: DARK.colors.surface,
				border: `1px solid ${
					isHovered ? DARK.colors.primary : "#424242"
				}`,
				borderRadius: "10px",
				boxShadow: isHovered
					? "0 4px 12px 0 rgba(0, 0, 0, 0.6)"
					: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
				position: "relative" as const,
				boxSizing: "border-box" as const,
				overflow: "hidden",
				fontFamily,
				transform: isHovered ? "translateY(-2px)" : "translateY(0)",
				transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
				cursor: "default",
			}),
			cardInnerStyle: {
				display: "flex",
				flexDirection: "column" as const,
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				padding: "10px",
				boxSizing: "border-box" as const,
			},
			iconContainerStyle: (
				iconBg: string,
				iconBorder: string,
				accentColor: string,
			) => ({
				marginBottom: "6px",
				width: "40px",
				height: "40px",
				borderRadius: "8px",
				backgroundColor: iconBg,
				border: `1px solid ${iconBorder}`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: accentColor,
			}),
			fileNameStyle: (textColor: string) => ({
				width: "100%",
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				fontSize: "12px",
				fontWeight: 500,
				textAlign: "center" as const,
				color: textColor,
			}),
			fileSizeStyle: (textColor: string) => ({
				width: "100%",
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				fontSize: "10px",
				textAlign: "center" as const,
				color: textColor,
				marginTop: "2px",
			}),
			rejectedCardStyle: (fontFamily?: string) => ({
				display: "inline-flex",
				flexDirection: "column" as const,
				alignItems: "center",
				marginRight: "10px",
				marginBottom: "10px",
				width: "130px",
				height: "110px",
				backgroundColor: "rgba(239, 68, 68, 0.12)",
				border: "1px solid #ef4444",
				borderRadius: "10px",
				position: "relative" as const,
				boxSizing: "border-box" as const,
				overflow: "hidden",
				fontFamily,
			}),
			overlayStyle: (isHovered: boolean) => ({
				position: "absolute" as const,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.75)",
				backdropFilter: "blur(4px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "8px",
				opacity: isHovered ? 1 : 0,
				pointerEvents: isHovered
					? ("auto" as const)
					: ("none" as const),
				transition: "opacity 0.2s ease",
				borderRadius: "10px",
			}),
			actionBtnStyle: (btnColor: string, isHovered: boolean) => ({
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				backgroundColor: isHovered
					? btnColor
					: "rgba(255, 255, 255, 0.15)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				color: "#FFFFFF",
				transition: "background-color 0.15s ease",
			}),
			dropzoneStyle: (
				flex: boolean,
				error: boolean,
				disabled: boolean,
			) => ({
				width: flex ? "300px" : "100%",
				borderRadius: "10px",
				backgroundColor: DARK.colors.surface,
				border: `1.5px dashed ${error ? "#ef4444" : "#424242"}`,
				padding: "24px 16px",
				textAlign: "center" as const,
				boxSizing: "border-box" as const,
				boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
				transition: "all 0.2s ease",
				cursor: disabled ? "not-allowed" : "pointer",
				"&:hover": {
					borderColor: error
						? "#ef4444"
						: disabled
						? "#424242"
						: DARK.colors.primary,
					backgroundColor: disabled
						? DARK.colors.surface
						: "rgba(255, 255, 255, 0.05)",
				},
			}),
		},

		widget: {
			bgSurface: DARK.colors.surface,
			bgHeader: "#141414",
			bgSecondary: "#000000",
			border: "#2d2d2d",
			borderHover: "#444444",
			borderFocus: DARK.colors.primary,
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textDisabled,
			accent: DARK.colors.primary,
			accentHover: DARK.colors.primaryLight,
			shadowSm: "0 1px 3px rgba(0, 0, 0, 0.4)",
			shadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
			shadowHover: "0 4px 14px rgba(0, 0, 0, 0.65)",
			receiverShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
			receiverShadowHover: "0 6px 24px -2px rgba(0, 0, 0, 0.8)",
			senderShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
			senderShadowHover: "0 4px 12px rgba(0, 0, 0, 0.6)",
			senderHoverBg: "rgba(52, 119, 199, 0.15)",
			senderHoverBorder: DARK.colors.primary,
			rotatedIconStyle: {
				transform: "rotate(89deg)",
			},
			senderContainerStyle: {
				display: "flex",
				flexDirection: "column" as const,
				gap: "8px",
			},
			senderItemStyle: (fontFamily?: string) => ({
				borderRadius: "10px",
				fontFamily,
				color: DARK.colors.white,
				width: "100%",
				display: "flex",
				alignItems: "center",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
				padding: "0 12px",
				height: "44px",
				boxSizing: "border-box" as const,
				backgroundColor: DARK.colors.surface,
				border: "1px solid #2d2d2d",
				cursor: "grab",
				transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					backgroundColor: "rgba(52, 119, 199, 0.15)",
					borderColor: DARK.colors.primary,
					transform: "translateY(-1px)",
				},
				"&:active": {
					cursor: "grabbing",
					transform: "scale(0.99)",
				},
			}),
			senderDragHandleStyle: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingRight: "10px",
				color: "inherit",
				opacity: 0.65,
			},
			senderTitleStyle: {
				flex: 1,
				minWidth: 0,
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
				fontSize: "13.5px",
				fontWeight: 500,
			},
			senderIconWrapperStyle: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginLeft: "8px",
				flexShrink: 0,
			},
			gridStyle: {
				minHeight: "100%",
			},
			receiverContainerStyle: {
				width: "100%",
				minHeight: "100px",
				height: "100%",
				paddingBottom: "100px",
			},
			receiverItemStyle: {
				border: "1px solid #2d2d2d",
				borderRadius: "12px",
				backgroundColor: DARK.colors.surface,
				boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative" as const,
				overflow: "hidden",
				transition: "box-shadow 0.2s ease, border-color 0.2s ease",
				"&:hover": {
					borderColor: DARK.colors.primary,
					boxShadow: "0 6px 24px -2px rgba(0, 0, 0, 0.8)",
				},
			},
			receiverCloseBtnStyle: {
				margin: "8px",
				cursor: "pointer",
				fontSize: "16px",
				position: "absolute" as const,
				top: 0,
				right: 0,
				zIndex: 10,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				color: "#94a3b8",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "rgba(239, 68, 68, 0.25)",
					color: "#f87171",
				},
			},
			receiverEditBtnStyle: {
				margin: "8px",
				cursor: "pointer",
				fontSize: "15px",
				position: "absolute" as const,
				top: 0,
				left: 0,
				zIndex: 10,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				color: "#94a3b8",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					color: DARK.colors.primary,
				},
			},
			receiverTitleStyle: {
				flexGrow: 2,
				textAlign: "center" as const,
				fontSize: "14px",
				fontWeight: 600,
				padding: "0 36px",
				whiteSpace: "nowrap" as const,
				overflow: "hidden",
				textOverflow: "ellipsis",
			},
			displayCardStyle: (fontFamily?: string) => ({
				border: "1px solid #2d2d2d",
				borderRadius: "12px",
				backgroundColor: DARK.colors.surface,
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
				overflow: "hidden",
				fontFamily: `${fontFamily} !important`,
				transition: "all 0.2s ease",
				display: "flex",
				flexDirection: "column" as const,
				"& > *": {
					backgroundColor: "transparent !important",
					flex: 1,
					width: "100%",
					height: "100%",
				},
				"&:hover": {
					borderColor: "#444444",
					boxShadow: "0 4px 14px rgba(0, 0, 0, 0.65)",
				},
			}),
			dateRangePaddingStyle: {
				padding: "10px",
			},
			iframeContentStyle: (hasDateRangeLabel: boolean) => ({
				height: hasDateRangeLabel
					? "calc(100% - 75px)"
					: "calc(100% - 50px)",
				padding: "5px",
			}),
			iframeHeaderStyle: {
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#000000",
				padding: "10px",
				borderRadius: "5px",
			},
			iframeTitleGroupStyle: {
				display: "flex",
				flexDirection: "column" as const,
				justifyContent: "center",
				gap: "5px",
			},
			iframeTitleStyle: {
				color: DARK.colors.white,
			},
			iframeSubTitleStyle: {
				color: DARK.colors.white,
			},
			iframeFullScreenBtnStyle: {
				cursor: "pointer",
				color: DARK.colors.white,
			},
			aggregateContainerStyle: {
				textAlign: "center" as const,
				height: "100%",
				position: "relative" as const,
				display: "flex",
				flexDirection: "column" as const,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: DARK.colors.surface,
				borderRadius: "5px",
			},
			aggregateDateRangeWrapperStyle: {
				position: "absolute" as const,
				right: "5px",
				top: "5px",
			},
			aggregateContentStyle: {
				paddingTop: "18px",
			},
			pointerCursorStyle: {
				cursor: "pointer",
			},
			aggregateTextStyle: {
				color: DARK.colors.white,
			},
			chartFlexWrapperStyle: {
				flex: 1,
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				display: "flex",
				flexDirection: "column" as const,
				overflow: "hidden",
			},
			chartContainerStyle: {
				flex: 1,
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				display: "flex",
				overflow: "hidden",
			},
			chartLoaderStyle: {
				flex: 1,
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minWidth: 0,
				minHeight: 0,
			},
			fullscreenContainerStyle: {
				display: "flex",
				flexDirection: "column" as const,
				height: "100%",
				width: "100%",
				minHeight: 0,
				backgroundColor: DARK.colors.surface,
				boxSizing: "border-box" as const,
				overflow: "hidden",
			},
			fullscreenHeaderWrapperStyle: {
				flexShrink: 0,
				width: "100%",
			},
			fullscreenHeaderInnerStyle: {
				padding: "14px 18px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#141414",
				borderBottom: `1px solid ${DARK.colors.border}`,
				boxSizing: "border-box" as const,
			},
			cardContainerStyle: (fontFamily?: string) => ({
				height: "100%",
				width: "100%",
				minHeight: 0,
				minWidth: 0,
				display: "flex",
				flexDirection: "column" as const,
				backgroundColor: DARK.colors.surface,
				border: `1px solid ${DARK.colors.border}`,
				borderRadius: "12px",
				overflow: "hidden",
				boxSizing: "border-box" as const,
				boxShadow: DARK.shadows.small,
				fontFamily,
			}),
			cardHeaderStyle: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "#141414",
				padding: "14px 18px",
				borderBottom: `1px solid ${DARK.colors.border}`,
				flexShrink: 0,
			},
			headerTitleGroupStyle: {
				display: "flex",
				flexDirection: "column" as const,
				justifyContent: "center",
				gap: "3px",
				minWidth: 0,
			},
			headerTitleStyle: (textColor: string, fontFamily?: string) => ({
				fontWeight: 600,
				fontSize: "14px",
				color: textColor,
				letterSpacing: "-0.01em",
				lineHeight: 1.2,
				fontFamily,
			}),
			headerSubtitleStyle: (textColor: string, fontFamily?: string) => ({
				fontWeight: 400,
				fontSize: "11.5px",
				color: textColor,
				lineHeight: 1.2,
				fontFamily,
			}),
			fullscreenHeaderSubtitleStyle: (
				textColor: string,
				fontFamily?: string,
			) => ({
				fontWeight: 500,
				fontSize: "13px",
				color: textColor,
				lineHeight: 1.2,
				fontFamily,
			}),
			headerActionsStyle: {
				display: "flex",
				gap: "10px",
				alignItems: "center",
				flexShrink: 0,
			},
			fullscreenBtnStyle: {
				cursor: "pointer",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "30px",
				height: "30px",
				borderRadius: "8px",
				color: DARK.colors.textSecondary,
				backgroundColor: DARK.colors.surface,
				border: `1px solid ${DARK.colors.border}`,
				boxShadow: DARK.shadows.small,
				transition: "all 0.15s ease",
			},
			iconColor: "#94a3b8",
			iconBg: "rgba(255, 255, 255, 0.05)",
			iconBorder: "#424242",
			borderRadius: "12px",
			placeholderBg: DARK.colors.primary,
			resizeHandleColor: "rgba(255, 255, 255, 0.4)",
			chartColors: [
				"#38bdf8",
				"#818cf8",
				"#4ade80",
				"#fbbf24",
				"#a78bfa",
				"#f472b6",
				"#22d3ee",
				"#94a3b8",
			],
			chartAxisLine: "#373737",
			chartGridLineX: "rgba(255, 255, 255, 0.04)",
			chartGridLineY: "rgba(255, 255, 255, 0.06)",
			chartTooltipBg: "#1e1e1e",
			chartTooltipBorder: "#373737",
			chartTooltipShadow: "rgba(0, 0, 0, 0.6)",
			chartLegendText: "#ffffff",
			chartLegendHover: "#70b5f9",
			gridLayoutStyle: {
				width: "100%",
				".react-grid-layout": {
					position: "relative" as const,
					transition: "height 200ms ease",
				},
				".react-grid-item": {
					transition: "all 200ms ease",
					transitionProperty: "left, top",
				},
				".react-grid-item img": {
					pointerEvents: "none" as const,
					userSelect: "none" as const,
				},
				".react-grid-item .cssTransforms": {
					transitionProperty: "transform",
				},
				".react-grid-item.resizing": {
					zIndex: 1,
					willChange: "width, height",
				},
				".react-grid-item.react-draggable-dragging": {
					transition: "none",
					zIndex: 3,
					willChange: "transform",
				},
				".react-grid-item.dropping": {
					visibility: "hidden" as const,
				},
				".react-grid-item .react-grid-placeholder": {
					background: DARK.colors.primary,
					opacity: "0.2",
					transitionDuration: "100ms",
					zIndex: 2,
					userSelect: "none" as const,
				},
				".react-grid-item > .react-resizable-handle": {
					position: "absolute" as const,
					width: "20px",
					height: "20px",
				},
				".react-grid-item > .react-resizable-handle::after": {
					content: '""',
					position: "absolute" as const,
					right: "3px",
					bottom: "3px",
					width: "5px",
					height: "5px",
					borderRight: "2px solid rgba(255, 255, 255, 0.4)",
					borderBottom: "2px solid rgba(255, 255, 255, 0.4)",
				},
				".react-resizable-hide > .react-resizable-handle": {
					display: "none",
				},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-sw":
					{
						bottom: "3px",
						left: "3px",
						cursor: "sw-resize",
						transform: "rotate(90deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-se":
					{
						bottom: "3px",
						right: "3px",
						cursor: "se-resize",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-nw":
					{
						top: "3px",
						left: "3px",
						cursor: "nw-resize",
						transform: "rotate(180deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-ne":
					{
						top: "3px",
						right: "3px",
						cursor: "ne-resize",
						transform: "rotate(270deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-w":
					{
						top: "50%",
						marginTop: "-10px",
						cursor: "ew-resize",
						left: "3px",
						transform: "rotate(135deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-e":
					{
						top: "50%",
						marginTop: "-10px",
						cursor: "ew-resize",
						right: "3px",
						transform: "rotate(315deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-n":
					{
						left: "50%",
						marginLeft: "-10px",
						cursor: "ns-resize",
						top: "3px",
						transform: "rotate(225deg)",
					},
				".react-grid-item > .react-resizable-handle.react-resizable-handle-s":
					{
						left: "50%",
						marginLeft: "-10px",
						cursor: "ns-resize",
						bottom: "3px",
						transform: "rotate(45deg)",
					},
			},
			chartMarkerBorder: "#1e1e1e",
			chartConnectorColor: "#555555",
			chartPieBorder: "#1e1e1e",
			chartDataLabel: "#bbbbbb",
		},

		iconButton: {
			bgDefault: DARK.colors.surface,
			bgHover: "rgba(52, 119, 199, 0.18)",
			bgActive: "rgba(52, 119, 199, 0.28)",
			badgeBg: "rgba(255, 255, 255, 0.08)",
			badgeBgActive: "rgba(52, 119, 199, 0.28)",
			border: DARK.colors.border,
			borderHover: DARK.colors.primary,
			borderActive: DARK.colors.primary,
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textActive: DARK.colors.primary,
			textDisabled: DARK.colors.textDisabled,
			primary: DARK.colors.primary,
			shadow: DARK.shadows.card,
			fontFamily: DARK.fontFamily,
			sizes: {
				small: {
					padding: "4px 8px",
					iconButtonPadding: "6px",
					fontSize: "12px",
					badgeFontSize: "11px",
					iconSize: "15px",
					gap: "6px",
					minHeight: "32px",
					borderRadius: "8px",
				},
				medium: {
					padding: "5px 12px",
					iconButtonPadding: "8px",
					fontSize: "13px",
					badgeFontSize: "11.5px",
					iconSize: "17px",
					gap: "8px",
					minHeight: "36px",
					borderRadius: "10px",
				},
				large: {
					padding: "7px 14px",
					iconButtonPadding: "10px",
					fontSize: "14px",
					badgeFontSize: "12.5px",
					iconSize: "20px",
					gap: "10px",
					minHeight: "44px",
					borderRadius: "12px",
				},
			},
			buttonWithLabelStyle: (
				sizeObj: any,
				active: boolean,
				disabled: boolean,
				fontFamily?: string,
			) => ({
				display: "inline-flex",
				alignItems: "center",
				gap: sizeObj.gap,
				fontFamily: `${fontFamily || DARK.fontFamily} !important`,
				fontSize: sizeObj.fontSize,
				fontWeight: 500,
				minHeight: sizeObj.minHeight,
				padding: sizeObj.padding,
				borderRadius: sizeObj.borderRadius,
				border: `1px solid ${
					active ? DARK.colors.primary : DARK.colors.border
				}`,
				backgroundColor: active
					? "rgba(52, 119, 199, 0.28)"
					: DARK.colors.surface,
				color: disabled
					? DARK.colors.textDisabled
					: active
					? DARK.colors.primary
					: DARK.colors.white,
				boxShadow: DARK.shadows.card,
				cursor: disabled ? "not-allowed" : "pointer",
				outline: "none",
				userSelect: "none" as const,
				transition:
					"background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.18s ease",
				"&:hover:not(:disabled)": {
					backgroundColor: active
						? "rgba(52, 119, 199, 0.28)"
						: "rgba(52, 119, 199, 0.18)",
					borderColor: active
						? DARK.colors.primary
						: DARK.colors.primary,
					color: DARK.colors.white,
					"& .icon-wrapper": {
						color: `${DARK.colors.white} !important`,
					},
					"& .icon-label": {
						color: `${DARK.colors.white} !important`,
					},
				},
				"&:focus-visible:not(:disabled)": {
					borderColor: DARK.colors.primary,
				},
			}),
			iconWrapperStyle: (
				iconSize: string,
				resolvedIconColor?: string,
			) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				color: resolvedIconColor,
				fontSize: iconSize,
				lineHeight: 1,
				flexShrink: 0,
				transition: "color 0.18s ease",
			}),
			labelStyle: (
				disabled: boolean,
				active: boolean,
				labelColor?: string,
			) => ({
				color: disabled
					? DARK.colors.textDisabled
					: labelColor ||
					  (active ? DARK.colors.primary : DARK.colors.white),
				fontWeight: active ? 600 : 500,
				lineHeight: 1.2,
				whiteSpace: "nowrap" as const,
				transition: "color 0.18s ease",
			}),
			badgeStyle: (
				sizeObj: any,
				active: boolean,
				disabled: boolean,
				labelColor?: string,
			) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				minWidth: "18px",
				height: "18px",
				padding: "0 6px",
				borderRadius: "10px",
				backgroundColor: active
					? "rgba(52, 119, 199, 0.28)"
					: "rgba(255, 255, 255, 0.08)",
				color: disabled
					? DARK.colors.textDisabled
					: labelColor ||
					  (active ? DARK.colors.primary : DARK.colors.white),
				fontSize: sizeObj.badgeFontSize,
				fontWeight: 600,
				lineHeight: 1,
				fontVariantNumeric: "tabular-nums",
				transition: "background-color 0.18s ease, color 0.18s ease",
			}),
			iconButtonStyle: (
				sizeObj: any,
				active: boolean,
				disabled: boolean,
				resolvedIconColor?: string,
			) => ({
				width: sizeObj.minHeight,
				height: sizeObj.minHeight,
				backgroundColor: active
					? "rgba(52, 119, 199, 0.28) !important"
					: `${DARK.colors.surface} !important`,
				border: `1px solid ${
					active ? DARK.colors.primary : DARK.colors.border
				} !important`,
				borderRadius: `${sizeObj.borderRadius} !important`,
				padding: "0 !important",
				color: `${resolvedIconColor} !important`,
				boxShadow: `${DARK.shadows.card} !important`,
				cursor: disabled ? "not-allowed" : "pointer",
				transition:
					"background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.18s ease !important",
				"&:hover:not(:disabled)": {
					backgroundColor: active
						? "rgba(52, 119, 199, 0.28) !important"
						: "rgba(52, 119, 199, 0.18) !important",
					color: `${DARK.colors.white} !important`,
					borderColor: active
						? `${DARK.colors.primary} !important`
						: `${DARK.colors.primary} !important`,
					"& .icon-wrapper": {
						color: `${DARK.colors.white} !important`,
					},
				},
				"&:focus-visible:not(:disabled)": {
					borderColor: `${DARK.colors.primary} !important`,
				},
			}),
		},

		iconMenu: {
			bgMenu: DARK.colors.surface,
			bgHover: "rgba(52, 119, 199, 0.18)",
			bgActive: "rgba(52, 119, 199, 0.28)",
			border: DARK.colors.border,
			borderHover: DARK.colors.primary,
			borderActive: DARK.colors.primary,
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textActive: DARK.colors.primary,
			textDisabled: DARK.colors.textDisabled,
			accent: DARK.colors.primary,
			shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
			boxShadowSm: DARK.shadows.card,
			fontFamily: DARK.fontFamily,
			triggerStyle: (size: string, open: boolean) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				padding:
					size === "small"
						? "4px 6px"
						: size === "large"
						? "8px 10px"
						: "6px 8px",
				borderRadius:
					size === "small"
						? "8px"
						: size === "large"
						? "12px"
						: "10px",
				border: `1px solid ${
					open ? DARK.colors.primary : DARK.colors.border
				}`,
				boxShadow: DARK.shadows.card,
				transition: "all 0.18s ease",
				backgroundColor: open
					? "rgba(52, 119, 199, 0.28)"
					: DARK.colors.surface,
				color: DARK.colors.white,
				"&:hover": {
					backgroundColor: open
						? "rgba(52, 119, 199, 0.28)"
						: "rgba(52, 119, 199, 0.18)",
					borderColor: DARK.colors.primary,
					color: DARK.colors.white,
					"& .icon-span": {
						color: `${DARK.colors.white} !important`,
					},
				},
			}),
			triggerIconStyle: (size: string) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize:
					size === "small"
						? "15px"
						: size === "large"
						? "19px"
						: "17px",
				lineHeight: 1,
				color: "inherit",
				transition: "color 0.18s ease",
			}),
			paperStyle: (fontFamily?: string) => ({
				minWidth: "170px",
				padding: "4px",
				borderRadius: "10px",
				backgroundColor: `${DARK.colors.surface} !important`,
				border: `1px solid ${DARK.colors.border} !important`,
				boxShadow:
					"0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.5) !important",
				fontFamily: `${fontFamily || DARK.fontFamily} !important`,
				backgroundImage: "none !important",
			}),
			menuItemStyle: (active?: boolean) => ({
				borderRadius: "6px",
				padding: "7px 12px",
				margin: "1px 0",
				gap: "8px",
				fontFamily: "inherit !important",
				color: `${
					active ? DARK.colors.primary : DARK.colors.white
				} !important`,
				backgroundColor: active
					? "rgba(52, 119, 199, 0.28)"
					: "transparent",
				transition: "all 0.18s ease",
				"& .MuiListItemIcon-root": { minWidth: "unset !important" },
				"& .MuiListItemText-primary": {
					fontSize: "13px",
					fontWeight: active ? 600 : 500,
					fontFamily: "inherit",
				},
				"&:hover": {
					color: active
						? DARK.colors.primary
						: `${DARK.colors.white} !important`,
					backgroundColor: active
						? "rgba(52, 119, 199, 0.28) !important"
						: "rgba(52, 119, 199, 0.18) !important",
					"& .menu-item-icon": {
						color: active
							? DARK.colors.primary
							: `${DARK.colors.white} !important`,
					},
				},
			}),
			menuItemIconStyle: (active?: boolean) => ({
				color: active ? DARK.colors.primary : DARK.colors.textSecondary,
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "18px",
				transition: "color 0.18s ease",
			}),
		},

		radio: {
			textPrimary: DARK.colors.white,
			textDisabled: DARK.colors.textDisabled,
			color: DARK.colors.primary,
			disabledColor: "#616161",
			focusRing: "rgba(52, 119, 199, 0.25)",

			size: "18px",
			borderWidth: "2px",
			borderRadius: "50%",
			transition: "all 0.15s ease",

			checkedIconColor: DARK.colors.white,
			iconSize: "10px",

			labelMargin: "2px 0",
			labelFontSize: "13px",
			labelFontWeight: 500,
			controlPadding: "8px",

			disabledCursor: "not-allowed",
			cursor: "pointer",
			userSelect: "none",
		},

		searchBar: {
			background: DARK.colors.surface,
			backgroundHover: "rgba(255, 255, 255, 0.04)",

			border: "#424242",
			borderHover: DARK.colors.primary,
			borderFocus: DARK.colors.primary,

			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,

			iconColor: DARK.colors.textDisabled,
			iconHover: DARK.colors.primary,
			clearButtonHoverBackground: "rgba(255, 255, 255, 0.08)",

			borderRadius: "20px",
			inputHeight: "36px",

			outerTransition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
			backgroundTransition: "background-color 0.18s ease",
			borderTransition: "border-color 0.2s ease",

			inputPadding: "6px 4px 6px 0px",
			inputFontSize: "13.5px",
			inputFontWeight: 400,

			rootPaddingLeft: "12px",
			rootPaddingRight: "10px",

			searchAdornmentMarginRight: "6px",
			clearAdornmentMarginLeft: "4px",

			clearButton: {
				width: "20px",
				height: "20px",
				borderRadius: "50%",
				fontSize: "11px",
				background: "transparent",
				transition: "all 0.15s ease-in-out",
			},

			searchIconFontSize: "15px",

			placeholderOpacity: 0.8,

			outlineBorderWidth: "1px",
			focusedBorderWidth: "1.5px",
		},

		showMore: {
			actionColor: "#559fda",

			fontSize: "12.5px",
			lineHeight: 1.45,
			fontWeight: 400,

			textAlign: "left",
			overflowWrap: "break-word",
			wordBreak: "normal",
			whiteSpace: "pre-line",
			paddingRight: "4px",

			lineBreak: {
				content: '""',
				display: "inline-block",
				width: "0.3em",
			},

			action: {
				fontSize: "12px",
				fontWeight: 600,
				display: "inline-block",
				marginTop: "4px",
				transition: "opacity 0.15s ease",
				hoverOpacity: 0.85,
			},
		},

		sideMenuBar: {
			background: DARK.colors.surface,
			border: DARK.colors.border,
			borderActiveIndicator: "#ff6b00",
			itemHoverBackground: "rgba(255, 255, 255, 0.05)",
			itemActiveBackground: "#27272a",
			textPrimary: "#cbd5e1",
			textSecondary: DARK.colors.textSecondary,
			textActive: "#ffffff",
			textHover: "#ffffff",
			iconDefault: "#94a3b8",
			iconActive: "#ffffff",
			iconHover: "#ffffff",
			shadow: "none",

			container: {
				flexBasis: "250px",
				width: "15.5rem",
				height: "100%",
				zIndex: 1,
			},

			header: {
				padding: "20px 20px 14px 20px",
				gap: "10px",
				logoColor: "#f97316",
				logoSize: "26px",
				brandFont: "Montserrat, sans-serif",
				brandFontSize: "18px",
				brandFontWeight: 700,
				brandColor: "#ffffff",
				badgeFontSize: "11px",
				badgeFontWeight: 700,
				badgeColor: "#f97316",
				badgeMarginLeft: "4px",
			},

			item: {
				padding: "9px 14px",
				margin: "2px 12px",
				borderRadius: "10px",
				minHeight: "42px",
			},

			indicator: {
				left: "-2px",
				top: "10px",
				bottom: "10px",
				width: "4px",
				borderRadius: "4px",
				zIndex: 2,
			},

			row: {
				gap: "12px",
			},

			icon: {
				width: "22px",
				height: "22px",
				borderRadius: "0px",
				fontSize: "18px",
			},

			label: {
				fontSize: "13.5px",
				lineHeight: "20px",
				fontWeight: 500,
				activeFontWeight: 600,
			},

			subtext: {
				fontSize: "11.5px",
				lineHeight: "15px",
				marginTop: "1px",
				activeOpacity: 0.95,
				inactiveOpacity: 0.8,
			},

			scrollList: {
				padding: "6px 0",
			},

			systemStatus: {
				background: "rgba(2, 132, 199, 0.12)",
				border: "rgba(2, 132, 199, 0.25)",
				borderRadius: "12px",
				padding: "10px 14px",
				margin: "12px 12px 16px 12px",
				gap: "10px",
				iconColor: "#38bdf8",
				iconSize: "18px",
				titleColor: "#f8fafc",
				titleFontSize: "13px",
				titleFontWeight: 600,
				statusColor: "#94a3b8",
				statusFontSize: "11.5px",
				statusFontWeight: 400,
			},

			transition: {
				item: "background-color 0.18s ease, color 0.18s ease",
				indicator: "transform 0.2s ease, opacity 0.2s ease",
				icon: "color 0.18s ease",
				text: "color 0.18s ease",
				subtext: "color 0.18s ease, opacity 0.18s ease",
			},

			hoverIconScale: 1,
		},

		sla: {
			text: "#CBD5E1",

			percentageText: "#E2E8F0",

			trackBackground: "#273342",

			fulfilled: "#4ADE80",

			low: "#4ADE80",

			medium: "#FBBF24",

			// Soft red for dark UI
			critical: "#FB7185",

			message: {
				fontSize: "11.5px",
				fontWeight: 600,
				lineHeight: 1.4,
				letterSpacing: "0.01em",
			},

			fulfilledMessage: {
				fontSize: "13px",
				fontWeight: 600,
				lineHeight: 1,
			},

			container: {
				width: "100%",
				height: "100%",
				minWidth: 0,
				gap: "6px",
			},

			content: {
				gap: "5px",
			},

			track: {
				width: "100%",
				height: "6px",
				borderRadius: "999px",
			},

			bar: {
				height: "100%",
				borderRadius: "999px",
				transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
			},

			gradients: {
				fulfilled: "linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)",

				low: "linear-gradient(90deg, #34D399 0%, #22C55E 100%)",

				medium: "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",

				critical:
					"linear-gradient(90deg, #FDA4AF 0%, #FB7185 55%, #F43F5E 100%)",
			},

			glow: {
				fulfilled: "0 0 9px rgba(74, 222, 128, 0.22)",

				low: "0 0 9px rgba(74, 222, 128, 0.20)",

				medium: "0 0 9px rgba(251, 191, 36, 0.20)",

				critical: "0 0 10px rgba(251, 113, 133, 0.24)",
			},

			orb: {
				background: "#111827",

				borderWidth: "2px",

				outerRing: "0 0 0 2px rgba(15, 23, 42, 0.75)",
			},

			containerStyle: {
				width: "100%",
				height: "100%",
				minWidth: 0,
				display: "flex",
				alignItems: "center",
				gap: "6px",
				boxSizing: "border-box" as const,
				overflow: "visible" as const,
			},

			contentStyle: {
				flex: 1,
				minWidth: 0,
				display: "flex",
				flexDirection: "column" as const,
				justifyContent: "center",
				gap: "5px",
				overflow: "visible" as const,
			},

			messageStyle: (detail?: boolean, contrastText?: string) => ({
				fontSize: "11.5px",
				fontWeight: 600,
				lineHeight: 1.4,
				letterSpacing: "0.01em",
				color: `${
					detail ? contrastText ?? "#FFFFFF" : "#CBD5E1"
				} !important`,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap" as const,
			}),

			fulfilledMessageStyle: {
				fontSize: "13px",
				fontWeight: 600,
				lineHeight: 1,
				color: "#4ADE80 !important",
			},

			trackStyle: {
				position: "relative" as const,
				width: "100%",
				height: "6px",
				borderRadius: "999px",
				backgroundColor: "#273342",
				overflow: "visible" as const,
				flexShrink: 0,
			},

			barStyle: (
				clampedPercentageOrObj: any,
				stateArg?: "fulfilled" | "low" | "medium" | "critical",
			) => {
				const clampedPercentage =
					typeof clampedPercentageOrObj === "object"
						? clampedPercentageOrObj.clampedPercentage
						: clampedPercentageOrObj ?? 0;

				const state =
					stateArg ||
					(typeof clampedPercentageOrObj === "object"
						? clampedPercentageOrObj.state
						: undefined) ||
					(clampedPercentage < 50
						? "low"
						: clampedPercentage < 80
						? "medium"
						: "critical");

				const gradients: Record<string, string> = {
					fulfilled:
						"linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)",
					low: "linear-gradient(90deg, #34D399 0%, #22C55E 100%)",
					medium: "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",
					critical:
						"linear-gradient(90deg, #FDA4AF 0%, #FB7185 55%, #F43F5E 100%)",
				};

				const glow: Record<string, string> = {
					fulfilled: "0 0 9px rgba(74, 222, 128, 0.22)",
					low: "0 0 9px rgba(74, 222, 128, 0.20)",
					medium: "0 0 9px rgba(251, 191, 36, 0.20)",
					critical: "0 0 10px rgba(251, 113, 133, 0.24)",
				};

				const colors: Record<string, string> = {
					fulfilled: "#4ADE80",
					low: "#4ADE80",
					medium: "#FBBF24",
					critical: "#FB7185",
				};

				const barGradient =
					typeof clampedPercentageOrObj === "object" &&
					clampedPercentageOrObj.barGradient
						? clampedPercentageOrObj.barGradient
						: gradients[state] || gradients.low;

				const barGlow =
					typeof clampedPercentageOrObj === "object" &&
					clampedPercentageOrObj.barGlow
						? clampedPercentageOrObj.barGlow
						: glow[state] || glow.low;

				const barColor =
					typeof clampedPercentageOrObj === "object" &&
					clampedPercentageOrObj.barColor
						? clampedPercentageOrObj.barColor
						: colors[state] || colors.low;

				return {
					position: "relative" as const,
					width: `${clampedPercentage}%`,
					height: "100%",
					minWidth: clampedPercentage > 0 ? "8px" : "0px",
					borderRadius: "999px",
					background: barGradient,
					boxShadow: barGlow,
					transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
					"&::after": {
						content: '""',
						position: "absolute" as const,
						right: "-4px",
						top: "50%",
						width: "8px",
						height: "8px",
						transform: "translateY(-50%)",
						borderRadius: "50%",
						backgroundColor: "#111827",
						border: `2px solid ${barColor}`,
						boxSizing: "border-box" as const,
						boxShadow: `0 0 0 2px rgba(15, 23, 42, 0.75), 0 0 6px ${barColor}, 0 0 12px ${barColor}`,
						zIndex: 5,
					},
				};
			},
		},

		switch: {
			trackBackground: "#141414",
			trackBorder: DARK.colors.border,

			activeBackground: DARK.colors.surface,
			activeBorder: "#4a4a4a",
			activeText: DARK.colors.white,

			inactiveText: DARK.colors.textSecondary,
			hoverText: DARK.colors.white,

			focusRing: "rgba(52, 119, 199, 0.35)",

			activeShadow:
				"0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",

			container: {
				padding: "3px",
				gap: "2px",
				borderRadius: "10px",
			},

			item: {
				minHeight: "28px",
				padding: "0 12px",
				borderRadius: "7px",
				transition: "all 0.16s cubic-bezier(0.4, 0, 0.2, 1)",
				activeScale: "0.97",
			},

			label: {
				fontSize: "12px",
				selectedFontWeight: 600,
				unselectedFontWeight: 500,
				lineHeight: 1,
				letterSpacing: "-0.01em",
				transition: "color 0.15s ease",
			},

			disabledOpacity: 0.5,
		},

		tab: {
			border: DARK.colors.border,
			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textMuted,
			accent: DARK.colors.primary,
			accentBackground: "rgba(52, 119, 199, 0.12)",
			accentBadge: "rgba(52, 119, 199, 0.2)",
			badgeBackground: "rgba(255, 255, 255, 0.05)",
			error: "#ef4444",
			hoverBackground: "rgba(255, 255, 255, 0.04)",

			container: {
				minHeight: "44px",
			},

			indicator: {
				height: "2.5px",
				borderRadius: "2px 2px 0 0",
				transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
			},

			tab: {
				minHeight: "44px",
				padding: "8px 16px",
				fontSize: "13.5px",
				fontWeight: 500,
				selectedFontWeight: 600,
				textTransform: "none",
				borderRadius: "6px 6px 0 0",
				transition:
					"color 0.15s ease, background-color 0.15s ease, opacity 0.15s ease",
				disabledOpacity: 0.7,
			},

			label: {
				gap: "8px",
				lineHeight: 1,
				letterSpacing: "-0.01em",
			},

			loader: {
				containerSize: "14px",
				size: "12px",
				borderWidth: "2px",
				animation: "tabSpin 0.75s linear infinite",
			},

			badge: {
				minWidth: "20px",
				height: "18px",
				padding: "0 6px",
				borderRadius: "9999px",
				fontSize: "11px",
				fontWeight: 600,
				lineHeight: 1,
				transition: "all 0.15s ease",
			},

			errorStyle: {
				display: "inline-flex",
			},
		},

		table: {
			background: "#141414",
			headerBackground: "#141414",
			controlBackground: "rgba(255, 255, 255, 0.06)",
			detailBackground: "rgba(0, 0, 0, 0.2)",

			border: DARK.colors.border,
			accent: DARK.colors.primary,
			accentBackground: "rgba(52, 119, 199, 0.15)",
			accentBorder: "rgba(52, 119, 199, 0.4)",

			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textDisabled: DARK.colors.textMuted,
			checkbox: "#757575",

			rowHover: "rgba(255, 255, 255, 0.03)",
			rowSelected: "rgba(52, 119, 199, 0.2)",
			rowSelectedHover: "rgba(52, 119, 199, 0.28)",

			shadow: DARK.shadows.card,

			container: {
				borderRadius: "12px",
				maxHeight: "100vh",
			},

			row: {
				height: 52,
				transition: "background-color 0.15s ease",
			},

			detailRow: {
				estimatedHeight: 120,
				padding: 2.5,
				borderLeftWidth: "3px",
			},

			expandColumn: {
				width: 48,
			},

			expandButton: {
				width: 26,
				height: 26,
				borderRadius: "6px",
				transition: "all 0.15s ease",
				iconSize: 14,
			},

			columnHeader: {
				zIndex: 4,
				fontSize: "13px",
				fontWeight: 600,
				letterSpacing: "0.01em",
			},

			cell: {
				fontSize: "13.5px",
			},

			footer: {
				fontSize: "13px",
			},

			linearProgress: {
				background: DARK.colors.border,
			},

			virtualScroller: {
				overflowY: "auto !important",
				overflowX: "auto !important",
			},

			grid: {
				transition: "background-color 0.15s ease",
			},

			focus: {
				outline: "none !important",
			},
		},

		taskDragAndDrop: {
			background: DARK.colors.surfaceDark,
			border: DARK.colors.border,
			emptyBackground: DARK.colors.surface,
			dashedBorder: DARK.colors.borderHover,
			textMuted: DARK.colors.textSecondary,
			textSubtle: DARK.colors.textMuted,
			accent: DARK.colors.primary,
			ghostBackground: "rgba(52, 119, 199, 0.15)",
			ghostBorder: DARK.colors.primary,

			cardShadow:
				"0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",

			container: {
				minHeight: "140px",
				padding: "10px",
				gap: "10px",
				borderRadius: "12px",
			},

			emptyState: {
				minHeight: "110px",
				padding: "16px",
				gap: "6px",
				borderRadius: "10px",
				borderWidth: "1.5px",
			},

			emptyTitle: {
				fontSize: "14px",
				fontWeight: 600,
			},

			emptyDescription: {
				fontSize: "12px",
			},

			emptyText: {
				fontSize: "13px",
				fontWeight: 500,
				letterSpacing: "0.01em",
			},

			scrollbar: {
				width: "5px",
				thumbRadius: "4px",
			},

			ghost: {
				opacity: 0.6,
				borderWidth: "1.5px",
				borderRadius: "10px",
			},

			chosen: {
				scale: 1.015,
			},

			transition: "background-color 0.2s ease, border-color 0.2s ease",
		},

		card: {
			bg: "#ffffff",
			border: "#e2e8f0",
			borderSelected: "#0284c7",
			borderHover: "#cbd5e1",
			textPrimary: "#0f172a",
			textSecondary: "#64748b",
			textMuted: "#94a3b8",
			accent: "#0284c7",
			tagBg: "#f1f5f9",
			divider: "#f1f5f9",

			shadow: "0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)",

			shadowHover:
				"0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",

			priority: {
				CRITICAL: { bg: "#fef2f2", text: "#b91c1c" },
				HIGH: { bg: "#fff7ed", text: "#c2410c" },
				MEDIUM: { bg: "#fefce8", text: "#a16207" },
				LOW: { bg: "#f0fdf4", text: "#15803d" },
			},

			sla: {
				overdue: { bg: "#fef2f2", text: "#dc2626" },
				week: { bg: "#f0fdf4", text: "#16a34a" },
				normal: { bg: "#f8fafc", text: "#475569" },
			},
		},

		textField: {
			primaryMain: DARK.colors.primary,
			errorMain: "#f87171",

			bgSurface: DARK.colors.surface,
			bgDisabled: "rgba(255, 255, 255, 0.03)",

			border: DARK.colors.border,
			borderHover: "#6b7280",
			borderDisabled: DARK.colors.border,

			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textMuted: "#888888",
			textError: "#f87171",

			focusRing: "0 0 0 2px rgba(52, 119, 199, 0.25)",
			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.25)",

			shadow: DARK.shadows.small,

			fontFamily: DARK.fontFamily,

			containerDisplay: "flex",
			containerFlexDirection: "column",
			containerWidth: "100%",
			boxSizing: "border-box",

			labelDisplay: "inline-flex",
			labelAlignItems: "center",
			labelGap: "4px",
			labelMarginBottom: "4px",
			labelFontSize: "13px",
			labelFontWeight: 600,
			labelLineHeight: 1.4,
			labelTransition: "color 0.15s ease",
			labelUserSelect: "none",

			mandatoryFontSize: "13px",
			mandatoryFontWeight: 700,
			mandatoryLineHeight: 1,
			mandatoryMarginLeft: "2px",

			fieldWidth: "100%",
			fieldDisplay: "flex",
			fieldFlexDirection: "column",
			fieldBackground: "transparent",

			inputBorderRadius: "8px",
			inputFontSize: "13.5px",
			inputPadding: "10px 14px",
			inputHeight: "20px",
			inputFontWeight: 400,

			inputTransition: "border-color 0.15s ease, box-shadow 0.15s ease",

			placeholderOpacity: 1,
			placeholderFontWeight: 400,

			disabledBorderWidth: "1px !important",
			normalBorderWidth: "1px !important",
			focusBorderWidth: "1.5px !important",

			outlineTransition: "border-color 0.15s ease",

			autofillTransition: "background-color 600000s ease-in-out 0s",

			helperFontSize: "12px",
			helperMargin: "4px 0 0 0",
			helperPadding: "0px",
			helperBackgroundColor: "transparent",
		},

		tileSelect: {
			rootDisplay: "flex",
			rootFlexDirection: "column",
			rootGap: "8px",
			rootWidth: "100%",
			boxSizing: "border-box",

			fontFamily: DARK.fontFamily,

			labelFontSize: "12.5px",
			labelFontWeight: 600,
			labelLetterSpacing: "-0.01em",

			gridDisplay: "grid",
			gridGap: "10px",
			gridWidth: "100%",

			tileDisplay: "flex",
			tileFlexDirection: "column",
			tileAlignItems: "center",
			tileJustifyContent: "center",
			tileGap: "6px",
			tileMinHeight: "48px",
			tilePadding: "12px 14px",
			tileBorderRadius: "8px",
			tileCursor: "pointer",
			tileOutline: "none",
			tileUserSelect: "none",

			tileTransition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",

			activeTransform: "scale(0.985)",

			bgSurface: DARK.colors.surface,
			bgHover: "rgba(255, 255, 255, 0.04)",
			bgSelected: "rgba(52, 119, 199, 0.15)",

			border: DARK.colors.border,
			borderHover: DARK.colors.borderHover,
			borderSelected: DARK.colors.primary,

			textLabel: DARK.colors.textSecondary,
			textPrimary: DARK.colors.white,
			textSelected: DARK.colors.primaryLight,

			shadow: DARK.shadows.small,

			shadowHover: "0 4px 6px -1px rgba(0, 0, 0, 0.6)",

			focusRing: "0 0 0 2px rgba(52, 119, 199, 0.35)",

			textFontSize: "13px",
			textFontWeight: 500,
			textSelectedFontWeight: 600,
			textLetterSpacing: "-0.01em",
			textLineHeight: 1.2,
			textAlign: "center",
			textWordBreak: "break-word",
			textTransition: "color 0.15s ease",
		},

		textArea: {
			bgSurface: DARK.colors.surface,
			bgDisabled: "rgba(255, 255, 255, 0.03)",
			bgDragOver: "rgba(52, 119, 199, 0.15)",

			border: DARK.colors.border,
			borderHover: "#6b7280",
			borderFocus: DARK.colors.primary,
			borderDragOver: DARK.colors.primary,
			borderError: "#f87171",

			focusRing: "0 0 0 2px rgba(52, 119, 199, 0.25)",
			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.25)",

			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textMuted: "#888888",
			textError: "#f87171",

			accent: DARK.colors.primary,

			shadow: DARK.shadows.small,

			fontFamily: DARK.fontFamily,

			labelGap: "4px",
			labelMarginBottom: "4px",
			labelFontSize: "13px",
			labelFontWeight: 600,
			labelLineHeight: 1.4,
			labelLetterSpacing: "0.01em",

			mandatoryFontSize: "13px",
			mandatoryFontWeight: 700,
			mandatoryLineHeight: 1,
			mandatoryMarginLeft: "2px",

			inputBorderRadius: "8px",
			inputFontSize: "13.5px",
			inputLineHeight: 1.5,
			inputPadding: "10px 12px",
			inputTransition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",

			placeholderFontWeight: 400,

			outlineTop: 0,
			outlineBorderRadius: "8px",
			outlineTransition: "border-color 0.15s ease",

			normalBorderWidth: "1px !important",
			dragOverBorderWidth: "1.5px !important",
			focusBorderWidth: "1.5px !important",

			normalBorderStyle: "solid",
			dragOverBorderStyle: "dashed",

			helperMarginTop: "5px",
			helperFontSize: "11.5px",
			helperFontWeight: 500,
			helperLineHeight: 1.4,
			helperGap: "4px",

			whiteSpace: "pre-wrap",
			overflowWrap: "normal",
			wordBreak: "normal",
		},
	},

	timeline: {
		bgSurface: DARK.colors.surface,
		bgHover: "rgba(52, 119, 199, 0.15)",
		border: DARK.colors.border,
		borderHover: DARK.colors.primary,
		connector: DARK.colors.borderHover,

		shadow: "0 10px 25px -4px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",

		shadowHover:
			"0 0 0 3px rgba(52, 119, 199, 0.25), 0 1px 3px rgba(0, 0, 0, 0.4)",

		dotSize: "32px",
		connectorWidth: "1.5px",
		cardLeftOffset: "-520px",
	},

	tooltip: {
		bg: DARK.colors.surface,
		text: DARK.colors.white,
		border: DARK.colors.border,
		fontSize: "12px",
		fontWeight: 500,
		padding: "6px 10px",
		borderRadius: "6px",

		boxShadow:
			"0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
	},

	topBar: {
		colors: {
			background: DARK.colors.surface,
			border: DARK.colors.border,
			textPrimary: DARK.colors.white,
		},

		dimensions: {
			expandedMenuWidth: "260px",
			collapsedMenuWidth: "64px",

			height: "62px",

			customerDropdownWidth: "320px",
			customerDropdownMaxWidth: "40vw",

			paddingRight: "16px",
			menuOffset: "12px",
		},

		layout: {
			position: "sticky",
			top: 0,
			zIndex: 1100,
			width: "100%",
			marginLeft: 0,

			display: "flex",
			flexWrap: "nowrap",
			alignItems: "center",
			justifyContent: "space-between",

			customerSectionMinWidth: 0,
			boxSizing: "border-box",

			isolation: "isolate",
		},

		shadow: DARK.shadows.card,

		typography: {
			fontFamily: DARK.fontFamily,
		},

		transition: {
			container: "all 0.25s ease",
			menuSpacing: "padding-left 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
		},
	},

	topBarMenu: {
		colors: {
			bgPanel: DARK.colors.surface,
			bgHover: "rgba(52, 119, 199, 0.15)",
			bgActive: "rgba(52, 119, 199, 0.25)",

			border: DARK.colors.border,
			borderSubtle: DARK.colors.primary,

			textPrimary: DARK.colors.white,
			textSecondary: DARK.colors.textSecondary,
			textActive: DARK.colors.primaryLight,

			accent: DARK.colors.primary,

			logout: "#ef4444",
			logoutHover: "rgba(239, 68, 68, 0.15)",

			submenuBackground: "rgba(255, 255, 255, 0.02)",

			transparent: "transparent",

			// Sidebar menu item states (kept in sync with sideMenuBar)
			itemHoverBackground: "rgba(255, 255, 255, 0.05)",
			itemHoverText: "#ffffff",
			itemHoverIcon: "#ffffff",
			itemActiveBackground: "#27272a",
			itemActiveText: "#ffffff",
			itemActiveIcon: "#ffffff",
			activeIndicator: "#ff6b00",
		},

		indicator: {
			left: "-2px",
			top: "10px",
			bottom: "10px",
			width: "4px",
			borderRadius: "4px",
			zIndex: 2,
		},

		dimensions: {
			collapsedWidth: "64px",
			expandedWidth: "250px",

			menuItemHeight: "46px",
			menuItemHeightShrunk: "36px",
			menuItemHeightSubMenu: "40px",

			menuHeaderHeight: "63px",

			topBarButtonWidth: "36px",
			topBarButtonHeight: "36px",

			avatarSize: "32px",
			avatarBorderWidth: "2px",

			brandIconSize: "32px",
			collapsedBrandIconSize: "34px",

			brandLogoHeight: "32px",
			brandLogoMaxWidth: "180px",

			dropdownWidth: "180px",

			dropdownArrowSize: "12px",
			dropdownArrowStrokeWidth: "2px",

			dividerHeight: "1px",
		},

		spacing: {
			topBarTop: "12px",
			topBarPaddingRight: "16px",
			topBarGap: "10px",

			menuItemPadding: "8px 12px",
			menuItemCollapsedPadding: "8px 0",

			menuItemMargin: "2px 8px",
			menuItemCollapsedMargin: "2px 0",

			menuItemPaddingLeft: "12px",
			menuItemSubMenuPaddingLeft: "5px",
			menuItemCollapsedPaddingLeft: "0",

			menuGap: "12px",
			menuGapCollapsed: "0",

			dashboardIconMarginBottom: "5px",

			userCapsuleGap: "10px",
			userCapsulePadding: "4px 12px 4px 6px",

			dropdownArrowMarginLeft: "6px",

			dropdownPadding: "6px",
			dropdownItemGap: "12px",
			dropdownItemPadding: "8px 12px",

			dropdownDividerMargin: "4px 0",

			submenuMargin: "2px 8px",
			submenuPadding: "4px 0",

			brandGap: "10px",

			brandHeaderPadding: "0 18px",
			brandHeaderCollapsedPadding: "0",

			menuListPaddingBottom: "10px",

			categoryDividerMargin: "8px 14px",

			bottomActionPadding: "10px 14px",
			bottomActionCollapsedPadding: "10px 0",

			collapseButtonPadding: "6px",
		},

		typography: {
			fontFamily: DARK.fontFamily,

			menuFontSize: "13.5px",
			submenuFontSize: "13px",

			iconFontSize: "18px",
			submenuIconFontSize: "15px",
			arrowFontSize: "12px",

			userNameFontSize: "12.5px",
			userRoleFontSize: "10.5px",
			avatarFontSize: "11px",

			brandFontSize: "15px",
			brandInitialFontSize: "14px",
			collapsedBrandFontSize: "13px",

			menuLineHeight: "18px",
			userLineHeight: 1.15,

			brandLetterSpacing: "-0.2px",

			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightSemiBold: 600,
			fontWeightBold: 700,
		},

		radius: {
			menuItem: "8px",
			brand: "8px",
			avatar: "50%",
			userCapsule: "24px",
			topBarButton: "10px",
			dropdown: "12px",
			dropdownItem: "8px",
			collapseButton: "8px",
		},

		shadows: {
			topBarButton: "0 1px 3px rgba(0, 0, 0, 0.04)",

			userCapsule: "0 2px 8px rgba(2, 132, 199, 0.08)",

			dropdown: "0 12px 30px -4px rgba(0, 0, 0, 0.4)",

			sidebar: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
		},

		transitions: {
			menu: "width 0.28s cubic-bezier(0.4, 0, 0.2, 1)",

			standard: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",

			fast: "all 0.18s ease",

			color: "color 0.18s ease",

			arrow: "transform 0.2s ease",

			user: "all 0.2s ease",

			dropdown: "all 0.18s ease",

			dropdownAnimation: "fadeIn 0.15s ease-out",
		},

		layout: {
			topBarPosition: "fixed",
			topBarZIndex: 1200,

			sidebarPosition: "fixed",
			sidebarZIndex: 1099,

			dropdownPosition: "absolute",
			dropdownTop: "calc(100% + 8px)",
			dropdownRight: "25px",
			dropdownZIndex: 1250,

			boxSizing: "border-box",

			sidebarHeight: "100vh",

			overflow: "hidden",
			menuOverflowY: "auto",
		},

		scrollbar: {
			width: "4px",
			thumbRadius: "4px",
		},

		animation: {
			collapsedIconScale: "scale(1.08)",
			rotate90: "rotate(90deg)",
			rotateNegative90: "rotate(-90deg)",
			rotate180: "rotate(180deg)",
			rotate0: "rotate(0deg)",
			hoverScale: "scale(1.05)",
			activeScale: "scale(0.95)",
		},
	},

	treeGraph: {
		colors: {
			background: "#0F172A",
			surface: "#1E293B",

			border: "#334155",
			borderHover: "#475569",

			textPrimary: "#F8FAFC",
			textSecondary: "#CBD5E1",
			keyText: "#CBD5E1",

			accent: "#38BDF8",
			accentSurface: "#12324A",

			legendLabel: "#E2E8F0",
			legendHeader: "#94A3B8",
			legendHint: "#64748B",
			legendDivider: "#334155",

			alerts: "#EF4444",
			incidents: "#0284C7",
			changeRequests: "#F59E0B",
			vulnerabilities: "#8B5CF6",
			compliance: "#EC4899",
			cmdb: "#38BDF8",
			leafNodes: "#22C55E",
			notes: "#F97316",
		},

		shadow: {
			small: DARK.shadows.small,

			card: "0 10px 25px -4px rgba(0, 0, 0, 0.55), 0 4px 6px -2px rgba(0, 0, 0, 0.35)",

			tooltip: "0 4px 12px rgba(0, 0, 0, 0.35)",
		},

		typography: {
			fontFamily: "Montserrat",

			labelFontSize: "12px",
			labelFontWeight: 500,

			keyFontSize: "12px",
			keyFontWeight: 600,
			keyLetterSpacing: "-0.01em",
			keyLineHeight: 1,

			legendFontSize: "12px",
			legendFontWeight: 500,

			legendHeaderFontSize: "11px",
			legendHeaderFontWeight: 700,
			legendHeaderLetterSpacing: "0.05em",

			legendHintFontSize: "10px",

			tooltipFontSize: "12px",
			tooltipFontWeight: 500,
			tooltipLineHeight: 1.5,
		},

		layout: {
			borderWidth: "1px",
			borderRadius: "10px",
			fullscreenBorderRadius: "0px",

			toolbarTop: "12px",
			toolbarLeft: "12px",
			toolbarRight: "12px",

			searchWidth: "260px",

			chartFlex: 1,
			chartWidth: "100%",
			chartHeight: "100%",
			chartMinHeight: 0,

			graphKeyBottom: "14px",
			graphKeyLeft: "14px",

			legendBottom: "38px",
			legendLeft: "0px",
			legendMinWidth: "200px",
		},

		control: {
			fullscreenWidth: "32px",
			fullscreenHeight: "32px",
			borderRadius: "8px",

			transition: "all 0.15s ease",
		},

		graphKey: {
			gap: "7px",
			padding: "6px 12px",
			borderRadius: "8px",

			transition: "all 0.16s cubic-bezier(0.4, 0, 0.2, 1)",
		},

		legend: {
			padding: "10px 12px",
			gap: "4px",
			borderRadius: "10px",

			itemPadding: "4px 6px",
			itemBorderRadius: "6px",

			markerSize: "9px",
			markerBorderWidth: "2px",
			markerGap: "5px",

			headerPaddingBottom: "6px",
			headerMarginBottom: "4px",
		},

		chart: {
			symbolSize: 12,

			top: "4%",
			left: "10%",
			bottom: "4%",
			right: "20%",

			labelPosition: "left",
			labelVerticalAlign: "middle",
			labelAlign: "right",

			leafLabelPosition: "right",
			leafLabelVerticalAlign: "middle",
			leafLabelAlign: "left",

			lineCurveness: 0.5,
			lineWidth: 1.5,

			initialTreeDepth: 2,
			searchTreeDepth: 3,

			animationDuration: 500,
			animationDurationUpdate: 750,
		},

		tooltip: {
			borderWidth: 1,
			padding: [8, 12],

			borderRadius: "8px",

			contentMaxWidth: "500px",
			contentMaxHeight: "700px",

			trigger: "item",
			triggerOn: "mousemove",

			contentOverflow: "hidden",
			contentTextOverflow: "ellipsis",
		},

		zIndex: {
			toolbar: 10,
			graphKey: 20,
			legend: 30,
		},
	},

	typography: {
		htmlFontSize: 16,
		pxToRem: () => {},
		fontFamily: "Montserrat",
		fontSizeSmall: 12,
		fontSizeMedium: 14,
		fontSize: 16,
		fontSizeLarge: 22,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
		fontWeightExtraBold: 700,
		fontWeightBlack: 900,

		h1: {
			fontFamily: "Montserrat",
			fontWeight: 700,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacking: "-0/01562em",
		},

		h2: {
			fontFamily: "Montserrat",
			fontWeight: 600,
			fontSize: "3.75rem",
			lineHeight: 1.12,
			letterSpacking: "-0.00833em",
		},

		h3: {
			fontFamily: "Montserrat",
			fontWeight: 500,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacking: "0em",
		},

		h4: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "2.2125rem",
			lineHeight: 1.125,
			letterSpacking: "0.00735em",
		},

		h5: {
			fontFamily: "Montserrat",
			fontWeight: 300,
			fontSize: "1.5rem",
			lineHeight: 1.334,
			letterSpacking: "0em",
		},

		h6: {
			fontFamily: "Montserrat",
			fontWeight: 300,
			fontSize: "1.25rem",
			lineHeight: 1.6,
			letterSpacking: "0.0075em",
		},

		subtitle1: {
			fontFamily: "Montserrat",
			fontWeight: 500,
			fontSize: "1rem",
			lineHeight: 1.75,
			letterSpacking: "0.00938em",
		},

		subtitle2: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.5,
			letterSpacking: "0.00938em",
		},

		body1: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "0.875remrem",
			lineHeight: 1.5,
			letterSpacking: "0.00938em",
		},

		body2: {
			fontFamily: "Montserrat",
			fontWeight: 300,
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacking: "0.00938em",
		},

		button: {
			fontFamily: "Montserrat",
			fontWeight: 500,
			fontSize: "1.063rem",
			lineHeight: 2,
			letterSpacking: "0.02857em",
			textTransform: "sentensecase",
		},

		zIndex: {
			appBar: 1100,
			drawer: 1200,
			modal: 1300,
			snackbar: 1400,
			tooltip: 1500,
			loader: 9999,
		},
	},
	// IconMenu styles. State is driven by data-open / data-size on the trigger and .Mui-selected on items
	iconMenu: {
		trigger: {
			display: "inline-flex",
			alignItems: "center",
			cursor: "pointer",
			padding: "6px 8px",
			borderRadius: "8px",
			border: "1px solid #424242",
			transition: "all 0.15s ease",
			backgroundColor: "#1e1e1e",
			color: "#bbbbbb",
			"& .icon-span": {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "17px",
				lineHeight: 1,
				color: "inherit",
				transition: "color 0.15s ease",
			},
			"&[data-size='small'] .icon-span": { fontSize: "15px" },
			"&[data-size='large'] .icon-span": { fontSize: "19px" },
			"&:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.1)",
				borderColor: "#38bdf8",
				color: "#38bdf8",
				"& .icon-span": { color: "#38bdf8 !important" },
			},
			"&[data-open='true']": {
				borderColor: "#38bdf8",
				backgroundColor: "rgba(56, 189, 248, 0.2)",
				color: "#38bdf8",
			},
			"&[data-open='true']:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.2)",
				borderColor: "#38bdf8",
			},
		},
		paper: {
			minWidth: "170px",
			padding: "4px",
			borderRadius: "10px",
			backgroundColor: "#1e1e1e !important",
			border: "1px solid #424242 !important",
			boxShadow:
				"0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.5) !important",
			fontFamily: "Montserrat !important",
			backgroundImage: "none !important",
		},
		item: {
			borderRadius: "6px",
			padding: "7px 12px",
			margin: "1px 0",
			gap: "8px",
			fontFamily: "inherit !important",
			color: "#ffffff !important",
			backgroundColor: "transparent",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.1) !important",
				color: "#ffffff !important",
				borderColor: "#424242 !important",
			},
			"&.Mui-selected": {
				color: "#38bdf8 !important",
				backgroundColor: "rgba(56, 189, 248, 0.2) !important",
			},
			"&.Mui-selected:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.2) !important",
				color: "#38bdf8 !important",
				borderColor: "#38bdf8 !important",
			},
			"& .MuiListItemIcon-root": { minWidth: "unset !important" },
			"& .menu-item-icon": {
				color: "#bbbbbb",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "18px",
				transition: "color 0.15s ease",
			},
			"&.Mui-selected .menu-item-icon": { color: "#38bdf8" },
			"& .MuiListItemText-primary": {
				fontSize: "13px",
				fontWeight: 500,
				fontFamily: "inherit",
			},
			"&.Mui-selected .MuiListItemText-primary": { fontWeight: 600 },
		},
	},
	// ImageUpload styles. State is driven by data-drag-active / data-error / data-disabled on the root
	imageUpload: {
		root: {
			display: "flex",
			alignItems: "center",
			gap: "16px",
			width: "100%",
			maxWidth: "440px",
			minHeight: "84px",
			padding: "12px 16px",
			borderRadius: "12px",
			border: "1.5px dashed #424242",
			backgroundColor: "#1e1e1e",
			boxShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
			boxSizing: "border-box",
			fontFamily: "Montserrat !important",
			cursor: "pointer",
			transition:
				"border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
			"&[data-drag-active='true']": {
				borderColor: "#3477C7",
				backgroundColor: "rgba(52, 119, 199, 0.12)",
				boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
			},
			"&:hover": {
				borderColor: "#757575",
				backgroundColor: "rgba(255, 255, 255, 0.05)",
			},
			"&[data-error='true']": {
				borderColor: "#f44336",
				backgroundColor: "rgba(239, 68, 68, 0.12)",
			},
			"&:focus-visible": {
				outline: "none",
				borderColor: "#3477C7",
				boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
			},
			"&[data-disabled='true']": {
				cursor: "not-allowed",
				opacity: 0.6,
			},
			"&[data-disabled='true']:hover": {
				borderColor: "#424242",
				backgroundColor: "#1e1e1e",
			},
			"&[data-disabled='true'][data-error='true']:hover": {
				borderColor: "#f44336",
				backgroundColor: "rgba(239, 68, 68, 0.12)",
			},
		},
		avatar: {
			position: "relative",
			width: "56px",
			height: "56px",
			borderRadius: "50%",
			backgroundColor: "rgba(255, 255, 255, 0.06)",
			border: "1px solid #616161",
			overflow: "hidden",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0,
			boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "cover",
			},
		},
		text: {
			display: "flex",
			flexDirection: "column",
			gap: "3px",
			flex: 1,
			minWidth: 0,
			textAlign: "left",
			"& .image-upload-title": {
				fontSize: "13.5px !important",
				fontWeight: "600 !important",
				color: "#ffffff !important",
				lineHeight: 1.3,
			},
			"& .image-upload-browse": {
				color: "#3477C7",
				textDecoration: "underline",
			},
			"& .image-upload-hint": {
				fontSize: "11.5px !important",
				color: "#bbbbbb !important",
				lineHeight: 1.3,
			},
			"& .image-upload-error": {
				fontSize: "11.5px !important",
				fontWeight: "500 !important",
				color: "#e57373 !important",
				lineHeight: 1.3,
				marginTop: "2px",
			},
		},
	},
	// InfraIcon styles. Props arrive as --infra-platform-color / --infra-tile-size / --infra-tile-radius;
	// state is driven by data-compromised / data-interactive on the root
	infraIcon: {
		root: {
			"--infra-accent": "var(--infra-platform-color)",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			position: "relative",
			boxSizing: "border-box",
			width: "var(--infra-tile-size)",
			height: "var(--infra-tile-size)",
			borderRadius: "var(--infra-tile-radius)",
			fontFamily: "Montserrat !important",
			backgroundColor: "#1e1e1e",
			border: "1.5px solid #424242",
			boxShadow:
				"0 1px 3px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.3)",
			cursor: "default",
			outline: "none",
			userSelect: "none",
			transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
			"&[data-compromised='true']": {
				"--infra-accent": "#e57373",
				backgroundColor: "rgba(239, 68, 68, 0.14)",
				borderColor: "#e57373",
				boxShadow:
					"0 0 0 1px rgba(239, 68, 68, 0.4), 0 4px 14px rgba(239, 68, 68, 0.3)",
			},
			"&[data-interactive='true']": { cursor: "pointer" },
			"&[data-interactive='true']:hover": {
				borderColor: "#757575",
				boxShadow: "0 6px 16px rgba(0, 0, 0, 0.6)",
				transform: "translateY(-1.5px)",
			},
			"&[data-interactive='true'][data-compromised='true']:hover": {
				borderColor: "#e57373",
				boxShadow:
					"0 0 0 1px rgba(239, 68, 68, 0.4), 0 4px 14px rgba(239, 68, 68, 0.3)",
			},
			"&[data-interactive='true']:active": {
				transform: "translateY(0px)",
			},
			"&:focus-visible, &[data-interactive='true'][data-compromised='true']:focus-visible":
				{
					boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.35)",
				},
			"& p, & span, & div, & text": {
				fontFamily: "Montserrat !important",
			},
			"& .infra-icon-glyph": {
				display: "block",
				flexShrink: 0,
				stroke: "var(--infra-accent)",
				transition: "stroke 0.18s ease",
				"& path, & line, & polygon, & polyline, & circle, & rect": {
					stroke: "var(--infra-accent) !important",
				},
			},
			"& .infra-icon-alert": {
				position: "absolute",
				top: "-3px",
				left: "-3px",
				width: "9px",
				height: "9px",
				borderRadius: "50%",
				backgroundColor: "#e57373",
				boxShadow: "0 0 0 2px #1e1e1e",
				animation: "pulse-alert 2s ease-in-out infinite",
				pointerEvents: "none",
			},
			"& .infra-icon-badge": {
				position: "absolute",
				top: "-5px",
				right: "-5px",
				backgroundColor: "var(--infra-accent)",
				color: "#FFFFFF !important",
				fontSize: "8.5px",
				fontWeight: 700,
				lineHeight: 1,
				padding: "2px 4px",
				borderRadius: "4px",
				textTransform: "uppercase",
				letterSpacing: "0.4px",
				boxShadow: "0 0 0 2px #1e1e1e, 0 2px 4px rgba(0,0,0,0.18)",
				userSelect: "none",
				pointerEvents: "none",
				fontVariantNumeric: "tabular-nums",
			},
			/* Attack path pulsing indicator */
			"@keyframes pulse-alert": {
				"0%": { transform: "scale(1)", opacity: 1 },
				"50%": { transform: "scale(1.2)", opacity: 0.75 },
				"100%": { transform: "scale(1)", opacity: 1 },
			},
		},
	},
	// Json2Html styles. `wrapper` is applied by Json2HtmlStyle, the rest by Json2Html
	json2Html: {
		wrapper: {
			width: "100%",
			fontFamily: "Montserrat !important",
			color: "#ffffff !important",
			".json-to-table table": {
				width: "100%",
				borderCollapse: "separate",
				borderSpacing: 0,
				fontSize: "12.5px",
				lineHeight: 1.5,
				fontFamily: "inherit",
				backgroundColor: "#1e1e1e",
				color: "#ffffff",
				borderRadius: "8px",
				overflow: "hidden",
				border: "1px solid #424242",
			},
			".json-to-table table table": {
				margin: "4px 0",
				border: "1px solid #2a2a2a",
				borderRadius: "6px",
			},
			".json-to-table th": {
				padding: "8px 12px",
				borderBottom: "1px solid #424242",
				borderRight: "1px solid #2a2a2a",
				fontWeight: 600,
				textAlign: "left",
				whiteSpace: "nowrap",
				transition: "background-color 0.15s ease",
				"&:last-child": { borderRight: "none" },
			},
			".json-to-table td": {
				padding: "8px 12px",
				borderBottom: "1px solid #2a2a2a",
				borderRight: "1px solid #2a2a2a",
				textAlign: "left",
				color: "#ffffff",
				backgroundColor: "transparent",
				transition: "background-color 0.15s ease",
				"&:last-child": { borderRight: "none" },
				"& p, & span, & div": {
					color: "#ffffff !important",
					fontFamily: "inherit !important",
					margin: 0,
				},
			},
			'.json-to-table th[scope="col"]': {
				backgroundColor: "#121212 !important",
				color: "#eeeeee !important",
				letterSpacing: "0.02em",
				borderBottom: "2px solid #424242",
				borderRight: "1px solid #424242",
			},
			'.json-to-table th[scope="row"]': {
				backgroundColor: "rgba(52, 119, 199, 0.16) !important",
				color: "#eeeeee !important",
				fontWeight: 600,
			},
			".json-to-table tr:nth-of-type(even) > td": {
				backgroundColor: "rgba(255, 255, 255, 0.03) !important",
			},
			".json-to-table tr:hover > td, .json-to-table tr:hover > th": {
				backgroundColor: "rgba(255, 255, 255, 0.06) !important",
			},
			".json-to-table caption": {
				captionSide: "bottom",
				textAlign: "right",
				padding: "6px 8px",
				fontSize: "11px",
				color: "#666666",
			},
			".json-to-table a": {
				color: "#3477C7 !important",
				textDecoration: "underline",
			},
		},
		empty: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "32px 16px",
			borderRadius: "10px",
			border: "1px dashed #424242",
			backgroundColor: "#121212",
			color: "#666666",
			fontFamily: "Montserrat !important",
			fontSize: "13px",
			fontWeight: 500,
		},
		root: {
			position: "relative",
			width: "100%",
			fontFamily: "Montserrat !important",
		},
		table: {
			overflowX: "auto",
			borderRadius: "10px",
			border: "1px solid #424242",
			backgroundColor: "#1e1e1e",
			".json-to-table": {
				width: "100%",
				borderCollapse: "collapse",
				fontFamily: "Montserrat !important",
				fontSize: "12.5px !important",
			},
			".json-to-table th, .json-to-table .json-to-table-key": {
				backgroundColor: "#121212 !important",
				color: "#bbbbbb !important",
				fontWeight: "600 !important",
				padding: "8px 12px !important",
				border: "1px solid #2a2a2a !important",
				textAlign: "left",
				whiteSpace: "nowrap",
				textTransform: "capitalize",
			},
			".json-to-table td, .json-to-table .json-to-table-value": {
				backgroundColor: "#1e1e1e !important",
				color: "#ffffff !important",
				padding: "8px 12px !important",
				border: "1px solid #2a2a2a !important",
				lineHeight: "1.5",
			},
			".json-to-table tr": {
				backgroundColor: "#1e1e1e !important",
				transition: "background-color 0.12s ease",
				"&:hover > td, &:hover > th": {
					backgroundColor: "rgba(255, 255, 255, 0.04) !important",
				},
			},
			".json-to-table table": {
				margin: "2px 0",
				border: "1px solid #2a2a2a !important",
				borderRadius: "6px",
				overflow: "hidden",
			},
			".json-to-table a": {
				color: "#3477C7 !important",
				textDecoration: "underline",
			},
			"& p, & span, & div": {
				color: "inherit",
				fontFamily: "inherit",
			},
		},
		actions: {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center",
			marginTop: "8px",
		},
		exportButton: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "6px",
			padding: "5px 10px",
			borderRadius: "6px",
			border: "1px solid #424242",
			backgroundColor: "#1e1e1e",
			color: "#bbbbbb",
			cursor: "pointer",
			outline: "none",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "rgba(255, 255, 255, 0.08)",
				color: "#3477C7",
				borderColor: "#3477C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(52, 119, 199, 0.25)",
			},
		},
	},
	// JsonElement styles. Rows use data-editing, primitive values use data-bool;
	// iconColors are passed to IconButton's iconColor prop
	jsonElement: {
		iconColors: {
			error: "#f44336",
			success: "#4caf50",
		},
		root: {
			padding: "16px",
			border: "1px solid #424242",
			borderRadius: "10px",
			backgroundColor: "#1e1e1e",
			height: "100%",
			width: "100%",
			boxSizing: "border-box",
			overflow: "hidden",
			fontFamily: "Montserrat !important",
			color: "#ffffff !important",
			boxShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
		},
		item: {
			display: "flex",
			flexDirection: "column",
			marginBottom: "6px",
		},
		row: {
			padding: "6px 10px",
			borderRadius: "6px",
			transition: "background-color 0.15s ease",
			"&:hover": { backgroundColor: "rgba(255, 255, 255, 0.04)" },
			"&[data-editing='true']:hover": { backgroundColor: "transparent" },
		},
		rowHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		key: {
			fontWeight: "600 !important",
			color: "#ffffff !important",
		},
		actions: {
			display: "flex",
			alignItems: "center",
			gap: "4px",
			flexShrink: 0,
		},
		arrayList: {
			padding: "8px 12px",
			margin: "6px 0 4px 12px",
			borderRadius: "6px",
			border: "1px solid #2a2a2a",
			backgroundColor: "#121212",
			display: "flex",
			flexDirection: "column",
			gap: "4px",
		},
		arrayItem: {
			display: "flex",
			gap: "8px",
			alignItems: "center",
		},
		bullet: {
			color: "#666666",
			lineHeight: 1,
		},
		arrayItemText: {
			fontSize: "12.5px !important",
			color: "#bbbbbb !important",
		},
		object: {
			padding: "6px 10px",
			borderRadius: "6px",
		},
		objectHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			marginBottom: "6px",
		},
		objectChildren: {
			paddingLeft: "14px",
			borderLeft: "2px solid #424242",
		},
		primitive: {
			display: "flex",
			gap: "10px",
			alignItems: "center",
			overflow: "hidden",
		},
		primitiveKey: {
			fontWeight: "600 !important",
			color: "#ffffff !important",
			whiteSpace: "nowrap",
		},
		primitiveValue: {
			color: "#bbbbbb !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			"&[data-bool='true']": { color: "#3477C7 !important" },
		},
		editRow: {
			display: "flex",
			gap: "12px",
			alignItems: "center",
			padding: "12px 14px",
			borderRadius: "8px",
			backgroundColor: "rgba(255, 255, 255, 0.02)",
			border: "1px solid #3477C7",
			boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
			marginBottom: "10px",
			width: "100%",
			boxSizing: "border-box",
			fontFamily: "Montserrat !important",
		},
		editKey: { flex: "0 0 160px" },
		editKeyLabel: {
			fontWeight: "600 !important",
			color: "#3477C7 !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
		editKeyInput: { flex: "1 1 50%", minWidth: 0 },
		editValue: {
			flex: "1 1 50%",
			minWidth: 0,
			display: "flex",
			gap: "8px",
			alignItems: "center",
		},
		editValueInput: { flex: 1, minWidth: 0 },
		textField: {
			"& .MuiInputLabel-root": {
				position: "static !important",
				transform: "none !important",
				backgroundColor: "transparent !important",
				padding: "0 !important",
				marginBottom: "4px !important",
				fontSize: "13px !important",
				fontWeight: "600 !important",
			},
			"& .MuiOutlinedInput-root": {
				"& .MuiOutlinedInput-notchedOutline": {
					top: 0,
					borderLeftWidth: "1px !important",
					borderLeftColor: "inherit !important",
					"& legend": { display: "none" },
				},
			},
		},
		addButton: {
			display: "inline-flex",
			alignItems: "center",
			gap: "6px",
			padding: "6px 10px",
			marginTop: "8px",
			borderRadius: "6px",
			border: "1px dashed #757575",
			backgroundColor: "transparent",
			color: "#3477C7",
			cursor: "pointer",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			outline: "none",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "rgba(255, 255, 255, 0.04)",
				borderColor: "#3477C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(52, 119, 199, 0.25)",
			},
		},
	},
	// DragAndDropJsonElement styles. Rows use data-editing, the drop zone uses data-drag-over;
	// iconColors are passed to IconButton's iconColor prop
	dragAndDropJsonElement: {
		iconColors: {
			error: "#f44336",
			success: "#4caf50",
		},
		root: {
			padding: "16px",
			border: "1px solid #424242",
			borderRadius: "10px",
			backgroundColor: "#1e1e1e",
			fontFamily: "Montserrat !important",
			color: "#ffffff !important",
			width: "100%",
			boxSizing: "border-box",
			boxShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
		},
		row: {
			display: "flex",
			flexDirection: "column",
			marginBottom: "6px",
			padding: "6px 10px",
			borderRadius: "6px",
			transition: "background-color 0.12s ease",
			"&:hover": { backgroundColor: "rgba(255, 255, 255, 0.03)" },
			"&[data-editing='true']:hover": { backgroundColor: "transparent" },
		},
		rowHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		key: {
			fontWeight: 600,
			color: "#ffffff !important",
			fontSize: "13px !important",
		},
		actions: {
			display: "flex",
			alignItems: "center",
			gap: "4px",
			flexShrink: 0,
		},
		arrayList: {
			padding: "6px 0 6px 16px",
			display: "flex",
			flexDirection: "column",
			gap: "4px",
		},
		arrayItem: {
			display: "flex",
			gap: "8px",
			alignItems: "center",
		},
		bullet: {
			color: "#bbbbbb",
			fontSize: "12px",
		},
		arrayItemText: {
			color: "#bbbbbb !important",
			fontSize: "12.5px !important",
		},
		addItem: {
			cursor: "pointer",
			display: "inline-flex",
			alignItems: "center",
			gap: "4px",
			marginTop: "4px",
			color: "#3477C7",
			fontSize: "12px",
			fontWeight: 500,
			width: "fit-content",
		},
		objectHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			marginBottom: "6px",
		},
		objectChildren: {
			paddingLeft: "14px",
			borderLeft: "2px solid #424242",
		},
		primitive: {
			display: "flex",
			gap: "10px",
			alignItems: "center",
			overflow: "hidden",
		},
		primitiveKey: {
			fontWeight: 600,
			color: "#ffffff !important",
			fontSize: "13px !important",
			whiteSpace: "nowrap",
		},
		primitiveValue: {
			color: "#bbbbbb !important",
			fontSize: "13px !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
		editRow: {
			display: "flex",
			gap: "12px",
			alignItems: "center",
			padding: "12px 14px",
			borderRadius: "8px",
			backgroundColor: "#121212",
			border: "1px solid #3477C7",
			boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
			marginBottom: "10px",
			width: "100%",
			boxSizing: "border-box",
			fontFamily: "Montserrat !important",
		},
		editField: { flex: 1, minWidth: 0 },
		editValue: {
			flex: 1,
			display: "flex",
			gap: "8px",
			alignItems: "center",
			minWidth: 0,
		},
		dropZone: {
			flex: 1,
			padding: "10px 14px",
			border: "1.5px dashed #616161",
			backgroundColor: "rgba(255, 255, 255, 0.03)",
			borderRadius: "6px",
			color: "#666666",
			cursor: "pointer",
			textAlign: "center",
			userSelect: "none",
			transition: "all 0.15s ease",
			"&[data-drag-over='true']": {
				borderColor: "#3477C7",
				backgroundColor: "rgba(52, 119, 199, 0.12)",
			},
			"&:hover": {
				borderColor: "#3477C7",
				color: "#bbbbbb",
			},
		},
		dropZoneText: {
			color: "inherit !important",
			fontSize: "12px !important",
			fontWeight: "500 !important",
		},
		droppedValue: {
			flex: 1,
			padding: "8px 12px",
			border: "1px solid #4caf50",
			backgroundColor: "rgba(34, 197, 94, 0.12)",
			borderRadius: "6px",
			textAlign: "center",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
		droppedValueText: {
			color: "#4caf50 !important",
			fontSize: "12px !important",
			fontWeight: "600 !important",
		},
		addButton: {
			display: "inline-flex",
			alignItems: "center",
			gap: "6px",
			padding: "6px 10px",
			marginTop: "6px",
			borderRadius: "6px",
			border: "1px dashed #616161",
			backgroundColor: "transparent",
			color: "#3477C7",
			cursor: "pointer",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			outline: "none",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "rgba(255, 255, 255, 0.03)",
				borderColor: "#3477C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(52, 119, 199, 0.25)",
			},
		},
	},
	// Label styles. The color prop arrives as --label-color; state is driven by
	// data-disabled / data-clickable on the root
	label: {
		root: {
			display: "inline-flex",
			alignItems: "center",
			gap: "4px",
			fontFamily: "Montserrat !important",
			fontSize: "13px",
			fontWeight: 600,
			lineHeight: 1.4,
			letterSpacing: "0.01em",
			color: "var(--label-color, #ffffff) !important",
			cursor: "default",
			userSelect: "none",
			transition: "color 0.15s ease",
			"&[data-clickable='true']": { cursor: "pointer" },
			"&[data-disabled='true']": {
				color: "#666666 !important",
				cursor: "not-allowed",
			},
		},
		required: {
			color: "#e57373 !important",
			fontSize: "14px",
			fontWeight: 700,
			lineHeight: 1,
		},
	},
	// ListForm styles. State is driven by data-disabled on the root and :disabled on the add button;
	// iconColors are passed to IconButton's iconColor prop
	listForm: {
		iconColors: {
			delete: "#e57373",
		},
		root: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "10px",
			fontFamily: "Montserrat !important",
			color: "#ffffff !important",
			opacity: 1,
			pointerEvents: "auto",
			transition: "opacity 0.2s ease",
			"&[data-disabled='true']": {
				opacity: 0.85,
				pointerEvents: "none",
			},
		},
		divider: {
			width: "100%",
			paddingBottom: "2px",
			"& .MuiInputLabel-root, & label": {
				position: "static !important",
				transform: "none !important",
				backgroundColor: "transparent !important",
				padding: "0 !important",
				marginBottom: "4px !important",
			},
		},
		rows: {
			display: "flex",
			flexDirection: "column",
			gap: "8px",
			width: "100%",
		},
		row: {
			position: "relative",
			display: "flex",
			alignItems: "center",
			gap: "12px",
			padding: "6px 0px",
			backgroundColor: "transparent",
			border: "none",
			boxShadow: "none",
			"& .MuiInputLabel-root, & label": {
				position: "static !important",
				transform: "none !important",
				backgroundColor: "transparent !important",
				padding: "0 !important",
				marginBottom: "4px !important",
				fontSize: "13px !important",
				fontWeight: "600 !important",
				whiteSpace: "nowrap !important",
			},
			"& .MuiOutlinedInput-root": {
				backgroundColor: "#1e1e1e",
				borderRadius: "8px",
				fontSize: "13.5px",
				"& input": {
					padding: "10px 14px",
					height: "20px",
				},
			},
			"& p, & span, & div": {
				fontFamily: "inherit",
			},
		},
		index: {
			flexShrink: 0,
			width: "22px",
			height: "22px",
			borderRadius: "6px",
			backgroundColor: "rgba(255, 255, 255, 0.06)",
			color: "#a3a3a3",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "11px",
			fontWeight: 700,
			userSelect: "none",
			fontVariantNumeric: "tabular-nums",
		},
		content: { flex: 1, minWidth: 0 },
		deleteSlot: {
			flexShrink: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			"&:hover button": {
				backgroundColor: "rgba(239, 68, 68, 0.12) !important",
			},
		},
		addBar: {
			display: "flex",
			justifyContent: "flex-end",
			paddingTop: "2px",
		},
		addButton: {
			display: "inline-flex",
			alignItems: "center",
			gap: "6px",
			padding: "6px 14px",
			borderRadius: "8px",
			border: "1.5px dashed #424242",
			backgroundColor: "transparent",
			color: "#3477C7 !important",
			fontSize: "12.5px",
			fontWeight: 600,
			fontFamily: "Montserrat !important",
			cursor: "pointer",
			outline: "none",
			userSelect: "none",
			transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
			"&:disabled": { cursor: "not-allowed" },
			"&:hover:not(:disabled)": {
				backgroundColor: "rgba(52, 119, 199, 0.08)",
				borderColor: "#3477C7",
				transform: "translateY(-1px)",
			},
			"&:active:not(:disabled)": {
				transform: "translateY(0px)",
			},
			"&:focus-visible:not(:disabled)": {
				borderColor: "#3477C7",
				boxShadow: "0 0 0 3px rgba(52, 119, 199, 0.25)",
			},
		},
		addIcon: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "14px",
			lineHeight: 1,
		},
	},
	// Message styles. State is driven by data-severity (error/success/warning/info)
	// and data-multiline on the alert
	message: {
		snackbar: {
			"&.MuiSnackbar-root": {
				bottom: "24px",
				right: "24px",
			},
		},
		alert: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
			minWidth: "280px",
			maxWidth: "460px",
			padding: "10px 14px",
			borderRadius: "10px",
			boxShadow:
				"0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.5) !important",
			color: "#ffffff !important",
			fontFamily: "Montserrat !important",
			fontSize: "13px",
			lineHeight: 1.5,
			letterSpacing: "0.01em",
			"&[data-severity='error']": {
				backgroundColor: "#d32f2f !important",
				border: "1px solid #f44336 !important",
			},
			"&[data-severity='success']": {
				backgroundColor: "#388e3c !important",
				border: "1px solid #4caf50 !important",
			},
			"&[data-severity='warning']": {
				backgroundColor: "#f57c00 !important",
				border: "1px solid #FFA200 !important",
			},
			"&[data-severity='info']": {
				backgroundColor: "#0b79d0 !important",
				border: "1px solid #3477C7 !important",
			},
			"& .MuiAlert-icon": {
				color: "#ffffff !important",
				fontSize: "20px",
				marginRight: "4px",
				padding: 0,
				opacity: 0.95,
			},
			"& .MuiAlert-message": {
				padding: 0,
				color: "#ffffff !important",
				fontFamily: "Montserrat !important",
				flex: 1,
				overflowWrap: "anywhere",
			},
			"& .message-line": {
				fontWeight: 400,
				fontFamily: "inherit",
			},
			"& .message-line:first-of-type": { fontWeight: 600 },
			"& .MuiAlert-action": {
				padding: 0,
				marginRight: "-4px",
				alignSelf: "center",
				"& .MuiIconButton-root": {
					color: "rgba(255, 255, 255, 0.8) !important",
					padding: "4px",
					borderRadius: "6px",
					transition: "all 0.15s ease",
					"&:hover": {
						backgroundColor: "rgba(255, 255, 255, 0.12)",
						color: "#ffffff !important",
					},
					"&:focus-visible": {
						outline: "none",
						boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.35)",
					},
				},
			},
			"&[data-multiline='true']": {
				alignItems: "flex-start",
				"& .MuiAlert-icon": { padding: "2px 0 0 0" },
				"& .MuiAlert-action": {
					padding: "0 0 0 8px",
					alignSelf: "flex-start",
				},
			},
		},
	},
	// MultiSelect styles. State is driven by data-disabled (root, option, drag handle)
	// and data-checked (option); iconColors are passed to IconButton's iconColor prop
	multiSelect: {
		iconColors: {
			remove: "#e57373",
		},
		root: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "12px",
			fontFamily: "Montserrat !important",
			color: "#ffffff !important",
			opacity: 1,
			transition: "opacity 0.2s ease",
			"&[data-disabled='true']": { opacity: 0.65 },
		},
		grid: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
			gap: "16px",
			width: "100%",
			boxSizing: "border-box",
		},
		panel: {
			display: "flex",
			flexDirection: "column",
			minHeight: "340px",
			height: "340px",
			borderRadius: "10px",
			backgroundColor: "#1e1e1e",
			border: "1px solid #424242",
			boxShadow: "none",
			overflow: "hidden",
			transition: "border-color 0.15s ease",
			"&:hover": { borderColor: "#38bdf8" },
		},
		searchHeader: {
			padding: "10px 12px",
			borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
			backgroundColor: "#121212",
		},
		optionList: {
			flex: 1,
			overflowY: "auto",
			padding: "6px 8px",
			display: "flex",
			flexDirection: "column",
			gap: "2px",
		},
		empty: {
			height: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "#666666",
			fontSize: "12.5px",
			fontStyle: "italic",
		},
		option: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
			padding: "6px 8px",
			borderRadius: "6px",
			cursor: "pointer",
			userSelect: "none",
			transition: "background-color 0.12s ease",
			backgroundColor: "transparent",
			"&[data-checked='true'], &:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.12)",
			},
			"&[data-disabled='true']": { cursor: "not-allowed" },
		},
		optionLabel: {
			fontSize: "13px !important",
			color: "#ffffff !important",
			lineHeight: 1.4,
		},
		selectedHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "10px 14px",
			borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
			backgroundColor: "#121212",
		},
		selectedTitle: {
			fontWeight: "600 !important",
			fontSize: "12.5px !important",
			color: "#bbbbbb !important",
		},
		badge: {
			padding: "1px 7px",
			borderRadius: "10px",
			backgroundColor: "rgba(56, 189, 248, 0.2)",
			color: "#38bdf8 !important",
			fontSize: "11px",
			fontWeight: 700,
			fontVariantNumeric: "tabular-nums",
		},
		selectedBody: {
			flex: 1,
			overflowY: "auto",
			padding: "8px",
		},
		sortable: {
			display: "flex",
			flexDirection: "column",
			gap: "6px",
		},
		item: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "6px 10px",
			borderRadius: "6px",
			backgroundColor: "rgba(56, 189, 248, 0.08)",
			border: "1px solid rgba(56, 189, 248, 0.2)",
			boxShadow: "none",
			gap: "8px",
			transition: "background-color 0.15s ease, border-color 0.15s ease",
			"&:hover": {
				backgroundColor: "rgba(56, 189, 248, 0.12)",
				borderColor: "#38bdf8",
			},
		},
		itemMain: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
			minWidth: 0,
			flex: 1,
		},
		dragHandle: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			cursor: "grab",
			color: "#757575",
			transition: "color 0.15s ease",
			padding: "2px",
			borderRadius: "4px",
			"&:hover": { color: "#38bdf8" },
			"&[data-disabled='true']": { cursor: "not-allowed" },
			"&:active": { cursor: "grabbing" },
		},
		itemLabel: {
			fontSize: "12.5px !important",
			fontWeight: "500 !important",
			color: "#ffffff !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
	},
	// Must mirror LightTheme.taskDragAndDropItem structure exactly
	taskDragAndDropItem: {
		// COLORS
		bg: DARK.colors.surface,
		border: DARK.colors.border,
		borderSelected: DARK.colors.primary,
		borderHover: DARK.colors.borderHover,
		textPrimary: "#f1f5f9",
		textSecondary: DARK.colors.textSecondary,
		textMuted: DARK.colors.textMuted,
		accent: DARK.colors.primaryLight,
		tagBg: "rgba(255, 255, 255, 0.08)",
		tagText: "#cbd5e1",
		divider: DARK.colors.border,
		assignHoverBg: "rgba(52, 119, 199, 0.2)",

		// PRIORITY
		priority: {
			criticalBg: "rgba(239, 68, 68, 0.16)",
			criticalText: "#f87171",
			highBg: "rgba(249, 115, 22, 0.16)",
			highText: "#fb923c",
			mediumBg: "rgba(234, 179, 8, 0.16)",
			mediumText: "#facc15",
			lowBg: "rgba(34, 197, 94, 0.16)",
			lowText: "#4ade80",
		},

		// SLA
		sla: {
			overdueBg: "rgba(239, 68, 68, 0.16)",
			overdueText: "#f87171",
			weekBg: "rgba(34, 197, 94, 0.16)",
			weekText: "#4ade80",
			normalBg: "rgba(255, 255, 255, 0.06)",
			normalText: "#cbd5e1",
		},

		// TYPOGRAPHY
		fontFamily:
			"'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		uidFontSize: "14px",
		uidFontWeight: 600,
		slaFontSize: "11px",
		slaFontWeight: 600,
		slaLineHeight: 1.2,
		taskTypeFontSize: "12.5px",
		taskTypeFontWeight: 500,
		summaryFontSize: "13.5px",
		summaryFontWeight: 600,
		summaryLineHeight: 1.4,
		tagFontSize: "11px",
		tagFontWeight: 500,
		priorityFontSize: "11px",
		priorityFontWeight: 700,
		priorityLetterSpacing: "0.02em",
		dueDateFontSize: "12px",
		dueDateFontWeight: 500,
		createdFontSize: "11.5px",
		assigneeFontSize: "12px",
		assigneeFontWeight: 500,

		// DIMENSIONS
		borderRadius: "10px",
		selectedBorderWidth: "1.5px",
		normalBorderWidth: "1px",
		contentPadding: "12px 14px",
		contentGap: "10px",
		headerGap: "8px",
		dragIconPadding: "2px",
		dragIconBorderRadius: "4px",
		slaPadding: "3px 8px",
		slaBorderRadius: "12px",
		taskTypePaddingBottom: "8px",
		tagGap: "5px",
		tagPaddingTop: "2px",
		tagPadding: "2px 7px",
		tagBorderRadius: "5px",
		priorityPadding: "2px 8px",
		priorityBorderRadius: "5px",
		footerGap: "8px",
		assigneePaddingTop: "2px",
		assigneeGap: "5px",
		assigneePadding: "3px 8px",
		assigneeBorderRadius: "14px",
		assignButtonSize: "26px",
		assignButtonBorderRadius: "50%",
		dividerBorderWidth: "1px",

		// SHADOWS
		shadow: DARK.shadows.card,
		shadowHover: "0 4px 14px rgba(0, 0, 0, 0.65)",
		selectedShadow: "rgba(52, 119, 199, 0.3)",
		selectedShadowPrefix: "0 0 0 3px",

		// TRANSITIONS
		cardTransition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
		iconTransition: "color 0.15s ease",
		uidTransition: "opacity 0.15s ease",
		assignTransition: "all 0.15s ease",

		// TRANSFORMS / HOVER
		cardHoverTransform: "translateY(-1px)",
		assignHoverTransform: "scale(1.05)",
		hoverOpacity: 0.85,

		// FLEX / LAYOUT
		boxSizing: "border-box",
		userSelect: "none",
		displayFlex: "flex",
		displayInlineFlex: "inline-flex",
		flexDirectionRow: "row",
		flexDirectionColumn: "column",
		alignItemsCenter: "center",
		justifyContentSpaceBetween: "space-between",
		justifyContentCenter: "center",
		flexWrap: "wrap",
		widthFull: "100%",
		minWidthZero: 0,

		// TEXT
		whiteSpaceNowrap: "nowrap",
		overflowHidden: "hidden",
		textOverflowEllipsis: "ellipsis",
		cursorGrab: "grab",
		cursorPointer: "pointer",
		inherit: "inherit",
		summaryDisplay: "-webkit-box",
		summaryBoxOrient: "vertical",
		summaryLineClamp: 2,

		// CONTENT / STATUS
		defaultSlaText: "0m",
		fulfilledPrefix: "Fulfilled in ",
		defaultPriority: "LOW",
		createdPrefix: "Created ",
		assignUserTitle: "Assign User",
		resolveStatus: "RESOLVE",
		closeStatus: "CLOSE",

		// CALCULATION VALUES
		msPerWeek: 7 * 24 * 60 * 60 * 1000,
		minimumDuration: 0,
	},

	// Widget styles, one sub-block per file: grid (WidgetStyle), display, sender, receiver,
	// dashboard and chart (HighChart). Chart series/axis colours stay in HighChartScripts.ts
	widget: {
		grid: {
			width: "100%",
			".react-grid-layout": {
				position: "relative",
				transition: "height 200ms ease",
			},
			".react-grid-item": {
				transition: "all 200ms ease",
				transitionProperty: "left, top",
			},
			".react-grid-item img": {
				pointerEvents: "none",
				userSelect: "none",
			},
			".react-grid-item .cssTransforms": {
				transitionProperty: "transform",
			},
			".react-grid-item.resizing": {
				zIndex: 1,
				willChange: "width, height",
			},
			".react-grid-item.react-draggable-dragging": {
				transition: "none",
				zIndex: 3,
				willChange: "transform",
			},
			".react-grid-item.dropping": {
				visibility: "hidden",
			},
			".react-grid-item .react-grid-placeholder": {
				background: "red",
				opacity: "0.2",
				transitionDuration: "100ms",
				zIndex: 2,
				userSelect: "none",
			},
			".react-grid-item > .react-resizable-handle": {
				position: "absolute",
				width: "20px",
				height: "20px",
			},
			".react-grid-item > .react-resizable-handle::after": {
				content: '""',
				position: "absolute",
				right: "3px",
				bottom: "3px",
				width: "5px",
				height: "5px",
				borderRight: "2px solid rgba(0, 0, 0, 0.4)",
				borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
			},
			".react-resizable-hide > .react-resizable-handle": {
				display: "none",
			},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-sw":
				{
					bottom: "3px",
					left: "3px",
					cursor: "sw-resize",
					transform: "rotate(90deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-se":
				{ bottom: "3px", right: "3px", cursor: "se-resize" },
			".react-grid-item > .react-resizable-handle.react-resizable-handle-nw":
				{
					top: "3px",
					left: "3px",
					cursor: "nw-resize",
					transform: "rotate(180deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-ne":
				{
					top: "3px",
					right: "3px",
					cursor: "ne-resize",
					transform: "rotate(270deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-w":
				{
					top: "50%",
					marginTop: "-10px",
					cursor: "ew-resize",
					left: "3px",
					transform: "rotate(135deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-e":
				{
					top: "50%",
					marginTop: "-10px",
					cursor: "ew-resize",
					right: "3px",
					transform: "rotate(315deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-n":
				{
					left: "50%",
					marginLeft: "-10px",
					cursor: "ns-resize",
					top: "3px",
					transform: "rotate(225deg)",
				},
			".react-grid-item > .react-resizable-handle.react-resizable-handle-s":
				{
					left: "50%",
					marginLeft: "-10px",
					cursor: "ns-resize",
					bottom: "3px",
					transform: "rotate(45deg)",
					color: "red",
				},
		},
		display: {
			card: {
				border: "1px solid #424242",
				borderRadius: "12px",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
				overflow: "hidden",
				fontFamily: "Montserrat !important",
				transition: "all 0.2s ease",
				display: "flex",
				flexDirection: "column",
				"& > *": {
					backgroundColor: "transparent !important",
					flex: 1,
					width: "100%",
					height: "100%",
				},
				"&:hover": {
					borderColor: "#616161",
					boxShadow: "0 4px 14px rgba(0, 0, 0, 0.65)",
				},
			},
		},
		sender: {
			list: { display: "flex", flexDirection: "column", gap: "8px" },
			item: {
				borderRadius: "10px",
				fontFamily: "Montserrat",
				color: "#ffffff",
				width: "100%",
				display: "flex",
				alignItems: "center",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
				padding: "0 12px",
				height: "44px",
				boxSizing: "border-box",
				backgroundColor: "#1e1e1e",
				border: "1px solid #424242",
				cursor: "grab",
				transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					backgroundColor: "rgba(52, 119, 199, 0.15)",
					borderColor: "#3477C7",
					transform: "translateY(-1px)",
				},
				"&:active": {
					cursor: "grabbing",
					transform: "scale(0.99)",
				},
			},
			dragIcon: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingRight: "10px",
				color: "inherit",
				opacity: 0.65,
			},
			label: {
				flex: 1,
				minWidth: 0,
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				fontSize: "13.5px",
				fontWeight: 500,
			},
			typeIcon: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginLeft: "8px",
				flexShrink: 0,
			},
			rotatedIcon: { transform: "rotate(89deg)" },
		},
		receiver: {
			root: {
				width: "100%",
				minHeight: "100px",
				height: "100%",
				paddingBottom: "100px",
				"& > .react-grid-layout": { minHeight: "100%" },
			},
			card: {
				border: "1px solid #424242",
				borderRadius: "14px",
				backgroundColor: "#1e1e1e",
				boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				padding: "16px",
				boxSizing: "border-box",
				transition: "box-shadow 0.2s ease, border-color 0.2s ease",
				"&:hover": {
					borderColor: "#3477C7",
					boxShadow: "0 6px 24px -2px rgba(0, 0, 0, 0.8)",
				},
			},
			content: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "12px",
				maxWidth: "calc(100% - 72px)",
				overflow: "hidden",
			},
			iconBadge: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "44px",
				height: "44px",
				borderRadius: "12px",
				flexShrink: 0,
			},
			title: {
				fontSize: "14px",
				fontWeight: 600,
				color: "#f8fafc",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				margin: 0,
			},
			editButton: {
				margin: "8px",
				cursor: "pointer",
				fontSize: "15px",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: 10,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				color: "#94a3b8",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "rgba(52, 119, 199, 0.15)",
					color: "#3477C7",
				},
			},
			removeButton: {
				margin: "8px",
				cursor: "pointer",
				fontSize: "15px",
				position: "absolute",
				top: 0,
				right: 0,
				zIndex: 10,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				color: "#ef4444",
				backgroundColor: "rgba(239, 68, 68, 0.15)",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "rgba(239, 68, 68, 0.25)",
					color: "#f87171",
				},
			},
			colorSchemes: [
				{ bg: "rgba(249, 115, 22, 0.15)", color: "#f97316" }, // Orange
				{ bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }, // Purple
				{ bg: "rgba(2, 132, 199, 0.15)", color: "#0284c7" }, // Blue
				{ bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e" }, // Green
				{ bg: "rgba(113, 113, 122, 0.15)", color: "#71717a" }, // Gray
			],
		},
		dashboard: {
			iframe: {
				height: "calc(100% - 50px)",
				padding: "5px",
				"&[data-has-date='true']": { height: "calc(100% - 75px)" },
			},
			fullScreenDate: { padding: "10px" },
			fullScreenDateText: { fontWeight: 500, lineHeight: 1 },
			header: {
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#000000",
				padding: "10px",
				borderRadius: "5px",
			},
			headerText: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "5px",
			},
			title: {
				fontWeight: 500,
				lineHeight: 1,
				fontSize: "16px",
				color: "#ffffff",
			},
			subtitle: {
				fontWeight: 300,
				lineHeight: 1,
				fontSize: "12px",
				color: "#ffffff",
			},
			fullScreenButton: { cursor: "pointer", color: "#ffffff" },
			aggregate: {
				width: "100%",
				height: "100%",
				position: "relative",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "stretch",
				backgroundColor: "#18181b",
				borderRadius: "16px",
				padding: "18px 20px",
				boxSizing: "border-box",
				transition: "all 0.2s ease",
			},
			aggregateContent: {
				display: "flex",
				width: "100%",
				height: "100%",
				gap: "18px",
				alignItems: "flex-start",
			},
			aggregateLeftSection: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				height: "100%",
				flexShrink: 0,
			},
			aggregateIconBadge: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "44px",
				height: "44px",
				borderRadius: "12px",
				flexShrink: 0,
			},
			aggregateTrend: {
				display: "flex",
				alignItems: "center",
				gap: "4px",
				fontSize: "12px",
				fontWeight: 600,
				color: "#4ade80",
				marginTop: "12px",
				whiteSpace: "nowrap",
			},
			aggregateTrendIcon: {
				display: "inline-flex",
				fontSize: "13px",
			},
			colorSchemes: [
				{ bg: "rgba(249, 115, 22, 0.15)", color: "#f97316" }, // Orange
				{ bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }, // Purple
				{ bg: "rgba(2, 132, 199, 0.15)", color: "#38bdf8" }, // Blue
				{ bg: "rgba(249, 115, 22, 0.15)", color: "#fb923c" }, // Amber
				{ bg: "rgba(34, 197, 94, 0.15)", color: "#4ade80" }, // Green
				{ bg: "rgba(113, 113, 122, 0.15)", color: "#a1a1aa" }, // Gray
			],
			aggregateDatePicker: {
				position: "absolute",
				right: "12px",
				top: "12px",
			},
			aggregateArrow: {
				position: "absolute",
				right: "18px",
				top: "18px",
				cursor: "pointer",
				color: "#94a3b8",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				transition: "all 0.15s ease",
				"&:hover": {
					color: "#f8fafc",
					backgroundColor: "rgba(255, 255, 255, 0.08)",
				},
			},
			aggregateBody: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				flex: 1,
				minWidth: 0,
				marginLeft: "18px",
			},
			aggregateLink: { cursor: "pointer" },
			aggregateValue: {
				fontWeight: 700,
				fontSize: "1rem",
				lineHeight: 1.1,
				color: "#f8fafc",
				letterSpacing: "-0.02em",
				fontFamily: "Montserrat",
			},
			aggregateTitle: {
				fontWeight: 600,
				fontSize: "0.5rem",
				lineHeight: 1.3,
				color: "#f8fafc",
				marginTop: "6px",
				fontFamily: "Montserrat",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
			},
			aggregateRange: {
				fontWeight: 400,
				fontSize: "12px",
				lineHeight: 1.3,
				color: "#94a3b8",
				marginTop: "2px",
				fontFamily: "Montserrat",
			},
		},
		chart: {
			card: {
				height: "100%",
				width: "100%",
				minHeight: 0,
				minWidth: 0,
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#18181b",
				border: "1px solid #27272a",
				borderRadius: "16px",
				overflow: "hidden",
				boxSizing: "border-box",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
				fontFamily: "Montserrat",
			},
			header: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "#18181b",
				padding: "18px 22px 10px 22px",
				flexShrink: 0,
			},
			headerText: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "2px",
				minWidth: 0,
			},
			title: {
				fontWeight: 600,
				fontSize: "15px",
				color: "#ffffff",
				letterSpacing: "-0.01em",
				lineHeight: 1.2,
				fontFamily: "Montserrat",
			},
			subtitle: {
				fontWeight: 400,
				fontSize: "12px",
				color: "#94a3b8",
				lineHeight: 1.2,
				fontFamily: "Montserrat",
			},
			actions: {
				display: "flex",
				gap: "8px",
				alignItems: "center",
				flexShrink: 0,
			},
			headerActionButton: {
				display: "inline-flex",
				alignItems: "center",
				gap: "6px",
				padding: "5px 12px",
				fontSize: "12px",
				fontWeight: 500,
				borderRadius: "8px",
				border: "1px solid #3f3f46",
				backgroundColor: "#27272a",
				color: "#f8fafc",
				cursor: "pointer",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#3f3f46",
					borderColor: "#52525b",
				},
			},
			headerFilterButton: {
				display: "inline-flex",
				alignItems: "center",
				gap: "4px",
				padding: "5px 10px",
				fontSize: "12px",
				fontWeight: 500,
				borderRadius: "8px",
				border: "1px solid #3f3f46",
				backgroundColor: "#27272a",
				color: "#f8fafc",
				cursor: "pointer",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#3f3f46",
					borderColor: "#52525b",
				},
			},
			fullScreenButton: {
				cursor: "pointer",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "30px",
				height: "30px",
				borderRadius: "8px",
				color: "#94a3b8",
				backgroundColor: "#27272a",
				border: "1px solid #3f3f46",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#3f3f46",
					color: "#f8fafc",
					borderColor: "#52525b",
				},
			},
			fullScreen: {
				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "100%",
				minHeight: 0,
				backgroundColor: "#1e1e1e",
				boxSizing: "border-box",
				overflow: "hidden",
			},
			fullScreenHeaderWrap: { flexShrink: 0, width: "100%" },
			fullScreenHeader: {
				padding: "14px 18px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#121212",
				borderBottom: "1px solid #424242",
				boxSizing: "border-box",
			},
			fullScreenDate: {
				fontWeight: 500,
				fontSize: "13px",
				color: "#bbbbbb",
				lineHeight: 1.2,
				fontFamily: "Montserrat",
			},
			body: {
				flex: 1,
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				padding: 0,
			},
			chartArea: {
				flex: 1,
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			},
			chartWrap: {
				flex: 1,
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				display: "flex",
				overflow: "hidden",
				"& .widget-chart-container": {
					width: "100%",
					height: "100%",
					flex: 1,
					minWidth: 0,
					minHeight: 0,
					fontFamily: "Montserrat",
				},
			},
			loader: {
				flex: 1,
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minWidth: 0,
				minHeight: 0,
			},
		},
		securityOperationsDashboard: {
			container: {
				padding: "24px 32px",
				backgroundColor: "#090d16",
				minHeight: "100vh",
				boxSizing: "border-box",
				fontFamily: "Montserrat, sans-serif",
			},
			header: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: "20px",
			},
			title: {
				fontSize: "14px",
				fontWeight: 700,
				letterSpacing: "0.04em",
				textTransform: "uppercase",
				color: "#f8fafc",
			},
			subtitle: {
				fontSize: "13px",
				fontWeight: 400,
				color: "#94a3b8",
				marginTop: "4px",
			},
			headerActions: {
				display: "flex",
				gap: "10px",
				alignItems: "center",
			},
			dateButton: {
				display: "inline-flex",
				alignItems: "center",
				gap: "8px",
				padding: "6px 14px",
				borderRadius: "10px",
				backgroundColor: "#18181b",
				border: "1px solid #27272a",
				fontSize: "13px",
				fontWeight: 500,
				color: "#f8fafc",
				cursor: "pointer",
			},
			dateArrow: {
				fontSize: "10px",
				color: "#94a3b8",
			},
			refreshButton: {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "34px",
				height: "34px",
				borderRadius: "10px",
				backgroundColor: "#18181b",
				border: "1px solid #27272a",
				color: "#94a3b8",
				cursor: "pointer",
			},
		},
	},
};

export default DarkTheme;
