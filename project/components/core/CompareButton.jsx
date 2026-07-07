import React from 'react';
import { Icon } from './Icon.jsx';

export function CompareButton({ comparing, onToggle, count, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onToggle}
      className="cs-focusable"
      aria-pressed={!!comparing}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '8px 14px', minHeight: 36,
        borderRadius: 'var(--radius-chip)',
        font: 'var(--text-meta-medium)',
        background: comparing ? 'var(--chip-bg)' : hover ? 'var(--bg-sunken)' : 'var(--bg-card)',
        color: comparing ? 'var(--primary-dark)' : 'var(--text-secondary)',
        border: comparing ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
        cursor: 'pointer',
        transition: 'all var(--duration-quick) var(--ease-calm)',
        ...style,
      }}
    >
      <Icon name="columns-2" size={15} />
      <span>{comparing ? 'Comparing' : 'Compare'}</span>
      {typeof count === 'number' && count > 0 ? (
        <span style={{
          font: 'var(--text-badge)', background: 'var(--primary)', color: 'var(--text-on-primary)',
          borderRadius: 'var(--radius-chip)', padding: '2px 7px', minWidth: 18, textAlign: 'center',
        }}>{count}</span>
      ) : null}
    </button>
  );
}
