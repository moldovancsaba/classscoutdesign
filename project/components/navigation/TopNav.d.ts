/**
 * Desktop/tablet top navigation (v2 §35.1): logo, ≤6 task links, Ask Scout CTA,
 * optional hamburger for secondary items. Sticky. On mobile widths pass
 * `showLinks={false}` and pair with BottomNav.
 * @startingPoint section="Navigation" subtitle="Sticky top nav with Ask Scout" viewport="1100x80"
 */
export interface TopNavProps {
  /** Default: Find activities · This week · Camps · Birthday parties · Saved · For providers. */
  links?: Array<{ id: string; label: string }>;
  /** Active link id (aria-current=page). */
  current?: string;
  onNav?: (id: string) => void;
  onScout?: () => void;
  /** Renders the hamburger for secondary items (About, How trust works, Privacy…). */
  onMenu?: () => void;
  /** false = logo + Ask Scout only (mobile top bar). Default true. */
  showLinks?: boolean;
  /** Relative path to assets/logo-pin.png from the consuming page. */
  logoSrc?: string;
  style?: React.CSSProperties;
}
