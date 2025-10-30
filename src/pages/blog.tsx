// src/pages/blog.tsx
import { GetStaticProps } from 'next';

type BlogProps = {
  posts: [{ id: number; title: string }];
};

export default function BlogPage({ posts }: BlogProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Blog (SSG)</h1>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
