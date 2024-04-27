import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  dbCredentials: {
    url: 'http://127.0.0.1:8080',
  },
  driver: 'turso',
  verbose: true,
  strict: true,
  out: 'drizzle',
});
