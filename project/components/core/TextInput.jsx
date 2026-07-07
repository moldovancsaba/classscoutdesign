import React from 'react';

export function TextInput({ label, hint, error, placeholder, value, onChange, type = 'text', id, style }) {
  const inputId = id || (label ? 'ti-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
      {label ? (
        <label htmlFor={inputId} style={{ font: 'var(--text-meta-medium)', color: 'var(--text-primary)' }}>{label}</label>
      ) : null}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="cs-focusable"
        aria-invalid={!!error}
        style={{
          font: 'var(--text-body)', color: 'var(--text-primary)',
          background: 'var(--bg-card)',
          border: error ? '1.5px solid var(--error)' : '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-input)',
          padding: '11px 14px', minHeight: 'var(--tap-target)',
          boxSizing: 'border-box', width: '100%',
        }}
      />
      {error ? (
        <span role="alert" style={{ font: 'var(--text-meta)', color: 'var(--error)' }}>{error}</span>
      ) : hint ? (
        <span style={{ font: 'var(--text-meta)', color: 'var(--text-secondary)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
