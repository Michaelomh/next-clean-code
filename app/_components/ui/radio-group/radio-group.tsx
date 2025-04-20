import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { TbCircle } from 'react-icons/tb'

import { cn } from '@/app/_components/utils'

function RadioGroup({
  orientation,
  value,
  disabled,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      value={value}
      disabled={disabled}
      orientation={orientation}
      loop={true}
      className={cn('peer gap-3', orientation === 'horizontal' ? 'flex' : 'grid', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  value,
  disabled,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  console.log(props)
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 [&_svg]:fill-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:[&_svg]:fill-red-500 aria-invalid:[&_svg]:text-red-500',
        className,
      )}
      value={value}
      disabled={disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <TbCircle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupPrimitive }
