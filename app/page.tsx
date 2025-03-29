import { ColorModeToggle } from './_components/shared/color-mode-toggle'
import { Icon } from './_components/ui/icon/icon'
import TodoList from './todolist'

export default async function Home() {
  return (
    <main className="container mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-center text-2xl font-bold">Todo List</h1>
      <span
        className="material-symbols-outlined !text-[32px] text-red-500"
        style={{ fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48` }}
      >
        16mp
      </span>
      <Icon icon="16mp" size={32} color="text-green-500" />
      <ColorModeToggle />
      <TodoList />
    </main>
  )
}
