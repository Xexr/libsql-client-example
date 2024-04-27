import { db } from '@/db/db';
import { posts } from '@/db/schema';
import { NextResponse } from 'next/server';

// previously with 0.5.6 of libsql/client, this route would provide live data all the time
// once 0.6.0 is installed, data is cached by next unless you force a revalidation by commenting out the line below
// export const revalidate = 0;

export async function GET(request: Request) {
  const data = await db.select().from(posts);

  console.log(data);

  return NextResponse.json({ data });
}
