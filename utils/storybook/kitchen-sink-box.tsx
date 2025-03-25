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
      <div
        className="auto-cols-auto gap-2"
        style={{
          display: 'grid',
          gridTemplateColumns:
            '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        }}
      >
        {children}
      </div>
    </div>
  )
}
