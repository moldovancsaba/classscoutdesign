import React from 'react';
import { useViewport, navLinksFor } from './Responsive.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { TopNav } from '../../components/navigation/TopNav.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { Button } from '../../components/core/Button.jsx';
import { SaveButton } from '../../components/core/SaveButton.jsx';
import { TrustBadge } from '../../components/trust/TrustBadge.jsx';
import { PriceEstimateLabel } from '../../components/trust/PriceEstimateLabel.jsx';
import { SourceBlock } from '../../components/trust/SourceBlock.jsx';
import { DetailFactsTable } from '../../components/listing/DetailFactsTable.jsx';
import { ConfirmChecklist } from '../../components/listing/ConfirmChecklist.jsx';

/* v2 §8 — detail page is a parent briefing: summary → key facts → why fit → confirm → source. */
export function DetailScreen({ onNav, onBack, saved, setSaved }) {
  const vp = useViewport();
  const id = 'robotics';
  const pad = { maxWidth: 880, margin: '0 auto', padding: '0 var(--page-pad)', boxSizing: 'border-box' };
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh', paddingBottom: vp.isMobile ? 88 : 0 }}>
      <TopNav current="week" links={navLinksFor(vp)} showLinks={!vp.isMobile} onNav={onNav} onScout={() => onNav('scout')} logoSrc="../../assets/logo-pin.png" />

      <main style={{ ...pad, paddingTop: 'var(--space-5)' }}>
        {/* breadcrumbs ≥MD, back button on mobile (v2 §35.5) */}
        {vp.isMobile ? (
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="cs-focusable" style={{ font: 'var(--text-meta-medium)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', minHeight: 'var(--tap-target)' }}>
            <Icon name="arrow-left" size={16} /> Back to results
          </a>
        ) : (
          <nav aria-label="Breadcrumb" style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Home', 'Brooklyn', 'Park Slope', 'STEM Classes'].map((c, i) => (
              <span key={c} style={{ display: 'inline-flex', gap: 6 }}>
                <a href="#" onClick={(e) => { e.preventDefault(); i === 0 ? onNav('find') : onBack(); }} className="cs-focusable" style={{ color: 'var(--text-secondary)' }}>{c}</a>
                <span aria-hidden="true">›</span>
              </span>
            ))}
            <span style={{ color: 'var(--text-primary)' }}>Kids Robotics Workshop</span>
          </nav>
        )}

        {/* Parent summary */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
          <div style={{ minWidth: 0, flex: '1 1 320px' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
              <TrustBadge kind="official-source" />
              <TrustBadge kind="recently-checked" />
            </div>
            <h1 style={{ font: 'var(--text-h2)', color: 'var(--text-primary)', margin: 0 }}>Kids Robotics Workshop</h1>
            <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: '6px 0 0' }}>
              Brooklyn Robot Foundry · Park Slope, Brooklyn
            </p>
          </div>
          <SaveButton saved={!!saved[id]} onToggle={() => setSaved({ ...saved, [id]: !saved[id] })} />
        </div>
        <p style={{ font: 'var(--text-body)', color: 'var(--text-primary)', maxWidth: 'var(--measure-text)', marginTop: 14 }}>
          A hands-on STEM activity for children aged 6–10 who enjoy building, problem-solving, and small-group learning.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
          <Button icon="external-link" href="#">Visit provider</Button>
          <Button variant="secondary" icon="sparkles" onClick={() => onNav('scout')}>Ask Scout about this</Button>
        </div>

        {/* Key facts + why fit + confirm */}
        <div style={{ display: 'grid', gridTemplateColumns: vp.isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-6)', alignItems: 'start' }}>
          <DetailFactsTable
            stacked={vp.isMobile}
            rows={[
              { label: 'Age range', value: '6–10' },
              { label: 'Activity type', value: 'STEM class' },
              { label: 'Format', value: 'Weekly · drop-in available' },
              { label: 'Location', value: 'Park Slope, Brooklyn' },
              { label: 'Indoor/outdoor', value: 'Indoor' },
              { label: 'Price', value: <PriceEstimateLabel amount="$45" /> },
              { label: 'Booking', value: 'Registration required' },
              { label: 'Source', value: 'Provider website' },
              { label: 'Last checked', value: '2 July 2026' },
            ]}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div style={{ background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-card)', padding: 'var(--space-5)' }}>
              <h2 style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: '0 0 12px' }}>Why it may be a good fit</h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                {['Good for children who like building', 'Indoor activity', 'Small-group format', 'Suitable for repeat attendance'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 9, alignItems: 'center', font: 'var(--text-body)', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--trust)', display: 'inline-flex', flexShrink: 0 }}><Icon name="circle-check-big" size={16} /></span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <ConfirmChecklist />
          </div>
        </div>

        {/* Source block */}
        <SourceBlock
          sourceType="Official provider website"
          sourceUrl="#"
          lastChecked="2 July 2026"
          priceStatus="Estimate"
          scheduleStatus="Needs provider confirmation"
          style={{ marginTop: 'var(--space-5)' }}
        />
      </main>

      {!vp.isMobile ? <SiteFooter /> : null}
    </div>
  );
}
