import { ProjectCard } from '@/components/ProjectCard';

export default function CurrentProjectsPage() {
  return (
    <div className="docs-content">
      <h1>Current Projects</h1>
      <p>
        Central place for teams testing their AI tools. Each card links to the eval repo, dashboard, or
        runbook. Add your project here when you start a new eval stream.
      </p>

      <div className="project-grid">
        <ProjectCard
          title="Chat summarization quality"
          description="Eval for summarization accuracy, hallucination rate, and coherence on support chat logs."
          href="/writing-a-new-eval/"
          status="active"
          owner="Support ML"
        />
        <ProjectCard
          title="Code completion relevance"
          description="Measures how often suggested completions are accepted and edited within a small delta."
          status="active"
          owner="DevEx"
        />
        <ProjectCard
          title="Intent classification (NLU)"
          description="Multi-label intent classification eval on annotated customer utterances; precision/recall/F1."
          status="beta"
          owner="Conversational AI"
        />
        <ProjectCard
          title="Document Q&A factual consistency"
          description="Eval for retrieval-augmented Q&A: citation accuracy and factual consistency vs. source docs."
          status="planned"
          owner="Search"
        />
      </div>

      <p>
        <strong>Adding a project:</strong> Open a PR that adds a new entry to the project list (or update this
        page’s data source). Include project name, short description, owner, and link to eval/dashboard.
      </p>
    </div>
  );
}
