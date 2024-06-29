import { getChatHistory, healthCheck, sendMessage } from "./actions";
import { SendMessageForm } from "./send-message-form";

export default async function Home() {
  // this is the chat home component
  const healthStatus = await healthCheck()
  const chatHistory = getChatHistory()
  return (
    <main>
      <section>{healthStatus}</section>
      <div>
        <h3>Chat History</h3>
        {chatHistory.map((chat, index) => (<p key={index}>{chat.sender}: {chat.message}</p>))}
      </div>
      <SendMessageForm sendMessage={sendMessage} />
    </main>
  );
}
