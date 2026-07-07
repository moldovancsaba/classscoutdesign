/**
 * ClassScout action button. One primary per screen; sentence-case labels.
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost, danger" viewport="700x300"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary (teal) | secondary (blue-grey) | ghost | danger. Default primary. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm 36px | md 44px (default, tap-target) | lg 52px */
  size?: 'sm' | 'md' | 'lg';
  /** Leading Icon name. */
  icon?: string;
  /** Trailing Icon name. */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a>. */
  href?: string;
  onClick?: () => void;
  /** Required when the visible label is ambiguous. */
  ariaLabel?: string;
  style?: React.CSSProperties;
}
