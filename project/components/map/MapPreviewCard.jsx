import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { SaveButton } from '../core/SaveButton.jsx';
import { PriceEstimateLabel } from '../trust/PriceEstimateLabel.jsx';
import { LastCheckedLabel } from '../trust/LastCheckedLabel.jsx';

/* v2 §34.6 — compact preview when a pin is tapped. */
export function MapPreviewCard({ title, provider, ages, priceStatus = 'estimated', price, schedule, lastChecked, sourceLabel, approximate, saved, onToggleSave, onViewDetails, onClose, style }) {
  return (
    <article style={{
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-4)',
      display: 'flex', flexDirection: 'column', gap: 8,
      width: 'min(320px, calc(100vw - 32px))',
      boxSizing: 'border-box',
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h4 style={{ font: 'var(--text-card-title)', color: 'var(--text-primary)', margin: 0 }}>{title}</h4>
          <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
            {provider}{ages ? ' · Ages ' + ages : ' · Age not confirmed'}
          </p>
        </div>
        {onClose ? (
          <button onClick={onClose} aria-label="Close preview" className="cs-focusable" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: 4, display: 'grid', placeItems: 'center' }}>
            <Icon name="x" size={16} />
          </button>
        ) : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <PriceEstimateLabel status={priceStatus} amount={price} note={null} />
        {schedule ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>
            <Icon name="calendar" size={13} />{schedule}
          </span>
        ) : null}
      </div>
      <LastCheckedLabel date={lastChecked} source={sourceLabel} />
      {approximate ? (
        <span style={{ font: 'var(--text-badge)', color: 'var(--badge-estimate-text)', background: 'var(--badge-estimate-bg)', padding: '3px 9px', borderRadius: 'var(--radius-chip)', alignSelf: 'flex-start' }}>
          Approximate area
        </span>
      ) : null}
      <div style={{ display: 'flex', gap: 8, paddingTop: 2 }}>
        <Button size="sm" onClick={onViewDetails} style={{ flex: 1 }}>View details</Button>
        <SaveButton saved={saved} onToggle={onToggleSave} />
      </div>
    </article>
  );
}
