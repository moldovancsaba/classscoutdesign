import React from 'react';
import { Icon } from './Icon.jsx';

const VARIANTS = {
  primary: { background: 'var(--primary)', color: 'var(--text-on-primary)', border: '1px solid transparent', hoverBg: 'var(--primary-dark)' },
  secondary: { background: 'var(--secondary)', color: 'var(--secondary-text)', border: '1px solid transparent', hoverBg: 'var(--secondary-dark)' },
  ghost: { background: 'transparent', color: 'var(--primary-dark)', border: '1px solid var(--border-strong)', hoverBg: 'var(--chip-bg)' },
  danger: { background: 'var(--error)', color: 'var(--pure-white)', border: '1px solid transparent', hoverBg: 'var(--error-dark)' },
};
const SIZES = {
  sm: { padding: '8px 14px', font: '500 14px/1 var(--font-ui)', minHeight: 36 },
  md: { padding: '11px 18px', font: '500 15px/1 var(--font-ui)', minHeight: 44 },
  lg: { padding: '14px 24px', font: '500 16px/1 var(--font-ui)', minHeight: 52 },
};

export function Button({ children, variant = 'primary', size = 'md', icon, iconRight, fullWidth, disabled, href, onClick, ariaLabel, style }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={disabled && !href ? true : undefined}
      aria-label={ariaLabel}
      className="cs-focusable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 8,
        background: hover && !disabled ? v.hoverBg : v.background,
        color: v.color, border: v.border,
        borderRadius: 'var(--radius-button)',
        padding: s.padding, font: s.font, minHeight: s.minHeight,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textDecoration: 'none',
        transition: 'background var(--duration-quick) var(--ease-calm)',
        boxSizing: 'border-box', whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={size === 'sm' ? 15 : 17} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} size={size === 'sm' ? 15 : 17} /> : null}
    </Tag>
  );
}
