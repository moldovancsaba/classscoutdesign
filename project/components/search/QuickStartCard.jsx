import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* v2 §16.2 quick-start scenarios. */
export function QuickStartCard({ label, icon = 'search', onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      className="cs-focusable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        padding: '14px 16px', minHeight: 'var(--tap-target)',
        cursor: 'pointer',
        font: 'var(--text-body-medium)', color: 'var(--text-primary)',
        textAlign: 'left', textDecoration: 'none',
        transition: 'box-shadow var(--duration-gentle) var(--ease-calm)',
        boxSizing: 'border-box', width: '100%',
        ...style,
      }}
    >
      <span style={{ color: 'var(--primary)', display: 'inline-flex' }}><Icon name={icon} size={18} /></span>
      <span>{label}</span>
    </Tag>
  );
}
