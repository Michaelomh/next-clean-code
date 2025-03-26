type KitchenSinkContainerType = {
  header: string
  subHeader?: string
  children: React.ReactNode
}

export const KitchenSinkContainer = ({ header, subHeader, children }: KitchenSinkContainerType) => {
  return (
    <div className="mb-4">
      <p className="mt-6 mb-2">{header}</p>
      {subHeader && <p>{subHeader}</p>}
      <div className="grid auto-cols-auto grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
        {children}
      </div>
    </div>
  )
}
