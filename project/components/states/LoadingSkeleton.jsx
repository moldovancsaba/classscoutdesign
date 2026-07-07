import React from 'react';

function Shimmer({ w = '100%', h = 14, r = 6, style }) {
  return (
    <span style={{
      display: 'block', width: w, height: h, borderRadius: r,
      background: 'linear-gradient(90deg, var(--bg-sunken) 25%, var(--skeleton-highlight) 50%, var(--bg-sunken) 75%)',
      backgroundSize: '200% 100%',
      animation: 'cs-shimmer 1.4s var(--ease-calm) infinite',
      ...style,
    }} />
  );
}

/* v2 §6.4 — serious loading with skeleton cards. */
export function LoadingSkeleton({ variant = 'card', count = 3, label = 'Loading source-backed listings for your filters\u2026', style }) {
  const items = Array.from({ length: count });
  return (
    <div aria-busy="true" role="status" aria-label={label || 'Loading'} style={{ display: 'flex', flexDirection: 'column', gap: 16, ...style }}>
      <style>{'@keyframes cs-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }'}</style>
      {label ? <span style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>{label}</span> : null}
      {variant === 'card' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: 16 }}>
          {items.map((_, i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
              <Shimmer h={130} r={0} />
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Shimmer w="70%" h={16} />
                <Shimmer w="50%" h={12} />
                <Shimmer w="90%" h={12} />
                <Shimmer w="40%" h={12} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((_, i) => <Shimmer key={i} w={i % 3 === 2 ? '60%' : '100%'} />)}
        </div>
      )}
    </div>
  );
}
