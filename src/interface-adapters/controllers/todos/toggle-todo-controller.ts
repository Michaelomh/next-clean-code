import { IToggleTodoUseCase } from '@/src/application/use-cases/toggle-todo-use-case'

export type IToggleTodoController = ReturnType<typeof toggleTodoController>

export const toggleTodoController =
  (toggleTodoUseCase: IToggleTodoUseCase) =>
  async (id: number): Promise<boolean> => {
    try {
      return await toggleTodoUseCase(id)
    } catch (err) {
      console.error(err)
    }

    return false
  }
