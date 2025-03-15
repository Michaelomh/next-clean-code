import { z } from 'zod'

import { Todo } from '@/src/entities/models/todo'
import { ICreateTodoUseCase } from '@/src/application/use-cases/create-todo-use-case'

function presenter(todo: Todo | null) {
  if (!todo) return {}

  return {
    id: todo.id,
    title: todo.title,
    content: todo.content,
    userId: todo.userId,
  }
}

const inputSchema = z.object({ todo: z.string().min(1) })

export type ICreateTodoController = ReturnType<typeof createTodoController>

export const createTodoController =
  (createTodoUseCase: ICreateTodoUseCase) =>
  async (input: Partial<z.infer<typeof inputSchema>>): Promise<ReturnType<typeof presenter>> => {
    const { data, error: inputParseError } = inputSchema.safeParse(input)

    if (inputParseError) {
      throw new Error('Invalid data', { cause: inputParseError })
    }

    let todo: Todo | null = null

    try {
      todo = await createTodoUseCase({ todo: data.todo })
    } catch (err) {
      console.error(err)
    }

    return presenter(todo)
  }
