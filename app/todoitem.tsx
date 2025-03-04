'use client'

import { SelectList } from '@/drizzle/schemas/lists'
import { Checkbox } from './_components/ui/checkbox'

type TodoItemProps = {
  todo: SelectList
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <>
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completedAt !== null}
        onCheckedChange={() => console.log('changed')}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-1 cursor-pointer text-neutral-200 ${todo.completedAt !== null ? 'line-through' : ''}`}
      >
        {todo.title}
      </label>
    </>
  )
}
