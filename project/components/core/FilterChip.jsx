import React from 'react';
import { Icon } from './Icon.jsx';

export function FilterChip({ label, selected, count, removable, onClick, icon, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      className="cs-focusable"
      aria-pressed={removable ? undefined : !!selected}
      aria-label={removable ? 'Remove filter: ' + label : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '8px 14px', minHeight: 36,
        borderRadius: 'var(--radius-chip)',
        font: 'var(--text-meta-medium)',
        background: selected ? 'var(--primary)' : hover ? 'var(--chip-bg)' : 'var(--bg-card)',
        color: selected ? 'var(--text-on-primary)' : 'var(--text-primary)',
        border: selected ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
        cursor: 'pointer',
        transition: 'background var(--duration-quick) var(--ease-calm)',
        maxWidth: '100%', flexShrink: 0,
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
      {typeof count === 'number' ? <span style={{ opacity: 0.75, fontWeight: 400 }}>{count}</span> : null}
      {removable ? <Icon name="x" size={13} /> : null}
    </button>
  );
}
