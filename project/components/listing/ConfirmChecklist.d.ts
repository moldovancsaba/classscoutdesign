/** "Check before booking" checklist — required on every detail page (v2 §8.4) and in Scout answers. */
export interface ConfirmChecklistProps {
  /** Defaults to the full v2 §8.4 list. */
  items?: string[];
  title?: string;
  style?: React.CSSProperties;
}
