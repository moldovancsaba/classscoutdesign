import React from 'react';
import { Button } from '../core/Button.jsx';
import { SelectField } from '../core/SelectField.jsx';

/* v2 §6.1 — primary fields: child age, location, date, activity type, budget. */
const DEFAULT_FIELDS = [
  { id: 'age', label: 'Child age', placeholder: 'Any age', options: ['0–2', '3–5', '5–8', '6–10', '11–14', '15–17'] },
  { id: 'area', label: 'Neighbourhood', placeholder: 'All of NYC', options: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'] },
  { id: 'date', label: 'Date', placeholder: 'Any time', options: ['Today', 'Tomorrow', 'This week', 'This weekend'] },
  { id: 'type', label: 'Activity type', placeholder: 'All types', options: ['Class', 'Camp', 'Drop-in', 'Event', 'Birthday', 'Meet-up'] },
  { id: 'budget', label: 'Budget', placeholder: 'Any budget', options: ['Free', 'Low-cost', 'Under $50', '$50+'] },
];

export function HeroSearchPanel({ fields = DEFAULT_FIELDS, buttonLabel = 'Show activities', secondaryLabel = 'Let Scout guide me', onSearch, onScout, trustLine = 'Source-backed listings · Clear estimates · Confirm final details with providers', style }) {
  const [values, setValues] = React.useState({});
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(values); }}
      style={{
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-card)',
        padding: 'clamp(16px, 2.5vw, 24px)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        ...style,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-3)' }}>
        {fields.map((f) => (
          <SelectField
            key={f.id}
            label={f.label}
            placeholder={f.placeholder}
            options={f.options}
            value={values[f.id] || ''}
            onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
          />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <Button icon="search" size="lg" style={{ flex: '1 1 200px' }}>{buttonLabel}</Button>
        {secondaryLabel ? (
          <Button variant="secondary" size="lg" icon="sparkles" onClick={onScout} style={{ flex: '1 1 200px' }}>{secondaryLabel}</Button>
        ) : null}
      </div>
      {trustLine ? (
        <p style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)', margin: 0, textAlign: 'center' }}>{trustLine}</p>
      ) : null}
    </form>
  );
}
