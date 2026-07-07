/**
 * Scout AI entry card — guided discovery assistant, never an authority.
 * Includes the required child-name privacy note (v2 §10.5).
 * @startingPoint section="Scout" subtitle="Scout entry with privacy + beta notes" viewport="560x300"
 */
export interface ScoutPromptCardProps {
  title?: string;
  body?: string;
  buttonLabel?: string;
  /** Beta pill + honest what-beta-means note. */
  beta?: boolean;
  /** "Do not enter a child's full name…" line. Default true. */
  privacyNote?: boolean;
  onStart?: () => void;
  style?: React.CSSProperties;
}
