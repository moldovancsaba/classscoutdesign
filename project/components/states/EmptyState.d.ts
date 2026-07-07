/**
 * Empty state with concrete recovery actions (v2 §6.3) — never a dead end, never a joke.
 * @startingPoint section="States" subtitle="No-results with recovery actions" viewport="700x300"
 */
export interface EmptyStateProps {
  /** Name the failed search when possible: "No matching activities for ages 5–8 in Park Slope this weekend". */
  title?: string;
  body?: string;
  /** Default: Broaden search / Try this weekend / Ask Scout. */
  actions?: Array<{ label: string; onClick?: () => void; primary?: boolean; icon?: string }>;
  icon?: string;
  style?: React.CSSProperties;
}
