import { Card } from './_components/ui/card'
import { AddTodo } from './addtodo'
import { TodoItem } from './todoitem'
import { getTodos } from './action'

export default async function TodoList() {
  const todos = await getTodos()

  if ('error' in todos) {
    return (
      <div className="space-y-6">
        <h2>{todos.error}</h2>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <AddTodo />
      <div className="space-y-2">
        {todos.length === 0 ? (
          <Card className="text-muted-foreground p-6 text-center">No todos yet. Add one above!</Card>
        ) : (
          <>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-medium">Your Tasks</h2>
            </div>
            <Card className="flex flex-col items-start space-x-4 bg-neutral-900 p-4">
              {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
              ))}
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
