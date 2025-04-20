import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/app/_components/utils'
import { TbCheck, TbMinus } from 'react-icons/tb'

const checkboxVariants = cva(
  'group border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 cursor-pointer rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 size-4 aria-readOnly:cursor-default',
)

function Checkbox({
  className,
  checked,
  onCheckedChange,
  disabled,
  readOnly,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants> & {
    readOnly?: boolean
  }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      disabled={disabled}
      checked={checked}
      onCheckedChange={readOnly ? undefined : onCheckedChange}
      className={cn(checkboxVariants({ className }))}
      aria-readonly={readOnly}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <TbCheck className="h-4 w-4 group-data-[state=checked]:block group-data-[state=indeterminate]:hidden" />
        <TbMinus className="h-4 w-4 group-data-[state=checked]:hidden group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxPrimitive }
