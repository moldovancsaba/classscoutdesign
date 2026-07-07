/**
 * Pill filter chip. Filters are visible and reversible (v2 §6.2).
 * @startingPoint section="Core" subtitle="Resting, selected, removable filters" viewport="700x140"
 */
export interface FilterChipProps {
  label: string;
  /** Selected = solid teal. */
  selected?: boolean;
  /** Optional result count. */
  count?: number;
  /** Active-filter row style with ×; onClick removes. */
  removable?: boolean;
  /** Optional leading Icon name. */
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
