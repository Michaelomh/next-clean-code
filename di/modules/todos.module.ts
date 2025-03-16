import { createModule } from '@evyweb/ioctopus'

import { DI_SYMBOLS } from '@/di/types'
import { createTodoUseCase } from '@/src/application/use-cases/create-todo-use-case'
import { createTodoController } from '@/src/interface-adapters/controllers/todos/create-todo-controller'
import { TodosRepository } from '@/src/infrastructure/repositories/todos.repository'
import { getTodosUseCase } from '@/src/application/use-cases/get-todos-use-case'
import { getTodosController } from '@/src/interface-adapters/controllers/todos/get-todos-controller'
import { toggleTodoUseCase } from '@/src/application/use-cases/toggle-todo-use-case'
import { toggleTodoController } from '@/src/interface-adapters/controllers/todos/toggle-todo-controller'

export function createTodosModule() {
  const todosModule = createModule()

  // Repositories
  todosModule.bind(DI_SYMBOLS.ITodosRepository).toClass(TodosRepository)

  // Use Cases
  todosModule
    .bind(DI_SYMBOLS.ICreateTodoUseCase)
    .toHigherOrderFunction(createTodoUseCase, [DI_SYMBOLS.ITodosRepository])
  todosModule.bind(DI_SYMBOLS.IGetTodosUseCase).toHigherOrderFunction(getTodosUseCase, [DI_SYMBOLS.ITodosRepository])
  todosModule
    .bind(DI_SYMBOLS.IToggleTodoUseCase)
    .toHigherOrderFunction(toggleTodoUseCase, [DI_SYMBOLS.ITodosRepository])

  // Controllers
  todosModule
    .bind(DI_SYMBOLS.ICreateTodoController)
    .toHigherOrderFunction(createTodoController, [DI_SYMBOLS.ICreateTodoUseCase])
  todosModule
    .bind(DI_SYMBOLS.IGetTodosController)
    .toHigherOrderFunction(getTodosController, [DI_SYMBOLS.IGetTodosUseCase])

  todosModule
    .bind(DI_SYMBOLS.IToggleTodoController)
    .toHigherOrderFunction(toggleTodoController, [DI_SYMBOLS.IToggleTodoUseCase])

  return todosModule
}
