import env from '@/utils/env'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schemas'

// Setup sqlite database connection
const client = createClient({
  url: env.TURSO_DATABASE_URL!,
  authToken: env.TURSO_AUTH_TOKEN!,
})
export const db = drizzle(client, { schema, logger: true, casing: 'snake_case' })
