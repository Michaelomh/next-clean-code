import { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'
import { ICreateTodoUseCase } from '@/src/application/use-cases/create-todo-use-case'
import { ICreateTodoController } from '@/src/interface-adapters/controllers/todos/create-todo-controller'

export const DI_SYMBOLS = {
  // Services
  // IAuthenticationService: Symbol.for('IAuthenticationService'),

  // Repositories
  ITodosRepository: Symbol.for('ITodosRepository'),

  // Use Cases
  ICreateTodoUseCase: Symbol.for('ICreateTodoUseCase'),

  // Controllers
  ICreateTodoController: Symbol.for('ICreateTodoController'),
}

export interface DI_RETURN_TYPES {
  // Services
  // IAuthenticationService: IAuthenticationService;

  // Repositories
  ITodosRepository: ITodosRepository

  // Use Cases
  ICreateTodoUseCase: ICreateTodoUseCase

  // Controllers
  ICreateTodoController: ICreateTodoController
}
