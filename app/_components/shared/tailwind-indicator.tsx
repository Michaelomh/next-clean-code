import env from '@/utils/env'

export function TailwindIndicator() {
  if (env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-1 left-1 z-40 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block md:hidden lg:hidden">xs</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden md:hidden lg:block">lg</div>
    </div>
  )
}
