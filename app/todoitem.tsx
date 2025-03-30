'use client'

import { useState } from 'react'
import { Checkbox } from './_components/ui/checkbox/checkbox'
import { toggleTodo } from './action'
import { TbLoader2 } from 'react-icons/tb'

type TodoItemProps = {
  todo: {
    id: number
    title: string
    content: string
    userId: number
    completedAt: Date | null
  }
}

export function TodoItem({ todo }: TodoItemProps) {
  const [loading, setLoading] = useState(false)

  const onCheckboxChange = async () => {
    setLoading(true)
    await toggleTodo(todo.id)
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      {loading ? (
        <TbLoader2 color="white" size={16} className="animate-spin" />
      ) : (
        <Checkbox id={`todo-${todo.id}`} checked={todo.completedAt !== null} onCheckedChange={onCheckboxChange} />
      )}
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-1 cursor-pointer text-neutral-200 ${todo.completedAt !== null ? 'line-through' : ''}`}
      >
        {todo.title}
      </label>
    </div>
  )
}
