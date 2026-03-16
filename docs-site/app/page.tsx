import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="docs-content">
      <h1>AI Evaluation Framework Docs</h1>
      <p>
        Welcome to the internal documentation for our AI Evaluation Framework. This site covers how we define,
        run, and maintain evals for AI-powered tools across the organization.
      </p>
      <h2>Quick links</h2>
      <ul>
        <li>
          <Link href="/getting-started/">Getting Started</Link> — Definition of done and current projects
        </li>
        <li>
          <Link href="/architecture/">Architecture</Link> — System overview and components
        </li>
        <li>
          <Link href="/writing-a-new-eval/">Writing a New Eval</Link> — Step-by-step guide
        </li>
        <li>
          <Link href="/evaluation-pipeline/">Evaluation Pipeline</Link> — How evals are executed
        </li>
        <li>
          <Link href="/metrics/">Metrics</Link> — Available metrics and how to use them
        </li>
        <li>
          <Link href="/dataset-format/">Dataset Format</Link> — Expected input/output formats
        </li>
        <li>
          <Link href="/ci-integration/">CI Integration</Link> — Running evals in CI
        </li>
        <li>
          <Link href="/debugging/">Debugging</Link> — Troubleshooting failed evals
        </li>
      </ul>
    </div>
  );
}
