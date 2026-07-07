import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* v2 §8.4 — required "what to confirm" checklist. */
const DEFAULT_ITEMS = [
  'Exact schedule',
  'Current price',
  'Age fit',
  'Registration requirements',
  'Cancellation / refund policy',
  'Parent presence requirement',
  'Supervision / safety policy',
  'Accessibility or accommodation needs',
];

export function ConfirmChecklist({ items = DEFAULT_ITEMS, title = 'Check before booking', style }) {
  return (
    <section aria-label={title} style={{
      background: 'var(--warning-soft)',
      border: '1px solid var(--border-warning)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      ...style,
    }}>
      <h3 style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'var(--warning)', display: 'inline-flex' }}><Icon name="circle-alert" size={18} /></span>
        {title}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px 16px' }}>
        {items.map((t) => (
          <li key={t} style={{ display: 'flex', gap: 8, alignItems: 'baseline', font: 'var(--text-body)', color: 'var(--text-primary)' }}>
            <span aria-hidden="true" style={{ color: 'var(--warning)', flexShrink: 0, fontSize: 14 }}>–</span>{t}
          </li>
        ))}
      </ul>
    </section>
  );
}
