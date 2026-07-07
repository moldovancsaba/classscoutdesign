/** Freshness line: "Last checked 2 July 2026 · Source: provider website". */
export interface LastCheckedLabelProps {
  /** Human date, e.g. "2 July 2026". Omit for "Not yet checked". */
  date?: string;
  /** e.g. "provider website", "NYC Parks". */
  source?: string;
  /** Past the freshness window (v2 §9.4) — amber tone + "Details may have changed". */
  stale?: boolean;
  style?: React.CSSProperties;
}
