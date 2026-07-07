/** Key-facts table for detail pages (v2 §8.3). `stacked` for mobile rows. */
export interface DetailFactsTableProps {
  rows: Array<{ label: string; value: React.ReactNode }>;
  /** Small uppercase header. Default "Key facts"; null hides. */
  title?: string | null;
  /** Label-above-value rows for XS/SM screens. */
  stacked?: boolean;
  style?: React.CSSProperties;
}
