import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* v2 §6.3 — no dead-end empty states. */
export function EmptyState({
  title = 'No matching activities found for this search',
  body = 'Try expanding the neighbourhood, changing the date, or removing one filter.',
  actions,
  icon = 'search',
  style,
}) {
  const acts = actions || [
    { label: 'Broaden search', primary: true },
    { label: 'Try this weekend' },
    { label: 'Ask Scout', icon: 'sparkles' },
  ];
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10,
      padding: 'var(--space-7) var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-card)',
      ...style,
    }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-sunken)', color: 'var(--text-secondary)' }}>
        <Icon name={icon} size={22} />
      </span>
      <h3 style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
      <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: 0, maxWidth: 440 }}>{body}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
        {acts.map((a) => (
          <Button key={a.label} size="sm" variant={a.primary ? 'primary' : 'ghost'} icon={a.icon} onClick={a.onClick}>{a.label}</Button>
        ))}
      </div>
    </div>
  );
}
