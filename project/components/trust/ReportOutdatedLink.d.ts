/** Quiet "Report outdated info" link — required on every listing (v2 §23). */
export interface ReportOutdatedLinkProps {
  href?: string;
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
