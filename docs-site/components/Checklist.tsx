import { ReactNode } from 'react';

interface ChecklistItem {
  done?: boolean;
  label: ReactNode;
}

interface ChecklistProps {
  items: ChecklistItem[];
  title?: string;
}

export function Checklist({ items, title }: ChecklistProps) {
  return (
    <div className="checklist">
      {title && <h4 className="checklist-title">{title}</h4>}
      <ul className="checklist-list">
        {items.map((item, i) => (
          <li key={i} className={item.done ? 'done' : ''}>
            <span className="checklist-icon" aria-hidden>
              {item.done ? '✓' : '○'}
            </span>
            <span className="checklist-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
