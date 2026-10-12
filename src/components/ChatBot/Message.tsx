import { FC, useState } from "react";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { ToolTip } from "../ToolTip/ToolTip";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material";

export interface Props {
	messageProp: Chat;
	addToNotes?: boolean;
	onOptionSelect?(id?: string, options?: Option[]): any;
	onIconClick?(icon: string, message?: string): any;
}

export interface Chat {
	type: "message" | "options";
	sender: "user" | "chatbot";
	message?: string;
	options?: Option[];
	active?: boolean;
	streaming?: boolean;
}

export interface Option {
	id: string;
	name: string;
	selected?: boolean;
}

interface OptionChipProps {
	option: Option;
	active?: boolean;
	options?: Option[];
	tokens: any;
	onOptionSelect?(id?: string, options?: Option[]): any;
}

const OptionChip: FC<OptionChipProps> = ({
	option,
	active,
	options,
	tokens,
	onOptionSelect,
}) => {
	const [hover, setHover] = useState(false);

	const handleClick = (id?: string) => {
		if (!active) return;
		const newOptions = options?.map((item) =>
			item.id === id ? { ...item, selected: true } : item
		);
		if (onOptionSelect) onOptionSelect(id, newOptions);
	};

	if (!active) {
		return (
			<div
				css={{
					padding: tokens.chip.paddingDisabled,
					borderRadius: tokens.chip.radius,
					textAlign: "left",
					transition: tokens.chip.transitionDisabled,
					border: option.selected
						? `${tokens.chip.borderWidthActive} solid ${tokens.botAccent}`
						: `${tokens.chip.borderWidth} solid ${tokens.chipDisabledBorder}`,
					backgroundColor: option.selected
						? tokens.chipSelectedBg
						: tokens.chipDisabledBg,
					color: option.selected ? tokens.botAccent : tokens.chipDisabledText,
					opacity: option.selected ? 1 : tokens.chip.disabledOpacity,
				}}
			>
				<Typography
					variant="subtitle1"
					fontSize={tokens.chip.fontSize}
					fontWeight={
						option.selected
							? tokens.chip.selectedFontWeight
							: tokens.chip.defaultFontWeight
					}
				>
					{option?.name}
				</Typography>
			</div>
		);
	}

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => handleClick(option?.id)}
			css={{
				padding: tokens.chip.padding,
				borderRadius: tokens.chip.radius,
				textAlign: "left",
				cursor: "pointer",
				transition: tokens.chip.transition,
				border: hover
					? `${tokens.chip.borderWidthActive} solid ${tokens.chipHoverBorder}`
					: `${tokens.chip.borderWidth} solid ${tokens.chipBorder}`,
				backgroundColor: hover ? tokens.chipHoverBg : tokens.chipBg,
				boxShadow: hover ? tokens.chipShadowHover : tokens.chipShadow,
				transform: hover
					? tokens.chip.hoverTransform
					: tokens.chip.restTransform,
			}}
		>
			<Typography
				variant="subtitle1"
				fontSize={tokens.chip.fontSize}
				fontWeight={tokens.chip.fontWeight}
				css={{
					color: hover ? tokens.botAccent : tokens.chipText,
				}}
			>
				{option?.name}
			</Typography>
		</div>
	);
};

// Small clickable icon used in the floating message toolbar
const ToolbarAction: FC<{
	title: string;
	icon: string;
	tokens: any;
	onClick: () => void;
}> = ({ title, icon, tokens, onClick }) => (
	<ToolTip title={title}>
		<div
			onClick={onClick}
			css={{
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				padding: tokens.toolbarAction.padding,
				borderRadius: tokens.toolbarAction.borderRadius,
				color: tokens.botAccent,
				transition: tokens.toolbarAction.transition,
				"&:hover": { backgroundColor: tokens.actionButtonHoverBg },
			}}
		>
			<Icon name={icon as any} fontSize="small" />
		</div>
	</ToolTip>
);

interface MessageBubbleProps {
	message?: Chat;
	addToNotes?: boolean;
	tokens: any;
	onIconClick?(icon: string, message?: string): any;
}

const MessageBubble: FC<MessageBubbleProps> = ({
	message,
	addToNotes,
	tokens,
	onIconClick,
}) => {
	const theme = useTheme() as any;
	const [hover, setHover] = useState(false);
	const [copied, setCopied] = useState(false);
	const isUser = message?.sender === "user";

	const handleClick = (id: string) => {
		if (id === "copy") {
			navigator.clipboard
				.writeText(message?.message ? message.message : "")
				.then(() => {
					setCopied(true);
					setTimeout(() => setCopied(false), 2000);
				});
		} else {
			if (onIconClick) onIconClick(id, message?.message);
		}
	};

	const renderFormattedText = (text: any) => {
		if (!text) return null;
		const formattedText = String(text)
			.split(/(\*\*[^*]+\*\*)/g)
			.map((part: string, index: number) => {
				if (part.startsWith("**") && part.endsWith("**")) {
					return (
						<strong key={index} css={{ fontWeight: tokens.bubble.boldWeight }}>
							{part.slice(2, -2)}
						</strong>
					);
				}
				return part;
			});

		return (
			<div
				css={{
					lineHeight: tokens.bubble.lineHeight,
					fontSize: tokens.bubble.fontSize,
					letterSpacing: tokens.bubble.letterSpacing,
				}}
			>
				{formattedText}
				{message?.streaming && (
					<span
						css={{
							display: "inline-block",
							marginLeft: tokens.bubble.cursorMarginLeft,
							color: tokens.botAccent,
							animation: `${keyframes({
								"0%, 100%": { opacity: 1 },
								"50%": { opacity: 0 },
							})} ${tokens.bubble.cursorAnimation}`,
						}}
					>
						▍
					</span>
				)}
			</div>
		);
	};

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			css={{
				display: "flex",
				flexDirection: isUser ? "row-reverse" : "row",
				alignItems: "flex-end",
				gap: tokens.bubble.row.gap,
				margin: tokens.bubble.row.margin,
				whiteSpace: "pre-wrap",
				wordWrap: "break-word",
			}}
		>
			{/* MINI CYBER BOT ICON BADGE (Visible only for chatbot messages) */}
			{!isUser && (
				<div
					css={{
						width: tokens.miniBot.size,
						height: tokens.miniBot.size,
						borderRadius: tokens.miniBot.radius,
						backgroundColor: tokens.miniBotBg,
						border: `1px solid ${tokens.miniBotBorder}`,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: tokens.botAccent,
						flexShrink: 0,
						fontSize: tokens.miniBot.fontSize,
						marginBottom: tokens.miniBot.marginBottom,
					}}
				>
					{" "}
					<svg
						width={tokens.miniBot.iconSize}
						height={tokens.miniBot.iconSize}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<rect x="3" y="11" width="18" height="10" rx="2" />
						<circle cx="12" cy="5" r="2" />
						<path d="M12 7v4" />
						<line x1="8" y1="16" x2="8.01" y2="16" />
						<line x1="16" y1="16" x2="16.01" y2="16" />
					</svg>
				</div>
			)}

			{/* CHAT BUBBLE */}
			<div
				css={{
					position: "relative",
					maxWidth: tokens.bubble.maxWidth,
					padding: tokens.bubble.padding,
					borderRadius: isUser
						? tokens.bubble.userRadius
						: tokens.bubble.botRadius,
					textAlign: "left",
					background: isUser ? tokens.userBg : tokens.botBg,
					color: isUser ? tokens.userText : tokens.botText,
					border: isUser ? "none" : `1px solid ${tokens.botBorder}`,
					boxShadow: isUser ? tokens.userShadow : tokens.botShadow,
					fontFamily: `${theme.typography.fontFamily} !important`,
				}}
			>
				{renderFormattedText(message?.message)}
			</div>

			{/* FLOATING ACTION TOOLBAR (Copy / Notes) */}
			{!isUser && (
				<div
					css={{
						opacity: hover ? 1 : 0,
						transform: hover
							? tokens.toolbar.shownTransform
							: tokens.toolbar.hiddenTransform,
						transition: tokens.toolbar.transition,
						display: "flex",
						alignItems: "center",
						gap: tokens.toolbar.gap,
						backgroundColor: tokens.actionToolbarBg,
						padding: tokens.toolbar.padding,
						borderRadius: tokens.toolbar.radius,
						border: `1px solid ${tokens.actionToolbarBorder}`,
						boxShadow: tokens.actionToolbarShadow,
					}}
				>
					{copied ? (
						<ToolTip title="Message Copied">
							<div
								css={{
									display: "flex",
									alignItems: "center",
									padding: tokens.toolbarAction.padding,
									color: tokens.successText,
								}}
							>
								<Icon name="tick" fontSize="small" />
							</div>
						</ToolTip>
					) : (
						<ToolbarAction
							title="Copy"
							icon="copy"
							tokens={tokens}
							onClick={() => handleClick("copy")}
						/>
					)}

					{addToNotes && (
						<ToolbarAction
							title="Add to Notes"
							icon="note"
							tokens={tokens}
							onClick={() => handleClick("note")}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const Message: FC<Props> = ({
	messageProp,
	addToNotes = false,
	onOptionSelect,
	onIconClick,
}) => {
	const theme = useTheme() as any;
	// Dynamic color tokens resolving for DarkTheme vs LightTheme
	const tokens = theme.palette.chatMessage;

	if (messageProp?.type === "message") {
		return (
			<MessageBubble
				message={messageProp}
				addToNotes={addToNotes}
				tokens={tokens}
				onIconClick={onIconClick}
			/>
		);
	}

	return (
		<div
			css={{
				display: "flex",
				flexDirection: "row",
				margin: tokens.chipRow.margin,
				gap: tokens.chipRow.gap,
				flexWrap: "wrap",
			}}
		>
			{messageProp?.options?.map((item: Option) => (
				<OptionChip
					key={item.id}
					option={item}
					active={messageProp?.active}
					options={messageProp?.options}
					tokens={tokens}
					onOptionSelect={onOptionSelect}
				/>
			))}
		</div>
	);
};

export default Message;
