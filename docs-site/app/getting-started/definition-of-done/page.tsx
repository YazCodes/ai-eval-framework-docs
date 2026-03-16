import { Checklist } from '@/components/Checklist';
import { Callout } from '@/components/Callout';

export default function DefinitionOfDonePage() {
  return (
    <div className="docs-content">
      <h1>Definition of Done</h1>
      <p>
        An AI eval is considered <strong>done</strong> when it meets the criteria below. Use this checklist
        before marking an eval complete or requesting review.
      </p>

      <Checklist
        title="AI Eval completion checklist"
        items={[
          { done: false, label: 'Eval has a clear, documented objective and success criteria' },
          { done: false, label: 'Dataset follows the standard format (see Dataset Format)' },
          { done: false, label: 'At least one metric is defined and validated against a small sample' },
          { done: false, label: 'Eval runs successfully in local dev and produces repeatable results' },
          { done: false, label: 'CI job is configured and passing (or explicitly excluded with a ticket)' },
          { done: false, label: 'README or doc comment describes how to run the eval and interpret results' },
          { done: false, label: 'No PII or sensitive data in datasets or logs' },
          { done: false, label: 'Ownership and contact are documented (e.g. in project list or CODEOWNERS)' },
        ]}
      />

      <Callout variant="info" title="Review">
        For cross-team or high-impact evals, get a quick review from the platform team before merging. Tag
        <code> @ai-evals-reviewers</code> in your PR.
      </Callout>

      <h2>Optional but recommended</h2>
      <ul>
        <li>Add a few example inputs/outputs to the eval doc for future maintainers.</li>
        <li>Set a baseline or threshold so CI can fail when results regress.</li>
        <li>Link the eval to a project card on the Current Projects page.</li>
      </ul>
    </div>
  );
}
