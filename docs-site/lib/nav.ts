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
      { title: 'Current Projects', href: '/getting-started/current-projects/' },
    ],
  },
  { title: 'Architecture', href: '/architecture/' },
  { title: 'Evaluation Pipeline', href: '/evaluation-pipeline/' },
  { title: 'Writing a New Eval', href: '/writing-a-new-eval/' },
  { title: 'Metrics', href: '/metrics/' },
  { title: 'Dataset Format', href: '/dataset-format/' },
  { title: 'Designing Safe and Privacy-Aware Evaluations', href: '/designing-safe-privacy-evals/' },
  { title: 'CI Integration', href: '/ci-integration/' },
  { title: 'Debugging', href: '/debugging/' },
];

export function getBasePath(): string {
  if (typeof process !== 'undefined' && process.env?.GITHUB_PAGES_BASE) {
    return process.env.GITHUB_PAGES_BASE;
  }
  return '';
}
