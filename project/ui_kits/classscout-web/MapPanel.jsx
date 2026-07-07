import React from 'react';
import { Icon } from '../../components/core/Icon.jsx';
import { Button } from '../../components/core/Button.jsx';
import { MapPin } from '../../components/map/MapPin.jsx';
import { MapPreviewCard } from '../../components/map/MapPreviewCard.jsx';

/* Placeholder map panel (real product: MapLibre + OSM tiles — v2 §34.7).
   Implements the §34 interaction contract: pins synced with list selection,
   pin-tap preview, "Search this area", zoom controls, cluster. */
export function MapPanel({ listings = [], selectedId, onSelect, saved = {}, onToggleSave, onViewDetails, fullHeight, style }) {
  const [showSearchArea, setShowSearchArea] = React.useState(true);
  const selected = listings.find((l) => l.id === selectedId);
  return (
    <div
      role="region"
      aria-label="Map of matching activities (all results also appear in the list)"
      style={{
        position: 'relative',
        background: 'var(--bg-sunken)',
        backgroundImage: 'linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        borderRadius: fullHeight ? 0 : 'var(--radius-card)',
        border: fullHeight ? 'none' : '1px solid var(--border-soft)',
        minHeight: fullHeight ? '100%' : 420,
        height: fullHeight ? '100%' : undefined,
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* pins at illustrative positions */}
      {listings.map((l, i) => (
        <div key={l.id} style={{ position: 'absolute', left: (18 + (i * 27) % 60) + '%', top: (20 + (i * 33) % 55) + '%' }}>
          <MapPin
            type={saved[l.id] ? 'saved' : l.priceStatus === 'free' ? 'free' : 'standard'}
            label={l.title}
            selected={selectedId === l.id}
            onClick={() => onSelect && onSelect(l.id)}
          />
        </div>
      ))}
      <div style={{ position: 'absolute', left: '72%', top: '18%' }}>
        <MapPin type="cluster" count={8} />
      </div>

      {/* controls */}
      <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[['plus', 'Zoom in'], ['minus', 'Zoom out'], ['locate-fixed', 'Use my location']].map(([n, label]) => (
          <button key={n} aria-label={label} className="cs-focusable" onClick={() => setShowSearchArea(true)} style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}>
            <Icon name={n} size={17} />
          </button>
        ))}
      </div>
      {showSearchArea ? (
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)' }}>
          <Button size="sm" variant="ghost" icon="refresh-cw" onClick={() => setShowSearchArea(false)} style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-card)' }}>
            Search this area
          </Button>
        </div>
      ) : null}

      {/* attribution / placeholder note */}
      <span style={{ position: 'absolute', bottom: 8, right: 12, font: 'var(--text-badge)', color: 'var(--text-secondary)' }}>
        Map placeholder · MapLibre + OSM in production
      </span>

      {/* selected preview */}
      {selected ? (
        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
          <MapPreviewCard
            title={selected.title}
            provider={selected.provider}
            ages={selected.ages}
            priceStatus={selected.priceStatus}
            price={selected.price}
            schedule={selected.schedule}
            lastChecked={selected.lastChecked}
            sourceLabel={selected.sourceLabel}
            saved={!!saved[selected.id]}
            onToggleSave={() => onToggleSave && onToggleSave(selected.id)}
            onViewDetails={() => onViewDetails && onViewDetails(selected.id)}
            onClose={() => onSelect && onSelect(null)}
          />
        </div>
      ) : null}
    </div>
  );
}
