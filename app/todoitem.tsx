'use client'

import { Todo } from '@/src/entities/models/todo'
import { Checkbox } from './_components/ui/checkbox'

type TodoItemProps = {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2">
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
    </div>
  )
}
