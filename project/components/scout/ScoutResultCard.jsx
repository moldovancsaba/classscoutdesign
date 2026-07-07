import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* v2 §10.3 — every Scout recommendation explains fit, evidence, uncertainty, confirmations. */
export function ScoutResultCard({
  title, provider, neighborhood,
  reason,
  basedOn = 'Based on available information from the listing source.',
  confirmItems = ['Current price', 'Exact time', 'Whether registration is required'],
  onViewDetails, providerHref,
  style,
}) {
  return (
    <article style={{
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderLeft: '3px solid var(--primary)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      display: 'flex', flexDirection: 'column', gap: 10,
      minWidth: 0,
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ color: 'var(--primary-dark)', display: 'inline-flex', marginTop: 3 }}><Icon name="sparkles" size={16} /></span>
        <div style={{ minWidth: 0 }}>
          <h4 style={{ font: 'var(--text-card-title)', color: 'var(--text-primary)', margin: 0 }}>{title}</h4>
          {(provider || neighborhood) ? (
            <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
              {[provider, neighborhood].filter(Boolean).join(' · ')}
            </p>
          ) : null}
        </div>
      </div>
      {reason ? (
        <p style={{ font: 'var(--text-body)', color: 'var(--text-primary)', margin: 0 }}>
          This may fit because {reason}
        </p>
      ) : null}
      {basedOn ? (
        <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: 0 }}>{basedOn}</p>
      ) : null}
      {confirmItems && confirmItems.length ? (
        <div>
          <span style={{ font: 'var(--text-meta-medium)', color: 'var(--badge-estimate-text)' }}>Check before booking</span>
          <ul style={{ margin: '4px 0 0', paddingLeft: 18, font: 'var(--text-meta)', color: 'var(--text-primary)', display: 'grid', gap: 2 }}>
            {confirmItems.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      ) : null}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 2 }}>
        <Button size="sm" onClick={onViewDetails}>View details</Button>
        {providerHref ? <Button size="sm" variant="ghost" iconRight="external-link" href={providerHref}>Visit provider</Button> : null}
      </div>
    </article>
  );
}
