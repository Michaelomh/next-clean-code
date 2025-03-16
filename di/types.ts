import { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'
import { ICreateTodoUseCase } from '@/src/application/use-cases/create-todo-use-case'
import { IGetTodosUseCase } from '@/src/application/use-cases/get-todos-use-case'
import { IToggleTodoUseCase } from '@/src/application/use-cases/toggle-todo-use-case'
import { ICreateTodoController } from '@/src/interface-adapters/controllers/todos/create-todo-controller'
import { IGetTodosController } from '@/src/interface-adapters/controllers/todos/get-todos-controller'
import { IToggleTodoController } from '@/src/interface-adapters/controllers/todos/toggle-todo-controller'

export const DI_SYMBOLS = {
  // Services
  // IAuthenticationService: Symbol.for('IAuthenticationService'),

  // Repositories
  ITodosRepository: Symbol.for('ITodosRepository'),

  // Use Cases
  ICreateTodoUseCase: Symbol.for('ICreateTodoUseCase'),
  IGetTodosUseCase: Symbol.for('IGetTodosUseCase'),
  IToggleTodoUseCase: Symbol.for('IToggleTodoUseCase'),

  // Controllers
  ICreateTodoController: Symbol.for('ICreateTodoController'),
  IGetTodosController: Symbol.for('IGetTodosController'),
  IToggleTodoController: Symbol.for('IToggleTodoController'),
}

export interface DI_RETURN_TYPES {
  // Services
  // IAuthenticationService: IAuthenticationService;

  // Repositories
  ITodosRepository: ITodosRepository

  // Use Cases
  ICreateTodoUseCase: ICreateTodoUseCase
  IGetTodosUseCase: IGetTodosUseCase
  IToggleTodoUseCase: IToggleTodoUseCase

  // Controllers
  ICreateTodoController: ICreateTodoController
  IGetTodosController: IGetTodosController
  IToggleTodoController: IToggleTodoController
}
