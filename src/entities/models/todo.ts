import ListsTable from '@/drizzle/schemas/lists'

export type InsertList = typeof ListsTable.$inferInsert
export type SelectList = typeof ListsTable.$inferSelect

export type Todo = SelectList

export type TodoInsert = InsertList
