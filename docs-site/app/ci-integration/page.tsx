import { Callout } from '@/components/Callout';

export default function CiIntegrationPage() {
  return (
    <div className="docs-content">
      <h1>CI Integration</h1>
      <p>
        Run evals in CI to catch regressions before merge. This page covers how to add an eval job to
        GitHub Actions (or similar) and how to fail the build when results drop below a threshold.
      </p>

      <h2>GitHub Actions example</h2>
      <pre>
        <code>{`name: Evals
on:
  pull_request:
    paths:
      - 'evals/**'
      - 'datasets/**'
jobs:
  run-evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install -e .
      - run: python -m evals.run --eval smoke_test --dataset datasets/smoke.jsonl --output results.json
      - name: Check threshold
        run: python -m evals.check_threshold --results results.json --metric exact_match --min 0.85`}</code>
      </pre>

      <h2>Thresholds</h2>
      <p>
        Use <code>evals.check_threshold</code> (or your own script) to compare a metric against a minimum
        value. If the eval score is below the threshold, the step fails and the PR cannot merge.
      </p>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--results</code></td>
            <td>Path to results JSON from the pipeline.</td>
          </tr>
          <tr>
            <td><code>--metric</code></td>
            <td>Metric name to check.</td>
          </tr>
          <tr>
            <td><code>--min</code></td>
            <td>Minimum acceptable value (e.g. 0.85 for 85%).</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="CI runtime">
        Keep CI evals small (e.g. a smoke dataset of 20–50 examples) so the job finishes in a few minutes.
        Full evals can run on a schedule or in a separate workflow.
      </Callout>

      <h2>Optional: upload results as artifact</h2>
      <pre>
        <code>{`- uses: actions/upload-artifact@v4
  with:
    name: eval-results
    path: results.json`}</code>
      </pre>
    </div>
  );
}
