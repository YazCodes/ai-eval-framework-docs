import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="docs-content">
      <h1>Getting Started</h1>
      <p>
        New to the AI Evaluation Framework? Start here to understand our definition of done and see how other projects within the Justice AI Unit are running evals.
      </p>
      <h2>What are AI evals?</h2>
      <p>AI evals are a way to evaluate the performance of AI systems. They are used to evaluate the performance of AI systems in production and help us to improve the performance of AI systems.
        Read up on what AI evals are <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/what-are-ai-evals.md">here.</a>
      </p>
      <h2>Why are AI evals important?</h2>
      <p>AI evals are important because they help us to improve the performance of AI systems. They are used to evaluate the performance of AI systems in production and help us to improve the performance of AI systems.</p>
      <h2>Overview</h2>
      <p>
        We aim to create a shared pipeline to evaluate AI models and tools. Every eval should meet our definition of done
        before it is considered complete, and teams track their work in a central projects list.
      </p>
      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/getting-started/definition-of-done/">Definition of Done</Link> — Checklist for AI eval
          completion
        </li>
        <li>
          <Link href="/getting-started/types-of-eval-testing/">Types of Eval Testing</Link> — Types of AI eval
          tests and how to run them
        </li>
        <li>
          <Link href="/getting-started/current-projects/">Current Projects</Link> — How teams are testing their
          AI tools
        </li>
      </ul>
    </div>
  );
}
