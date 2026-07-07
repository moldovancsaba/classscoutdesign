import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* v2 §9.1 — labels only with defined meanings. */
const KINDS = {
  'official-source': { label: 'Official source', bg: 'var(--badge-trust-bg)', color: 'var(--badge-trust-text)', icon: 'circle-check-big' },
  'public-source': { label: 'Public source', bg: 'var(--bg-sunken)', color: 'var(--text-secondary)', icon: 'info' },
  'provider-claimed': { label: 'Provider claimed', bg: 'var(--badge-trust-bg)', color: 'var(--badge-trust-text)', icon: 'circle-check-big' },
  'recently-checked': { label: 'Recently checked', bg: 'var(--badge-trust-bg)', color: 'var(--badge-trust-text)', icon: 'clock' },
  'price-estimate': { label: 'Price estimate', bg: 'var(--badge-estimate-bg)', color: 'var(--badge-estimate-text)', icon: 'circle-alert' },
  'schedule-estimate': { label: 'Schedule estimate', bg: 'var(--badge-estimate-bg)', color: 'var(--badge-estimate-text)', icon: 'calendar' },
  'age-not-confirmed': { label: 'Age not confirmed', bg: 'var(--badge-estimate-bg)', color: 'var(--badge-estimate-text)', icon: 'info' },
  'source-not-confirmed': { label: 'Source not confirmed', bg: 'var(--badge-estimate-bg)', color: 'var(--badge-estimate-text)', icon: 'circle-alert' },
  'reported-outdated': { label: 'Reported outdated', bg: 'var(--error-soft)', color: 'var(--badge-error-text)', icon: 'flag' },
};

export function TrustBadge({ kind = 'public-source', label, showIcon = true, style }) {
  const k = KINDS[kind] || KINDS['public-source'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-chip)',
      font: 'var(--text-badge)',
      background: k.bg, color: k.color,
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {showIcon ? <Icon name={k.icon} size={12} /> : null}
      {label || k.label}
    </span>
  );
}
