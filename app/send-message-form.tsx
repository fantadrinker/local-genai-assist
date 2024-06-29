'use client'
import { useRouter } from "next/navigation"
import React, { useEffect, useRef } from "react"

export function SendMessageForm({ sendMessage }: { sendMessage: (message: string) => Promise<void> }) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    new Promise((res) => {
      const timer = setTimeout(() => {
        res(1)
      }, 3000)
    }).then(() => router.refresh())
  })

  return (
    <form onSubmit={async (event) => {
      event.preventDefault()
      if (inputRef?.current) {
        await sendMessage(inputRef.current.value)
        inputRef.current.value = ''
      }
    }} >
      <input className='text-black' placeholder="Ask me something" ref={inputRef} />
      <button > Send </button>
    </form>
  )
}
