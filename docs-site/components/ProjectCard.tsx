import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  status?: 'active' | 'beta' | 'planned';
  owner?: string;
}

export function ProjectCard({ title, description, href, status = 'active', owner }: ProjectCardProps) {
  const content = (
    <>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className={`card-status status-${status}`}>{status}</span>
      </div>
      <p className="card-desc">{description}</p>
      {owner && <p className="card-owner">Owner: {owner}</p>}
    </>
  );

  if (href) {
    return <Link href={href} className="project-card">{content}</Link>;
  }

  return <div className="project-card">{content}</div>;
}
