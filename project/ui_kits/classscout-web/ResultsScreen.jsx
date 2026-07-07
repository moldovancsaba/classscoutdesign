import React from 'react';
import { useViewport, navLinksFor } from './Responsive.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { MapPanel } from './MapPanel.jsx';
import { TopNav } from '../../components/navigation/TopNav.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { Button } from '../../components/core/Button.jsx';
import { FilterChip } from '../../components/core/FilterChip.jsx';
import { FilterSheet } from '../../components/search/FilterSheet.jsx';
import { ActivityCard } from '../../components/listing/ActivityCard.jsx';
import { EmptyState } from '../../components/states/EmptyState.jsx';
import { ScoutResultCard } from '../../components/scout/ScoutResultCard.jsx';

export const SAMPLE_LISTINGS = [
  {
    id: 'robotics',
    title: 'Kids Robotics Workshop', provider: 'Brooklyn Robot Foundry', neighborhood: 'Park Slope, Brooklyn',
    category: 'STEM', ages: '6–10', setting: 'Indoor',
    summary: 'Hands-on robotics class for children who enjoy building and problem-solving.',
    priceStatus: 'estimated', price: '$45', schedule: 'This Saturday',
    sourceKind: 'official-source', lastChecked: '2 July 2026', sourceLabel: 'provider website',
  },
  {
    id: 'storytime',
    title: 'Toddler Story Time', provider: 'Brooklyn Public Library', neighborhood: 'Grand Army Plaza, Brooklyn',
    category: 'Reading', ages: '1–3', setting: 'Indoor',
    summary: 'Drop-in picture-book session for toddlers with songs and simple movement.',
    priceStatus: 'free', schedule: 'Weekday mornings',
    sourceKind: 'official-source', lastChecked: '3 July 2026', sourceLabel: 'library website',
  },
  {
    id: 'soccer',
    title: 'Summer Soccer Camp', provider: 'Prospect Park Youth Sports', neighborhood: 'Prospect Park, Brooklyn',
    category: 'Sports', ages: '5–8', setting: 'Outdoor',
    summary: 'Week-long beginner soccer camp focused on movement, teamwork, and fun drills.',
    priceStatus: 'estimated', price: '$310', priceUnit: 'week', schedule: 'Weekly in July',
    sourceKind: 'public-source', lastChecked: '28 June 2026', sourceLabel: 'public event listing',
  },
  {
    id: 'art',
    title: 'After-School Art Studio', provider: 'Uptown Art House', neighborhood: 'Harlem, Manhattan',
    category: 'Art', ages: '5–9', setting: 'Indoor',
    summary: 'Small-group drawing and painting for children who like making things at their own pace.',
    priceStatus: 'unknown', schedule: 'Schedule not confirmed',
    sourceKind: 'source-not-confirmed', lastChecked: '20 May 2026', sourceLabel: 'public listing', stale: true,
  },
];

/* v2 §6.2 — results always show active, removable filters. */
export function ResultsScreen({ onNav, onOpenListing, filters, setFilters, saved, setSaved }) {
  const vp = useViewport();
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [mobileMode, setMobileMode] = React.useState('list'); /* list | map — never side-by-side on mobile (v2 §34.3) */
  const [selectedPin, setSelectedPin] = React.useState(null);

  const active = [];
  Object.entries(filters || {}).forEach(([k, v]) => {
    (Array.isArray(v) ? v : v ? [v] : []).forEach((x) => active.push({ key: k, value: x }));
  });
  const shown = active.length > 5 ? [] : SAMPLE_LISTINGS;
  const removeFilter = (f) => {
    const cur = filters[f.key];
    setFilters({ ...filters, [f.key]: Array.isArray(cur) ? cur.filter((x) => x !== f.value) : '' });
  };
  const toggleSave = (id) => setSaved({ ...saved, [id]: !saved[id] });

  const pad = { maxWidth: vp.isDesktop ? 1400 : 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-pad)', boxSizing: 'border-box' };

  const header = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ font: 'var(--text-h2)', color: 'var(--text-primary)', margin: 0 }}>Activities this week</h1>
          <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            {shown.length} matching · estimates shown for planning
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {!vp.canSplitMap ? (
            <Button size="sm" variant="ghost" icon={mobileMode === 'list' ? 'map' : 'list'} onClick={() => setMobileMode(mobileMode === 'list' ? 'map' : 'list')}>
              {mobileMode === 'list' ? 'Map' : 'List'}
            </Button>
          ) : null}
          {!vp.isDesktop ? (
            <Button size="sm" variant="ghost" icon="sliders-horizontal" onClick={() => setSheetOpen(true)}>Filters</Button>
          ) : null}
        </div>
      </div>
      {active.length ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>Showing:</span>
          {active.map((f) => (
            <FilterChip key={f.key + f.value} label={f.value} removable onClick={() => removeFilter(f)} />
          ))}
        </div>
      ) : null}
    </div>
  );

  const cards = shown.length === 0 ? (
    <EmptyState
      title="No matching activities found for this search"
      body="Try expanding the neighbourhood, changing the date, or removing one filter."
      actions={[
        { label: 'Remove a filter', primary: true, onClick: () => active.length && removeFilter(active[0]) },
        { label: 'Ask Scout', icon: 'sparkles', onClick: () => onNav('scout') },
      ]}
    />
  ) : (
    <div style={{ display: 'grid', gridTemplateColumns: vp.bp === 'md' && mobileMode === 'list' ? 'repeat(2, 1fr)' : '1fr', gap: 16 }}>
      {shown.map((l) => (
        <ActivityCard
          key={l.id}
          {...l}
          compact={vp.isMobile}
          saved={!!saved[l.id]}
          onToggleSave={() => toggleSave(l.id)}
          onViewDetails={() => onOpenListing(l.id)}
          providerHref="#"
          onAskScout={() => onNav('scout')}
          style={selectedPin === l.id ? { outline: '2px solid var(--primary)', outlineOffset: 0 } : undefined}
        />
      ))}
      <ScoutResultCard
        title="Want a shorter list?"
        provider="Scout can narrow these results"
        reason="you can tell it your child's age, area, schedule, budget, and interests."
        basedOn={null}
        confirmItems={[]}
        onViewDetails={() => onNav('scout')}
      />
    </div>
  );

  /* Mobile full-screen map mode (v2 §34.3) */
  if (!vp.canSplitMap && mobileMode === 'map') {
    return (
      <div style={{ background: 'var(--surface-page)', height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <TopNav showLinks={false} onNav={onNav} onScout={() => onNav('scout')} logoSrc="../../assets/logo-pin.png" />
        <div style={{ ...pad, width: '100%' }}>{header}</div>
        <div style={{ flex: 1, marginTop: 12, position: 'relative' }}>
          <MapPanel
            fullHeight
            listings={shown}
            selectedId={selectedPin}
            onSelect={setSelectedPin}
            saved={saved}
            onToggleSave={toggleSave}
            onViewDetails={onOpenListing}
          />
        </div>
        {sheetOpen ? (
          <FilterSheet mode="sheet" values={filters} onChange={setFilters} onApply={() => setSheetOpen(false)} onClose={() => setSheetOpen(false)} onClear={() => setFilters({})} resultCount={shown.length} />
        ) : null}
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh', paddingBottom: vp.isMobile ? 88 : 0 }}>
      <TopNav current="week" links={navLinksFor(vp)} showLinks={!vp.isMobile} onNav={onNav} onScout={() => onNav('scout')} onMenu={vp.isMobile ? undefined : () => {}} logoSrc="../../assets/logo-pin.png" />
      <main style={{ ...pad }}>
        {header}
        <div style={{
          display: 'grid',
          gridTemplateColumns: vp.isDesktop
            ? 'var(--rail-filter-w) minmax(var(--col-results-min), 1fr) minmax(var(--col-map-min), 1fr)'
            : vp.canSplitMap
              ? 'minmax(0, 1fr) minmax(0, 1fr)'
              : '1fr',
          gap: 'var(--space-5)',
          alignItems: 'start',
          paddingTop: 'var(--space-5)',
        }}>
          {vp.isDesktop ? (
            <FilterSheet mode="rail" values={filters} onChange={setFilters} onApply={() => {}} onClear={() => setFilters({})} resultCount={shown.length} style={{ position: 'sticky', top: 76 }} />
          ) : null}
          <div style={{ minWidth: 0 }}>{cards}</div>
          {vp.canSplitMap ? (
            <MapPanel
              listings={shown}
              selectedId={selectedPin}
              onSelect={setSelectedPin}
              saved={saved}
              onToggleSave={toggleSave}
              onViewDetails={onOpenListing}
              style={{ position: 'sticky', top: 76, height: 'calc(100vh - 100px)', minHeight: 480 }}
            />
          ) : null}
        </div>
      </main>
      {sheetOpen && !vp.isDesktop ? (
        <FilterSheet mode="sheet" values={filters} onChange={setFilters} onApply={() => setSheetOpen(false)} onClose={() => setSheetOpen(false)} onClear={() => setFilters({})} resultCount={shown.length} />
      ) : null}
      {!vp.isMobile ? <SiteFooter /> : null}
    </div>
  );
}
