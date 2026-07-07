/**
 * Compact pin-tap preview (v2 §34.6): title, provider, age, price status,
 * schedule, source/freshness, View details + Save. Keep it small.
 * @startingPoint section="Map" subtitle="Pin-tap preview card" viewport="360x260"
 */
export interface MapPreviewCardProps {
  title: string;
  provider?: string;
  /** Omit → "Age not confirmed". */
  ages?: string;
  priceStatus?: string;
  price?: string;
  /** e.g. "Sat 10am". */
  schedule?: string;
  lastChecked?: string;
  sourceLabel?: string;
  /** Shows the "Approximate area" label. */
  approximate?: boolean;
  saved?: boolean;
  onToggleSave?: () => void;
  onViewDetails?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
