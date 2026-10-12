import { useTheme } from "@mui/material";

/* Standalone Animated Blue Robot Face with Glowing Cyan Accents.
   Colors, gradients and animations come from theme.palette.robotAgentFace */
export const RobotAgentFace = ({ size = 52 }: { size?: number }) => {
	const theme = useTheme() as any;
	const face = theme.palette.robotAgentFace;

	return (
		<div
			style={{
				width: size,
				height: size,
				borderRadius: "50%",
				background: face.body.background,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				boxShadow: face.body.shadow,
				border: face.body.border,
				position: "relative",
				flexShrink: 0,
				cursor: "pointer",
				animation: face.body.animation,
			}}
		>
			<style>{face.keyframes}</style>
			<svg
				width={size * face.svgScale}
				height={size * face.svgScale}
				viewBox="0 0 32 32"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<defs>
					<linearGradient
						id="robotPlates"
						x1="0"
						y1="0"
						x2="32"
						y2="32"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor={face.plates.start} />
						<stop offset="60%" stopColor={face.plates.mid} />
						<stop offset="100%" stopColor={face.plates.end} />
					</linearGradient>
					<linearGradient
						id="visorGlow"
						x1="0"
						y1="0"
						x2="16"
						y2="0"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor={face.visor.glowStart} />
						<stop offset="100%" stopColor={face.visor.glowEnd} />
					</linearGradient>
				</defs>

				<line
					x1="16"
					y1="3"
					x2="16"
					y2="6"
					stroke={face.antenna.stroke}
					strokeWidth="1.5"
				/>
				<circle
					cx="16"
					cy="3"
					r="1.5"
					fill={face.antenna.tip}
					style={{ animation: face.antenna.animation }}
				/>
				{[3, 27].map((x) => (
					<rect
						key={x}
						x={x}
						y="11"
						width="2"
						height="7"
						rx="1"
						fill={face.ear}
					/>
				))}
				<path
					d="M7 9C7 7.34 8.34 6 10 6H22C23.66 6 25 7.34 25 9V19C25 21.5 22.5 24 19 25H13C9.5 24 7 21.5 7 19V9Z"
					fill={face.head.fill}
					stroke={face.head.stroke}
					strokeWidth="1.6"
				/>
				<rect
					x="9"
					y="10"
					width="14"
					height="6.5"
					rx="3.25"
					fill={face.visor.fill}
					stroke={face.visor.stroke}
					strokeWidth="1"
				/>
				<rect
					x="11"
					y="12"
					width="10"
					height="2.5"
					rx="1.25"
					fill="url(#visorGlow)"
				/>
				{[13, 19].map((cx) => (
					<circle
						key={cx}
						cx={cx}
						cy="13.25"
						r="0.75"
						fill={face.visor.eye}
						style={{ animation: face.visor.eyeAnimation }}
					/>
				))}
				{[
					[10, 12],
					[20, 22],
				].map(([x1, x2]) => (
					<line
						key={x1}
						x1={x1}
						y1="19.5"
						x2={x2}
						y2="19.5"
						stroke={face.mouthLine}
						strokeWidth="1"
					/>
				))}
				<rect
					x="13.5"
					y="21.5"
					width="5"
					height="1.5"
					rx="0.75"
					fill={face.chin}
				/>
				{[14.5, 16, 17.5].map((x) => (
					<line
						key={x}
						x1={x}
						y1="21.5"
						x2={x}
						y2="23"
						stroke={face.chinLine}
						strokeWidth="0.8"
					/>
				))}
			</svg>

			<span
				style={{
					position: "absolute",
					bottom: "0px",
					right: "0px",
					width: face.status.size,
					height: face.status.size,
					borderRadius: "50%",
					background: face.status.background,
					border: face.status.border,
					boxShadow: face.status.glow,
				}}
			/>
		</div>
	);
};
