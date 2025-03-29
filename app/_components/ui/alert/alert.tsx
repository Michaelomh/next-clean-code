import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/app/_components/utils'
import { X } from 'lucide-react'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid  has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        success:
          'text-emerald-500 bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-emerald-500/80 border-emerald-400',
        warning:
          'text-amber-500 bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-amber-500/80 border-amber-400',
        info: 'text-sky-500 bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-sky-500/80 border-sky-400',
        destructive:
          'text-rose-500 bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-rose-500/80 border-rose-400',
      },
      hasIcon: {
        true: '',
        false: '',
      },
      hasCloseButton: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        hasIcon: false,
        hasCloseButton: undefined,
        className: '',
      },
      {
        hasIcon: true,
        hasCloseButton: undefined,
        className: 'grid-cols-[calc(var(--spacing)*4)_1fr]',
      },
      {
        hasIcon: false,
        hasCloseButton: true,
        className: 'grid-cols-[1fr_calc(var(--spacing)*4)]',
      },
      {
        hasIcon: true,
        hasCloseButton: true,
        className: 'grid-cols-[calc(var(--spacing)*4)_1fr_calc(var(--spacing)*4)]',
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  title,
  icon,
  className,
  variant,
  closeButton,
  onClose,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof alertVariants> & {
    title: string
    icon?: React.ReactNode
    closeButton?: boolean
    onClose?: () => void
  }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, hasIcon: !!icon, hasCloseButton: closeButton }), className)}
      {...props}
    >
      {icon && icon}
      <div>
        <div
          data-slot="alert-title"
          className="col-start-2 line-clamp-1 min-h-4 cursor-default font-medium tracking-tight"
        >
          {title}
        </div>
        {props.children && (
          <div
            data-slot="alert-description"
            className="col-start-2 grid cursor-default justify-items-start gap-1 text-sm font-light [&_p]:leading-relaxed"
          >
            {props.children}
          </div>
        )}
      </div>
      {closeButton && onClose && <X className="flex !h-full cursor-pointer" onClick={onClose} />}
    </div>
  )
}

export { Alert }
