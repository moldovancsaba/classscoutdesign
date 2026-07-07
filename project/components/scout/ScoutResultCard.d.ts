/**
 * A Scout recommendation with mandatory reasoning + uncertainty (v2 §10.3):
 * "This may fit because…", evidence note, confirm checklist, links.
 * @startingPoint section="Scout" subtitle="Recommendation with reasoning" viewport="520x340"
 */
export interface ScoutResultCardProps {
  title: string;
  provider?: string;
  neighborhood?: string;
  /** Completes "This may fit because …" — e.g. "it is indoor, listed for ages 5–8, and near Park Slope." */
  reason?: string;
  /** Evidence line. Default "Based on available information from the listing source." */
  basedOn?: string | null;
  /** Confirm-before-booking bullets. */
  confirmItems?: string[];
  onViewDetails?: () => void;
  providerHref?: string;
  style?: React.CSSProperties;
}
