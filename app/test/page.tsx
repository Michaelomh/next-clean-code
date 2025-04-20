import { Text } from '@ui/ui'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10">
      <Text style="h1">Form Testing Page</Text>
      <div className="mt-10 flex w-full flex-col items-start gap-4">
        <Link className="underline hover:opacity-80" href="/test/input">
          Input
        </Link>
        <Link className="underline hover:opacity-80" href="/test/textarea">
          Textarea
        </Link>
        <Link className="underline hover:opacity-80" href="/test/switch">
          Switch
        </Link>
        <Link className="underline hover:opacity-80" href="/test/select">
          Select
        </Link>
        <Link className="underline hover:opacity-80" href="/test/radio">
          Radio
        </Link>
        <Link className="underline hover:opacity-80" href="/test/checkbox">
          Checkbox
        </Link>
      </div>
    </main>
  )
}
