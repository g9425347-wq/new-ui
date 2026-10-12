import { FC, createRef } from "react";
import { ChatBox } from "./ChatBox";

let chatRef: any = null;
export interface Props {
	loading?: boolean;
	addToNotes?: boolean;
	chatbotName?: string;
	onOptionSelect?(id?: string): any;
	onUserMessage?(message?: string): any;
	onIconClick?(icon: string, message?: string): any;
}

export const ChatBot: FC<Props> = ({
	loading,
	addToNotes,
	chatbotName = "Co-Agent",
	onOptionSelect,
	onUserMessage,
	onIconClick,
}) => {
	chatRef = createRef();

	return (
		<ChatBox
			ref={chatRef}
			loading={loading}
			addToNotes={addToNotes}
			onUserMessage={(message: string) => {
				if (onUserMessage) onUserMessage(message);
			}}
			onOptionSelect={(id: string) => {
				if (onOptionSelect) onOptionSelect(id);
			}}
			onIconClick={(icon: string, message: string) => {
				if (onIconClick) onIconClick(icon, message);
			}}
			chatbotName={chatbotName}
		/>
	);
};

export const showChatBot = () => {
	if (chatRef?.current) {
		chatRef.current.showChatbot();
	}
};

export const addResponseMessage = (message: string) => {
	if (chatRef?.current) {
		chatRef.current.addResponseMessage(message);
	}
};

export const showBubbleMessage = (message: string) => {
	if (chatRef?.current) {
		chatRef.current.showBubbleMessage(message);
	}
};

export interface Option {
	id: string;
	name: string;
	selected?: boolean;
}

export const addOptionsMessage = (message: string, options: Option[]) => {
	if (chatRef?.current) {
		chatRef.current.addOptionsMessage(message, options);
	}
};

export const startStreamMessage = () => {
	if (chatRef?.current) {
		chatRef.current.startStreamMessage();
	}
};

export const appendStreamToken = (token: string) => {
	if (chatRef?.current) {
		chatRef.current.appendStreamToken(token);
	}
};

export const endStreamMessage = (
	suggestedQuestions?: Record<string, string>,
) => {
	if (chatRef?.current) {
		chatRef.current.endStreamMessage(suggestedQuestions);
	}
};
