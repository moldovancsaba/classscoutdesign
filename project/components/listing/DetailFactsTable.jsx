import React from 'react';

/* v2 §8.3 key facts. `stacked` = mobile rows (v2 §17.2: no dense tables on mobile). */
export function DetailFactsTable({ rows = [], title = 'Key facts', stacked, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-card)', overflow: 'hidden', ...style }}>
      {title ? (
        <div style={{ font: 'var(--text-meta-medium)', color: 'var(--text-secondary)', padding: '12px 20px', borderBottom: '1px solid var(--border-soft)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 12 }}>
          {title}
        </div>
      ) : null}
      <dl style={{ margin: 0 }}>
        {rows.map((r, i) => (
          <div
            key={r.label}
            style={{
              display: 'grid',
              gridTemplateColumns: stacked ? '1fr' : 'minmax(120px, 160px) 1fr',
              gap: stacked ? 2 : 12,
              padding: stacked ? '10px 16px' : '12px 20px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--border-soft)' : 'none',
              alignItems: 'baseline',
            }}
          >
            <dt style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>{r.label}</dt>
            <dd style={{ font: 'var(--text-body-medium)', color: 'var(--text-primary)', margin: 0, minWidth: 0 }}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
