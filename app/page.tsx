import { healthCheck } from "./actions";

export default async function Home() {
  // this is the chat home component
  const healthStatus = await healthCheck()
  return (
    <main>
      <section>{healthStatus}</section>
      <div>
        Chat History
      </div>

      <div>
        <input placeholder="Ask me something" />
        <button> Send </button>
      </div>
    </main>
  );
}
