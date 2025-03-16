'use client'

import { Checkbox } from './_components/ui/checkbox'
import { toggleTodo } from './action'

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
  const onCheckboxChange = async () => {
    await toggleTodo(todo.id)
  }

  return (
    <div className="flex items-center gap-2">
      <Checkbox id={`todo-${todo.id}`} checked={todo.completedAt !== null} onCheckedChange={onCheckboxChange} />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-1 cursor-pointer text-neutral-200 ${todo.completedAt !== null ? 'line-through' : ''}`}
      >
        {todo.title}
      </label>
    </div>
  )
}
