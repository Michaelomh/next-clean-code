import type { Todo } from '@/src/entities/models/todo'
import type { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'

export type ICreateTodoUseCase = ReturnType<typeof createTodoUseCase>

export const createTodoUseCase =
  (todosRepository: ITodosRepository) =>
  async (input: { todo: string }): Promise<Todo> => {
    if (input.todo.length < 4) {
      throw new Error('Todo must be at least 4 chars')
    }

    const newTodo = await todosRepository.createTodo({
      title: input.todo,
      content: input.todo,
      userId: 1,
    })

    return newTodo
  }
