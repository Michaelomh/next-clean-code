import * as React from 'react'

import { cn } from '@/app/_components/utils'
import { Text } from '@ui/ui'

const RESIZE_MAP = {
  both: 'resize',
  none: 'resize-none',
  horizontal: 'resize-x',
  vertical: 'resize-y',
}

function Textarea({
  className,
  readOnly,
  disabled,
  placeholder,
  autoFocus,
  resize = 'both',
  maxLength,
  counterThreshold = 0,
  ...props
}: React.ComponentProps<'textarea'> & {
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  counterThreshold?: number // 0 = always show, 100 = show only when error
}) {
  const currentValLength = props.value != undefined ? String(props.value).length : 0

  return (
    <div className="relative">
      <textarea
        data-slot="textarea"
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus={autoFocus}
        aria-readonly={readOnly}
        className={cn(
          'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aria-readonly:focus-visible:border-input flex field-sizing-content min-h-16 w-full min-w-48 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-readonly:cursor-default aria-readonly:focus-visible:ring-0 md:text-sm',
          RESIZE_MAP[resize],
          className,
        )}
        {...props}
      />
      {maxLength && currentValLength / maxLength >= counterThreshold / 100 && (
        <Text
          style="p2"
          className={cn(
            'absolute right-0 -bottom-7 flex items-center',
            currentValLength > maxLength ? 'text-destructive' : '',
          )}
        >
          {currentValLength} / {maxLength}
        </Text>
      )}
    </div>
  )
}

export { Textarea }
