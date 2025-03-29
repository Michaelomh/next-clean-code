import { cn } from '@/app/_components/utils'
import 'material-symbols'

const variantMap = {
  outline: 'material-symbols-outlined',
  round: 'material-symbols-rounded',
  sharp: 'material-symbols-sharp',
}
function Icon({
  icon = 'question_mark',
  type = 'outline',
  filled = false,
  weight = 400,
  grade = 0,
  opticalSize = 48,
  size = 24,
  color,
  className,
  ...props
}: React.ComponentProps<'span'> & {
  icon?: string
  type?: 'outline' | 'round' | 'sharp'
  filled?: boolean
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | '100' | '200' | '300' | '400' | '500' | '600' | '700'
  grade?: -25 | 0 | 200
  opticalSize?: 20 | 24 | 40 | 48
  size?: number
  color?: string
}) {
  console.log('size', size)
  return (
    <span
      className={cn('cursor-default', variantMap[type], color, size && `!text-[${size}px]`, className)}
      style={{
        fontSize: `${size}px !important`,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      }}
      {...props}
    >
      {icon}
    </span>
  )
}

export { Icon }
