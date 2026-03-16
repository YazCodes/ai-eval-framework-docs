import { Callout } from '@/components/Callout';

export default function EvaluationPipelinePage() {
  return (
    <div className="docs-content">
      <h1>Evaluation Pipeline</h1>
      <p>
        The evaluation pipeline loads a dataset, runs each example through your model or tool, and computes
        metrics. This page describes the execution flow and how to run it.
      </p>

      <h2>Execution flow</h2>
      <ol>
        <li>Load dataset and validate schema.</li>
        <li>For each example: call the runner (model/tool), capture output and optional metadata.</li>
        <li>Compute configured metrics over the collected predictions.</li>
        <li>Write results (stdout, file, or CI report).</li>
      </ol>

      <h2>Running the pipeline locally</h2>
      <pre>
        <code>{`# From repo root
python -m evals.run \\
  --eval my_eval \\
  --dataset path/to/dataset.jsonl \\
  --output results.json`}</code>
      </pre>

      <h2>Pipeline options</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--eval</code></td>
            <td>Eval name (must match a registered eval).</td>
          </tr>
          <tr>
            <td><code>--dataset</code></td>
            <td>Path to JSONL dataset file.</td>
          </tr>
          <tr>
            <td><code>--output</code></td>
            <td>Where to write results (default: stdout).</td>
          </tr>
          <tr>
            <td><code>--limit</code></td>
            <td>Max number of examples (useful for quick sanity runs).</td>
          </tr>
          <tr>
            <td><code>--seed</code></td>
            <td>Random seed for reproducibility.</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="Rate limits">
        When calling external APIs (e.g. OpenAI, Anthropic), respect rate limits. The runner supports
        <code> --delay</code> between requests for local runs.
      </Callout>
    </div>
  );
}
