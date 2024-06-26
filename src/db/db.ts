import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

// create the connection
const client = createClient({
  url: 'http://127.0.0.1:8080',
});

export const db = drizzle(client, { logger: false, schema });
