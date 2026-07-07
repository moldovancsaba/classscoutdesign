/** Calm error state with retry + fallback routes (v2 §6.5). No jokes, no blame. */
export interface ErrorStateProps {
  message?: string;
  /** Secondary line, e.g. "Your saved activities are still available." */
  detail?: string | null;
  onRetry?: () => void;
  /** Fallback routes, e.g. [{label:'Browse this week'},{label:'Ask Scout',icon:'sparkles'}]. */
  actions?: Array<{ label: string; onClick?: () => void; href?: string; icon?: string }>;
  /** Shown as "As of 14:32". */
  timestamp?: string;
  style?: React.CSSProperties;
}
