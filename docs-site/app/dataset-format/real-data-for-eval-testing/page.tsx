export default function RealDataForEvalTestingPage() {
  return (
    <div className="docs-content">
      <h1>Using Real Data For Eval Testing</h1>
      <p>
        This guide walks you through processes to extract real data from your database and format it into a JSONL file ready for evaluation.
        ETL (Extract, Transform, Load) scripts are a great way to extract data from your database and format it into a JSONL file ready for evaluation.
      </p>

      <h2>Step 1: Extract the data from your database</h2>
      <p> You can extract data manually from the UI of your database or create an ETL script to extract using API keys.</p>
      <p>This is often a better approach as you can pull more data through the API than you can manually from the UI.</p>

      <p>
        An example ETL script can be found{' '}
        <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">here</a>.
      </p>

      <p>
        <strong>Important:</strong> keep data extracted by the ETL in paths covered by <code>.gitignore</code>{' '}
        to avoid accidental leaks.
      </p>
   
    
      <h2>Step 2: Formatting the data</h2>
      <p>
        Often the data extracted from the ETL script is messy and nested, you can create a script to clean and flatten the data into a JSONL file ready for evaluation.
        An example can be found{' '}
        <a href="https://github.com/JusticeAIUnit/dev-docs/blob/main/docs/evals/datasets.md">here</a>.
      </p>
      <p> Then your data will be ready to use in your eval.</p>
      </div>
  );
}

