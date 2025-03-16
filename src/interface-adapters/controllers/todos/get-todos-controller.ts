import { IGetTodosUseCase } from '@/src/application/use-cases/get-todos-use-case'
import { Todo } from '@/src/entities/models/todo'

function presenter(todos: Todo[] | null) {
  if (!todos) return []

  return todos.map((t) => {
    return {
      id: t.id,
      title: t.title,
      content: t.content,
      userId: t.userId,
      completedAt: t.completedAt,
    }
  })
}

export type IGetTodosController = ReturnType<typeof getTodosController>

export const getTodosController =
  (getTodosUseCase: IGetTodosUseCase) => async (): Promise<ReturnType<typeof presenter>> => {
    let todos: Todo[] | null = null
    try {
      todos = await getTodosUseCase()
    } catch (err) {
      console.error(err)
    }
    return presenter(todos)
  }
