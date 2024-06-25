
const baseUrl = 'http://localhost:11434' // base url for the local llm

export async function healthCheck(): Promise<string> {
  const result = await fetch(baseUrl)
  if (result.ok) {
    return await result.text()
  }
  return 'local ollama unreachable'
}

export async function sendMessage(message: string) {



}
