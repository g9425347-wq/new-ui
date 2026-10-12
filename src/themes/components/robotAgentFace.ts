// RobotAgentFace brand artwork tokens (theme.palette.robotAgentFace).
// Brand artwork is not mode dependent, so Light and Dark share the same values.
const robotAgentFace = {
	body: {
		background:
			"radial-gradient(circle at 35% 25%, #60a5fa 0%, #2563eb 65%, #1d4ed8 100%)",
		shadow:
			"0 12px 32px rgba(37, 99, 235, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 0 20px rgba(56, 189, 248, 0.6)",
		border: "2px solid rgba(147, 197, 253, 0.6)",
		animation: "robotHover 3s ease-in-out infinite",
	},
	svgScale: 0.65,
	antenna: {
		stroke: "#93c5fd",
		tip: "#38bdf8",
		animation: "antennaPulse 1.5s infinite",
	},
	ear: "#1e3a8a",
	head: { fill: "#1e3a8a", stroke: "url(#robotPlates)" },
	plates: { start: "#ffffff", mid: "#93c5fd", end: "#1e40af" },
	visor: {
		fill: "#0f172a",
		stroke: "#1d4ed8",
		glowStart: "#38bdf8",
		glowEnd: "#0284c7",
		eye: "#ffffff",
		eyeAnimation: "visorScan 2s ease-in-out infinite",
	},
	mouthLine: "#93c5fd",
	chin: "#1e40af",
	chinLine: "#38bdf8",
	status: {
		size: "12px",
		background: "#38bdf8",
		border: "2px solid #1e3a8a",
		glow: "0 0 10px #38bdf8",
	},
	keyframes: `
		@keyframes robotHover {
			0%, 100% { transform: translateY(0px); }
			50% { transform: translateY(-3px); }
		}
		@keyframes antennaPulse {
			0%, 100% { opacity: 0.4; filter: drop-shadow(0 0 2px #38bdf8); }
			50% { opacity: 1; filter: drop-shadow(0 0 8px #38bdf8); }
		}
		@keyframes visorScan {
			0% { transform: translateX(-6px); opacity: 0.6; }
			50% { transform: translateX(6px); opacity: 1; }
			100% { transform: translateX(-6px); opacity: 0.6; }
		}
	`,
};

export const robotAgentFaceTheme = {
	light: robotAgentFace,
	dark: robotAgentFace,
};
