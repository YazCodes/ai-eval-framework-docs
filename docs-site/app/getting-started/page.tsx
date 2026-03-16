import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="docs-content">
      <h1>Getting Started</h1>
      <p>
        New to the AI Evaluation Framework? Start here to understand our definition of done and see how other
        teams are running evals.
      </p>
      <h2>Overview</h2>
      <p>
        We use a shared pipeline to evaluate AI models and tools. Every eval should meet our definition of done
        before it is considered complete, and teams track their work in a central projects list.
      </p>
      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/getting-started/definition-of-done/">Definition of Done</Link> — Checklist for AI eval
          completion
        </li>
        <li>
          <Link href="/getting-started/current-projects/">Current Projects</Link> — How teams are testing their
          AI tools
        </li>
      </ul>
    </div>
  );
}
