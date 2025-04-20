import * as React from 'react'

import { cn } from '@/app/_components/utils'

function Input({
  className,
  type = 'text',
  readOnly,
  disabled,
  placeholder,
  autoComplete,
  autoFocus,
  icon,
  inputSide,
  rounded,
  ...props
}: React.ComponentProps<'input'> & {
  type?: 'text' | 'password' | 'file' | 'number'
  placeholder?: string
  icon?: React.ReactNode
  inputSide?: React.ReactNode
  autoComplete?: 'on' | 'off' | 'name' | 'email' | 'username' | 'country'
  rounded?: boolean
}) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-2 flex items-center [&_svg:not([class*='size-'])]:size-4">{icon}</div>
      )}
      <input
        type={type}
        data-slot="input"
        readOnly={readOnly}
        aria-readonly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={cn(
          'peer file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:placeholder:text-destructive aria-readonly:focus-visible:border-input flex h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-readonly:cursor-default aria-readonly:focus-visible:ring-0 md:text-sm',
          icon && 'pl-8',
          inputSide && 'pr-8',
          rounded ? 'rounded-full' : 'rounded-md',
          className,
        )}
        {...props}
      />
      {inputSide && (
        <div
          aria-disabled={disabled}
          aria-invalid={props['aria-invalid']}
          className="absolute inset-y-0 right-2 flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-50 aria-invalid:text-red-500 [&_svg:not([class*='size-'])]:size-4"
        >
          {inputSide}
        </div>
      )}
    </div>
  )
}

export { Input }
