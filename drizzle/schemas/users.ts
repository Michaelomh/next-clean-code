import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const UsersTable = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').unique().notNull(),
})

export default UsersTable

// is there a better way of doing this?
export type InsertUser = typeof UsersTable.$inferInsert
export type SelectUser = typeof UsersTable.$inferSelect
