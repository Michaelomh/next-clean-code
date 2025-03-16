import { eq } from 'drizzle-orm'

import { db } from '@/drizzle'
import { lists } from '@/drizzle/schemas'

import { TodoInsert, Todo } from '@/src/entities/models/todo'
import { ITodosRepository } from '@/src/application/repositories/todos.repository.interface'

export class TodosRepository implements ITodosRepository {
  async createTodo(todo: TodoInsert): Promise<Todo> {
    const newTodo = await db.insert(lists).values(todo).returning()
    // TODO: what happen when you cannot insert? or what happens when you insert nothing?
    return newTodo[0]
  }

  async getTodos(): Promise<Todo[]> {
    const todos = await db.query.lists.findMany()
    return todos
  }

  async getTodo(todoId: number): Promise<Todo | undefined> {
    const todos = await db.query.lists.findFirst({ where: eq(lists.id, todoId) })
    return todos
  }

  async updateTodo(todo: TodoInsert): Promise<Todo | undefined> {
    if (todo.id === undefined) {
      return undefined
    }

    const updateTodo = await db.update(lists).set(todo).where(eq(lists.id, todo.id)).returning()
    return updateTodo[0]
  }
}
