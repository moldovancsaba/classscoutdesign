import React from 'react';
import { useViewport, navLinksFor } from './Responsive.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { TopNav } from '../../components/navigation/TopNav.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { HeroSearchPanel } from '../../components/search/HeroSearchPanel.jsx';
import { QuickStartCard } from '../../components/search/QuickStartCard.jsx';
import { ScoutPromptCard } from '../../components/scout/ScoutPromptCard.jsx';
import { ProviderCTA } from '../../components/provider/ProviderCTA.jsx';

/* v2 §16 homepage blueprint: hero+search → quick starts → trust → Scout → provider. */
const QUICK_STARTS = [
  { label: 'This weekend', icon: 'calendar' },
  { label: 'Today after school', icon: 'clock' },
  { label: 'Free & low-cost', icon: 'info' },
  { label: 'Indoor activities', icon: 'house' },
  { label: 'Camps open now', icon: 'sun' },
  { label: 'Birthday party ideas', icon: 'sparkles' },
  { label: 'Toddler drop-ins', icon: 'clock' },
  { label: 'STEM & coding', icon: 'search' },
  { label: 'Sports & movement', icon: 'map' },
  { label: 'Near me', icon: 'locate-fixed' },
];

const TRUST_BULLETS = [
  'Source links where available',
  'Last-checked dates',
  'Clear estimate labels',
  'No child name required',
  'Report outdated info',
  'Provider confirmation encouraged',
];

export function HomeScreen({ onNav, onSearch }) {
  const vp = useViewport();
  const pad = { maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-pad)', boxSizing: 'border-box' };
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh', paddingBottom: vp.isMobile ? 88 : 0 }}>
      <TopNav
        current="find"
        links={navLinksFor(vp)}
        showLinks={!vp.isMobile}
        onNav={onNav}
        onScout={() => onNav('scout')}
        onMenu={vp.isMobile ? undefined : () => {}}
        logoSrc="../../assets/logo-pin.png"
      />

      {/* Hero */}
      <section style={{ ...pad, paddingTop: vp.isMobile ? 'var(--space-6)' : 'var(--space-8)', textAlign: 'center' }}>
        <h1 style={{ font: 'var(--text-h1)', color: 'var(--text-primary)', margin: 0, textWrap: 'pretty' }}>
          Find trusted kids&rsquo; activities across NYC
        </h1>
        <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', maxWidth: 560, margin: '14px auto 0' }}>
          Search classes, camps, drop-ins, events, and birthday ideas by age, neighbourhood, date, and budget.
        </p>
      </section>

      {/* Search panel — the homepage behaves like a tool */}
      <section style={{ ...pad, paddingTop: 'var(--space-5)' }}>
        <HeroSearchPanel onSearch={() => onSearch()} onScout={() => onNav('scout')} />
      </section>

      {/* Quick starts */}
      <section style={{ ...pad, paddingTop: 'var(--space-8)' }}>
        <h2 style={{ font: 'var(--text-h2)', color: 'var(--text-primary)', margin: '0 0 16px' }}>What do you need today?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))', gap: 10 }}>
          {QUICK_STARTS.map((s) => (
            <QuickStartCard key={s.label} label={s.label} icon={s.icon} onClick={() => onSearch()} />
          ))}
        </div>
      </section>

      {/* Trust module */}
      <section style={{ ...pad, paddingTop: 'var(--space-8)' }}>
        <div style={{ background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-card)', padding: 'clamp(20px, 3vw, 32px)', display: 'grid', gridTemplateColumns: vp.isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-6)', alignItems: 'center' }}>
          <div>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--text-primary)', margin: 0 }}>How ClassScout helps parents decide</h2>
            <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: '12px 0 0', maxWidth: 'var(--measure-text)' }}>
              We organise local activity information into parent-friendly listings. Where available, we show source links, age ranges, estimated prices, neighbourhoods, and last-checked dates so families can compare options more easily.
            </p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {TRUST_BULLETS.map((t) => (
              <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', font: 'var(--text-body)', color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--trust)', display: 'inline-flex', flexShrink: 0 }}><Icon name="circle-check-big" size={17} /></span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scout + provider */}
      <section style={{ ...pad, paddingTop: 'var(--space-8)', display: 'grid', gridTemplateColumns: vp.isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-5)', alignItems: 'stretch' }}>
        <ScoutPromptCard beta onStart={() => onNav('scout')} />
        <ProviderCTA />
      </section>

      <SiteFooter compact={vp.isMobile} />
    </div>
  );
}
