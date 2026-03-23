import { Callout } from '@/components/Callout';
import { Checklist } from '@/components/Checklist';
import { getBasePath } from '@/lib/nav';

export default function DesigningSafePrivacyEvalsPage() {
  const base = getBasePath().replace(/\/$/, '');
  const aiSecurityAndEvalsDocHref = `${base}/presentations/AI-Security-and-Evals-Shipping-Faster-with-Confidence.pdf`;
  return (
    <div className="docs-content">
      <h1>Designing Safe and Privacy-Aware Evaluations</h1>
      <p>
        Evals often use real or synthetic data that can touch sensitive information. This guide covers how to
        design evaluations that are safe to run, respect privacy, and avoid leaking PII or confidential data.
      </p>

      <p>Check out these docs to gain an insight into the principles and risks of designing safe and privacy-aware evaluations <a href={aiSecurityAndEvalsDocHref} download>AI-Security-and-Evals-Shipping-Faster-with-Confidence.pdf</a></p>

      <h2>Principles</h2>
      <ul>
        <li><strong>Minimise</strong> — Use the least amount of data necessary; prefer synthetic or anonymised when possible.</li>
        <li><strong>Contain</strong> — Run evals in controlled environments; avoid logging or storing raw inputs/outputs unless required.</li>
        <li><strong>Govern</strong> — Document data sources, retention, and who may access eval results.</li>
      </ul>

      <h2>Data handling checklist</h2>
      <Checklist
        title="Before using data in an eval"
        items={[
          { done: false, label: 'Confirm the dataset is approved for eval use (no PII or confidential data unless explicitly allowed)' },
          { done: false, label: 'Use pseudonymization or aggregation where possible' },
          { done: false, label: 'Do not log full prompts or model outputs in CI or shared dashboards' },
          { done: false, label: 'Set retention limits for any stored results' },
        ]}
      />

      <h2>Risks and mitigations</h2>
      <table>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PII in datasets</td>
            <td>Use synthetic data, redaction pipelines, or approved de-identified datasets only. <br></br>If handling real data in code ensure you add those files to the .gitignore file.</td>
          </tr>
          <tr>
            <td>Model memorisation / leakage</td>
            <td>Avoid training on eval data; use held-out or external test sets.</td>
          </tr>
          <tr>
            <td>Results exposed in CI logs</td>
            <td>Log only aggregate metrics; never print full examples or predictions in CI.</td>
          </tr>
          <tr>
            <td>Third-party API exposure</td>
            <td>Do not send PII or confidential content to external APIs unless contractually and legally allowed.</td>
          </tr>
          <tr>
            <td>Third-party testing libraries</td>
            <td>Research what telemetry they use and any risks associated with the open source code.</td>
          </tr>
          <tr>
            <td>Outdated test datasets</td>
            <td>Datasets should be continuously updated to ensure that any updates in the model or changes in user or business needs do not negatively affect the quality of the generated output.</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="Compliance">
        If your eval uses customer or user data, ensure you follow internal data-use policies and any applicable
        regulations (e.g. GDPR, CCPA). When in doubt, consult your privacy or legal team.
      </Callout>

    </div>
  );
}
