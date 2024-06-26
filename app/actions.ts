
interface ChatItem {
  sender: string
  message: string
}

const chatHistory: ChatItem[] = []

const BASE_URL = 'http://localhost:11434' // base url for the local llm

const MODEL_NAME = 'qwen2:0.5b'

export async function healthCheck(): Promise<string> {
  const result = await fetch(BASE_URL)
  if (result.ok) {
    return await result.text()
  }
  return 'local ollama unreachable'
}

export function getChatHistory(): ChatItem[] {
  return chatHistory
}

export async function sendMessage(message: string) {
  'use server'
  // store the message in the chat history
  chatHistory.push({ sender: 'me', message })

  // craft the request body
  const body = {
    model: MODEL_NAME,
    prompt: message,
    stream: false
  }

  // send the request

  const response = await fetch(
    `${BASE_URL}/api/generate`,
    {
      method: 'POST',
      body: JSON.stringify(body)
    })

  // store the response in the chat history
  if (response.ok) {
    const responseText = await response.json()
    chatHistory.push({ sender: MODEL_NAME, message: responseText.response })
  } else {
    console.log("something went wrong")
    chatHistory.push({ sender: 'system', message: 'something went wrong' })
  }
}

