import { z } from 'zod'

// Define Schema as an object with all the env variables and types
const envSchema = z.object({
  TURSO_DATABASE_URL: z.string().nullable(),
  TURSO_AUTH_TOKEN: z.string().nullable(),
  NODE_ENV: z.union([z.literal('development'), z.literal('production')]).default('development'),
  ENV: z.union([z.literal('development'), z.literal('production')]).default('development'),
})

// validate `prcess.env` against schema and return results
const env = envSchema.parse(process.env)

// export result to use it in the project
export default env
