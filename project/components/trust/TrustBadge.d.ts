/**
 * Trust label with an operational definition (v2 §9.1). Never "verified",
 * "safe", "approved", "AI verified", or numeric scores.
 * @startingPoint section="Trust" subtitle="The nine defined trust labels" viewport="700x170"
 */
export interface TrustBadgeProps {
  /** official-source | public-source | provider-claimed | recently-checked | price-estimate | schedule-estimate | age-not-confirmed | source-not-confirmed | reported-outdated */
  kind?: string;
  /** Override label text (keep it operational). */
  label?: string;
  showIcon?: boolean;
  style?: React.CSSProperties;
}
