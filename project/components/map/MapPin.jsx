import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* v2 §34.5 pin table. Rendered as an absolutely-positioned marker inside a map panel. */
export function MapPin({ type = 'standard', label, count, selected, onClick, style }) {
  if (type === 'cluster') {
    return (
      <button
        onClick={onClick}
        className="cs-focusable"
        aria-label={count + ' activities in this area'}
        style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'var(--primary)', color: 'var(--text-on-primary)',
          border: '2.5px solid var(--pure-white)',
          boxShadow: 'var(--shadow-card-hover)',
          font: '600 14px/1 var(--font-ui)',
          display: 'grid', placeItems: 'center', cursor: 'pointer',
          ...style,
        }}
      >
        {count}
      </button>
    );
  }
  const palette = {
    standard: { bg: 'var(--primary)', ring: 'var(--pure-white)' },
    free: { bg: 'var(--trust)', ring: 'var(--pure-white)' },
    saved: { bg: 'var(--brand-navy)', ring: 'var(--pure-white)' },
    approximate: { bg: 'var(--text-secondary)', ring: 'var(--pure-white)' },
  };
  const p = palette[type] || palette.standard;
  const size = selected ? 40 : 32;
  return (
    <button
      onClick={onClick}
      className="cs-focusable"
      aria-label={(label || 'Activity') + (type === 'free' ? ' (free)' : '') + (type === 'approximate' ? ' (approximate area)' : '') + (selected ? ' — selected' : '')}
      aria-pressed={!!selected}
      style={{
        width: size, height: size,
        background: p.bg,
        border: (selected ? '3px solid var(--brand-navy)' : '2.5px solid ' + p.ring),
        borderRadius: '50% 50% 50% 4px',
        transform: 'rotate(-45deg)',
        boxShadow: selected ? 'var(--shadow-modal)' : 'var(--shadow-card-hover)',
        display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0,
        transition: 'all var(--duration-quick) var(--ease-calm)',
        ...style,
      }}
    >
      <span style={{ transform: 'rotate(45deg)', display: 'inline-flex', color: 'var(--pure-white)' }}>
        <Icon name={type === 'saved' ? 'bookmark' : 'map-pin'} size={selected ? 17 : 14} filled={type === 'saved'} color="var(--pure-white)" />
      </span>
    </button>
  );
}
