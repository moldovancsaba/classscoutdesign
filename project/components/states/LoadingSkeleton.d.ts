/** Skeleton loading with a serious status line (v2 §6.4). */
export interface LoadingSkeletonProps {
  /** card | lines. Default card. */
  variant?: 'card' | 'lines';
  /** Default 3. */
  count?: number;
  /** Default "Loading source-backed listings for your filters…"; null hides. */
  label?: string | null;
  style?: React.CSSProperties;
}
