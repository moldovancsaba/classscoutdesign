/**
 * The listing card (v2 §7). Always shows an age state and a source state —
 * omissions render "Age not confirmed" / amber source badges, never nothing.
 * Fluid width; use `compact` for mobile hierarchies.
 * @startingPoint section="Listing" subtitle="Decision-ready listing card" viewport="420x560"
 */
export interface ActivityCardProps {
  /** Real listing/provider image only. Omit → "Image not available from source" placeholder. */
  image?: string;
  imageAlt?: string;
  /** e.g. "STEM" — navy pill over image. */
  category?: string;
  /** e.g. "6–10". Omit → "Age not confirmed" badge. */
  ages?: string;
  /** confirmed | estimated (adds "(est.)"). Default confirmed. */
  ageStatus?: 'confirmed' | 'estimated';
  /** "Indoor" | "Outdoor" | "Mixed". */
  setting?: string;
  title: string;
  provider?: string;
  /** e.g. "Park Slope, Brooklyn". */
  neighborhood?: string;
  /** One sentence, 100–160 chars, non-promotional. Hidden in compact mode. */
  summary?: string;
  /** estimated | free | confirmed | unknown. Default estimated. */
  priceStatus?: string;
  /** e.g. "$45". */
  price?: string;
  priceUnit?: string;
  /** e.g. "This Saturday", "Drop-in available", "Schedule not confirmed". */
  schedule?: string;
  /** TrustBadge kind. Default public-source; use "source-not-confirmed" when unknown. */
  sourceKind?: string;
  /** e.g. "2 July 2026". */
  lastChecked?: string;
  /** e.g. "provider website". */
  sourceLabel?: string;
  /** Past freshness window. */
  stale?: boolean;
  saved?: boolean;
  onToggleSave?: () => void;
  onViewDetails?: () => void;
  providerHref?: string;
  /** Shows the "Ask Scout" action. */
  onAskScout?: () => void;
  /** Mobile: shorter image, summary hidden (v2 §17.3 hierarchy). */
  compact?: boolean;
  style?: React.CSSProperties;
}
