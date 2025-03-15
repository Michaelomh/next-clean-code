import { defineConfig } from 'drizzle-kit'
import env from './utils/env'

export default defineConfig({
  schema: './drizzle/schemas',
  out: './drizzle/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL!,
    authToken: env.TURSO_AUTH_TOKEN || undefined,
  },
  verbose: true,
  strict: true,
  casing: 'snake_case',
})
