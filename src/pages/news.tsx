// src/pages/news.tsx
import { GetServerSideProps } from 'next';

type NewsProps = {
  headlines: string[];
};

export default function NewsPage({ headlines }: NewsProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Live News (SSR)</h1>
      <ul className="list-disc pl-5 space-y-2">
        {headlines.map((headline, index) => (
          <li key={index}>{headline}</li>
        ))}
      </ul>
    </main>
  );
}

// ✅ This runs on **every request**
export const getServerSideProps: GetServerSideProps = async () => {
  const headlines = [
    'Breaking: React 19 Released!',
    'Next.js adds AI support!',
    'TypeScript 6 is here!',
  ];

  return {
    props: {
      headlines,
    },
  };
};
