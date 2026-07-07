/** Add-to-comparison toggle for saved/results views (v2 §20.1, §32.4). */
export interface CompareButtonProps {
  comparing?: boolean;
  onToggle?: () => void;
  /** Items currently in the comparison set. */
  count?: number;
  style?: React.CSSProperties;
}
