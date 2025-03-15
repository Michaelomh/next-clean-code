'use client'

import { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { Input } from './_components/ui/input'
import { Button } from './_components/ui/button'
import { createTodo } from './action'

export function AddTodo() {
  const [text, setText] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await createTodo(text)
    if (res) {
      if (res.error) {
        console.error(res.error)
      } else if (res.success) {
        console.log('SUCCESS')
        setText('')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={!text.trim()}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add
      </Button>
    </form>
  )
}
