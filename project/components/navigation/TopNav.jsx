import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* v2 §35.1 — one row, ≤6 links + Ask Scout CTA. Collapses to logo + menu below `collapseAt`. */
const DEFAULT_LINKS = [
  { id: 'find', label: 'Find activities' },
  { id: 'week', label: 'This week' },
  { id: 'camps', label: 'Camps' },
  { id: 'birthdays', label: 'Birthday parties' },
  { id: 'saved', label: 'Saved' },
  { id: 'providers', label: 'For providers' },
];

export function TopNav({ links = DEFAULT_LINKS, current, onNav, onScout, onMenu, showLinks = true, logoSrc = '../../assets/logo-pin.png', style }) {
  return (
    <header style={{
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-soft)',
      position: 'sticky', top: 0, zIndex: 40,
      ...style,
    }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '10px var(--page-pad)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}
          className="cs-focusable"
          aria-label="ClassScout NYC home"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
        >
          <img src={logoSrc} alt="" style={{ height: 38, display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ font: '650 15px/1.2 var(--font-ui)', color: 'var(--brand-navy)', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>ClassScout</span>
            <span style={{ font: '400 10.5px/1.2 var(--font-ui)', color: 'var(--text-secondary)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}>NYC</span>
          </span>
        </a>
        {showLinks ? (
          <nav aria-label="Main" style={{ display: 'flex', gap: 2, flex: 1, minWidth: 0, overflow: 'hidden' }}>
            {links.map((l) => (
              <a
                key={l.id}
                href="#"
                onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}
                aria-current={current === l.id ? 'page' : undefined}
                className="cs-focusable"
                style={{
                  font: 'var(--text-meta-medium)',
                  color: current === l.id ? 'var(--primary-dark)' : 'var(--text-secondary)',
                  background: current === l.id ? 'var(--chip-bg)' : 'transparent',
                  padding: '9px 12px', borderRadius: 'var(--radius-chip)',
                  textDecoration: 'none', minHeight: 36,
                  display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap',
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        ) : <span style={{ flex: 1 }} />}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Button size="sm" variant="ghost" icon="sparkles" onClick={onScout}>Ask Scout</Button>
          {onMenu ? (
            <button onClick={onMenu} aria-label="More menu" className="cs-focusable" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', width: 'var(--tap-target)', height: 'var(--tap-target)', display: 'grid', placeItems: 'center' }}>
              <Icon name="menu" size={20} />
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
