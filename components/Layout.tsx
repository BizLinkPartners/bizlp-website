import Link from 'next/link';
import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Layout({ title = 'BizLP', description = 'Business landing site', children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
      </Head>
      <header className="border-b bg-blue-900/90 backdrop-blur supports-[backdrop-filter]:bg-blue-900/80 sticky top-0 z-30">
        <div className="container-responsive flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-lg">BizLP</Link>
          <nav>
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><Link href="/" className="text-white hover:text-blue-200">Home</Link></li>
              <li><Link href="/news" className="text-white hover:text-blue-200">News</Link></li>
              <li><Link href="/company" className="text-white hover:text-blue-200">Company</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-200">Contact</Link></li>
            </ul>
            <details className="md:hidden">
              <summary className="cursor-pointer select-none text-white">Menu</summary>
              <ul className="mt-2 space-y-2 bg-blue-800 p-2 rounded">
                <li><Link href="/" className="block text-white hover:text-blue-200">Home</Link></li>
                <li><Link href="/news" className="block text-white hover:text-blue-200">News</Link></li>
                <li><Link href="/company" className="block text-white hover:text-blue-200">Company</Link></li>
                <li><Link href="/contact" className="block text-white hover:text-blue-200">Contact</Link></li>
              </ul>
            </details>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t mt-16 bg-blue-900">
        <div className="container-responsive py-8 text-sm text-white flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} BizLP Inc.</p>
          <p className="space-x-4">
            <Link href="/privacy" className="hover:text-blue-200">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-200">Terms</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}


