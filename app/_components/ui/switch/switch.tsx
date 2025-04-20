import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/app/_components/utils'

function Switch({
  thumbClassName,
  className,
  checked,
  onCheckedChange,
  disabled,
  icon,
  readOnly,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  icon?: React.ReactNode
  thumbClassName?: string
  readOnly?: boolean
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        'aria-readonly:cursor-default',
        className,
      )}
      aria-readonly={readOnly}
      disabled={disabled}
      checked={checked}
      onCheckedChange={readOnly ? undefined : onCheckedChange}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground flex size-4 items-center justify-center rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
          thumbClassName,
        )}
      >
        {icon ? icon : null}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
