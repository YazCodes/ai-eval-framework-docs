export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/getting-started/',
    children: [
      { title: 'Definition of Done', href: '/getting-started/definition-of-done/' },
      { title: 'Types of Eval Testing', href: '/getting-started/types-of-eval-testing/' },
      { title: 'Current Projects', href: '/getting-started/current-projects/' },
    ],
  },
  { title: 'Evaluation Pipeline', href: '/evaluation-pipeline/' },
  { title: 'Writing a New Eval', href: '/writing-a-new-eval/',
    children: [
      { title: 'How To Write Eval Prompts', href: '/writing-a-new-eval/eval-prompts/' },
      { title: "Using LLM's As a Judge", href: '/writing-a-new-eval/llms-as-a-judge/' },
    ],
  },
  { title: 'Datasets', href: '/dataset-format/',
    children: [
      { title: 'Using Real Data For Eval Testing', href: '/dataset-format/real-data-for-eval-testing/' },
      { title: 'Data analysis', href: '/dataset-format/data-analysis/' },
    ],
  },
  { title: 'Designing Safe and Privacy-Aware Evaluations', href: '/designing-safe-privacy-evals/' ,
    children: [
      { title: 'Trust Boundaries', href: '/designing-safe-privacy-evals/trust-boundaries/' },
    ],
  },
  { title: 'Eval Dashboards', href: '/eval-dashboards/' },
  { title: 'CI Integration', href: '/ci-integration/' },
  { title: 'Debugging', href: '/debugging/' },
  { title: 'Production Observability', href: '/production-observability/' },
  { title: 'Our Test Library', href: '/test-library/' },
];

export function getBasePath(): string {
  if (typeof process !== 'undefined' && process.env?.GITHUB_PAGES_BASE) {
    return process.env.GITHUB_PAGES_BASE;
  }
  return '';
}
