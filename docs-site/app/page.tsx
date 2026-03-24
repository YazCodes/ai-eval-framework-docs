import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="docs-content">
      <h1>AI Evaluation Framework Docs</h1>
      <p>
        Welcome to the internal documentation for our AI Evaluation Framework. A centralised hub to get you started with evals in your project.
      </p>
      <p>Here you can find links to 
        <ul>
          <li>Team documentation</li>
          <li>Current eval projects</li>
          <li>Code templates examples</li>
          <li>Pre-used datasets</li>
          <li>Best practices guidelines</li>
          <li>Eval dashboard examples</li>
        </ul>
      </p>

      <p>This diagram outlines how an eval pipeline would typically look within a project.</p>
      <div className="docs-figure">
        <Image src="/images/mermaid-diagram.png" alt="Eval Pipeline" width={200} height={500} />
      </div>

 
    </div>
  );
}
