/**
 * Detail-page source block (v2 §8.5): source type, last checked, price/schedule
 * status, confirmation reminder, report link.
 * @startingPoint section="Trust" subtitle="Source, freshness and status block" viewport="560x300"
 */
export interface SourceBlockProps {
  /** e.g. "Official provider website", "NYC Parks", "Public event listing". */
  sourceType?: string;
  /** Makes the source type a link. */
  sourceUrl?: string;
  /** e.g. "2 July 2026". Omit for "Not yet checked". */
  lastChecked?: string;
  /** "Estimate" | "Confirmed" | "Not confirmed". Default "Estimate". */
  priceStatus?: string;
  /** Default "Needs provider confirmation". */
  scheduleStatus?: string;
  reportHref?: string;
  style?: React.CSSProperties;
}
