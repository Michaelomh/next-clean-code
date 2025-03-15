import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import UsersTable from './users'

export const ListsTable = sqliteTable('posts', {
  id: integer().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  userId: integer()
    .notNull()
    .references(() => UsersTable.id, { onDelete: 'cascade' }),
  createdAt: text()
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
  completedAt: integer('completed_at', { mode: 'timestamp' }),
})

export default ListsTable
