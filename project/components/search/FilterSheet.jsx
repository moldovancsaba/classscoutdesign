import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { FilterChip } from '../core/FilterChip.jsx';
import { SelectField } from '../core/SelectField.jsx';

/* v2 §5.4 required filters + §28.2 bottom sheet (mobile) / side sheet or rail (wide). */
const DEFAULT_SECTIONS = [
  { id: 'age', label: 'Child age', kind: 'select', placeholder: 'Any age', options: ['0–2', '3–5', '5–8', '6–10', '11–14', '15–17'] },
  { id: 'area', label: 'Borough / neighbourhood', kind: 'select', placeholder: 'All of NYC', options: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'] },
  { id: 'date', label: 'Date', kind: 'chips', options: ['Today', 'Tomorrow', 'This week', 'This weekend'] },
  { id: 'price', label: 'Price', kind: 'chips', options: ['Free', 'Low-cost', 'Under $50', '$50+'] },
  { id: 'type', label: 'Activity type', kind: 'chips', options: ['Class', 'Camp', 'Drop-in', 'Event', 'Birthday', 'Meet-up'] },
  { id: 'setting', label: 'Indoor / outdoor', kind: 'chips', options: ['Indoor', 'Outdoor', 'Mixed'] },
  { id: 'booking', label: 'Booking type', kind: 'chips', options: ['Drop-in', 'Registration required', 'Waitlist'] },
  { id: 'confidence', label: 'Source confidence', kind: 'chips', options: ['Official source', 'Public source', 'Provider claimed'] },
];

export function FilterSheet({ mode = 'sheet', open = true, sections = DEFAULT_SECTIONS, values = {}, onChange, onApply, onClear, onClose, resultCount, style }) {
  if (!open) return null;
  const set = (id, val) => onChange && onChange({ ...values, [id]: val });
  const toggleChip = (id, opt) => {
    const cur = values[id] || [];
    set(id, cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]);
  };

  const body = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <h2 style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: 0 }}>Filters</h2>
        {onClose ? (
          <button onClick={onClose} aria-label="Close filters" className="cs-focusable" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', width: 'var(--tap-target)', height: 'var(--tap-target)', display: 'grid', placeItems: 'center' }}>
            <Icon name="x" size={20} />
          </button>
        ) : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', overflowY: 'auto', flex: 1, paddingBottom: 8 }}>
        {sections.map((s) => (
          <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {s.kind === 'select' ? (
              <SelectField label={s.label} placeholder={s.placeholder} options={s.options} value={values[s.id] || ''} onChange={(e) => set(s.id, e.target.value)} />
            ) : (
              <>
                <span style={{ font: 'var(--text-meta-medium)', color: 'var(--text-primary)' }}>{s.label}</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.options.map((opt) => (
                    <FilterChip key={opt} label={opt} selected={(values[s.id] || []).includes(opt)} onClick={() => toggleChip(s.id, opt)} />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-soft)' }}>
        {onClear ? <Button variant="ghost" onClick={onClear}>Clear all</Button> : null}
        <Button onClick={onApply} style={{ flex: 1 }}>
          {typeof resultCount === 'number' ? 'Show ' + resultCount + ' activities' : 'Apply filters'}
        </Button>
      </div>
    </>
  );

  if (mode === 'rail') {
    return (
      <aside aria-label="Filters" style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        width: 'var(--rail-filter-w)', maxWidth: '100%',
        background: 'var(--surface-card)', border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)', padding: 'var(--space-5)',
        boxSizing: 'border-box',
        ...style,
      }}>
        {body}
      </aside>
    );
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Filters" style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--scrim)' }} />
      <div style={{
        position: 'relative',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-modal) var(--radius-modal) 0 0',
        boxShadow: 'var(--shadow-sheet)',
        padding: 'var(--space-5)',
        maxHeight: '85dvh',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        boxSizing: 'border-box',
        ...style,
      }}>
        <div aria-hidden="true" style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border-strong)', margin: '0 auto' }} />
        {body}
      </div>
    </div>
  );
}
