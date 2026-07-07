/**
 * Mobile bottom navigation (v2 §35.2): exactly five tabs, icon + label,
 * active tab visible, safe-area aware. Fixed to viewport bottom — give the
 * page ~64px bottom padding.
 * @startingPoint section="Navigation" subtitle="Five-tab mobile bottom nav" viewport="390x80"
 */
export interface BottomNavProps {
  /** Default (and max) five: Search · This Week · Saved · Scout · Account. */
  tabs?: Array<{ id: string; label: string; icon: string }>;
  current?: string;
  onNav?: (id: string) => void;
  /** Count badges by tab id, e.g. { saved: 3 }. */
  badge?: Record<string, number>;
  style?: React.CSSProperties;
}
