import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Layout({ title = 'BizLP', description = 'Business landing site', children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
      </Head>
      
      {/* Fixed Header - Monochrome Design */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container-responsive flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 hover-fade transition-smooth">
            <div className="neu-shadow">
              <Image
                src="/image/logo.png"
                alt="BizLP"
                width={120}
                height={40}
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <Link
                  href="/"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/' ? 'inactive' : ''}`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/about' ? 'inactive' : ''}`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/news' ? 'inactive' : ''}`}
                >
                  NEWS
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/blog' ? 'inactive' : ''}`}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/recruit"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/recruit' ? 'inactive' : ''}`}
                >
                  RECRUIT
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/work' ? 'inactive' : ''}`}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`header-link text-[clamp(11px,1.2vw,14px)] ${router.pathname !== '/contact' ? 'inactive' : ''}`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-px bg-[#554C51] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-px bg-[#554C51] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-px bg-[#554C51] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="container-responsive py-6">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/' ? 'opacity-70' : ''
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/about' ? 'opacity-70' : ''
                    }`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/news' ? 'opacity-70' : ''
                    }`}
                  >
                    NEWS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/blog' ? 'opacity-70' : ''
                    }`}
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recruit"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/recruit' ? 'opacity-70' : ''
                    }`}
                  >
                    RECRUIT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/work' ? 'opacity-70' : ''
                    }`}
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block text-lg font-light tracking-wide transition-smooth hover:opacity-70 text-primary ${
                      router.pathname !== '/contact' ? 'opacity-70' : ''
                    }`}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content with Header Spacing */}
      <main className="flex-1 pt-20">{children}</main>
      
      {/* Minimal Footer */}
      <footer className="bg-[#554C51] py-12">
        <div className="container-responsive">
          {/* Footer Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-light tracking-wide text-white hover:opacity-70 transition-opacity"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm font-light tracking-wide text-white hover:opacity-70 transition-opacity"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm font-light tracking-wide text-white hover:opacity-70 transition-opacity"
                >
                  免責事項
                </Link>
              </li>
              <li>
                <Link
                  href="/antisocial"
                  className="text-sm font-light tracking-wide text-white hover:opacity-70 transition-opacity"
                >
                  反社会的勢力排除
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-white/80 font-light tracking-wide">
              © {new Date().getFullYear()} BizLink Partners Co., Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


