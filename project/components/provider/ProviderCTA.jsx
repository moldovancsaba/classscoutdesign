import React from 'react';
import { Button } from '../core/Button.jsx';

/* v2 §18.1 provider landing headline + live-site "List your program" module. */
export function ProviderCTA({
  title = 'Reach NYC parents looking for trusted kids\u2019 activities',
  body = 'Tell us about your program and we\u2019ll follow up about the right listing path for local families.',
  buttonLabel = 'Request listing info',
  href = 'mailto:hello@classscoutny.com?subject=Request%20listing%20info',
  onClick,
  style,
}) {
  return (
    <section style={{
      background: 'var(--bg-navy)',
      borderRadius: 'var(--radius-card)',
      padding: 'clamp(20px, 3vw, 32px)',
      display: 'flex', flexDirection: 'column', gap: 12,
      minWidth: 0,
      ...style,
    }}>
      <h3 style={{ font: 'var(--text-h3)', color: 'var(--text-on-dark)', margin: 0, textWrap: 'pretty' }}>{title}</h3>
      <p style={{ font: 'var(--text-body)', color: 'var(--on-dark-dim)', margin: 0 }}>{body}</p>
      <Button href={href} onClick={onClick} style={{ alignSelf: 'flex-start', background: 'var(--text-on-dark)', color: 'var(--brand-navy)' }}>
        {buttonLabel}
      </Button>
    </section>
  );
}
