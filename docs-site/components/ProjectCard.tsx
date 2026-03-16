'use client';

import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  notes?: string;
  notesHref?: string;
  status?: 'active' | 'beta' | 'planned';
  owner?: string;
}

export function ProjectCard({ title, description, href, notes, notesHref, status = 'active', owner }: ProjectCardProps) {
  const content = (
    <>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className={`card-status status-${status}`}>{status}</span>
      </div>
      <p className="card-desc">{description}</p>
      {notes && (
        <p className="card-desc">
          {notesHref ? (
            href ? (
              <span
                role="link"
                tabIndex={0}
                className="card-notes-link"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(notesHref, '_blank', 'noopener,noreferrer');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(notesHref, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {notes}
              </span>
            ) : (
              <Link href={notesHref} target="_blank" rel="noopener noreferrer" className="card-notes-link">
                {notes}
              </Link>
            )
          ) : (
            notes
          )}
        </p>
      )}
      {owner && <p className="card-owner">Owner: {owner}</p>}
    </>
  );

  if (href) {
    return <Link href={href} className="project-card">{content}</Link>;
  }

  return <div className="project-card">{content}</div>;
}
