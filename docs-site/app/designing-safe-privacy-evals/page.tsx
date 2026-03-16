import { Callout } from '@/components/Callout';
import { Checklist } from '@/components/Checklist';

export default function DesigningSafePrivacyEvalsPage() {
  return (
    <div className="docs-content">
      <h1>Designing Safe and Privacy-Aware Evaluations</h1>
      <p>
        Evals often use real or synthetic data that can touch sensitive information. This guide covers how to
        design evaluations that are safe to run, respect privacy, and avoid leaking PII or confidential data.
      </p>

      <h2>Principles</h2>
      <ul>
        <li><strong>Minimize</strong> — Use the least amount of data necessary; prefer synthetic or anonymized when possible.</li>
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
            <td>Use synthetic data, redaction pipelines, or approved de-identified datasets only.</td>
          </tr>
          <tr>
            <td>Model memorization / leakage</td>
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
        </tbody>
      </table>

      <Callout variant="warning" title="Compliance">
        If your eval uses customer or user data, ensure you follow internal data-use policies and any applicable
        regulations (e.g. GDPR, CCPA). When in doubt, consult your privacy or legal team.
      </Callout>

      <h2>Example: safe logging</h2>
      <p>Log only IDs and aggregate scores, not raw text:</p>
      <pre>
        <code>{`# Prefer
logger.info("eval_complete", {"eval_id": "my_eval", "n": 100, "exact_match": 0.82})

# Avoid
logger.info("example", {"prompt": user_input, "prediction": model_output})  # may contain PII`}</code>
      </pre>
    </div>
  );
}
