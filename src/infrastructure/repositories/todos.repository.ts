import { TodoInsert, Todo } from '@/src/entities/models/todo'
import { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'
import { db } from '@/drizzle'
import { lists } from '@/drizzle/schemas'

export class TodosRepository implements ITodosRepository {
  async createTodo(todo: TodoInsert): Promise<Todo> {
    const newTodo = await db.insert(lists).values(todo).returning()
    // TODO: what happen when you cannot insert? or what happens when you insert nothing?
    return newTodo[0]
  }
}
