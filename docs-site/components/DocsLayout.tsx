import { Sidebar } from './Sidebar';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-layout">
      <Sidebar />
      <main className="docs-main">{children}</main>
    </div>
  );
}
