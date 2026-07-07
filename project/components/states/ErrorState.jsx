import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* v2 §6.5 — error states preserve trust. */
export function ErrorState({
  message = 'We could not load these activities. Please refresh or try again.',
  detail = 'If the problem continues, use Scout or browse this week\u2019s activities.',
  onRetry,
  actions,
  timestamp,
  style,
}) {
  const acts = actions || [];
  return (
    <div role="alert" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10,
      padding: 'var(--space-6) var(--space-5)',
      background: 'var(--error-soft)',
      border: '1px solid var(--border-error)',
      borderRadius: 'var(--radius-card)',
      ...style,
    }}>
      <span style={{ color: 'var(--error)', display: 'inline-flex' }}><Icon name="circle-alert" size={26} /></span>
      <p style={{ font: 'var(--text-body-medium)', color: 'var(--text-primary)', margin: 0, maxWidth: 440 }}>{message}</p>
      {detail ? <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: 0, maxWidth: 440 }}>{detail}</p> : null}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
        {onRetry ? <Button size="sm" icon="refresh-cw" onClick={onRetry}>Retry</Button> : null}
        {acts.map((a) => (
          <Button key={a.label} size="sm" variant="ghost" icon={a.icon} onClick={a.onClick} href={a.href}>{a.label}</Button>
        ))}
      </div>
      {timestamp ? <span style={{ font: 'var(--text-badge)', color: 'var(--text-secondary)' }}>As of {timestamp}</span> : null}
    </div>
  );
}
