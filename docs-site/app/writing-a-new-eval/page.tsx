import { Callout } from '@/components/Callout';
import { Checklist } from '@/components/Checklist';

export default function WritingANewEvalPage() {
  return (
    <div className="docs-content">
      <h1>Writing a New Eval</h1>
      <p>
        This guide walks you through creating a new eval from scratch: dataset, runner config, metrics, and
        how to register and run it.
      </p>

      <h2>Step 1: Define the dataset</h2>
      <p>
        Create a JSONL file that matches our <a href="/dataset-format/">dataset format</a>. Each line is one
        example with at least an <code>id</code> and the fields your runner expects (e.g. <code>prompt</code>,
        <code> input</code>).
      </p>
      <pre>
        <code>{`{"id": "ex_1", "prompt": "Summarize:", "context": "..."}
{"id": "ex_2", "prompt": "Summarize:", "context": "..."}`}</code>
      </pre>

      <h2>Step 2: Choose or implement a runner</h2>
      <p>
        Use an existing runner (e.g. OpenAI, Anthropic, internal API) or add a small adapter in
        <code> runners/</code> that takes an example and returns a prediction.
      </p>

      <h2>Step 3: Select metrics</h2>
      <p>
        Pick from built-in metrics (see <a href="/metrics/">Metrics</a>) or implement a custom one. Register
        it in your eval config.
      </p>

      <h2>Step 4: Register the eval</h2>
      <pre>
        <code>{`# evals/my_eval/config.yaml
name: my_eval
dataset: datasets/my_dataset.jsonl
runner: openai_chat
metrics:
  - exact_match
  - f1
runner_config:
  model: gpt-4o-mini`}</code>
      </pre>

      <Checklist
        title="Before you ship"
        items={[
          { done: false, label: 'Dataset passes schema validation' },
          { done: false, label: 'Eval runs with --limit 5 without errors' },
          { done: false, label: 'Metrics produce sensible values on a small sample' },
          { done: false, label: 'Definition of done checklist completed' },
        ]}
      />

      <Callout variant="success" title="Tip">
        Start with <code>--limit 10</code> and inspect outputs before running on the full dataset. Use the
        <a href="/debugging/"> Debugging</a> guide if something fails.
      </Callout>
    </div>
  );
}
