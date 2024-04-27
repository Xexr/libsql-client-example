import { db } from '@/db/db';
import { posts } from '@/db/schema';

export default async function Home() {
  const data = await db.select().from(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-5">
      <div>Posts</div>

      <div>
        {data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </main>
  );
}
