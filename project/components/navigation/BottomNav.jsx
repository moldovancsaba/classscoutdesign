import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* v2 §35.2 — exactly five tabs: Search · This Week · Saved · Scout · Account. */
const DEFAULT_TABS = [
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'week', label: 'This Week', icon: 'calendar' },
  { id: 'saved', label: 'Saved', icon: 'bookmark' },
  { id: 'scout', label: 'Scout', icon: 'sparkles' },
  { id: 'account', label: 'Account', icon: 'circle-user' },
];

export function BottomNav({ tabs = DEFAULT_TABS, current = 'search', onNav, badge, style }) {
  return (
    <nav aria-label="Primary" style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50,
      background: 'var(--bg-card)',
      boxShadow: 'var(--shadow-nav)',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      ...style,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + tabs.length + ', 1fr)', maxWidth: 600, margin: '0 auto' }}>
        {tabs.map((t) => {
          const active = current === t.id;
          const b = badge && badge[t.id];
          return (
            <button
              key={t.id}
              onClick={() => onNav && onNav(t.id)}
              aria-current={active ? 'page' : undefined}
              className="cs-focusable"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                padding: '8px 4px 6px', minHeight: 'var(--tap-target)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: active ? 'var(--primary-dark)' : 'var(--text-secondary)',
              }}
            >
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <Icon name={t.icon} size={21} filled={active && (t.icon === 'bookmark')} strokeWidth={active ? 2.1 : 1.75} />
                {b ? (
                  <span style={{ position: 'absolute', top: -4, right: -8, font: '600 10px/1 var(--font-ui)', background: 'var(--primary)', color: 'var(--text-on-primary)', borderRadius: 999, padding: '2.5px 5px', minWidth: 9, textAlign: 'center' }}>{b}</span>
                ) : null}
              </span>
              <span style={{ font: (active ? '600' : '500') + ' 10.5px/1.2 var(--font-ui)', whiteSpace: 'nowrap' }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
