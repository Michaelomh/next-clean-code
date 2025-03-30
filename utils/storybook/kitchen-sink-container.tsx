import { Text } from '@/app/_components/ui'

type KitchenSinkContainerType = {
  header: string
  subHeader?: string
  children: React.ReactNode
}

export const KitchenSinkContainer = ({ header, subHeader, children }: KitchenSinkContainerType) => {
  return (
    <div className="mb-4">
      {header !== '' && (
        <Text style="h2" className="font-regular mt-6 tracking-tight uppercase">
          {header}
        </Text>
      )}
      {subHeader && (
        <Text style="h3" className="text-lg font-light">
          {subHeader}
        </Text>
      )}
      <div className="grid auto-cols-auto grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
        {children}
      </div>
    </div>
  )
}
