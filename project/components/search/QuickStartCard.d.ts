/** Quick-start scenario card ("This weekend", "Free & low-cost", "Near me") — v2 §16.2. */
export interface QuickStartCardProps {
  label: string;
  /** Icon name. Default "search". */
  icon?: string;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}
