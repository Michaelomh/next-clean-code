import type { Todo } from '@/src/entities/models/todo'
import type { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'

export type IGetTodosUseCase = ReturnType<typeof getTodosUseCase>

export const getTodosUseCase = (todosRepository: ITodosRepository) => async (): Promise<Todo[]> => {
  const newTodo = await todosRepository.getTodos()
  return newTodo
}
