import { createModule } from '@evyweb/ioctopus'

import { DI_SYMBOLS } from '@/di/types'
import { createTodoUseCase } from '@/src/application/use-cases/create-todo-use-case'
import { createTodoController } from '@/src/interface-adapters/controllers/todos/create-todo-controller'
import { TodosRepository } from '@/src/infrastructure/repositories/todos.repository'

export function createTodosModule() {
  const todosModule = createModule()

  // Repositories
  todosModule.bind(DI_SYMBOLS.ITodosRepository).toClass(TodosRepository)

  // Use Cases
  todosModule
    .bind(DI_SYMBOLS.ICreateTodoUseCase)
    .toHigherOrderFunction(createTodoUseCase, [DI_SYMBOLS.ITodosRepository])

  // Controllers
  todosModule
    .bind(DI_SYMBOLS.ICreateTodoController)
    .toHigherOrderFunction(createTodoController, [DI_SYMBOLS.ICreateTodoUseCase])

  return todosModule
}
