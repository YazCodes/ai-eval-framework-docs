import { Callout } from '@/components/Callout';
import { Checklist } from '@/components/Checklist';

export default function DebuggingPage() {
  return (
    <div className="docs-content">
      <h1>Debugging</h1>
      <p>
        When an eval fails or produces unexpected results, use this guide to narrow down the cause and fix it.
      </p>

      <h2>Common issues</h2>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>Likely cause</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pipeline fails on load</td>
            <td>Invalid JSONL or schema mismatch</td>
            <td>Validate each line with <code>jq</code> or the dataset validator; check for trailing commas, encoding.</td>
          </tr>
          <tr>
            <td>Runner timeouts / rate limits</td>
            <td>API limits or slow model</td>
            <td>Add <code>--delay</code>, reduce <code>--limit</code>, or use a smaller model for dev.</td>
          </tr>
          <tr>
            <td>Metrics always 0 or NaN</td>
            <td>Wrong field names or missing ground truth</td>
            <td>Confirm <code>expected</code> (or equivalent) is present and metric reads the right keys.</td>
          </tr>
          <tr>
            <td>Non-deterministic results</td>
            <td>Model sampling or no seed</td>
            <td>Set <code>--seed</code> and use <code>temperature=0</code> (or equivalent) in runner config.</td>
          </tr>
        </tbody>
      </table>

      <h2>Debug checklist</h2>
      <Checklist
        items={[
          { done: false, label: 'Run with --limit 1 and inspect the single prediction and metric' },
          { done: false, label: 'Confirm dataset fields match what the runner and metrics expect' },
          { done: false, label: 'Check runner config (model name, API key env, endpoint)' },
          { done: false, label: 'Enable verbose/debug logging if available (e.g. LOG_LEVEL=debug)' },
          { done: false, label: 'Compare against a known-good run (same seed, same dataset)' },
        ]}
      />

      <h2>Verbose output</h2>
      <pre>
        <code>{`LOG_LEVEL=debug python -m evals.run --eval my_eval --dataset data.jsonl --limit 3`}</code>
      </pre>
      <p>
        Logs will print each example id, the prompt sent to the runner, and the raw prediction before metrics.
      </p>

      <Callout variant="success" title="Tip">
        Add a small <code>debug.jsonl</code> (3–5 examples) next to your eval and use it for quick iteration
        without touching the full dataset.
      </Callout>
    </div>
  );
}
