/** Price with explicit status (v2 §36.6). Cost is visible on cards, never buried. */
export interface PriceEstimateLabelProps {
  /** estimated (default) | free | confirmed | unknown */
  status?: 'estimated' | 'free' | 'confirmed' | 'unknown';
  /** e.g. "$45" (required unless free/unknown). */
  amount?: string;
  /** "session" | "week" | "" flat. Default "session". */
  unit?: string;
  /** Amber note pill; defaults by status; null hides. */
  note?: string | null;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
