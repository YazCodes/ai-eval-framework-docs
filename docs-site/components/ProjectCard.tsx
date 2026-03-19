'use client';

import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  notes?: string;
  notesHref?: string;
  notes2?: string;
  notes2Href?: string;
  status?: 'active' | 'beta' | 'planned';
  owner?: string;
}

function DocLink({
  label,
  url,
  cardHasHref,
}: {
  label: string;
  url: string;
  cardHasHref: boolean;
}) {
  if (cardHasHref) {
    return (
      <span
        role="link"
        tabIndex={0}
        className="card-notes-link"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            window.open(url, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {label}
      </span>
    );
  }
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="card-notes-link">
      {label}
    </Link>
  );
}

export function ProjectCard({
  title,
  description,
  href,
  notes,
  notesHref,
  notes2,
  notes2Href,
  status = 'active',
  owner,
}: ProjectCardProps) {
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
            <DocLink label={notes} url={notesHref} cardHasHref={!!href} />
          ) : (
            notes
          )}
        </p>
      )}
      {notes2 && notes2Href && (
        <p className="card-desc">
          <DocLink label={notes2} url={notes2Href} cardHasHref={!!href} />
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
