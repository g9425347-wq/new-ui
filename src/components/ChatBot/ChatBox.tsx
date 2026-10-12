import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { Message } from "./Message";
import { LinearProgress, useTheme } from "@mui/material";
import { TextArea } from "../TextArea/TextArea";
import { RobotAgentFace } from "./RobotAgentFace";

export interface Props {
	loading?: boolean;
	addToNotes?: boolean;
	chatbotName?: string;
	onOptionSelect?(id?: string): any;
	onUserMessage?(message?: string): any;
	onIconClick?(icon: string, message?: string): any;
}

interface Chat {
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

interface ChatBoxHandle {
	showChatbot: () => void;
	addResponseMessage: (message: string) => void;
	addOptionsMessage: (message: string, options: Option[]) => void;
	startStreamMessage: () => void;
	appendStreamToken: (token: string) => void;
	endStreamMessage: (suggestedQuestions?: Record<string, string>) => void;
	showBubbleMessage: (message: string) => void;
}

// Shared style for the header icon buttons (maximize / close)
const headerButtonCss = (
	chat: Record<string, any>,
	hoverColor: string,
	hoverBg: string
) => ({
	background: "transparent",
	border: "none",
	color: chat.headerButton.color,
	padding: chat.headerButton.padding,
	borderRadius: chat.headerButton.borderRadius,
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: chat.headerButton.transition,
	"&:hover": { color: hoverColor, backgroundColor: hoverBg },
});

export const ChatBox = forwardRef<ChatBoxHandle, Props>((props, ref) => {
	const {
		loading = false,
		addToNotes = false,
		chatbotName = "Co. Agent",
		onOptionSelect,
		onUserMessage,
		onIconClick,
	} = props;

	const theme = useTheme() as any;

	const chatTokens = theme.palette.chatBot;
	const fontFamily = theme.typography.fontFamily;

	const [messages, setMessages] = useState<Chat[]>([]);
	const [input, setInput] = useState("");
	const [show, setShow] = useState<boolean>(false);
	const [expanded, setExpanded] = useState(false);
	const [isStreaming, setIsStreaming] = useState<boolean>(false);
	const [showGreeting, setShowGreeting] = useState<boolean>(false);
	const [greetingMessage, setGreetingMessage] = useState<string>("");
	const chatBoxRef = useRef<HTMLDivElement>(null);

	// Automatically hide the speech bubble 3 seconds after it is triggered
	useEffect(() => {
		if (!showGreeting) return;
		const timer = setTimeout(() => {
			setShowGreeting(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [showGreeting]);

	useEffect(() => {
		if (chatBoxRef.current) {
			chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
		}
	}, [messages, show]);

	useImperativeHandle(ref, () => ({
		showChatbot: () => setShow(true),
		showBubbleMessage: (message: string) => {
			setGreetingMessage(message);
			setShowGreeting(true);
		},
		addResponseMessage: (message: string) => {
			addBotResponseMessage(message);
		},
		addOptionsMessage: (message: string, options: Option[]) => {
			addBotOptionsMessage(message, options);
		},
		startStreamMessage: () => {
			setIsStreaming(true);
			setMessages((prevMessages) => [
				...prevMessages,
				{
					type: "message",
					sender: "chatbot" as const,
					message: "",
					streaming: true,
				},
			]);
		},
		appendStreamToken: (token: string) => {
			setMessages((prevMessages) => {
				const lastStreamingIndex = prevMessages
					.map((m) => m.streaming)
					.lastIndexOf(true);
				if (lastStreamingIndex === -1) return prevMessages;
				return prevMessages.map((chat, index) =>
					index === lastStreamingIndex
						? { ...chat, message: (chat.message ?? "") + token }
						: chat
				);
			});
		},
		endStreamMessage: (suggestedQuestions?: Record<string, string>) => {
			setIsStreaming(false);
			setMessages((prevMessages) => {
				const lastStreamingIndex = prevMessages
					.map((m) => m.streaming)
					.lastIndexOf(true);
				const updated =
					lastStreamingIndex === -1
						? prevMessages
						: prevMessages.map((chat, index) =>
								index === lastStreamingIndex
									? { ...chat, streaming: false }
									: chat
						  );
				const questionEntries = suggestedQuestions
					? Object.entries(suggestedQuestions)
					: [];
				if (questionEntries.length === 0) return updated;

				const options: Option[] = questionEntries.map(([label, question]) => ({
					id: question,
					name: label,
				}));
				return [
					...updated,
					{
						type: "options" as const,
						sender: "chatbot" as const,
						options,
						active: true,
					},
				];
			});
		},
	}));

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	const handleSendMessage = () => {
		if (input.trim()) {
			const lastMessage = messages[messages.length - 1];
			setMessages((prevMessages) => {
				if (lastMessage?.type === "options" && lastMessage?.active) {
					return [
						...prevMessages.slice(0, -1),
						{
							type: "options",
							sender: "chatbot" as const,
							options: lastMessage.options,
							active: false,
						},
						{
							type: "message",
							sender: "user" as const,
							message: input,
						},
					];
				} else {
					return [
						...prevMessages,
						{
							type: "message",
							sender: "user" as const,
							message: input,
						},
					];
				}
			});

			if (onUserMessage) onUserMessage(input);
		}
		setInput("");
	};

	const addBotResponseMessage = (message: string) => {
		if (message.trim()) {
			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "message", sender: "chatbot" as const, message },
			]);
		}
	};

	const addBotOptionsMessage = (message: string, options: Option[]) => {
		if (options) {
			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "message", sender: "chatbot" as const, message },
				{
					type: "options",
					sender: "chatbot" as const,
					options,
					active: true,
				},
			]);
		}
	};

	const handleOptionSelect = (id: string, newOptions: Option[]) => {
		setMessages((prevMessages) => [
			...prevMessages.slice(0, -1),
			{
				type: "options",
				sender: "chatbot" as const,
				options: newOptions,
				active: false,
			},
		]);
		if (onOptionSelect) onOptionSelect(id);
	};

	const sendDisabled = !input.trim() || loading || isStreaming;

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div
			css={{
				position: "fixed",
				bottom: chatTokens.position.bottom,
				right: chatTokens.position.right,
				zIndex: chatTokens.position.zIndex,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
				fontFamily: `${fontFamily} !important`,
			}}
		>
			{/* STANDALONE 3D ROBOT FACE TRIGGER WITH A TIMED SPEECH BUBBLE */}
			{!show && (
				<div
					css={{
						display: "flex",
						alignItems: "center",
						gap: chatTokens.launcherGap,
						animation: chatTokens.launcherAnimation,
						"@keyframes fadeInTrigger": {
							from: {
								opacity: 0,
								transform: "scale(0.7) translateY(12px)",
							},
							to: {
								opacity: 1,
								transform: "scale(1) translateY(0)",
							},
						},
					}}
				>
					{/* Bot Speech Bubble (Auto-hides after 3 seconds) */}
					{showGreeting && greetingMessage && (
						<div
							onClick={() => setShow(true)}
							css={{
								backgroundColor: chatTokens.bubbleBg,
								color: chatTokens.bubbleText,
								padding: chatTokens.bubblePadding,
								borderRadius: chatTokens.bubbleRadius,
								boxShadow: chatTokens.bubbleShadow,
								fontSize: chatTokens.bubbleFontSize,
								fontWeight: chatTokens.bubbleFontWeight,
								cursor: "pointer",
								whiteSpace: "nowrap",
								transition: chatTokens.bubbleTransition,
								backdropFilter: chatTokens.bubbleBlur,
								animation: chatTokens.bubbleAnimation,
								"@keyframes fadeOutBubble": {
									from: { opacity: 1, transform: "scale(1)" },
									to: {
										opacity: 0,
										transform: "scale(0.95)",
										pointerEvents: "none",
									},
								},
								"&:hover": { transform: chatTokens.bubbleHoverTransform },
							}}
						>
							{" "}
							{greetingMessage}
						</div>
					)}

					{/* 3D Robot Face Icon Trigger */}
					<div
						onClick={() => setShow(true)}
						title={`Launch ${chatbotName}`}
						css={{
							cursor: "pointer",
							transition: chatTokens.launcherTransition,
							"&:hover": { transform: chatTokens.launcherHoverTransform },
							"&:active": { transform: chatTokens.launcherActiveTransform },
						}}
					>
						<RobotAgentFace size={chatTokens.launcherSize} />
					</div>
				</div>
			)}

			{/* EXPANDABLE / DOCKED CHAT WINDOW WITH GLASSMORPHISM */}
			{show && (
				<div
					css={{
						width: expanded
							? chatTokens.windowWidthExpanded
							: chatTokens.windowWidth,
						height: expanded
							? chatTokens.windowHeightExpanded
							: chatTokens.windowHeight,
						display: "flex",
						flexDirection: "column",
						borderRadius: chatTokens.windowRadius,
						backgroundColor: chatTokens.windowBg,
						backdropFilter: chatTokens.windowBlur,
						WebkitBackdropFilter: chatTokens.windowBlur,
						boxShadow: chatTokens.windowShadow,
						overflow: "hidden",
						transformOrigin: "bottom right",
						animation: chatTokens.windowAnimation,
						transition: chatTokens.windowTransition,
						"@keyframes chatOpenAnimation": {
							from: {
								opacity: 0,
								transform: "translateY(24px) scale(0.92)",
							},
							to: {
								opacity: 1,
								transform: "translateY(0) scale(1)",
							},
						},
					}}
				>
					{/* CYBER SECURITY ROBOT HEADER */}
					<div
						css={{
							background: chatTokens.headerBg,
							padding: chatTokens.headerPadding,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottom: `1px solid ${chatTokens.headerBorder}`,
						}}
					>
						<div
							css={{
								display: "flex",
								alignItems: "center",
								gap: chatTokens.headerGap,
							}}
						>
							{" "}
							<RobotAgentFace size={chatTokens.headerFaceSize} />
							<div>
								<Typography
									variant="subtitle1"
									fontSize={chatTokens.headerTitleFontSize}
									fontWeight="bold"
									css={{
										color: chatTokens.headerTitle,
										lineHeight: chatTokens.headerTitleLineHeight,
									}}
								>
									{chatbotName}
								</Typography>
								<span
									css={{
										fontSize: chatTokens.headerSubtitleFontSize,
										color: chatTokens.headerSubtitle,
										fontWeight: chatTokens.headerSubtitleFontWeight,
										letterSpacing: chatTokens.headerSubtitleLetterSpacing,
										display: "flex",
										alignItems: "center",
										gap: chatTokens.headerSubtitleGap,
										marginTop: chatTokens.headerSubtitleMarginTop,
									}}
								>
									<span
										css={{
											width: chatTokens.statusDotSize,
											height: chatTokens.statusDotSize,
											borderRadius: "50%",
											backgroundColor: chatTokens.statusDotColor,
											boxShadow: chatTokens.statusDotGlow,
										}}
									/>
									Cyber Intelligence
								</span>
							</div>
						</div>

						<div
							css={{
								display: "flex",
								alignItems: "center",
								gap: chatTokens.headerButton.gap,
							}}
						>
							{" "}
							<button
								type="button"
								onClick={handleExpand}
								title={expanded ? "Minimize View" : "Maximize View"}
								css={headerButtonCss(
									chatTokens,
									chatTokens.headerButton.maximizeHoverColor,
									chatTokens.headerButton.maximizeHoverBg
								)}
							>
								<Icon name="full-screen" fontSize="small" />
							</button>
							<button
								type="button"
								onClick={() => setShow(false)}
								title="Close Chat"
								css={headerButtonCss(
									chatTokens,
									chatTokens.headerButton.closeHoverColor,
									chatTokens.headerButton.closeHoverBg
								)}
							>
								<Icon name="close" fontSize="small" />
							</button>
						</div>
					</div>

					{/* STREAMING PROGRESS */}
					{loading && (
						<div css={{ width: "100%", height: chatTokens.progressHeight }}>
							{" "}
							<LinearProgress
								css={{
									height: chatTokens.progressHeight,
									backgroundColor: `${chatTokens.progressBg} !important`,
									"& .MuiLinearProgress-bar": {
										background: chatTokens.progressBar,
									},
								}}
							/>
						</div>
					)}

					{/* CHAT MESSAGES VIEWPORT */}
					<div
						ref={chatBoxRef}
						className="chat"
						css={{
							flex: 1,
							overflowY: "auto",
							padding: chatTokens.messagesPadding,
							backgroundColor: chatTokens.messagesBg,
							display: "flex",
							flexDirection: "column",
							gap: chatTokens.messagesGap,
							"::-webkit-scrollbar": { width: chatTokens.scrollbarWidth },
							"::-webkit-scrollbar-track": {
								background: "transparent",
							},
							"::-webkit-scrollbar-thumb": {
								background: chatTokens.scrollbarThumb,
								borderRadius: chatTokens.scrollbarRadius,
							},
						}}
					>
						{messages?.map((message: Chat, index: number) => (
							<Message
								key={index}
								messageProp={message}
								onOptionSelect={(id: string, options: Option[]) =>
									handleOptionSelect(id, options)
								}
								addToNotes={addToNotes}
								onIconClick={(icon: string, message: string) => {
									if (onIconClick) onIconClick(icon, message);
								}}
							/>
						))}
					</div>

					{/* INPUT DOCK */}
					<div
						className="input-dock"
						css={{
							padding: chatTokens.dockPadding,
							backgroundColor: chatTokens.inputDockBg,
							borderTop: `1px solid ${chatTokens.borderDock}`,
							display: "flex",
							alignItems: "center",
							gap: chatTokens.dockGap,
						}}
					>
						<div
							onKeyDown={handleKeyPress}
							css={{
								flex: 1,
								position: "relative",
								border: "none !important",
								outline: "none !important",
								"& .MuiOutlinedInput-notchedOutline, & fieldset": {
									border: "none !important",
								},
								"& .MuiInputBase-root": {
									border: "none !important",
									padding: "0 !important",
									backgroundColor: "transparent !important",
									boxShadow: "none !important",
								},
								"& textarea": {
									backgroundColor: `${chatTokens.inputBg} !important`,
									border: `${chatTokens.inputBorderWidth} solid ${chatTokens.inputBorder} !important`,
									outline: "none !important",
									borderRadius: `${chatTokens.inputRadius} !important`,
									padding: `${chatTokens.inputPadding} !important`,
									fontSize: `${chatTokens.inputFontSize} !important`,
									color: `${chatTokens.inputText} !important`,
									lineHeight: `${chatTokens.inputLineHeight} !important`,
									resize: "none",
									boxSizing: "border-box",
									boxShadow: "none !important",
									transition: chatTokens.inputTransition,
									"&::placeholder": {
										color: `${chatTokens.inputPlaceholder} !important`,
									},
									"&:focus": {
										borderColor: `${chatTokens.inputFocusBorder} !important`,
										backgroundColor: `${chatTokens.inputFocusBg} !important`,
										boxShadow: `0 0 0 ${chatTokens.inputFocusGlowWidth} ${chatTokens.inputFocusGlow} !important`,
									},
								},
							}}
						>
							<TextArea
								autoFocus
								value={input}
								onChange={(event: any) => setInput(event.target.value)}
								placeholder={
									loading || isStreaming
										? "Co-Agent is analyzing security vectors..."
										: "Ask Co-Agent..."
								}
								mandatory
								disabled={loading || isStreaming}
								rows={1}
							/>
						</div>

						{/* SEND BUTTON */}
						<button
							type="button"
							onClick={() => {
								if (!loading && !isStreaming) handleSendMessage();
							}}
							disabled={sendDisabled}
							title="Send Message"
							css={{
								width: chatTokens.sendSize,
								height: chatTokens.sendSize,
								borderRadius: "50%",
								border: "none",
								background: sendDisabled
									? chatTokens.sendDisabledBg
									: chatTokens.sendActiveBg,
								color: sendDisabled
									? chatTokens.sendDisabledText
									: chatTokens.sendActiveText,
								cursor: sendDisabled ? "not-allowed" : "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
								boxShadow: sendDisabled ? "none" : chatTokens.sendActiveGlow,
								transition: chatTokens.sendTransition,
								outline: "none",
								"&:hover": {
									transform: sendDisabled
										? "none"
										: chatTokens.sendHoverTransform,
								},
								"&:active": { transform: chatTokens.sendPressTransform },
							}}
						>
							<svg
								width={chatTokens.sendIconSize}
								height={chatTokens.sendIconSize}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={chatTokens.sendIconStroke}
								strokeLinecap="round"
								strokeLinejoin="round"
								style={{ transform: chatTokens.sendIconTransform }}
							>
								<line x1="22" y1="2" x2="11" y2="13" />
								<polygon
									points="22 2 15 22 11 13 2 9 22 2"
									fill="currentColor"
									fillOpacity="0.2"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</div>
	);
});

export default ChatBox;
