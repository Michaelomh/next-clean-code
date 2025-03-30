import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/app/_components/utils'
import { TbLoader2 } from 'react-icons/tb'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] cursor-pointer [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:opacity-50 disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        link: 'font-regular text-blue-400 border-b border-b-transparent hover:border-b-blue-400 rounded-none',
      },
      size: {
        md: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 px-3 gap-1.5 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        'icon-sm': 'size-8',
        'icon-md': 'size-9',
        'icon-lg': 'size-10',
      },
      isDisabled: {
        true: '',
        false: '',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'link',
        size: ['sm', 'md', 'lg'],
        className: 'h-6 px-0.5 py-0.5 has-[>svg]:px-0.5',
      },
      {
        variant: 'link',
        size: ['icon-sm', 'icon-md', 'icon-lg'],
        className: 'h-6 w-6 px-0.5 py-0.5 has-[>svg]:px-0.5',
      },
      {
        variant: 'default',
        isDisabled: true,
        className: 'hover:bg-primary',
      },
      {
        variant: 'secondary',
        isDisabled: true,
        className: 'hover:bg-secondary',
      },
      {
        variant: 'outline',
        isDisabled: true,
        className: 'hover:bg-backgroundt',
      },
      {
        variant: 'ghost',
        isDisabled: true,
        className: 'hover:bg-background',
      },
      {
        variant: 'destructive',
        isDisabled: true,
        className: 'hover:bg-destructive',
      },
      {
        variant: 'link',
        isDisabled: true,
        className: 'hover:border-b-0',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant,
  size,
  fullWidth,
  spinnerPlacement = 'start',
  loadingText,
  disabled,
  asChild = false,
  loading,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    fullWidth?: boolean
    loadingText?: string
    spinnerPlacement?: 'start' | 'end'
  }) {
  const Comp = asChild ? Slot : 'button'
  const isDisabled = disabled || loading

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth, isDisabled: isDisabled, className }))}
      type={props.type || 'button'}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          {spinnerPlacement === 'start' && <TbLoader2 className="animate-spin" />}
          {loadingText}
          {spinnerPlacement === 'end' && <TbLoader2 className="animate-spin" />}
        </>
      ) : (
        props.children
      )}
    </Comp>
  )
}

export { Button }
