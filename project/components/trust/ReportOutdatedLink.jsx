import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ReportOutdatedLink({ href = '#', label = 'Report outdated info', onClick, style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="cs-focusable"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        font: 'var(--text-meta)', color: 'var(--text-secondary)',
        textDecoration: 'underline', textUnderlineOffset: 3,
        minHeight: 32, padding: '4px 0',
        ...style,
      }}
    >
      <Icon name="flag" size={13} />
      {label}
    </a>
  );
}
