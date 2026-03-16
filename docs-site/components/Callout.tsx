import { ReactNode } from 'react';

type Variant = 'info' | 'warning' | 'success' | 'danger';

interface CalloutProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, { bg: string; border: string; title?: string }> = {
  info: { bg: 'var(--accent-bg)', border: 'var(--accent)', title: 'Note' },
  warning: { bg: 'var(--warning-bg)', border: 'var(--warning)', title: 'Warning' },
  success: { bg: 'var(--success-bg)', border: 'var(--success)', title: 'Tip' },
  danger: { bg: 'var(--danger-bg)', border: 'var(--danger)', title: 'Important' },
};

export function Callout({ variant = 'info', title, children }: CalloutProps) {
  const style = variantStyles[variant];
  const label = title ?? style.title;

  return (
    <div
      className="callout"
      style={{
        background: style.bg,
        borderLeftColor: style.border,
      }}
      role="note"
    >
      {label && <strong className="callout-title">{label}</strong>}
      <div className="callout-body">{children}</div>
    </div>
  );
}
