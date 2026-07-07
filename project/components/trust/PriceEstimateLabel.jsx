import React from 'react';

/* v2 §36.6 price copy: Free | Estimated from $25 | Price not confirmed | … */
export function PriceEstimateLabel({ status = 'estimated', amount, unit = 'session', note, size = 'md', style }) {
  const big = size === 'lg';
  let text;
  if (status === 'free') text = 'Free';
  else if (status === 'confirmed') text = amount + (unit ? '/' + unit : '');
  else if (status === 'unknown') text = 'Price not confirmed';
  else text = 'Estimated from ' + amount + (unit ? '/' + unit : '');
  const defaultNote = status === 'estimated' ? 'confirm with provider' : status === 'unknown' ? 'check provider website' : null;
  const showNote = note === null ? null : (note || defaultNote);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', minWidth: 0, ...style }}>
      <span style={{
        font: big ? '600 20px/1.3 var(--font-ui)' : 'var(--text-meta-medium)',
        color: status === 'free' ? 'var(--badge-trust-text)' : 'var(--text-primary)',
      }}>
        {text}
      </span>
      {showNote ? (
        <span style={{ font: 'var(--text-badge)', color: 'var(--badge-estimate-text)', background: 'var(--badge-estimate-bg)', padding: '3px 9px', borderRadius: 'var(--radius-chip)' }}>
          {showNote}
        </span>
      ) : null}
    </span>
  );
}
