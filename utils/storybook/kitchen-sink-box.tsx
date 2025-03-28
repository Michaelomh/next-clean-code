import { cn } from '@/app/_components/utils'

export const KitchenSinkBox = ({
  children,
  description,
  span,
  innerClassName,
  outerClassName,
  className,
}: React.PropsWithChildren<{
  description: string
  span: number
  innerClassName?: string
  outerClassName?: string
  className?: string
}>) => {
  return (
    <div
      className={cn('flex min-h-32 flex-col justify-between rounded-md border-2', className)}
      style={{
        gridColumnStart: `span ${span}`,
      }}
    >
      <div className={cn('flex flex-1 items-center justify-center p-2', outerClassName)}>
        {/* additional div necessary for responsive purposes */}
        <div className={innerClassName}>{children}</div>
      </div>
      <p className="m-0 text-center">{description}</p>
    </div>
  )
}
