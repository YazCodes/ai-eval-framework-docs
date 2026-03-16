import Link from 'next/link';

const SITE_NAME = 'AI Evaluation Framework Docs';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          {SITE_NAME}
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <Link href="/getting-started/">Getting Started</Link>
          <Link href="/architecture/">Architecture</Link>
          <Link href="/writing-a-new-eval/">Writing a New Eval</Link>
        </nav>
      </div>
    </header>
  );
}
