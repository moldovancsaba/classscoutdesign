/** Calm outline icon (Lucide stand-ins in assets/icons/). */
export interface IconProps {
  /** search | map-pin | calendar | clock | bookmark | external-link | circle-check-big | info | circle-alert | sparkles | x | chevron-down | chevron-left | refresh-cw | flag | arrow-right | arrow-left | sliders-horizontal | heart | map | list | circle-user | menu | columns-2 | share-2 | plus | minus | locate-fixed | sun | house */
  name: string;
  /** Pixel size. Default 18. */
  size?: number;
  /** Default 1.75. */
  strokeWidth?: number;
  /** Default currentColor. */
  color?: string;
  /** Fill the glyph (saved bookmark, selected states). */
  filled?: boolean;
  style?: React.CSSProperties;
}
