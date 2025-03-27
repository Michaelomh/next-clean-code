import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/app/_components/utils'

const badgeVariants = cva(
  'inline-flex items-center cursor-default justify-center rounded-sm border text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] [&>svg]:text-current transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-stone-500 text-stone-800 [&>svg]:text-stone-800 bg-stone-100 hover:bg-stone-200',
        info: 'border-sky-500 text-sky-800 [&>svg]:text-sky-800 bg-sky-100 hover:bg-sky-200',
        success: 'border-emerald-500 text-emerald-800 [&>svg]:text-emerald-800 bg-emerald-100 hover:bg-emerald-200',
        warning: 'border-amber-500 text-amber-800 [&>svg]:text-amber-800 bg-amber-100 hover:bg-amber-200',
        destructive: 'border-rose-500 text-rose-800 [&>svg]:text-rose-800 bg-rose-100 hover:bg-rose-200',
      },
      size: {
        lg: 'h-6 [&>svg]:size-3 px-2.5 py-1',
        md: 'h-5 [&>svg]:size-3 px-2.5 py-1',
        sm: 'h-4 [&>svg]:size-3 px-2',
      },
      rounded: {
        true: 'rounded-full',
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
      hasAction: {
        true: 'hover:cursor-pointer',
        false: 'hover:bg-initial',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        disabled: true,
        className: 'border-stone-500/50 text-stone-800/50 [&>svg]:text-stone-800/50 bg-stone-50',
      },
      {
        variant: 'success',
        disabled: true,
        className: 'border-emerald-500/50 text-emerald-800/50 [&>svg]:text-emerald-800/50 bg-emerald-50',
      },
      {
        variant: 'warning',
        disabled: true,
        className: 'border-amber-500/50 text-amber-800/50 [&>svg]:text-amber-800/50 bg-amber-50',
      },
      {
        variant: 'info',
        disabled: true,
        className: 'border-sky-500/50 text-sky-800/50 [&>svg]:text-sky-800/50 bg-sky-50',
      },
      {
        variant: 'destructive',
        disabled: true,
        className: 'border-rose-500/50 text-rose-800/50 [&>svg]:text-rose-800/50 bg-rose-50',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

function Badge({
  className,
  size,
  rounded,
  variant,
  disabled,
  onClick,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof badgeVariants>) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant, rounded, size, disabled, hasAction: !!onClick }), className)}
      {...props}
      onClick={onClick}
    />
  )
}

export { Badge, badgeVariants }
