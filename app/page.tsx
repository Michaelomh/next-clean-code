import { db } from '@/drizzle'
import { Button } from './_components/ui/button'

export default async function Home() {
  const data = await db.query.users.findFirst()

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1>Hello World</h1>
      <p>Users: {data && data.name}</p>
      <Button>Click me</Button>
    </div>
  )
}
