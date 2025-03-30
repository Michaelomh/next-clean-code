import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/app/_components/utils'

const textVariants = cva('', {
  variants: {
    style: {
      h1: 'text-3xl font-medium leading-2xl tracking-[-0.0075em]',
      h2: 'text-2xl font-medium leading-xl tracking-[-0.00625em]',
      h3: 'text-xl font-medium leading-lg tracking-[-0.005em]',
      p1: 'text-md font-regular leading-md tracking-0',
      p2: 'text-sm font-regular leading-sm tracking-0',
    },
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    noOfLines: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
    italics: {
      true: 'italic',
      false: 'not-italic',
    },
  },
})

function Text({
  style,
  font,
  size,
  className,
  noOfLines,
  weight,
  italics,
  color,
  children,
  ...props
}: React.ComponentProps<'h1'> &
  VariantProps<typeof textVariants> & {
    style?: 'h1' | 'h2' | 'h3' | 'p1' | 'p2'
    noOfLines?: number
    size?: string
    font?: 'sans' | 'mono'
    weight?: string
    color?: string
    italics?: boolean
  }) {
  const colorClass = `${color}`

  return (
    <p
      data-slot="text"
      className={cn(textVariants({ style, font, size, weight, noOfLines, italics }), color && colorClass, className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { Text }
