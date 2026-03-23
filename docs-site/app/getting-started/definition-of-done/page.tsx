import { Checklist } from '@/components/Checklist';
import { getBasePath } from '@/lib/nav';

export default function DefinitionOfDonePage() {
  const base = getBasePath().replace(/\/$/, '');
  const a11yDeckHref = `${base}/presentations/a11y-minimum-requirements.pptx`;

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
          { done: false, label: 'Ownership and contact are documented (e.g. Add your name to the project card on the Current Projects page)' },
        ]}
      />

      <h2>Other things to consider</h2>
      <p><strong>Depending on the nature of your project, you may require additional/different requirements to be considered before an eval is considered done.</strong></p>
      <ul>
        <li>
          Accessibility: ensure our AI tool meets the standards in the{' '}
          <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG)</a>.
        </li>
        <li>
          A11y minimum requirements (deck):{' '}
          <a href={a11yDeckHref} download>
            a11y-minimum-requirements.pptx
          </a>
          . For the written checklist, see the{' '}
          <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/a11y-minimum-requirements.md">
            dev-docs markdown
          </a>
          .
        </li>
        <li>Create custom <a href="https://cursor.com/help/customization/skills">Cursor rules, skills and commands</a> to help with building your eval process.</li>
      </ul>
    </div>
  );
}
