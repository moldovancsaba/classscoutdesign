import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { ReportOutdatedLink } from './ReportOutdatedLink.jsx';

/* v2 §8.5 — the detail-page source block. */
export function SourceBlock({ sourceType = 'Provider website', sourceUrl, lastChecked, priceStatus = 'Estimate', scheduleStatus = 'Needs provider confirmation', reportHref = '#', style }) {
  const Row = ({ label, value }) => (
    <div style={{ display: 'flex', gap: 8, font: 'var(--text-meta)', flexWrap: 'wrap' }}>
      <span style={{ color: 'var(--text-secondary)', minWidth: 118 }}>{label}</span>
      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{value}</span>
    </div>
  );
  return (
    <section aria-label="Information source" style={{
      background: 'var(--bg-sunken)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      display: 'flex', flexDirection: 'column', gap: 10,
      ...style,
    }}>
      <h3 style={{ font: 'var(--text-meta-medium)', color: 'var(--text-secondary)', margin: 0, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 12 }}>
        Information source
      </h3>
      <Row label="Source type" value={sourceUrl ? (
        <a href={sourceUrl} className="cs-focusable" style={{ color: 'var(--primary-dark)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {sourceType} <Icon name="external-link" size={12} />
        </a>
      ) : sourceType} />
      <Row label="Last checked" value={lastChecked || 'Not yet checked'} />
      <Row label="Price status" value={priceStatus} />
      <Row label="Schedule status" value={scheduleStatus} />
      <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
        Always confirm final details directly with the provider before attending.
      </p>
      <ReportOutdatedLink href={reportHref} />
    </section>
  );
}
