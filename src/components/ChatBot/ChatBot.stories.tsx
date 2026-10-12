import { Meta, StoryObj } from '@storybook/react';
import { addOptionsMessage, ChatBot, showChatBot, addResponseMessage, startStreamMessage, appendStreamToken, endStreamMessage, showBubbleMessage } from './ChatBot';

const meta: Meta = {
    title: 'Components/ChatBot',
    component: ChatBot,
};
const handleClick = (message: string) => {
    addResponseMessage(`This is your message '${message}'`)
    addOptionsMessage('Which 3 features of our product are most valuable to you?',
        [{ id: 'a', name: 'Ease of use' },
        { id: 'b', name: 'Functionality' },
        { id: 'c', name: 'Build durability' },
        { id: 'd', name: 'Portability' },
        { id: 'e', name: 'Design and aesthetics' }])
},
    handleIconClick = (icon: string, message: string) => {
        addResponseMessage(`The icon clicked -> '${icon}'`)
        addResponseMessage(`The icon clicked message -> '${message}'`)
    },
    //Stands in for a real fetch() + ReadableStream reader parsing 'data: {"token": ...}' SSE chunks
    handleStreamingMessage = (message: string) => {
        const tokens = `You said '${message}'. Here is a simulated streaming response, arriving one token at a time.`.split(' '),
            suggestedQuestions = {
                'Ask about pricing': 'What are your pricing plans?',
                'Ask about support': 'How do I contact support?'
            };
        startStreamMessage();
        tokens.forEach((token, index) => {
            setTimeout(() => appendStreamToken(index === 0 ? token : ` ${token}`), index * 150);
        });
        setTimeout(() => endStreamMessage(suggestedQuestions), tokens.length * 150 + 150);
    }
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = () => (
    <div>
        <button onClick={showChatBot}>OPEN</button>
        <br />
        <br />
        <button onClick={() => showBubbleMessage("Greetings, Cloud King! Ready to secure? \uD83D\uDEE1\uFE0F")}>SHOW BUBBLE</button>
        <br />
        <br />
        <ChatBot onUserMessage={(message: string) => handleClick(message)}
            onOptionSelect={(id: string) => { addResponseMessage(`The option id selected -> '${id}'`) }}
            addToNotes
            chatbotName="Co. Agent"
            onIconClick={(icon: string, message: string) => handleIconClick(icon, message)} />
    </div>

);

Default.args = {}

export const Streaming: Story = () => (
    <div>
        <button onClick={showChatBot}>OPEN</button>
        <br />
        <br />
        <br />
        <ChatBot onUserMessage={(message: string) => handleStreamingMessage(message)}
            onOptionSelect={(id: string) => { addResponseMessage(`You selected suggested question -> '${id}'`) }}
            addToNotes
            chatbotName="Co. Agent" />
    </div>
);

Streaming.args = {}