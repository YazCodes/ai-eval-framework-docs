'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/nav';

function isActive(href: string, pathname: string): boolean {
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  const normalizedHref = href.endsWith('/') ? href : href + '/';
  if (normalizedHref === '/') return normalized === '/';
  return normalized === normalizedHref || normalized.startsWith(normalizedHref.replace(/\/$/, '/'));
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar" role="navigation" aria-label="Docs">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div key={item.href} className="sidebar-group">
            <Link
              href={item.href}
              className={`sidebar-link ${isActive(item.href, pathname) && !item.children?.length ? 'active' : ''}`}
            >
              {item.title}
            </Link>
            {item.children?.length ? (
              <ul className="sidebar-children">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={`sidebar-link nested ${isActive(child.href, pathname) ? 'active' : ''}`}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </nav>
    </aside>
  );
}
