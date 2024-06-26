'use client'
import React, { useRef } from "react"

export function SendMessageForm({ sendMessage }: { sendMessage: (message: string) => Promise<void> }) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  return (
    <form onSubmit={async () => {
      if (inputRef?.current)
        await sendMessage(inputRef.current.value)
    }} >
      <input placeholder="Ask me something" ref={inputRef} />
      <button > Send </button>
    </form>
  )
}
