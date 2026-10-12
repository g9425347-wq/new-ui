import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, ThemeProviderProps } from "./ThemeProvider";
import { Divider } from "../Divider/Divider";
import LightTheme from "../../themes/LightTheme";
import DarkTheme from "../../themes/DarkTheme";

declare global {
	namespace JSX {
		interface IntrinsicAttributes {
			css?: any;
		}
	}
}

const meta: Meta<typeof ThemeProvider> = {
	title: "Components/ThemeProvider",
	component: ThemeProvider,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;
type Story = StoryObj<ThemeProviderProps>;

const ThemeShowcase = () => (
	<div
		css={(theme: any) => ({
			padding: "24px",
			maxWidth: "680px",
			display: "flex",
			flexDirection: "column",
			gap: "16px",
			fontFamily: "inherit",
			backgroundColor: theme.palette.background?.default || "transparent",
			color: theme.palette.text.primary,
		})}
	>
		{/* Primary Palette */}
		<div>
			<div css={{ paddingBottom: "8px" }}>
				<Divider label="Primary Palette" />
			</div>
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "8px",
				}}
			>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Main
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.primary.dark,
						color: theme.palette.primary.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Dark
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.secondary?.main || "#0284c7",
						color: "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Secondary / Light
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.primary.contrastBG ||
							theme.palette.background.paper,
						color: theme.palette.text.primary,
						border: `1px solid ${
							theme.palette.divider ||
							theme.palette.grey?.[700] ||
							"#e2e8f0"
						}`,
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					ContrastBG
				</div>
			</div>
		</div>

		{/* Priority Status */}
		<div>
			<div css={{ paddingBottom: "8px" }}>
				<Divider label="Priority" />
			</div>
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gap: "8px",
				}}
			>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.priority?.critical || "#fee2e2",
						color:
							theme.palette.mode === "dark"
								? "#f87171"
								: "#b91c1c",
						border:
							theme.palette.mode === "dark"
								? "1px solid rgba(248, 113, 113, 0.3)"
								: "none",
					})}
					style={{
						padding: "8px 12px",
						borderRadius: "6px",
						fontWeight: 700,
						fontSize: "12px",
						textAlign: "center",
					}}
				>
					Critical
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.priority?.high || "#ffedd5",
						color:
							theme.palette.mode === "dark"
								? "#fb923c"
								: "#c2410c",
						border:
							theme.palette.mode === "dark"
								? "1px solid rgba(251, 146, 60, 0.3)"
								: "none",
					})}
					style={{
						padding: "8px 12px",
						borderRadius: "6px",
						fontWeight: 700,
						fontSize: "12px",
						textAlign: "center",
					}}
				>
					High
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.priority?.medium || "#fefce8",
						color:
							theme.palette.mode === "dark"
								? "#facc15"
								: "#a16207",
						border:
							theme.palette.mode === "dark"
								? "1px solid rgba(250, 204, 21, 0.3)"
								: "none",
					})}
					style={{
						padding: "8px 12px",
						borderRadius: "6px",
						fontWeight: 700,
						fontSize: "12px",
						textAlign: "center",
					}}
				>
					Medium
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor:
							theme.palette.priority?.low || "#f0fdf4",
						color:
							theme.palette.mode === "dark"
								? "#4ade80"
								: "#15803d",
						border:
							theme.palette.mode === "dark"
								? "1px solid rgba(74, 222, 128, 0.3)"
								: "none",
					})}
					style={{
						padding: "8px 12px",
						borderRadius: "6px",
						fontWeight: 700,
						fontSize: "12px",
						textAlign: "center",
					}}
				>
					Low
				</div>
			</div>
		</div>

		{/* Typography Text Tints */}
		<div>
			<div css={{ paddingBottom: "8px" }}>
				<Divider label="Text Tints" />
			</div>
			<div
				css={(theme: any) => ({
					backgroundColor:
						theme.palette.background?.paper || "#f8fafc",
					border: `1px solid ${
						theme.palette.divider ||
						theme.palette.grey?.[700] ||
						"#e2e8f0"
					}`,
					borderRadius: "8px",
					padding: "12px 16px",
					display: "flex",
					flexDirection: "column",
					gap: "6px",
				})}
			>
				<div
					css={(theme: any) => ({
						color: theme.palette.text.primary,
					})}
					style={{ fontSize: "14px", fontWeight: 600 }}
				>
					Primary Text Sample
				</div>
				<div
					css={(theme: any) => ({
						color: theme.palette.text.secondary,
					})}
					style={{ fontSize: "13px", fontWeight: 500 }}
				>
					Secondary Text Sample
				</div>
				<div
					css={(theme: any) => ({
						color: theme.palette.text.disabled,
					})}
					style={{ fontSize: "13px", fontWeight: 500 }}
				>
					Disabled Text Sample
				</div>
			</div>
		</div>

		{/* Feedback States (Error / Success / Info / Warning) */}
		<div>
			<div css={{ paddingBottom: "8px" }}>
				<Divider label="Feedback States" />
			</div>
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "8px",
				}}
			>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.error.main,
						color: theme.palette.error.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Error State
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.success.main,
						color: theme.palette.success.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Success State
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.info.main,
						color: theme.palette.info.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Info State
				</div>
				<div
					css={(theme: any) => ({
						backgroundColor: theme.palette.warning.main,
						color: theme.palette.warning.contrastText || "#ffffff",
					})}
					style={{
						padding: "10px 14px",
						borderRadius: "8px",
						fontWeight: 600,
						fontSize: "13px",
					}}
				>
					Warning State
				</div>
			</div>
		</div>
	</div>
);

export const Default: Story = {
	render: (args) => <ThemeProvider {...args} />,
	args: {
		theme: LightTheme,
		children: <ThemeShowcase />,
	},
};

export const Dark: Story = {
	render: (args) => <ThemeProvider {...args} />,
	args: {
		theme: DarkTheme,
		children: <ThemeShowcase />,
	},
};
