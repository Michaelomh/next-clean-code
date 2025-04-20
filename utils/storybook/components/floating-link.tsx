import { cn } from '@/app/_components/utils'
import { TbExternalLink } from 'react-icons/tb'

type props = {
  link: string
  text: string | React.ReactNode
  className?: string
  isExternal?: boolean
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
}

export const FloatingLink = ({ text, link, className, isExternal = true, position = 'top-left' }: props) => {
  let positionStyle = ''
  switch (position) {
    case 'top-left':
      positionStyle = 'top-1 left-1'
      break
    case 'top-center':
      positionStyle = 'top-1 left-[calc(50%-112px)]'
      break
    case 'top-right':
      positionStyle = 'top-1 right-1'
      break
    case 'bottom-right':
      positionStyle = 'bottom-1 right-1'
      break
    case 'bottom-center':
      positionStyle = 'bottom-1 left-[calc(50%-112px)]'
      break
    case 'bottom-left':
      positionStyle = 'bottom-1 left-1'
      break
  }
  return (
    <a
      href={link}
      className={cn('absolute border-b-stone-700 text-center hover:border-b', positionStyle, className)}
      target="_blank"
    >
      {text}
      {isExternal && <TbExternalLink className="mb-1 ml-1 inline" />}
    </a>
  )
}
