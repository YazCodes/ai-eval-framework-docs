import Link from 'next/link';

export default function TypesOfEvalTestingPage() {
  return (
    <div className="docs-content">
      <h1>Types of Eval Testing</h1>
      <p>
        AI evals can target different behaviours and risks. This page outlines common eval types, with examples
        and a brief approach for testing each.
      </p>

      <h2>1. Accuracy &amp; correctness</h2>
      <p>
        Measures whether the model’s outputs are factually correct, complete, or match a gold standard.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Question-answering on a fixed set of questions; transcription vs reference
          text; summarisation that preserves key facts.
        </li>
        <li>
          <strong>How to test:</strong> Build a dataset of inputs with known-good answers (or human-verified
          references). Run the model, compare outputs to references using metrics such as exact match, F1,
          BLEU/ROUGE, or model-based scoring (e.g. LLM-as-judge for semantic match). Track accuracy over time
          and set a baseline so regressions fail CI.
        </li>
      </ul>

      <h2>2. Safety &amp; refusal</h2>
      <p>
        Checks that the system refuses harmful or policy-violating requests and does not comply with
        jailbreaks.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Prompts that ask for harmful content, PII generation, or bypass instructions;
          adversarial or paraphrased versions of policy-violating queries.
        </li>
        <li>
          <strong>How to test:</strong> Curate a set of “should-refuse” prompts (and optionally “should-answer”
          prompts to avoid over-refusal). Run the model and classify responses as refused vs complied. Measure
          refusal rate or use a rubric; add jailbreak variants and re-run to test robustness.
        </li>
      </ul>

      <h2>3. Fairness &amp; bias</h2>
      <p>
        Evaluates whether outputs differ unfairly across demographic or other protected groups, or reinforce
        stereotypes.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Same task with inputs that vary only by group (e.g. names, descriptors);
          sentiment or toxicity scored across groups; allocation or recommendation parity.
        </li>
        <li>
          <strong>How to test:</strong> Create parallel test cases that differ only in the sensitive attribute
          (or use synthetic/sampled data with known labels). Run the model and compare outcomes (e.g. approval
          rates, error rates, tone) across groups. Use disparity metrics (e.g. demographic parity, equalised
          odds) and qualitative review; document limitations and context.
        </li>
      </ul>

      <h2>4. Consistency &amp; reliability</h2>
      <p>
        Checks that repeated or similar inputs produce stable, coherent outputs (e.g. no contradictory answers).
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Same question asked multiple times or with slight rephrasing; multi-turn
          conversations where the model should not contradict earlier turns.
        </li>
        <li>
          <strong>How to test:</strong> Run the same (or semantically equivalent) inputs multiple times;
          compare outputs for consistency (exact match, semantic similarity, or rule-based checks). For
          multi-turn, add assertions that key facts or commitments are preserved across turns.
        </li>
      </ul>

      <h2>5. Latency &amp; performance</h2>
      <p>
        Ensures the system meets throughput and latency requirements for production.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Time-to-first-token and time-to-completion under load; throughput (requests
          per second); behaviour under rate limits or fallbacks.
        </li>
        <li>
          <strong>How to test:</strong> Use load or benchmark scripts that call the API or service with
          representative payloads. Record p50/p95/p99 latency and throughput; run at expected peak load and
          optionally stress-test. Add thresholds in CI so regressions are flagged.
        </li>
      </ul>

      <h2>6. Privacy &amp; PII</h2>
      <p>
        Verifies that the system does not leak sensitive data or memorise and regurgitate PII.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> Can the model be prompted to output training data containing PII? Does
          redaction or anonymisation leave gaps? Does logging or caching expose sensitive fields?
        </li>
        <li>
          <strong>How to test:</strong> Use synthetic or carefully de-identified test data; run prompts designed
          to elicit memorisation or over-disclosure. Scan outputs and logs for PII patterns (e.g. regex, NER);
          run redaction pipelines on sample inputs and check for leaks.           See <Link href="/designing-safe-privacy-evals/">Designing Safe and Privacy-Aware Evaluations</Link> for
          more.
        </li>
      </ul>

      <p>
        Choosing the right mix of eval types depends on your use case and risk profile. Start with accuracy
        and safety where the impact is highest, then add fairness, consistency, and performance as needed.
      </p>
    </div>
  );
}
