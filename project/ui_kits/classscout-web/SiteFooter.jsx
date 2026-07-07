import React from 'react';

export function SiteFooter({ compact, style }) {
  return (
    <footer style={{ background: 'var(--bg-navy)', marginTop: 'var(--space-8)', ...style }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-6) var(--page-pad)', display: 'flex', gap: 'var(--space-5)', alignItems: 'center', flexWrap: 'wrap' }}>
        <img src="../../assets/logo-pin-light.png" alt="ClassScout NYC logo" style={{ height: compact ? 44 : 56 }} />
        <div style={{ flex: '1 1 240px', minWidth: 0 }}>
          <div style={{ font: 'var(--text-body-medium)', color: 'var(--text-on-dark)' }}>ClassScout NYC</div>
          <div style={{ font: 'var(--text-meta)', color: 'var(--on-dark-dim)', marginTop: 4 }}>
            Trusted. Local. For NYC families. · Prices shown are estimates for planning.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {['How trust works', 'For providers', 'Privacy', 'Terms', 'Cookies'].map((l) => (
            <a key={l} href="#" className="cs-focusable" style={{ font: 'var(--text-meta)', color: 'var(--on-dark-dim)', textDecoration: 'none', minHeight: 32, display: 'inline-flex', alignItems: 'center' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
