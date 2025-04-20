import { cn } from '@/app/_components/utils'
import { Text } from '@/app/_components/ui'

type props = {
  text: string | React.ReactNode
  className?: string
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
  outerClassName?: string
}

export const FloatingText = ({ text, className, position = 'top-left', outerClassName }: props) => {
  let positionStyle = ''
  switch (position) {
    case 'top-left':
      positionStyle = 'top-5 left-5'
      break
    case 'top-center':
      positionStyle = 'top-5 left-[calc(50%-112px)]'
      break
    case 'top-right':
      positionStyle = 'top-5 right-5'
      break
    case 'bottom-right':
      positionStyle = 'bottom-5 right-5'
      break
    case 'bottom-center':
      positionStyle = 'bottom-5 left-[calc(50%-112px)]'
      break
    case 'bottom-left':
      positionStyle = 'bottom-5 left-5'
      break
  }
  return (
    <div className={cn('fixed', positionStyle, outerClassName)}>
      <Text
        style="p1"
        className={cn('sticky w-48 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300', className)}
      >
        {text}
      </Text>
    </div>
  )
}
