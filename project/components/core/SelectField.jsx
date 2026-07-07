import React from 'react';
import { Icon } from './Icon.jsx';

export function SelectField({ label, options = [], value, onChange, placeholder, id, style }) {
  const selectId = id || (label ? 'sel-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
      {label ? (
        <label htmlFor={selectId} style={{ font: 'var(--text-meta-medium)', color: 'var(--text-primary)' }}>{label}</label>
      ) : null}
      <div style={{ position: 'relative' }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          className="cs-focusable"
          style={{
            font: 'var(--text-body)', color: value ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-input)',
            padding: '11px 38px 11px 14px', minHeight: 'var(--tap-target)',
            width: '100%', boxSizing: 'border-box',
            appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
          }}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={16} color="var(--text-secondary)" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </div>
    </div>
  );
}
