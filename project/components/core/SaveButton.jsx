import React from 'react';
import { Icon } from './Icon.jsx';

export function SaveButton({ saved, onToggle, showLabel = true, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onToggle}
      className="cs-focusable"
      aria-pressed={!!saved}
      aria-label={saved ? 'Saved — remove from saved' : 'Save this activity to compare later'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
        minWidth: showLabel ? undefined : 'var(--tap-target)',
        minHeight: showLabel ? 36 : 'var(--tap-target)',
        padding: showLabel ? '8px 14px' : 0,
        borderRadius: 'var(--radius-chip)',
        font: 'var(--text-meta-medium)',
        background: saved ? 'var(--chip-bg)' : hover ? 'var(--bg-sunken)' : 'var(--bg-card)',
        color: saved ? 'var(--primary-dark)' : 'var(--text-secondary)',
        border: saved ? '1px solid var(--primary)' : '1px solid var(--border-strong)',
        cursor: 'pointer',
        transition: 'all var(--duration-quick) var(--ease-calm)',
        ...style,
      }}
    >
      <Icon name="bookmark" size={15} filled={!!saved} color={saved ? 'var(--primary)' : 'currentColor'} />
      {showLabel ? <span>{saved ? 'Saved' : 'Save'}</span> : null}
    </button>
  );
}
