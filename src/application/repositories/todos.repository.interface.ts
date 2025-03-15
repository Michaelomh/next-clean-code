import { TodoInsert, Todo } from '@/src/entities/models/todo'

export interface ITodosRepository {
  createTodo(todo: TodoInsert): Promise<Todo>
  // getTodo(id: number): Promise<Todo | undefined>
  // getTodos(): Promise<Todo[]>
  // updateTodo(id: number, todo: Partial<TodoInsert>): Promise<Todo>
}
