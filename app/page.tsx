import { ColorModeToggle } from './_components/shared/color-mode-toggle'
import TodoList from './todolist'

export default async function Home() {
  return (
    <main className="container mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-center text-2xl font-bold">Todo List</h1>
      <ColorModeToggle />
      <TodoList />
    </main>
  )
}
