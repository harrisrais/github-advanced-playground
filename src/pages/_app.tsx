import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 flex space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-green-400">About</Link>
        <Link href="/contact" className="hover:text-purple-400">Contact</Link>
        <Link href="/blog" className="hover:text-green-400">Blogs</Link>
        <Link href="/news" className="hover:text-green-400">News</Link>
        <Link href="/users" className="hover:text-green-400">Users</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
