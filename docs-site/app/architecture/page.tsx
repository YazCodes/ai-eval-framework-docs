import { Callout } from '@/components/Callout';

export default function ArchitecturePage() {
  return (
    <div className="docs-content">
      <h1>Architecture</h1>
      <p>
        The AI Evaluation Framework is a pipeline that runs evals against datasets, computes metrics, and
        reports results. This page gives a high-level overview of the main components.
      </p>

      <h2>High-level flow</h2>
      <pre>
        <code>{`Dataset (JSONL) → Loader → Runner (model/tool) → Predictions → Metrics → Report`}</code>
      </pre>

      <h2>Components</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Loader</strong></td>
            <td>Reads dataset files (see Dataset Format), validates schema, and yields examples.</td>
          </tr>
          <tr>
            <td><strong>Runner</strong></td>
            <td>Invokes the model or tool per example and collects outputs (and optional latency).</td>
          </tr>
          <tr>
            <td><strong>Metrics</strong></td>
            <td>Compute scores from predictions and optional ground truth (see Metrics).</td>
          </tr>
          <tr>
            <td><strong>Report</strong></td>
            <td>Aggregates results into tables, logs, and (optionally) CI status.</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info">
        Evals can run locally, in CI, or in a scheduled job. The same pipeline is used in all environments;
        only configuration (e.g. dataset path, model endpoint) changes.
      </Callout>

      <h2>Repository layout (example)</h2>
      <pre>
        <code>{`evals/
  datasets/          # JSONL and schema definitions
  evals/             # Eval definitions (dataset + metrics + runner config)
  runners/           # Adapters for different models/tools
  metrics/           # Metric implementations
  ci/                # CI workflows (e.g. GitHub Actions)`}</code>
      </pre>
    </div>
  );
}
