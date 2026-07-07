/**
 * Map marker per the v2 §34.5 pin table: teal standard, green free, navy saved,
 * muted approximate, count clusters; selected = larger + navy outline.
 * Position it absolutely inside your map panel (real tiles: MapLibre/Mapbox).
 * @startingPoint section="Map" subtitle="Pin set: standard, free, saved, cluster" viewport="700x140"
 */
export interface MapPinProps {
  /** standard | free | saved | approximate | cluster. Default standard. */
  type?: 'standard' | 'free' | 'saved' | 'approximate' | 'cluster';
  /** Accessible label, e.g. the activity title. */
  label?: string;
  /** Cluster count (type="cluster"). */
  count?: number;
  /** Larger pin + navy outline; synced with the selected list card. */
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
