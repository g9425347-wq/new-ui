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

const LightTheme = {
	name: "Light Theme",

	palette: {
		mode: "light",

		primary: {
			main: "#0d3c61",

			dark: "#0d3c61",

			light: "#1363a1",

			contrastText: "#ffffff",

			contrastTextAlt: "#FFD300",

			disabled: "#e0e0e0",
		},

		secondary: {
			main: "#e1f7fd",

			dark: "#0d3c61",

			light: "#a3adc4",

			contrastText: "#000000",
		},

		background: {
			default: "#ffffff",

			paper: "#f5f5f5",

			dark: "#ffffff",
		},

		text: {
			primary: "#000000",

			secondary: "#555555",

			disabled: "#999999",
		},

		shadow: {
			light: "#bdbdbd",

			dark: "#616161",
		},

		priority: {
			critical: "#d9534f",

			high: "#f57c00",

			medium: "#2563eb",

			low: "#51C926",
		},

		error: {
			main: "#E93946",

			dark: "#d32f2f",

			light: "#e57373",

			contrastText: "#ffffff",
		},

		success: {
			main: "#51C926",

			dark: "#388e3c",

			light: "#81c784",

			contrastText: "#ffffff",
		},

		info: {
			main: "#006ba6",

			dark: "#0b79d0",

			light: "#bbdefb",

			contrastText: "#ffffff",
		},

		warning: {
			main: "#FFA200",

			dark: "#f57c00",

			light: "#ffb74d",

			contrastText: "#ffffff",
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
			background: "#202833",

			contrastText: "#ffffff",
		},

		sideMenu: {
			background: "#202833",

			contrastText: "#ffffff",

			border: "#ffffff59",
		},

		loader: {
			background: "#ffffff",

			overlayOpacity: 0.1,

			zIndex: 9999,

			contentZIndex: 10000,
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

		divider: "#000000",

		action: {
			active: "rgba(0,107,166,100)",

			hover: "rgba(238,249,255,100)",

			hoverOpacity: 0.04,

			selected: "rgba(0,107,166,100)",

			selectedOpacity: 0.08,

			disabled: "rgba(250,250,250,100)",

			disabledBackground: "rgba(250,250,250,100)",

			disabledOpacity: 0.38,

			focus: "rgba(0,107,166,100)",

			activatedOpacity: 0.12,
		},

		accordion: accordionTheme.light,

		advancedCell: advancedCellTheme,

		assetGraph: assetGraphTheme.light,

		attackPath: attackPathTheme.light,

		attackPathGraph: attackPathGraphTheme.light,

		banner: bannerTheme.light,

		base: baseTheme.light,

		basicTable: basicTableTheme.light,

		box: boxTheme.light,

		button: buttonTheme.light,

		calendar: calendarTheme.light,

		chatBot: chatBotTheme.light,

		chatMessage: chatMessageTheme.light,

		robotAgentFace: robotAgentFaceTheme.light,

		groupBy: groupByTheme.light,

		htmlEditor: htmlEditorTheme.light,

		hyperlink: hyperlinkTheme.light,

		checkbox: {
			textPrimary: "#0F172A",
			textDisabled: "#94A3B8",
			borderDefault: "#CBD5E1",
			borderHover: "#94A3B8",
			primary: "#0284C7",
			primaryHover: "#0369A1",
			hoverGlow: "#F0F9FF",
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
					color: disabled ? "#94A3B8" : "#0F172A",
					letterSpacing: "0.01em",
					transition: "color 0.15s ease",
				},
				"&:hover": {
					"& .MuiFormControlLabel-label": {
						color: disabled ? "#94A3B8" : "#0284C7",
					},
				},
			}),
			checkboxStyle: (disabled: boolean) => ({
				padding: "6px",
				color: "#CBD5E1",
				borderRadius: "6px",
				transition: "background-color 0.15s ease, color 0.15s ease",
				"&:hover": {
					backgroundColor: disabled ? "transparent" : "#F0F9FF",
					color: disabled ? "#CBD5E1" : "#94A3B8",
				},
				"&.Mui-checked": {
					color: "#0284C7 !important",
					"&:hover": {
						backgroundColor: "#F0F9FF",
						color: "#0369A1 !important",
					},
				},
				"&.Mui-disabled": {
					color: "#CBD5E1 !important",
					opacity: 0.6,
				},
				"& .MuiSvgIcon-root": {
					fontSize: "18px",
				},
			}),
		},

		confirm: {
			bgCard: "#FFFFFF",
			border: "#E2E8F0",
			textPrimary: "#0F172A",
			shadow: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)",
			backdrop: "rgba(15, 23, 42, 0.25)",
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
					backgroundColor: "rgba(15, 23, 42, 0.25)",
					backdropFilter: "blur(2px)",
				},
				"& .MuiDialog-paper": {
					backgroundColor: "#FFFFFF !important",
					borderRadius: "12px !important",
					border: "1px solid #E2E8F0 !important",
					boxShadow:
						"0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05) !important",
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
				color: "#0F172A",
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
			bgInput: "#FFFFFF",
			bgMuted: "#F8FAFC",
			border: "#CBD5E1",
			borderDisabled: "#CBD5E1",
			borderHover: "#94A3B8",
			borderFocus: "#0284C7",
			focusRing: "rgba(2, 132, 199, 0.12)",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			textDisabled: "#94A3B8",
			textMuted: "#94A3B8",
			labelText: "#475569",
			labelDisabled: "#94A3B8",
			labelError: "#EF4444",
			accent: "#0284C7",
			accentHover: "#F0F9FF",
			error: "#EF4444",
			errorBg: "#FEF2F2",
			errorRing: "rgba(239, 68, 68, 0.12)",
			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
			dropdownShadow:
				"0 12px 28px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.05)",
			popupBg: "#FFFFFF",
			popupBackground: "#FFFFFF",
			popupBorder: "#E2E8F0",
			popupShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.15)",
			selectedDayBg: "#0284C7",
			selectedDayText: "#FFFFFF",
			hoverDayBg: "#F0F9FF",
			todayBorder: "#0284C7",
			requiredAsteriskStyle: {
				color: "#0284C7",
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
						_disabled ? "#94A3B8" : _error ? "#EF4444" : "#475569"
					} !important`,
					backgroundColor: "transparent",
					padding: "0",
					marginBottom: "4px",
					zIndex: 1,
					userSelect: "none" as const,
					transition: "color 0.15s ease",
				},
				"& .MuiOutlinedInput-root": {
					backgroundColor: _disabled ? "#F8FAFC" : "#FFFFFF",
					borderRadius: "8px",
					fontSize: "13.5px",
					fontWeight: 400,
					color: _disabled ? "#94A3B8" : "#0F172A",
					boxShadow: _disabled
						? "0 1px 2px 0 rgba(15, 23, 42, 0.04)"
						: undefined,
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, color 0.15s ease",
					cursor: _disabled ? "not-allowed" : "pointer",
					"& legend": { display: "none" },
					"& input": {
						padding: "10px 14px",
						height: "20px",
						cursor: _disabled ? "not-allowed" : "pointer",
						WebkitTextFillColor: _disabled ? "#94A3B8" : "#0F172A",
					},
					"& .MuiIconButton-root": {
						color: _disabled ? "#94A3B8" : "#0284C7",
						padding: "6px",
						marginRight: "4px",
						transition:
							"color 0.15s ease, background-color 0.15s ease",
						"&:hover": { backgroundColor: "#F0F9FF" },
					},
					"& .MuiOutlinedInput-notchedOutline": {
						top: 0,
						borderRadius: "8px",
						borderColor: `${
							_disabled
								? "#CBD5E1"
								: _error
								? "#EF4444"
								: "#CBD5E1"
						} !important`,
						borderWidth: "1px !important",
						transition: "border-color 0.15s ease",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: `${
							_disabled
								? "#CBD5E1"
								: _error
								? "#EF4444"
								: "#94A3B8"
						} !important`,
					},
					"&.Mui-focused": {
						boxShadow: `0 0 0 2px ${
							_error
								? "rgba(239, 68, 68, 0.12)"
								: "rgba(2, 132, 199, 0.12)"
						}`,
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: `${
								_error ? "#EF4444" : "#0284C7"
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
					color: _error ? "#EF4444" : "#475569",
				},
			}),
		},

		dateRangePicker: {
			bgCard: "#FFFFFF",
			bgSidebar: "#F8FAFC",
			border: "#E2E8F0",
			borderSubtle: "#F1F5F9",
			borderHover: "#CBD5E1",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			textMuted: "#94A3B8",
			accentBlue: "#0284C7",
			accentHover: "#F0F9FF",
			accentBorder: "#BAE6FD",
			shadowSm: "0 1px 2px rgba(15, 23, 42, 0.04)",
			shadow: "0 10px 25px -4px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)",
			triggerBtnStyle: (isOpen: boolean) => ({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "34px",
				height: "34px",
				borderRadius: "8px",
				cursor: "pointer",
				backgroundColor: isOpen ? "#F0F9FF" : "#FFFFFF",
				border: `1px solid ${isOpen ? "#0284C7" : "#E2E8F0"}`,
				color: isOpen ? "#0284C7" : "#64748B",
				boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#F0F9FF",
					borderColor: "#CBD5E1",
					color: "#0284C7",
				},
			}),
			popoverPaperStyle: {
				mt: "8px",
				backgroundColor: "#FFFFFF",
				borderRadius: "12px",
				border: "1px solid #E2E8F0",
				boxShadow:
					"0 10px 25px -4px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)",
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
				borderRight: "1px solid #E2E8F0",
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
			bgInput: "#FFFFFF",
			bgMuted: "#F8FAFC",
			border: "#CBD5E1",
			borderDisabled: "#CBD5E1",
			borderHover: "#94A3B8",
			borderFocus: "#0284C7",
			focusRing: "rgba(2, 132, 199, 0.12)",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			textDisabled: "#94A3B8",
			textMuted: "#94A3B8",
			labelText: "#475569",
			labelDisabled: "#94A3B8",
			labelError: "#EF4444",
			accent: "#0284C7",
			accentHover: "#F0F9FF",
			error: "#EF4444",
			errorBg: "#FEF2F2",
			errorRing: "rgba(239, 68, 68, 0.12)",
			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
			dropdownShadow:
				"0 12px 28px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.05)",
			popupBg: "#FFFFFF",
			popupBorder: "#E2E8F0",
			popupShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.15)",
			requiredAsteriskStyle: {
				color: "#0284C7",
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
						_disabled ? "#94A3B8" : _error ? "#EF4444" : "#475569"
					} !important`,
					backgroundColor: "transparent",
					padding: "0",
					marginBottom: "4px",
					zIndex: 1,
					userSelect: "none" as const,
					transition: "color 0.15s ease",
				},
				"& .MuiOutlinedInput-root": {
					backgroundColor: _disabled ? "#F8FAFC" : "#FFFFFF",
					borderRadius: "8px",
					fontSize: "13.5px",
					fontWeight: 400,
					color: _disabled ? "#94A3B8" : "#0F172A",
					boxShadow: _disabled
						? "0 1px 2px 0 rgba(15, 23, 42, 0.04)"
						: undefined,
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, color 0.15s ease",
					cursor: _disabled ? "not-allowed" : "pointer",
					"& legend": { display: "none" },
					"& input": {
						padding: "10px 14px",
						height: "20px",
						cursor: _disabled ? "not-allowed" : "pointer",
						WebkitTextFillColor: _disabled ? "#94A3B8" : "#0F172A",
					},
					"& .MuiIconButton-root": {
						color: _disabled ? "#94A3B8" : "#0284C7",
						padding: "6px",
						marginRight: "4px",
						transition:
							"color 0.15s ease, background-color 0.15s ease",
						"&:hover": { backgroundColor: "#F0F9FF" },
					},
					"& .MuiOutlinedInput-notchedOutline": {
						top: 0,
						borderRadius: "8px",
						borderColor: `${
							_disabled
								? "#CBD5E1"
								: _error
								? "#EF4444"
								: "#CBD5E1"
						} !important`,
						borderWidth: "1px !important",
						transition: "border-color 0.15s ease",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: `${
							_disabled
								? "#CBD5E1"
								: _error
								? "#EF4444"
								: "#94A3B8"
						} !important`,
					},
					"&.Mui-focused": {
						boxShadow: `0 0 0 2px ${
							_error
								? "rgba(239, 68, 68, 0.12)"
								: "rgba(2, 132, 199, 0.12)"
						}`,
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: `${
								_error ? "#EF4444" : "#0284C7"
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
					color: _error ? "#EF4444" : "#475569",
				},
			}),
		},

		dialog: {
			bgCard: "#FFFFFF",
			bgHeader: "#FFFFFF",
			bgSubHeader: "#F8FAFC",
			border: "#E2E8F0",
			borderSubtle: "#F1F5F9",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			textMuted: "#94A3B8",
			accent: "#0284C7",
			accentHover: "#F0F9FF",
			accentBadge: "#E0F2FE7D",
			shadow: "0 25px 50px -12px rgba(15, 23, 42, 0.15)",
			backdrop: "rgba(15, 23, 42, 0.35)",
			borderRadius: "12px",
			paperStyle: (fullScreen: boolean, fontFamily?: string) => ({
				"& .MuiBackdrop-root": {
					backgroundColor: "rgba(15, 23, 42, 0.35)",
					backdropFilter: "blur(4px)",
				},
				"& .MuiDialog-paper": {
					borderRadius: fullScreen
						? "0px !important"
						: "14px !important",
					backgroundColor: "#FFFFFF !important",
					border: fullScreen
						? "none"
						: "1px solid #E2E8F0 !important",
					boxShadow: fullScreen
						? "none"
						: "0 25px 50px -12px rgba(15, 23, 42, 0.15) !important",
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
				backgroundColor: "#FFFFFF !important",
				color: "#0F172A !important",
				boxShadow: "none !important",
				borderBottom: "1px solid #E2E8F0 !important",
				transition:
					"background-color 0.2s ease, border-color 0.2s ease",
				"& .MuiToolbar-root": {
					minHeight: "52px !important",
					paddingLeft: "18px !important",
					paddingRight: "14px !important",
				},
			},
			titleStyle: {
				color: "#0F172A !important",
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
			labelColor: "#0d3c61",
			lineColor: "#e0e0e0",
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
				color: "#0d3c61",
				textAlign: "left" as const,
				textTransform: "uppercase" as const,
				whiteSpace: "nowrap" as const,
			}),
			lineStyle: {
				width: "100%",
				backgroundColor: "#e0e0e0",
				height: "1px",
			},
		},

		dropdown: {
			bgInput: "#FFFFFF",
			bgDisabled: "#F8FAFC",
			bgHover: "#F0F9FF",
			bgOptionSelected: "#E0F2FE7D",
			border: "#CBD5E1",
			borderDisabled: "#CBD5E1",
			borderHover: "#94A3B8",
			borderFocus: "#0284C7",
			focusRing: "0 0 0 2px rgba(2, 132, 199, 0.12)",
			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.12)",
			textPrimary: "#0F172A",
			textSecondary: "#475569",
			textDisabled: "#94A3B8",
			textMuted: "#94A3B8",
			labelText: "#475569",
			labelDisabled: "#94A3B8",
			labelError: "#EF4444",
			accent: "#0284C7",
			accentHover: "#F0F9FF",
			error: "#EF4444",
			onlineDot: "#16A34A",
			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
			menuShadow:
				"0 10px 25px -4px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)",
			multiValueBg: "#F0F9FF",
			multiValueBorder: "#BAE6FD",
			multiValueRemoveHoverBg: "#E0F2FE7D",
			multiValueRemoveHoverColor: "#0369A1",
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
					backgroundColor: "#FFFFFF",
					borderRadius: "10px",
					border: "1px solid #CBD5E1",
					boxShadow:
						"0 10px 25px -4px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)",
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
					color: state.isSelected ? "#0284C7" : "#0F172A",
					backgroundColor: state.isSelected
						? "#E0F2FE7D"
						: state.isFocused
						? "#F0F9FF"
						: "transparent",
					cursor: "pointer",
					transition: "all 0.12s ease",
					"&:active": {
						backgroundColor: "#E0F2FE7D",
					},
				}),
				valueContainer: (provided: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 14px",
					gap: "4px",
				}),
				placeholder: (provided: any) => ({
					...provided,
					color: "#94A3B8",
					fontSize: "13.5px",
					fontFamily,
					fontWeight: 400,
				}),
				singleValue: (provided: any) => ({
					...provided,
					color: disabled ? "#94A3B8" : "#0F172A",
					fontSize: "13.5px",
					fontFamily,
					fontWeight: 400,
				}),
				multiValue: (provided: any) => ({
					...provided,
					backgroundColor: "#F0F9FF",
					border: "1px solid #BAE6FD",
					borderRadius: "6px",
					padding: "1px 3px",
				}),
				multiValueLabel: (provided: any) => ({
					...provided,
					color: "#0284C7",
					fontSize: "12px",
					fontFamily,
					fontWeight: 600,
				}),
				multiValueRemove: (provided: any) => ({
					...provided,
					color: "#0284C7",
					borderRadius: "4px",
					cursor: "pointer",
					"&:hover": {
						backgroundColor: "#E0F2FE7D",
						color: "#0369A1",
					},
				}),
				dropdownIndicator: (provided: any, state: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 10px",
					color: disabled
						? "#94A3B8"
						: state.isFocused
						? "#0284C7"
						: "#475569",
					transition: "transform 0.15s ease, color 0.15s ease",
					transform: state.selectProps.menuIsOpen
						? "rotate(180deg)"
						: "none",
				}),
				clearIndicator: (provided: any) => ({
					...provided,
					padding: short ? "2px 8px" : "6px 10px",
					color: "#475569",
					cursor: "pointer",
					"&:hover": {
						color: "#EF4444",
					},
				}),
				indicatorSeparator: () => ({ display: "none" }),
				input: (provided: any) => ({
					...provided,
					margin: "0px",
					padding: "0px",
					color: "#0F172A",
					fontFamily,
					fontSize: "13.5px",
				}),
				control: (provided: any, state: any) => ({
					...provided,
					minHeight: short ? "32px" : "42px",
					backgroundColor: disabled ? "#F8FAFC" : "#FFFFFF",
					borderRadius: "8px",
					cursor: disabled ? "not-allowed" : "pointer",
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease",
					borderColor: disabled
						? "#CBD5E1"
						: error
						? "#EF4444"
						: state.isFocused
						? "#0284C7"
						: "#CBD5E1",
					borderWidth: state.isFocused && !disabled ? "1.5px" : "1px",
					boxShadow: disabled
						? "0 1px 2px 0 rgba(15, 23, 42, 0.04)"
						: state.isFocused
						? error
							? "0 0 0 2px rgba(239, 68, 68, 0.12)"
							: "0 0 0 2px rgba(2, 132, 199, 0.12)"
						: "none",
					"&:hover": {
						borderColor: disabled
							? "#CBD5E1"
							: error
							? "#EF4444"
							: state.isFocused
							? "#0284C7"
							: "#94A3B8",
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
				boxShadow: "0 0 0 2px rgba(22, 163, 74, 0.2)",
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
					disabled ? "#94A3B8" : error ? "#EF4444" : "#475569"
				} !important`,
				userSelect: "none" as const,
				transition: "color 0.15s ease",
			}),
			requiredAsteriskStyle: {
				color: "#0284C7",
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
				color: `${error ? "#EF4444" : "#64748B"} !important`,
			}),
		},

		editable: {
			textPrimary: "#0F172A",
			textMuted: "#94A3B8",
			bgHover: "#F8FAFC",
			borderHover: "#CBD5E1",
			borderFocus: "#0284C7",
			accent: "#0284C7",
			focusRing: "rgba(2, 132, 199, 0.15)",
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
					backgroundColor: "#F8FAFC",
					borderColor: "#CBD5E1",
					"& .edit-pencil-icon": {
						opacity: 1,
						transform: "translateX(0)",
					},
				},
				"&:focus-visible": {
					outline: "none",
					borderColor: "#0284C7",
					boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
				},
			},
			previewTextStyle: (isPlaceholder: boolean) => ({
				fontSize: "13.5px",
				fontWeight: 500,
				lineHeight: 1.4,
				color: isPlaceholder ? "#94A3B8" : "#0F172A",
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
				color: "#0284C7",
				fontSize: "12px",
				lineHeight: 1,
				marginLeft: "8px",
				userSelect: "none" as const,
				transition: "all 0.15s ease",
			},
		},

		expressionBuilder: {
			bgGroup: "#f8fafc",
			bgRule: "#ffffff",
			bgRuleGroup: "rgba(255, 252, 242, 0.6)",
			borderGroup: "#cbd5e1",
			borderRule: "#e2e8f0",
			borderRuleGroup: "#fef3c7",
			borderTreeLine: "#cbd5e1",
			treeLineMuted: "rgba(0, 0, 0, 0.08)",
			textPrimary: "#0f172a",
			textSecondary: "#64748b",
			inputBg: "#ffffff",
			inputBorder: "#cbd5e1",
			inputBorderFocus: "#0284c7",
			focusRing: "rgba(2, 132, 199, 0.15)",
			ruleShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
			accent: "#0284c7",
			accentHover: "#0369a1",
			conjActiveBg: "#0284c7",
			conjActiveBorder: "#0284c7",
			conjActiveText: "#ffffff",
			conjInactiveBg: "#ffffff",
			conjInactiveBorder: "#cbd5e1",
			conjInactiveText: "#475569",
			conjHoverBg: "#e2e8f0",
			deleteColor: "#dc2626",
			deleteHoverBg: "#fef2f2",
			errorBorder: "#dc2626",
			errorText: "#dc2626",
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
					color: "#0f172a",
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
					backgroundColor: "#f8fafc !important",
					border: "1px solid #cbd5e1 !important",
					borderRadius: "10px !important",
					padding: "12px !important",
					transition:
						"background-color 0.2s ease, border-color 0.2s ease",
				},
				".rule-with-error .rule": {
					border: "1px solid #dc2626 !important",
				},
				".rule--body--wrapper": {
					flex: 1,
					display: "flex",
					flexDirection: "column" as const,
				},
				".rule--error": {
					color: "#dc2626",
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
					border: "1px dashed #cbd5e1",
					borderRadius: "6px",
				},
				".locked": {
					border: "1px dashed #dc2626",
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
						borderColor: "#cbd5e1",
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
						borderColor: "rgba(0, 0, 0, 0.08)",
					},
				".qb-draggable::before, .qb-draggable::after": {
					display: "none",
				},
				".qb-drag-handler": {
					cursor: "grab",
					color: "#64748b",
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
					border: "1px solid #cbd5e1",
					backgroundColor: "#ffffff",
					color: "#0f172a",
					"&:hover": {
						backgroundColor: "#ffffff",
						borderColor: "#0284c7",
						color: "#0284c7",
					},
				},
				".group--actions .action--DELETE, .rule--header .action--DELETE":
					{
						backgroundColor: "transparent !important",
						borderColor: "transparent !important",
						color: "#dc2626 !important",
						borderRadius: "6px",
						padding: "4px 8px",
						"&:hover": {
							backgroundColor: "#fef2f2 !important",
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
					backgroundColor: "rgba(255, 252, 242, 0.6) !important",
					border: "1px solid #fef3c7 !important",
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
					backgroundColor: "#ffffff !important",
					border: "1px solid #e2e8f0 !important",
					borderRadius: "8px !important",
					padding: "8px 12px",
					flex: 1,
					display: "flex",
					alignItems: "center",
					boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
					transition:
						"background-color 0.2s ease, border-color 0.2s ease",
				},
				".rule select, .rule input, .rule button": {
					fontFamily: "inherit",
					fontSize: "12.5px",
					padding: "6px 10px",
					borderRadius: "6px",
					backgroundColor: "#ffffff",
					color: "#0f172a",
					border: "1px solid #cbd5e1",
					outline: "none",
					transition:
						"border-color 0.15s ease, box-shadow 0.15s ease",
					"&:focus": {
						borderColor: "#0284c7",
						boxShadow: "0 0 0 2px rgba(2, 132, 199, 0.15)",
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
						color: "#64748b",
						marginBottom: "2px",
					},
				".conjunction": {
					display: "inline-block",
				},
				".conjunction label": {
					display: "inline-block",
					border: "1px solid #cbd5e1",
					backgroundColor: "#ffffff",
					color: "#475569",
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
					backgroundColor: "#0284c7 !important",
					borderColor: "#0284c7 !important",
					color: "#ffffff !important",
				},
				'.conjunction [data-state="inactive"] label:hover': {
					backgroundColor: "#e2e8f0",
					color: "#0f172a",
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
					borderLeft: "1px solid #cbd5e1",
				},
				".rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep":
					{
						display: "inline-block",
					},
				".rule--func--bracket-before, .rule--func--bracket-after": {
					marginLeft: "3px",
					marginRight: "3px",
					color: "#64748b",
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
					color: "#64748b",
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
			disabledOpacity: 0.8,
			bgDefault: "#FFFFFF",
			bgGreyed: "#F8FAFC",
			bgHover: "#F1F5F9",
			borderDefault: "#E2E8F0",
			borderSelected: "#38BDF8",
			borderHover: "#CBD5E1",
			textPrimary: "#0F172A",
			textMuted: "#64748B",
			textDisabled: "#94A3B8",
			attributeHoverBg: "#E0F2FE7D",
			shadowSm:
				"0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)",
			shadowSelected: "0 4px 12px rgba(2, 132, 199, 0.12)",
			containerStyle: (fontFamily?: string) => ({
				display: "flex",
				flexWrap: "wrap" as const,
				boxSizing: "border-box" as const,
				fontFamily,
				width: "100%",
				"& .greyed, & [data-greyed='true'], & [disabled]": {
					opacity: 0.8,
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
					? "0 4px 12px rgba(2, 132, 199, 0.12)"
					: "0 1px 3px 0 rgba(15, 23, 42, 0.05)",
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
			bgSurface: "#F0F9FF",
			bgHover: "#E0F2FE7D",
			border: "#BAE6FD",
			borderHover: "#7DD3FC",
			textPrimary: "#0F172A",
			textSecondary: "#0369A1",
			accentColor: "#0284C7",
			iconBg: "#E0F2FE7D",
			iconBorder: "#BAE6FD",
			dangerColor: "#EF4444",
			successColor: "#10B981",
			overlayBg: "rgba(15, 23, 42, 0.75)",
			shadowSm:
				"0 1px 3px 0 rgba(2, 132, 199, 0.08), 0 1px 2px -1px rgba(2, 132, 199, 0.04)",
			shadowHover: "0 4px 12px 0 rgba(2, 132, 199, 0.15)",
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
				backgroundColor: isHovered ? "#E0F2FE7D" : "#F0F9FF",
				border: `1px solid ${isHovered ? "#7DD3FC" : "#BAE6FD"}`,
				borderRadius: "10px",
				boxShadow: isHovered
					? "0 4px 12px 0 rgba(2, 132, 199, 0.15)"
					: "0 1px 3px 0 rgba(2, 132, 199, 0.08)",
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
				backgroundColor: "rgba(15, 23, 42, 0.75)",
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
			bgSurface: "#FFFFFF",
			bgHover: "#F8FAFC",
			borderSubtle: "#E2E8F0",
			borderHover: "#CBD5E1",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			folderColor: "#F59E0B",
			fileColor: "#0284C7",
			shadowSm:
				"0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)",
			dangerColor: "#EF4444",
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
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				borderRadius: "12px",
				boxShadow: "0 1px 3px 0 rgba(15, 23, 42, 0.04)",
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
				borderBottom: "1px solid #E2E8F0",
				backgroundColor: isHovered ? "#F8FAFC" : "transparent",
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
			bgSurface: "#F0F9FF",
			bgHover: "#E0F2FE7D",
			borderDefault: "#BAE6FD",
			borderHover: "#7DD3FC",
			borderError: "#FCA5A5",
			bgError: "#FEF2F2",
			textPrimary: "#0F172A",
			textSecondary: "#0369A1",
			textError: "#EF4444",
			accentColor: "#0284C7",
			iconBg: "#E0F2FE7D",
			iconBorder: "#BAE6FD",
			dangerColor: "#EF4444",
			successColor: "#10B981",
			overlayBg: "rgba(15, 23, 42, 0.75)",
			shadowSm:
				"0 1px 3px 0 rgba(2, 132, 199, 0.08), 0 1px 2px -1px rgba(2, 132, 199, 0.04)",
			shadowHover: "0 4px 12px 0 rgba(2, 132, 199, 0.15)",
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
				backgroundColor: isHovered ? "#E0F2FE7D" : "#F0F9FF",
				border: `1px solid ${isHovered ? "#7DD3FC" : "#BAE6FD"}`,
				borderRadius: "10px",
				boxShadow: isHovered
					? "0 4px 12px 0 rgba(2, 132, 199, 0.15)"
					: "0 1px 3px 0 rgba(2, 132, 199, 0.08)",
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
				backgroundColor: "#FEF2F2",
				border: "1px solid #FCA5A5",
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
				backgroundColor: "rgba(15, 23, 42, 0.75)",
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
				backgroundColor: "#F0F9FF",
				border: `1.5px dashed ${error ? "#FCA5A5" : "#BAE6FD"}`,
				padding: "24px 16px",
				textAlign: "center" as const,
				boxSizing: "border-box" as const,
				boxShadow: "0 1px 3px 0 rgba(2, 132, 199, 0.08)",
				transition: "all 0.2s ease",
				cursor: disabled ? "not-allowed" : "pointer",
				"&:hover": {
					borderColor: error
						? "#FCA5A5"
						: disabled
						? "#BAE6FD"
						: "#7DD3FC",
					backgroundColor: disabled ? "#F0F9FF" : "#E0F2FE7D",
				},
			}),
		},

		widget: {
			bgSurface: "#FFFFFF",
			bgHeader: "#FAFAFB",
			bgSecondary: "#e1f7fd",
			border: "#E2E8F0",
			borderHover: "#CBD5E1",
			borderFocus: "#38BDF8",
			textPrimary: "#0F172A",
			textSecondary: "#64748B",
			textDisabled: "#94A3B8",
			accent: "#0284C7",
			accentHover: "#0369A1",
			shadowSm: "0 1px 3px rgba(15, 23, 42, 0.03)",
			shadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
			shadowHover: "0 4px 12px rgba(15, 23, 42, 0.06)",
			receiverShadow: "0 4px 20px -2px rgba(2, 132, 199, 0.08)",
			receiverShadowHover: "0 6px 24px -2px rgba(2, 132, 199, 0.12)",
			senderShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
			senderShadowHover: "0 4px 12px rgba(15, 23, 42, 0.08)",
			senderHoverBg: "#f0f9ff",
			senderHoverBorder: "#bae6fd",
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
				color: "#0F172A",
				width: "100%",
				display: "flex",
				alignItems: "center",
				boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
				padding: "0 12px",
				height: "44px",
				boxSizing: "border-box" as const,
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				cursor: "grab",
				transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					backgroundColor: "#f0f9ff",
					borderColor: "#bae6fd",
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
				border: "1px solid #E2E8F0",
				borderRadius: "12px",
				backgroundColor: "#FFFFFF",
				boxShadow: "0 4px 20px -2px rgba(2, 132, 199, 0.08)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative" as const,
				overflow: "hidden",
				transition: "box-shadow 0.2s ease, border-color 0.2s ease",
				"&:hover": {
					borderColor: "#38BDF8",
					boxShadow: "0 6px 24px -2px rgba(2, 132, 199, 0.12)",
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
				color: "#64748b",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#fee2e2",
					color: "#ef4444",
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
				color: "#64748b",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#f1f5f9",
					color: "#0284C7",
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
				border: "1px solid #E2E8F0",
				borderRadius: "12px",
				backgroundColor: "#FFFFFF",
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
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
					borderColor: "#CBD5E1",
					boxShadow: "0 4px 12px rgba(15, 23, 42, 0.06)",
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
				backgroundColor: "#e1f7fd",
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
				color: "#0F172A",
			},
			iframeSubTitleStyle: {
				color: "#0F172A",
			},
			iframeFullScreenBtnStyle: {
				cursor: "pointer",
				color: "#0F172A",
			},
			aggregateContainerStyle: {
				textAlign: "center" as const,
				height: "100%",
				position: "relative" as const,
				display: "flex",
				flexDirection: "column" as const,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFFFFF",
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
				color: "#0F172A",
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
				backgroundColor: "#FFFFFF",
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
				backgroundColor: "#FAFAFB",
				borderBottom: "1px solid #E2E8F0",
				boxSizing: "border-box" as const,
			},
			cardContainerStyle: (fontFamily?: string) => ({
				height: "100%",
				width: "100%",
				minHeight: 0,
				minWidth: 0,
				display: "flex",
				flexDirection: "column" as const,
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				borderRadius: "12px",
				overflow: "hidden",
				boxSizing: "border-box" as const,
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
				fontFamily,
			}),
			cardHeaderStyle: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "#FAFAFB",
				padding: "14px 18px",
				borderBottom: "1px solid #E2E8F0",
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
				color: "#64748B",
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
				transition: "all 0.15s ease",
			},
			dangerBg: "#fef2f2",
			dangerColor: "#ef4444",
			dangerHoverBg: "#fee2e2",
			iconColor: "#64748b",
			iconBg: "#f1f5f9",
			iconBorder: "#e2e8f0",
			borderRadius: "12px",
			placeholderBg: "#0284C7",
			resizeHandleColor: "rgba(15, 23, 42, 0.4)",
			chartColors: [
				"#0284c7",
				"#6366f1",
				"#10b981",
				"#f59e0b",
				"#8b5cf6",
				"#ec4899",
				"#06b6d4",
				"#64748b",
			],
			chartAxisLine: "#e2e8f0",
			chartGridLineX: "#f8fafc",
			chartGridLineY: "#f1f5f9",
			chartTooltipBg: "#ffffff",
			chartTooltipBorder: "#e2e8f0",
			chartTooltipShadow: "rgba(15, 23, 42, 0.08)",
			chartLegendText: "#334155",
			chartLegendHover: "#0f172a",
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
					background: "#0284C7",
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
					borderRight: "2px solid rgba(15, 23, 42, 0.4)",
					borderBottom: "2px solid rgba(15, 23, 42, 0.4)",
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
			chartMarkerBorder: "#ffffff",
			chartConnectorColor: "#cbd5e1",
			chartPieBorder: "#ffffff",
			chartDataLabel: "#475569",
		},

		iconButton: {
			bgDefault: "#ffffff",
			bgHover: "#f0f7fe",
			bgActive: "#e6f2fc",
			badgeBg: "#f1f5f9",
			badgeBgActive: "#e6f2fc",
			border: "#e2e8f0",
			borderHover: "#b9e2fe",
			borderActive: "#b9e2fe",
			textPrimary: "#0f172a",
			textSecondary: "#555555",
			textActive: "#1363a1",
			textDisabled: "#999999",
			primary: "#0d3c61",
			shadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
				fontFamily: `${
					fontFamily ||
					"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
				} !important`,
				fontSize: sizeObj.fontSize,
				fontWeight: 500,
				minHeight: sizeObj.minHeight,
				padding: sizeObj.padding,
				borderRadius: sizeObj.borderRadius,
				border: `1px solid ${active ? "#b9e2fe" : "#e2e8f0"}`,
				backgroundColor: active ? "#e6f2fc" : "#ffffff",
				color: disabled ? "#999999" : active ? "#1363a1" : "#0f172a",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
				cursor: disabled ? "not-allowed" : "pointer",
				outline: "none",
				userSelect: "none" as const,
				transition:
					"background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.18s ease",
				"&:hover:not(:disabled)": {
					backgroundColor: active ? "#e6f2fc" : "#f0f7fe",
					borderColor: active ? "#b9e2fe" : "#b9e2fe",
					color: "#1363a1",
					"& .icon-wrapper": {
						color: "#1363a1 !important",
					},
					"& .icon-label": {
						color: "#1363a1 !important",
					},
				},
				"&:focus-visible:not(:disabled)": {
					borderColor: "#b9e2fe",
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
					? "#999999"
					: labelColor || (active ? "#1363a1" : "#0f172a"),
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
				backgroundColor: active ? "#e6f2fc" : "#f1f5f9",
				color: disabled
					? "#999999"
					: labelColor || (active ? "#0d3c61" : "#555555"),
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
					? "#e6f2fc !important"
					: "#ffffff !important",
				border: `1px solid ${
					active ? "#b9e2fe" : "#e2e8f0"
				} !important`,
				borderRadius: `${sizeObj.borderRadius} !important`,
				padding: "0 !important",
				color: `${resolvedIconColor} !important`,
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04) !important",
				cursor: disabled ? "not-allowed" : "pointer",
				transition:
					"background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.18s ease !important",
				"&:hover:not(:disabled)": {
					backgroundColor: active
						? "#e6f2fc !important"
						: "#f0f7fe !important",
					color: "#1363a1 !important",
					borderColor: active
						? "#b9e2fe !important"
						: "#b9e2fe !important",
					"& .icon-wrapper": {
						color: "#1363a1 !important",
					},
				},
				"&:focus-visible:not(:disabled)": {
					borderColor: "#b9e2fe !important",
				},
			}),
		},

		iconMenu: {
			bgMenu: "#ffffff",
			bgHover: "#f0f7fe",
			bgActive: "#e6f2fc",
			border: "#e2e8f0",
			borderHover: "#b9e2fe",
			borderActive: "#b9e2fe",
			textPrimary: "#0f172a",
			textSecondary: "#555555",
			textActive: "#1363a1",
			textDisabled: "#999999",
			accent: "#0d3c61",
			shadow: "0 10px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
			boxShadowSm: "0 1px 3px rgba(0, 0, 0, 0.04)",
			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
				border: `1px solid ${open ? "#b9e2fe" : "#e2e8f0"}`,
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
				transition: "all 0.18s ease",
				backgroundColor: open ? "#e6f2fc" : "#ffffff",
				color: open ? "#1363a1" : "#555555",
				"&:hover": {
					backgroundColor: open ? "#e6f2fc" : "#f0f7fe",
					borderColor: open ? "#b9e2fe" : "#b9e2fe",
					color: "#1363a1",
					"& .icon-span": {
						color: "#1363a1 !important",
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
				backgroundColor: "#ffffff !important",
				border: "1px solid #e2e8f0 !important",
				boxShadow:
					"0 10px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04) !important",
				fontFamily: `${
					fontFamily ||
					"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
				} !important`,
				backgroundImage: "none !important",
			}),
			menuItemStyle: (active?: boolean) => ({
				borderRadius: "6px",
				padding: "7px 12px",
				margin: "1px 0",
				gap: "8px",
				fontFamily: "inherit !important",
				color: `${active ? "#1363a1" : "#0f172a"} !important`,
				backgroundColor: active ? "#e6f2fc" : "transparent",
				transition: "all 0.18s ease",
				"& .MuiListItemIcon-root": { minWidth: "unset !important" },
				"& .MuiListItemText-primary": {
					fontSize: "13px",
					fontWeight: active ? 600 : 500,
					fontFamily: "inherit",
				},
				"&:hover": {
					color: "#1363a1 !important",
					backgroundColor: active
						? "#e6f2fc !important"
						: "#f0f7fe !important",
					"& .menu-item-icon": {
						color: "#1363a1 !important",
					},
				},
			}),
			menuItemIconStyle: (active?: boolean) => ({
				color: active ? "#1363a1" : "#555555",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "18px",
				transition: "color 0.18s ease",
			}),
		},

		radio: {
			textPrimary: "#000000",

			textDisabled: "#999999",

			color: "#0d3c61",

			disabledColor: "#bdbdbd",

			size: "18px",

			borderWidth: "2px",

			borderRadius: "50%",

			uncheckedBackground: "transparent",

			transition: "all 0.15s ease",

			checkedDisplay: "flex",

			checkedAlignItems: "center",

			checkedJustifyContent: "center",

			checkedIconColor: "#ffffff",

			iconDisplay: "flex",

			iconAlignItems: "center",

			iconJustifyContent: "center",

			iconSize: "10px",

			iconLineHeight: 1,

			iconName: "tick",

			iconFontSize: "inherit",

			iconColor: "inherit",

			margin: "2px 0",

			labelFontSize: "13px",

			labelFontWeight: 500,

			padding: "8px",

			disabledCursor: "not-allowed",

			cursor: "pointer",

			userSelect: "none",
		},

		searchBar: {
			background: "#ffffff",

			backgroundHover: "#f8fafc",

			border: "#e2e8f0",

			borderHover: "#bae6fd",

			borderFocus: "#0284c7",

			textPrimary: "#0f172a",

			textSecondary: "#64748b",

			iconColor: "#94a3b8",

			iconHover: "#0284c7",

			clearButtonHoverBackground: "#f0f9ff",

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
			background: "#ffffff",

			border: "#e2e8f0",

			borderActiveIndicator: "#ff6b00",

			itemHoverBackground: "#f8fafc",

			itemActiveBackground: "#0b192c",

			textPrimary: "#334155",

			textSecondary: "#64748b",

			textActive: "#ffffff",

			textHover: "#0f172a",

			iconDefault: "#475569",

			iconActive: "#ffffff",

			iconHover: "#0f172a",

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

				brandColor: "#0f172a",

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
				background: "#f0f9ff",

				border: "#e0f2fe",

				borderRadius: "12px",

				padding: "10px 14px",

				margin: "12px 12px 16px 12px",

				gap: "10px",

				iconColor: "#0284c7",

				iconSize: "18px",

				titleColor: "#0f172a",

				titleFontSize: "13px",

				titleFontWeight: 600,

				statusColor: "#64748b",

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
			text: "#64748B",

			percentageText: "#475569",

			trackBackground: "#E8EDF3",

			fulfilled: "#16A34A",

			low: "#22C55E",

			medium: "#F59E0B",

			// Soft modern red
			critical: "#F87171",

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
				fulfilled: "linear-gradient(90deg, #4ADE80 0%, #16A34A 100%)",

				low: "linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)",

				medium: "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",

				critical:
					"linear-gradient(90deg, #FDA4AF 0%, #F87171 55%, #FB7185 100%)",
			},

			glow: {
				fulfilled: "0 0 7px rgba(22, 163, 74, 0.18)",

				low: "0 0 7px rgba(34, 197, 94, 0.16)",

				medium: "0 0 7px rgba(245, 158, 11, 0.16)",

				critical: "0 0 7px rgba(248, 113, 113, 0.18)",
			},

			orb: {
				background: "#FFFFFF",

				borderWidth: "2px",

				outerRing: "0 0 0 2px rgba(255, 255, 255, 0.75)",
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
					detail ? contrastText ?? "#FFFFFF" : "#64748B"
				} !important`,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap" as const,
			}),

			fulfilledMessageStyle: {
				fontSize: "13px",
				fontWeight: 600,
				lineHeight: 1,
				color: "#16A34A !important",
			},

			trackStyle: {
				position: "relative" as const,
				width: "100%",
				height: "6px",
				borderRadius: "999px",
				backgroundColor: "#E8EDF3",
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
						"linear-gradient(90deg, #4ADE80 0%, #16A34A 100%)",
					low: "linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)",
					medium: "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",
					critical:
						"linear-gradient(90deg, #FDA4AF 0%, #F87171 55%, #FB7185 100%)",
				};

				const glow: Record<string, string> = {
					fulfilled: "0 0 7px rgba(22, 163, 74, 0.18)",
					low: "0 0 7px rgba(34, 197, 94, 0.16)",
					medium: "0 0 7px rgba(245, 158, 11, 0.16)",
					critical: "0 0 7px rgba(248, 113, 113, 0.18)",
				};

				const colors: Record<string, string> = {
					fulfilled: "#16A34A",
					low: "#22C55E",
					medium: "#F59E0B",
					critical: "#F87171",
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
						backgroundColor: "#FFFFFF",
						border: `2px solid ${barColor}`,
						boxSizing: "border-box" as const,
						boxShadow: `0 0 0 2px rgba(255, 255, 255, 0.75), 0 0 6px ${barColor}, 0 0 12px ${barColor}`,
						zIndex: 5,
					},
				};
			},
		},
		switch: {
			trackBackground: "#F1F5F9",

			trackBorder: "#E2E8F0",

			activeBackground: "#FFFFFF",

			activeBorder: "#E2E8F0",

			activeText: "#0F172A",

			inactiveText: "#64748B",

			hoverText: "#1E293B",

			focusRing: "rgba(2, 132, 199, 0.25)",

			activeShadow:
				"0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",

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
			border: "#E2E8F0",

			textPrimary: "#0F172A",

			textSecondary: "#64748B",

			textDisabled: "#94A3B8",

			accent: "#0284C7",

			accentBackground: "#F0F9FF",

			accentBadge: "#E0F2FE7D",

			badgeBackground: "#F1F5F9",

			errorColor: "#DC2626",

			hoverBackground: "#F8FAFC",

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

			error: {
				display: "inline-flex",
			},
		},

		table: {
			background: "#FFFFFF",

			headerBackground: "#F8FAFC",

			controlBackground: "#F8FAFC",

			detailBackground: "#F8FAFC",

			border: "#E2E8F0",

			accent: "#0284C7",

			accentBackground: "#E0F2FE",

			accentBorder: "#BAE6FD",

			textPrimary: "#0F172A",

			textSecondary: "#64748B",

			textDisabled: "#94A3B8",

			checkbox: "#CBD5E1",

			rowHover: "#F8FAFC",

			rowSelected: "#EBF5FF",

			rowSelectedHover: "#E0F2FE",

			shadow: "0 1px 3px rgba(0, 0, 0, 0.04)",

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
				background: "#E2E8F0",
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
			background: "#f8fafc",

			border: "#e2e8f0",

			emptyBackground: "#ffffff",

			dashedBorder: "#cbd5e1",

			textMuted: "#64748b",

			textSubtle: "#94a3b8",

			accent: "#0284c7",

			ghostBackground: "#f0f9ff",

			ghostBorder: "#38bdf8",

			cardShadow:
				"0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",

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

		priorityBadge: {
			backgroundAlpha: 0.12,

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

		progressBar: {
			container: {
				width: "100%",

				height: "35px",
			},

			bar: {
				backgroundColor: "#F5F5F5",

				height: "20px",
			},

			gradient: "linear-gradient(to right, #F5F5F5, #D8D8D8, #F5F5F5)",

			animation: {
				bar1: "animation-ozg7p2 2.1s cubic-bezier(0, 0, 0, 0) infinite;",

				bar2: "animation-ozg7p2 2.1s cubic-bezier(0, 0, 0, 0) 1.15s infinite",
			},
		},

		textArea: {
			bgSurface: "#FFFFFF",

			bgDisabled: "#F8FAFC",

			bgDragOver: "#F0F9FF",

			border: "#CBD5E1",

			borderHover: "#94A3B8",

			borderFocus: "#0284C7",

			borderDragOver: "#0284C7",

			borderError: "#EF4444",

			focusRing: "0 0 0 2px rgba(2, 132, 199, 0.15)",

			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.15)",

			textPrimary: "#0F172A",

			textSecondary: "#475569",

			textMuted: "#94A3B8",

			textError: "#EF4444",

			accent: "#0284C7",

			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",

			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

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

		textField: {
			primaryMain: "#0284C7",

			errorMain: "#ef4444",

			bgSurface: "#FFFFFF",

			bgDisabled: "#F8FAFC",

			border: "#CBD5E1",

			borderHover: "#94A3B8",

			borderDisabled: "#CBD5E1",

			textPrimary: "#0F172A",

			textSecondary: "#475569",

			textMuted: "#94A3B8",

			textError: "#EF4444",

			focusRing: "0 0 0 2px rgba(2, 132, 199, 0.15)",

			errorRing: "0 0 0 2px rgba(239, 68, 68, 0.15)",

			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",

			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

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
			// Root

			rootDisplay: "flex",

			rootFlexDirection: "column",

			rootGap: "8px",

			rootWidth: "100%",

			boxSizing: "border-box",

			// Font

			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

			// Label

			labelFontSize: "12.5px",

			labelFontWeight: 600,

			labelLetterSpacing: "-0.01em",

			// Grid

			gridDisplay: "grid",

			gridGap: "10px",

			gridWidth: "100%",

			// Tile

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

			// Colors

			bgSurface: "#FFFFFF",

			bgHover: "#F8FAFC",

			bgSelected: "#F0F9FF",

			border: "#E2E8F0",

			borderHover: "#CBD5E1",

			borderSelected: "#0284C7",

			textLabel: "#475569",

			textPrimary: "#0F172A",

			textSelected: "#0284C7",

			// Shadows

			shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",

			shadowHover:
				"0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",

			focusRing: "0 0 0 2px rgba(2, 132, 199, 0.25)",

			// Tile text

			textFontSize: "13px",

			textFontWeight: 500,

			textSelectedFontWeight: 600,

			textLetterSpacing: "-0.01em",

			textLineHeight: 1.2,

			textAlign: "center",

			textWordBreak: "break-word",

			textTransition: "color 0.15s ease",
		},
	},

	taskDragAndDropItem: {
		// COLORS

		bg: "#ffffff",

		border: "#e2e8f0",

		borderSelected: "#0284c7",

		borderHover: "#cbd5e1",

		textPrimary: "#0f172a",

		textSecondary: "#64748b",

		textMuted: "#94a3b8",

		accent: "#0284c7",

		tagBg: "#f1f5f9",

		tagText: "#475569",

		divider: "#f1f5f9",

		assignHoverBg: "#E0F2FE7D",

		// PRIORITY

		priority: {
			criticalBg: "#fef2f2",

			criticalText: "#b91c1c",

			highBg: "#fff7ed",

			highText: "#c2410c",

			mediumBg: "#fefce8",

			mediumText: "#a16207",

			lowBg: "#f0fdf4",

			lowText: "#15803d",
		},

		// SLA

		sla: {
			overdueBg: "#fef2f2",

			overdueText: "#dc2626",

			weekBg: "#f0fdf4",

			weekText: "#16a34a",

			normalBg: "#f8fafc",

			normalText: "#475569",
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

		shadow: "0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)",

		shadowHover:
			"0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",

		selectedShadow: "rgba(2, 132, 199, 0.12)",

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

			fontSize: "2rem",

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
			border: "1px solid #CBD5E1",
			transition: "all 0.15s ease",
			backgroundColor: "#FFFFFF",
			color: "#475569",
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
				backgroundColor: "#F0F9FF",
				borderColor: "#0284C7",
				color: "#0284C7",
				"& .icon-span": { color: "#0284C7 !important" },
			},
			"&[data-open='true']": {
				borderColor: "#0284C7",
				backgroundColor: "#E0F2FE7D",
				color: "#0284C7",
			},
			"&[data-open='true']:hover": {
				backgroundColor: "#E0F2FE7D",
				borderColor: "#0284C7",
			},
		},
		paper: {
			minWidth: "170px",
			padding: "4px",
			borderRadius: "10px",
			backgroundColor: "#FFFFFF !important",
			border: "1px solid #CBD5E1 !important",
			boxShadow:
				"0 10px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04) !important",
			fontFamily: "Montserrat !important",
			backgroundImage: "none !important",
		},
		item: {
			borderRadius: "6px",
			padding: "7px 12px",
			margin: "1px 0",
			gap: "8px",
			fontFamily: "inherit !important",
			color: "#0F172A !important",
			backgroundColor: "transparent",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "#F0F9FF !important",
				color: "#0F172A !important",
				borderColor: "#CBD5E1 !important",
			},
			"&.Mui-selected": {
				color: "#0284C7 !important",
				backgroundColor: "#E0F2FE7D !important",
			},
			"&.Mui-selected:hover": {
				backgroundColor: "#E0F2FE7D !important",
				color: "#0284C7 !important",
				borderColor: "#0284C7 !important",
			},
			"& .MuiListItemIcon-root": { minWidth: "unset !important" },
			"& .menu-item-icon": {
				color: "#475569",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "18px",
				transition: "color 0.15s ease",
			},
			"&.Mui-selected .menu-item-icon": { color: "#0284C7" },
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
			border: "1.5px dashed #CBD5E1",
			backgroundColor: "#FFFFFF",
			boxShadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
			boxSizing: "border-box",
			fontFamily: "Montserrat !important",
			cursor: "pointer",
			transition:
				"border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
			"&[data-drag-active='true']": {
				borderColor: "#0284C7",
				backgroundColor: "#F0F9FF",
				boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
			},
			"&:hover": {
				borderColor: "#94A3B8",
				backgroundColor: "#F8FAFC",
			},
			"&[data-error='true']": {
				borderColor: "#EF4444",
				backgroundColor: "#FEF2F2",
			},
			"&:focus-visible": {
				outline: "none",
				borderColor: "#0284C7",
				boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
			},
			"&[data-disabled='true']": {
				cursor: "not-allowed",
				opacity: 0.6,
			},
			"&[data-disabled='true']:hover": {
				borderColor: "#CBD5E1",
				backgroundColor: "#FFFFFF",
			},
			"&[data-disabled='true'][data-error='true']:hover": {
				borderColor: "#EF4444",
				backgroundColor: "#FEF2F2",
			},
		},
		avatar: {
			position: "relative",
			width: "56px",
			height: "56px",
			borderRadius: "50%",
			backgroundColor: "#F1F5F9",
			border: "1px solid #E2E8F0",
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
				color: "#0F172A !important",
				lineHeight: 1.3,
			},
			"& .image-upload-browse": {
				color: "#0284C7",
				textDecoration: "underline",
			},
			"& .image-upload-hint": {
				fontSize: "11.5px !important",
				color: "#64748B !important",
				lineHeight: 1.3,
			},
			"& .image-upload-error": {
				fontSize: "11.5px !important",
				fontWeight: "500 !important",
				color: "#DC2626 !important",
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
			backgroundColor: "#FFFFFF",
			border: "1.5px solid #E2E8F0",
			boxShadow:
				"0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)",
			cursor: "default",
			outline: "none",
			userSelect: "none",
			transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
			"&[data-compromised='true']": {
				"--infra-accent": "#E93946",
				backgroundColor: "#FEF2F2",
				borderColor: "#E93946",
				boxShadow:
					"0 0 0 1px rgba(239, 68, 68, 0.3), 0 4px 12px rgba(239, 68, 68, 0.18)",
			},
			"&[data-interactive='true']": { cursor: "pointer" },
			"&[data-interactive='true']:hover": {
				borderColor: "#CBD5E1",
				boxShadow: "0 6px 16px rgba(15, 23, 42, 0.12)",
				transform: "translateY(-1.5px)",
			},
			"&[data-interactive='true'][data-compromised='true']:hover": {
				borderColor: "#E93946",
				boxShadow:
					"0 0 0 1px rgba(239, 68, 68, 0.3), 0 4px 12px rgba(239, 68, 68, 0.18)",
			},
			"&[data-interactive='true']:active": {
				transform: "translateY(0px)",
			},
			"&:focus-visible, &[data-interactive='true'][data-compromised='true']:focus-visible":
				{
					boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.2)",
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
				backgroundColor: "#E93946",
				boxShadow: "0 0 0 2px #FFFFFF",
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
				boxShadow: "0 0 0 2px #FFFFFF, 0 2px 4px rgba(0,0,0,0.18)",
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
			color: "#0F172A !important",
			".json-to-table table": {
				width: "100%",
				borderCollapse: "separate",
				borderSpacing: 0,
				fontSize: "12.5px",
				lineHeight: 1.5,
				fontFamily: "inherit",
				backgroundColor: "#FFFFFF",
				color: "#0F172A",
				borderRadius: "8px",
				overflow: "hidden",
				border: "1px solid #CBD5E1",
			},
			".json-to-table table table": {
				margin: "4px 0",
				border: "1px solid #E2E8F0",
				borderRadius: "6px",
			},
			".json-to-table th": {
				padding: "8px 12px",
				borderBottom: "1px solid #CBD5E1",
				borderRight: "1px solid #E2E8F0",
				fontWeight: 600,
				textAlign: "left",
				whiteSpace: "nowrap",
				transition: "background-color 0.15s ease",
				"&:last-child": { borderRight: "none" },
			},
			".json-to-table td": {
				padding: "8px 12px",
				borderBottom: "1px solid #E2E8F0",
				borderRight: "1px solid #E2E8F0",
				textAlign: "left",
				color: "#0F172A",
				backgroundColor: "transparent",
				transition: "background-color 0.15s ease",
				"&:last-child": { borderRight: "none" },
				"& p, & span, & div": {
					color: "#0F172A !important",
					fontFamily: "inherit !important",
					margin: 0,
				},
			},
			'.json-to-table th[scope="col"]': {
				backgroundColor: "#0F172A !important",
				color: "#FFFFFF !important",
				letterSpacing: "0.02em",
				borderBottom: "2px solid #CBD5E1",
				borderRight: "1px solid rgba(255, 255, 255, 0.12)",
			},
			'.json-to-table th[scope="row"]': {
				backgroundColor: "#E0F2FE7D !important",
				color: "#0284C7 !important",
				fontWeight: 600,
			},
			".json-to-table tr:nth-of-type(even) > td": {
				backgroundColor: "#F8FAFC !important",
			},
			".json-to-table tr:hover > td, .json-to-table tr:hover > th": {
				backgroundColor: "#F1F5F9 !important",
			},
			".json-to-table caption": {
				captionSide: "bottom",
				textAlign: "right",
				padding: "6px 8px",
				fontSize: "11px",
				color: "#64748B",
			},
			".json-to-table a": {
				color: "#0284C7 !important",
				textDecoration: "underline",
			},
		},
		empty: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "32px 16px",
			borderRadius: "10px",
			border: "1px dashed #E2E8F0",
			backgroundColor: "#F8FAFC",
			color: "#94A3B8",
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
			border: "1px solid #E2E8F0",
			backgroundColor: "#FFFFFF",
			".json-to-table": {
				width: "100%",
				borderCollapse: "collapse",
				fontFamily: "Montserrat !important",
				fontSize: "12.5px !important",
			},
			".json-to-table th, .json-to-table .json-to-table-key": {
				backgroundColor: "#F8FAFC !important",
				color: "#475569 !important",
				fontWeight: "600 !important",
				padding: "8px 12px !important",
				border: "1px solid #EDF2F7 !important",
				textAlign: "left",
				whiteSpace: "nowrap",
				textTransform: "capitalize",
			},
			".json-to-table td, .json-to-table .json-to-table-value": {
				backgroundColor: "#FFFFFF !important",
				color: "#0F172A !important",
				padding: "8px 12px !important",
				border: "1px solid #EDF2F7 !important",
				lineHeight: "1.5",
			},
			".json-to-table tr": {
				backgroundColor: "#FFFFFF !important",
				transition: "background-color 0.12s ease",
				"&:hover > td, &:hover > th": {
					backgroundColor: "#F1F5F9 !important",
				},
			},
			".json-to-table table": {
				margin: "2px 0",
				border: "1px solid #EDF2F7 !important",
				borderRadius: "6px",
				overflow: "hidden",
			},
			".json-to-table a": {
				color: "#0284C7 !important",
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
			border: "1px solid #E2E8F0",
			backgroundColor: "#FFFFFF",
			color: "#475569",
			cursor: "pointer",
			outline: "none",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "#F1F5F9",
				color: "#0284C7",
				borderColor: "#0284C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(2, 132, 199, 0.15)",
			},
		},
	},
	// JsonElement styles. Rows use data-editing, primitive values use data-bool;
	// iconColors are passed to IconButton's iconColor prop
	jsonElement: {
		iconColors: {
			error: "#DC2626",
			success: "#16A34A",
		},
		root: {
			padding: "16px",
			border: "1px solid #E2E8F0",
			borderRadius: "10px",
			backgroundColor: "#FFFFFF",
			height: "100%",
			width: "100%",
			boxSizing: "border-box",
			overflow: "hidden",
			fontFamily: "Montserrat !important",
			color: "#0F172A !important",
			boxShadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
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
			"&:hover": { backgroundColor: "#F1F5F9" },
			"&[data-editing='true']:hover": { backgroundColor: "transparent" },
		},
		rowHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		key: {
			fontWeight: "600 !important",
			color: "#0F172A !important",
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
			border: "1px solid #EDF2F7",
			backgroundColor: "#F8FAFC",
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
			color: "#94A3B8",
			lineHeight: 1,
		},
		arrayItemText: {
			fontSize: "12.5px !important",
			color: "#475569 !important",
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
			borderLeft: "2px solid #E2E8F0",
		},
		primitive: {
			display: "flex",
			gap: "10px",
			alignItems: "center",
			overflow: "hidden",
		},
		primitiveKey: {
			fontWeight: "600 !important",
			color: "#0F172A !important",
			whiteSpace: "nowrap",
		},
		primitiveValue: {
			color: "#475569 !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			"&[data-bool='true']": { color: "#0284C7 !important" },
		},
		editRow: {
			display: "flex",
			gap: "12px",
			alignItems: "center",
			padding: "12px 14px",
			borderRadius: "8px",
			backgroundColor: "#F8FAFC",
			border: "1px solid #0284C7",
			boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
			marginBottom: "10px",
			width: "100%",
			boxSizing: "border-box",
			fontFamily: "Montserrat !important",
		},
		editKey: { flex: "0 0 160px" },
		editKeyLabel: {
			fontWeight: "600 !important",
			color: "#0284C7 !important",
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
			border: "1px dashed #CBD5E1",
			backgroundColor: "transparent",
			color: "#0284C7",
			cursor: "pointer",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			outline: "none",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "#F1F5F9",
				borderColor: "#0284C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(2, 132, 199, 0.15)",
			},
		},
	},
	// DragAndDropJsonElement styles. Rows use data-editing, the drop zone uses data-drag-over;
	// iconColors are passed to IconButton's iconColor prop
	dragAndDropJsonElement: {
		iconColors: {
			error: "#DC2626",
			success: "#16A34A",
		},
		root: {
			padding: "16px",
			border: "1px solid #E2E8F0",
			borderRadius: "10px",
			backgroundColor: "#FFFFFF",
			fontFamily: "Montserrat !important",
			color: "#0F172A !important",
			width: "100%",
			boxSizing: "border-box",
			boxShadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
		},
		row: {
			display: "flex",
			flexDirection: "column",
			marginBottom: "6px",
			padding: "6px 10px",
			borderRadius: "6px",
			transition: "background-color 0.12s ease",
			"&:hover": { backgroundColor: "#F8FAFC" },
			"&[data-editing='true']:hover": { backgroundColor: "transparent" },
		},
		rowHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		key: {
			fontWeight: 600,
			color: "#0F172A !important",
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
			color: "#475569",
			fontSize: "12px",
		},
		arrayItemText: {
			color: "#475569 !important",
			fontSize: "12.5px !important",
		},
		addItem: {
			cursor: "pointer",
			display: "inline-flex",
			alignItems: "center",
			gap: "4px",
			marginTop: "4px",
			color: "#0284C7",
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
			borderLeft: "2px solid #E2E8F0",
		},
		primitive: {
			display: "flex",
			gap: "10px",
			alignItems: "center",
			overflow: "hidden",
		},
		primitiveKey: {
			fontWeight: 600,
			color: "#0F172A !important",
			fontSize: "13px !important",
			whiteSpace: "nowrap",
		},
		primitiveValue: {
			color: "#475569 !important",
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
			backgroundColor: "#F8FAFC",
			border: "1px solid #0284C7",
			boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
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
			border: "1.5px dashed #CBD5E1",
			backgroundColor: "#F8FAFC",
			borderRadius: "6px",
			color: "#94A3B8",
			cursor: "pointer",
			textAlign: "center",
			userSelect: "none",
			transition: "all 0.15s ease",
			"&[data-drag-over='true']": {
				borderColor: "#0284C7",
				backgroundColor: "#F0F9FF",
			},
			"&:hover": {
				borderColor: "#0284C7",
				color: "#475569",
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
			border: "1px solid #16A34A",
			backgroundColor: "#F0FDF4",
			borderRadius: "6px",
			textAlign: "center",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
		droppedValueText: {
			color: "#16A34A !important",
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
			border: "1px dashed #CBD5E1",
			backgroundColor: "transparent",
			color: "#0284C7",
			cursor: "pointer",
			fontSize: "12px",
			fontWeight: 500,
			fontFamily: "inherit",
			outline: "none",
			transition: "all 0.15s ease",
			"&:hover": {
				backgroundColor: "#F8FAFC",
				borderColor: "#0284C7",
			},
			"&:focus-visible": {
				boxShadow: "0 0 0 2px rgba(2, 132, 199, 0.15)",
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
			color: "var(--label-color, #000000) !important",
			cursor: "default",
			userSelect: "none",
			transition: "color 0.15s ease",
			"&[data-clickable='true']": { cursor: "pointer" },
			"&[data-disabled='true']": {
				color: "#999999 !important",
				cursor: "not-allowed",
			},
		},
		required: {
			color: "#E93946 !important",
			fontSize: "14px",
			fontWeight: 700,
			lineHeight: 1,
		},
	},
	// ListForm styles. State is driven by data-disabled on the root and :disabled on the add button;
	// iconColors are passed to IconButton's iconColor prop
	listForm: {
		iconColors: {
			delete: "#E93946",
		},
		root: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "10px",
			fontFamily: "Montserrat !important",
			color: "#0F172A !important",
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
				backgroundColor: "#FFFFFF",
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
			backgroundColor: "#F1F5F9",
			color: "#64748B",
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
				backgroundColor: "#FEF2F2 !important",
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
			border: "1.5px dashed #CBD5E1",
			backgroundColor: "transparent",
			color: "#0d3c61 !important",
			fontSize: "12.5px",
			fontWeight: 600,
			fontFamily: "Montserrat !important",
			cursor: "pointer",
			outline: "none",
			userSelect: "none",
			transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
			"&:disabled": { cursor: "not-allowed" },
			"&:hover:not(:disabled)": {
				backgroundColor: "#F0F9FF",
				borderColor: "#0284C7",
				transform: "translateY(-1px)",
			},
			"&:active:not(:disabled)": {
				transform: "translateY(0px)",
			},
			"&:focus-visible:not(:disabled)": {
				borderColor: "#0d3c61",
				boxShadow: "0 0 0 3px rgba(2, 132, 199, 0.15)",
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
				"0 10px 25px -5px rgba(15, 23, 42, 0.18), 0 8px 10px -6px rgba(15, 23, 42, 0.1) !important",
			color: "#ffffff !important",
			fontFamily: "Montserrat !important",
			fontSize: "13px",
			lineHeight: 1.5,
			letterSpacing: "0.01em",
			"&[data-severity='error']": {
				backgroundColor: "#E93946 !important",
				border: "1px solid transparent !important",
			},
			"&[data-severity='success']": {
				backgroundColor: "#51C926 !important",
				border: "1px solid transparent !important",
			},
			"&[data-severity='warning']": {
				backgroundColor: "#FFA200 !important",
				border: "1px solid transparent !important",
			},
			"&[data-severity='info']": {
				backgroundColor: "#006ba6 !important",
				border: "1px solid transparent !important",
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
					color: "rgba(255, 255, 255, 0.85) !important",
					padding: "4px",
					borderRadius: "6px",
					transition: "all 0.15s ease",
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.12)",
						color: "#ffffff !important",
					},
					"&:focus-visible": {
						outline: "none",
						boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.4)",
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
			remove: "#E93946",
		},
		root: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "12px",
			fontFamily: "Montserrat !important",
			color: "#0F172A !important",
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
			backgroundColor: "#FFFFFF",
			border: "1px solid #CBD5E1",
			boxShadow: "none",
			overflow: "hidden",
			transition: "border-color 0.15s ease",
			"&:hover": { borderColor: "#0284C7" },
		},
		searchHeader: {
			padding: "10px 12px",
			borderBottom: "1px solid #BAE6FD",
			backgroundColor: "#F8FAFC",
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
			color: "#94A3B8",
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
				backgroundColor: "#E0F2FE7D",
			},
			"&[data-disabled='true']": { cursor: "not-allowed" },
		},
		optionLabel: {
			fontSize: "13px !important",
			color: "#0F172A !important",
			lineHeight: 1.4,
		},
		selectedHeader: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "10px 14px",
			borderBottom: "1px solid #BAE6FD",
			backgroundColor: "#F8FAFC",
		},
		selectedTitle: {
			fontWeight: "600 !important",
			fontSize: "12.5px !important",
			color: "#475569 !important",
		},
		badge: {
			padding: "1px 7px",
			borderRadius: "10px",
			backgroundColor: "#E0F2FE7D",
			color: "#0284C7 !important",
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
			backgroundColor: "#F0F9FF",
			border: "1px solid #BAE6FD",
			boxShadow: "none",
			gap: "8px",
			transition: "background-color 0.15s ease, border-color 0.15s ease",
			"&:hover": {
				backgroundColor: "#E0F2FE7D",
				borderColor: "#0284C7",
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
			color: "#94A3B8",
			transition: "color 0.15s ease",
			padding: "2px",
			borderRadius: "4px",
			"&:hover": { color: "#0284C7" },
			"&[data-disabled='true']": { cursor: "not-allowed" },
			"&:active": { cursor: "grabbing" },
		},
		itemLabel: {
			fontSize: "12.5px !important",
			fontWeight: "500 !important",
			color: "#0F172A !important",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
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
				border: "1px solid #E2E8F0",
				borderRadius: "12px",
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
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
					borderColor: "#CBD5E1",
					boxShadow: "0 4px 12px rgba(15, 23, 42, 0.06)",
				},
			},
		},
		sender: {
			list: { display: "flex", flexDirection: "column", gap: "8px" },
			item: {
				borderRadius: "10px",
				fontFamily: "Montserrat",
				color: "#000000",
				width: "100%",
				display: "flex",
				alignItems: "center",
				boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
				padding: "0 12px",
				height: "44px",
				boxSizing: "border-box",
				backgroundColor: "#ffffff",
				border: "1px solid #e2e8f0",
				cursor: "grab",
				transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					backgroundColor: "#f0f9ff",
					borderColor: "#bae6fd",
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
				border: "1px solid #e2e8f0",
				borderRadius: "14px",
				backgroundColor: "#ffffff",
				boxShadow: "0 2px 8px -2px rgba(15, 23, 42, 0.05)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				padding: "16px",
				boxSizing: "border-box",
				transition: "box-shadow 0.2s ease, border-color 0.2s ease",
				"&:hover": {
					borderColor: "#bae6fd",
					boxShadow: "0 6px 20px -2px rgba(2, 132, 199, 0.12)",
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
				color: "#0f172a",
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
				color: "#64748b",
				backgroundColor: "transparent",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#f0f9ff",
					color: "#0284c7",
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
				backgroundColor: "#ffeeef",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#fef2f2",
					color: "#dc2626",
				},
			},
			colorSchemes: [
				{ bg: "#fff7ed", color: "#f97316" }, // Orange
				{ bg: "#f5f3ff", color: "#8b5cf6" }, // Purple
				{ bg: "#e0f2fe", color: "#0284c7" }, // Blue
				{ bg: "#f0fdf4", color: "#22c55e" }, // Green
				{ bg: "#f4f4f5", color: "#71717a" }, // Gray
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
				backgroundColor: "#e1f7fd",
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
				color: "#000000",
			},
			subtitle: {
				fontWeight: 300,
				lineHeight: 1,
				fontSize: "12px",
				color: "#000000",
			},
			fullScreenButton: { cursor: "pointer", color: "#000000" },
			aggregate: {
				width: "100%",
				height: "100%",
				position: "relative",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "stretch",
				backgroundColor: "#ffffff",
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
				color: "#16a34a",
				marginTop: "12px",
				whiteSpace: "nowrap",
			},
			aggregateTrendIcon: {
				display: "inline-flex",
				fontSize: "13px",
			},
			colorSchemes: [
				{ bg: "#fff7ed", color: "#f97316" }, // Orange
				{ bg: "#f5f3ff", color: "#8b5cf6" }, // Purple
				{ bg: "#f0f9ff", color: "#0284c7" }, // Blue
				{ bg: "#fff7ed", color: "#ea580c" }, // Amber
				{ bg: "#f0fdf4", color: "#22c55e" }, // Green
				{ bg: "#f4f4f5", color: "#71717a" }, // Gray
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
				color: "#64748b",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "28px",
				height: "28px",
				borderRadius: "6px",
				transition: "all 0.15s ease",
				"&:hover": {
					color: "#0f172a",
					backgroundColor: "#f1f5f9",
				},
			},
			aggregateBody: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				flex: 1,
				minWidth: 0,
				marginLeft: " 9px",
				marginTop: "1rem",
			},
			aggregateLink: { cursor: "pointer" },
			aggregateValue: {
				fontWeight: 700,
				fontSize: "1rem",
				lineHeight: 1.1,
				color: "#0f172a",
				letterSpacing: "-0.02em",
				fontFamily: "Montserrat",
			},
			aggregateTitle: {
				fontWeight: 600,
				fontSize: "0.5rem",
				lineHeight: 1.3,
				color: "#0f172a",
				marginTop: "16px",
				fontFamily: "Montserrat",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
			},
			aggregateRange: {
				fontWeight: 400,
				fontSize: "12px",
				lineHeight: 1.3,
				color: "#64748b",
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
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				borderRadius: "16px",
				overflow: "hidden",
				boxSizing: "border-box",
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
				fontFamily: "Montserrat",
			},
			header: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "#FFFFFF",
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
				color: "#0F172A",
				letterSpacing: "-0.01em",
				lineHeight: 1.2,
				fontFamily: "Montserrat",
			},
			subtitle: {
				fontWeight: 400,
				fontSize: "12px",
				color: "#64748B",
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
				border: "1px solid #E2E8F0",
				backgroundColor: "#FFFFFF",
				color: "#0F172A",
				cursor: "pointer",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#F8FAFC",
					borderColor: "#CBD5E1",
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
				border: "1px solid #E2E8F0",
				backgroundColor: "#FFFFFF",
				color: "#0F172A",
				cursor: "pointer",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#F8FAFC",
					borderColor: "#CBD5E1",
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
				color: "#64748B",
				backgroundColor: "#FFFFFF",
				border: "1px solid #E2E8F0",
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
				transition: "all 0.15s ease",
				"&:hover": {
					backgroundColor: "#F8FAFC",
					color: "#0F172A",
					borderColor: "#CBD5E1",
				},
			},
			fullScreen: {
				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "100%",
				minHeight: 0,
				backgroundColor: "#FFFFFF",
				boxSizing: "border-box",
				overflow: "hidden",
			},
			fullScreenHeaderWrap: { flexShrink: 0, width: "100%" },
			fullScreenHeader: {
				padding: "14px 18px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#FAFAFB",
				borderBottom: "1px solid #E2E8F0",
				boxSizing: "border-box",
			},
			fullScreenDate: {
				fontWeight: 500,
				fontSize: "13px",
				color: "#64748B",
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
				backgroundColor: "#f8fafc",
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
				color: "#0f172a",
			},
			subtitle: {
				fontSize: "13px",
				fontWeight: 400,
				color: "#64748b",
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
				backgroundColor: "#ffffff",
				border: "1px solid #e2e8f0",
				fontSize: "13px",
				fontWeight: 500,
				color: "#0f172a",
				cursor: "pointer",
			},
			dateArrow: {
				fontSize: "10px",
				color: "#64748b",
			},
			refreshButton: {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: "34px",
				height: "34px",
				borderRadius: "10px",
				backgroundColor: "#ffffff",
				border: "1px solid #e2e8f0",
				color: "#64748b",
				cursor: "pointer",
			},
		},
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

	timeline: {
		bgSurface: "#FFFFFF",

		bgHover: "#F0F9FF",

		border: "#E2E8F0",

		borderHover: "#0284C7",

		connector: "#CBD5E1",

		shadow: "0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.04)",

		shadowHover:
			"0 0 0 3px rgba(2, 132, 199, 0.15), 0 1px 3px rgba(15, 23, 42, 0.06)",

		dotSize: "32px",

		connectorWidth: "1.5px",

		cardLeftOffset: "-520px",
	},

	tooltip: {
		bg: "#0F172A",

		text: "#FFFFFF",

		border: "#334155",

		fontSize: "12px",

		fontWeight: 500,

		padding: "6px 10px",

		borderRadius: "6px",

		boxShadow:
			"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
	},
	topBar: {
		colors: {
			// Use 'background' instead of 'background-color' for gradients
			background: "#F6F9FF",
			border: "#E2E8F0",

			textPrimary: "#0F172A",
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

		shadow: "0 1px 3px rgba(0, 0, 0, 0.04)",

		typography: {
			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
		},

		transition: {
			container: "all 0.25s ease",

			menuSpacing: "padding-left 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
		},
	},

	topBarMenu: {
		colors: {
			bgPanel: "#ffffff",

			bgHover: "#f0f9ff",

			bgActive: "#e0f2fe",

			border: "#e2e8f0",

			borderSubtle: "#bae6fd",

			textPrimary: "#0f172a",

			textSecondary: "#64748b",

			textActive: "#1363a1",

			accent: "#1363a1",

			logout: "#ef4444",

			logoutHover: "#fef2f2",

			submenuBackground: "#f8fafc",

			transparent: "transparent",

			// Sidebar menu item states (kept in sync with sideMenuBar)
			itemHoverBackground: "#f8fafc",

			itemHoverText: "#0f172a",

			itemHoverIcon: "#0f172a",

			itemActiveBackground: "#0b192c",

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
			fontFamily:
				"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

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

			sidebar: "0 4px 20px -2px rgba(2, 132, 199, 0.08)",
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
			small: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",

			card: "0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.04)",

			tooltip: "0 4px 12px rgba(15, 23, 42, 0.08)",
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
};

export default LightTheme;
