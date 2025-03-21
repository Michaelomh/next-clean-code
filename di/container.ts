import { createContainer } from '@evyweb/ioctopus'

import { DI_RETURN_TYPES, DI_SYMBOLS } from '@/di/types'

import { createTodosModule } from '@/di/modules/todos.module'

const ApplicationContainer = createContainer()

ApplicationContainer.load(Symbol('TodosModule'), createTodosModule())

export function getInjection<K extends keyof typeof DI_SYMBOLS>(symbol: K): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}
