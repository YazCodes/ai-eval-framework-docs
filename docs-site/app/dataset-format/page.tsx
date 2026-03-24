import { Callout } from '@/components/Callout';

export default function DatasetFormatPage() {
  return (
    <div className="docs-content">
      <h1>Golden Dataset</h1>
      <p></p>
      <p> Need to create datasets for eval testing? <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">Read up on our teams documentation to create a golden dataset</a></p>
      <h1>Datasets Ready for Evals</h1>
      <p> Here you can find a wide range of datasets ready for evaluation.</p>
      <ul>
        <li> <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">Audio Transcription Datasets</a></li>
        <li> <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">Language Model Datasets</a></li>
        <li> <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">Transcription Datasets</a></li>  
      </ul>
      <p><strong>Important:</strong> When using third party dataset ensure you do research on any potential risks associated with the dataset and develop mitigations against them. These can carry data risks of indirect prompt injections.</p>
      <h1>Dataset Format</h1>
      <p>
        All eval datasets are JSONL (one JSON object per line). Each line must include an <code>id</code> and
        any fields required by the runner and metrics. This page defines the standard shape and conventions.
      </p>


      <h2>Required fields</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>id</code></td>
            <td>string</td>
            <td>Unique example ID (used in results and logs).</td>
          </tr>
        </tbody>
      </table>

      <h2>Common fields</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>prompt</code></td>
            <td>string</td>
            <td>Input prompt or question.</td>
          </tr>
          <tr>
            <td><code>context</code></td>
            <td>string</td>
            <td>Optional context (e.g. document chunk).</td>
          </tr>
          <tr>
            <td><code>expected</code></td>
            <td>string or list</td>
            <td>Ground truth for metrics that need it.</td>
          </tr>
          <tr>
            <td><code>metadata</code></td>
            <td>object</td>
            <td>Optional key-value metadata (category, source, etc.).</td>
          </tr>
        </tbody>
      </table>

      <h2>Example</h2>
      <pre>
        <code>{`{"id": "qa_001", "prompt": "What is the capital of France?", "expected": "Paris"}
{"id": "qa_002", "prompt": "Summarize:", "context": "Long document...", "expected": "Short summary.", "metadata": {"source": "wiki"}}`}</code>
      </pre>

      <Callout variant="info" title="Encoding">
        Use UTF-8. Avoid tabs in strings; use <code>\n</code> for newlines. The loader will reject lines that
        are not valid JSON.
      </Callout>

      <h2>Schema validation</h2>
      <p>
        Optionally provide a JSON Schema file next to your dataset. The pipeline can validate each example
        before running. See <code>datasets/README.md</code> in the repo for the schema template.
      </p>
    </div>
  );
}
