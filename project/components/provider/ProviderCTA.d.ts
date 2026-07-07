/** Navy provider-acquisition card (live site's "List your program" module, v2 §18.1). */
export interface ProviderCTAProps {
  title?: string;
  body?: string;
  buttonLabel?: string;
  /** Defaults to the live mailto. */
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
