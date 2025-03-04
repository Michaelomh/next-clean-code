import TodoList from './todolist'

export default async function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
      <TodoList />
    </main>
  )
}
