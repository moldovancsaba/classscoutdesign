import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* v2 §16.4 + §10.5 privacy rule. */
export function ScoutPromptCard({
  title = 'Not sure where to start?',
  body = "Tell Scout your child's age, area, schedule, budget, and interests. Scout will suggest options and explain what to confirm before booking.",
  buttonLabel = 'Start with Scout',
  beta,
  privacyNote = true,
  onStart,
  style,
}) {
  return (
    <section style={{
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)',
      display: 'flex', flexDirection: 'column', gap: 12,
      minWidth: 0,
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--chip-bg)', color: 'var(--primary-dark)', flexShrink: 0 }}>
          <Icon name="sparkles" size={17} />
        </span>
        <h3 style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
        {beta ? (
          <span style={{ font: 'var(--text-badge)', color: 'var(--text-secondary)', background: 'var(--bg-sunken)', padding: '3px 9px', borderRadius: 'var(--radius-chip)' }}>Beta</span>
        ) : null}
      </div>
      <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: 0 }}>{body}</p>
      {beta ? (
        <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: 0 }}>
          Scout is in beta. It can help organise options, but details may change. Please confirm schedule, age fit, price, and availability with the provider.
        </p>
      ) : null}
      {privacyNote ? (
        <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: 0 }}>
          Do not enter a child's full name. Scout only needs age, location, schedule, interests, and preferences.
        </p>
      ) : null}
      <Button onClick={onStart} icon="sparkles" style={{ alignSelf: 'flex-start' }}>{buttonLabel}</Button>
    </section>
  );
}
