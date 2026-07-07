import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { SaveButton } from '../core/SaveButton.jsx';
import { TrustBadge } from '../trust/TrustBadge.jsx';
import { PriceEstimateLabel } from '../trust/PriceEstimateLabel.jsx';
import { LastCheckedLabel } from '../trust/LastCheckedLabel.jsx';

/* v2 §7 — the card must answer: what, who for, where, when, cost, reliability, next step. */
export function ActivityCard({
  image, imageAlt = '',
  category, ages, ageStatus = 'confirmed', setting,
  title, provider, neighborhood,
  summary,
  priceStatus = 'estimated', price, priceUnit = 'session',
  schedule,
  sourceKind = 'public-source',
  lastChecked, sourceLabel, stale,
  saved, onToggleSave,
  onViewDetails, providerHref, onAskScout,
  compact,
  style,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transition: 'box-shadow var(--duration-gentle) var(--ease-calm)',
        overflow: 'hidden',
        minWidth: 0,
        ...style,
      }}
    >
      {/* Top: image (real listing imagery only) + badges + save */}
      <div style={{ position: 'relative', aspectRatio: compact ? '5 / 2' : '16 / 9', background: 'var(--bg-sunken)' }}>
        {image ? (
          <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', justifyContent: 'flex-end', color: 'var(--text-secondary)', padding: '44px 12px 14px', boxSizing: 'border-box', textAlign: 'center' }}>
            <Icon name="map-pin" size={20} color="var(--border-strong)" />
            <span style={{ font: 'var(--text-badge)' }}>Image not available from source</span>
          </div>
        )}
        <div style={{ position: 'absolute', top: 10, left: 10, right: 56, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {category ? (
            <span style={{ font: 'var(--text-badge)', background: 'var(--overlay-scrim-dark)', color: 'var(--text-on-dark)', padding: '4px 10px', borderRadius: 'var(--radius-chip)', whiteSpace: 'nowrap' }}>{category}</span>
          ) : null}
          <span style={{ font: 'var(--text-badge)', background: 'var(--overlay-scrim-light)', color: ages ? 'var(--text-primary)' : 'var(--badge-estimate-text)', padding: '4px 10px', borderRadius: 'var(--radius-chip)', whiteSpace: 'nowrap' }}>
            {ages ? 'Ages ' + ages + (ageStatus === 'estimated' ? ' (est.)' : '') : 'Age not confirmed'}
          </span>
        </div>
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <SaveButton saved={saved} onToggle={onToggleSave} showLabel={false} style={{ background: 'var(--overlay-scrim-light)' }} />
        </div>
      </div>

      {/* Middle: title, provider, location, summary */}
      <div style={{ padding: 'var(--card-pad)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <h3 style={{ font: 'var(--text-card-title)', color: 'var(--text-primary)', margin: 0, textWrap: 'pretty' }}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>
          {provider ? <span>{provider}</span> : null}
          {(neighborhood || setting) ? (
            <span style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
              <Icon name="map-pin" size={13} style={{ marginTop: 3 }} />
              <span>{[neighborhood, setting].filter(Boolean).join(' · ')}</span>
            </span>
          ) : null}
        </div>
        {summary && !compact ? (
          <p style={{ font: 'var(--text-body)', color: 'var(--text-primary)', margin: 0 }}>{summary}</p>
        ) : null}

        {/* Decision row: date/time · price · source/freshness */}
        <div style={{ marginTop: 'auto', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--border-soft)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
            <PriceEstimateLabel status={priceStatus} amount={price} unit={priceUnit} note={null} />
            {schedule ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>
                <Icon name="calendar" size={13} />{schedule}
              </span>
            ) : null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <TrustBadge kind={sourceKind} />
            <LastCheckedLabel date={lastChecked} source={sourceLabel} stale={stale} />
          </div>
        </div>

        {/* Actions: View details · Visit provider · Ask Scout */}
        <div style={{ display: 'flex', gap: 8, paddingTop: 4, flexWrap: 'wrap' }}>
          <Button size="sm" onClick={onViewDetails} style={{ flex: '1 1 auto' }}>View details</Button>
          {providerHref ? (
            <Button size="sm" variant="ghost" iconRight="external-link" href={providerHref}>Visit provider</Button>
          ) : null}
          {onAskScout ? (
            <Button size="sm" variant="ghost" icon="sparkles" onClick={onAskScout} ariaLabel={'Ask Scout about ' + title}>Ask Scout</Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
