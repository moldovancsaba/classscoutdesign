/** Save toggle (bookmark). Thumb-reachable on mobile cards; never hidden in overflow (v2 §35.4). */
export interface SaveButtonProps {
  saved?: boolean;
  onToggle?: () => void;
  /** false = icon-only 44px round target for card corners. Default true. */
  showLabel?: boolean;
  style?: React.CSSProperties;
}
