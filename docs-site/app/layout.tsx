import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { DocsLayout } from '@/components/DocsLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Evaluation Framework Docs',
  description: 'Internal documentation for the AI Evaluation Framework and evals pipeline.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
