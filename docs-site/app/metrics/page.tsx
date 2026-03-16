import { Callout } from '@/components/Callout';

export default function MetricsPage() {
  return (
    <div className="docs-content">
      <h1>Metrics</h1>
      <p>
        Metrics turn model outputs and (optionally) ground truth into scores. This page lists built-in
        metrics and how to add custom ones.
      </p>

      <h2>Built-in metrics</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
            <th>Requires ground truth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>exact_match</code></td>
            <td>Prediction equals expected value (normalized string comparison).</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>f1</code></td>
            <td>Token-level F1 (useful for extractive QA).</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>bleu</code></td>
            <td>BLEU score vs. reference(s).</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>latency_p95</code></td>
            <td>95th percentile latency in seconds (from runner metadata).</td>
            <td>No</td>
          </tr>
          <tr>
            <td><code>custom</code></td>
            <td>User-defined Python function registered by name.</td>
            <td>Configurable</td>
          </tr>
        </tbody>
      </table>

      <h2>Using metrics in an eval</h2>
      <p>In your eval config, list the metric names. The pipeline will compute each and include them in the report.</p>
      <pre>
        <code>{`metrics:
  - exact_match
  - f1
  - latency_p95`}</code>
      </pre>

      <h2>Custom metrics</h2>
      <p>
        Implement a function that takes <code>(prediction, ground_truth?, example?)</code> and returns a
        number or dict of numbers. Register it in the metrics registry.
      </p>
      <pre>
        <code>{`def my_metric(prediction: str, ground_truth: str | None, example: dict) -> float:
    # Your logic here
    return score`}</code>
      </pre>

      <Callout variant="warning">
        Custom metrics should be deterministic. Avoid external API calls or randomness unless documented.
      </Callout>
    </div>
  );
}
