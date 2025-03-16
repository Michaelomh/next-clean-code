import type { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'

export type IToggleTodoUseCase = ReturnType<typeof toggleTodoUseCase>

export const toggleTodoUseCase =
  (todosRepository: ITodosRepository) =>
  async (id: number): Promise<boolean> => {
    const targetTodo = await todosRepository.getTodo(id)

    if (!targetTodo) {
      return false
    }

    await todosRepository.updateTodo({
      id: id,
      title: targetTodo.title,
      content: targetTodo.content,
      userId: targetTodo.userId,
      // if completedAt exist, we remove, if completedAt does not exist we add current Date
      completedAt: targetTodo.completedAt ? null : new Date(),
    })

    return true
  }
