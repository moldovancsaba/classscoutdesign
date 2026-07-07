/**
 * Full filter set (v2 §5.4) as a mobile bottom sheet or desktop/tablet rail.
 * @startingPoint section="Search" subtitle="Bottom-sheet / rail filters" viewport="420x640"
 */
export interface FilterSheetProps {
  /** "sheet" (fixed bottom sheet + scrim, mobile) | "rail" (in-flow left rail, ≥LG). Default sheet. */
  mode?: 'sheet' | 'rail';
  /** Sheet visibility. Default true. */
  open?: boolean;
  /** Override the v2 default sections: {id,label,kind:'select'|'chips',options,placeholder}. */
  sections?: Array<{ id: string; label: string; kind: 'select' | 'chips'; options: string[]; placeholder?: string }>;
  /** {age:'5–8', date:['This weekend'], …} */
  values?: Record<string, string | string[]>;
  onChange?: (values: Record<string, string | string[]>) => void;
  onApply?: () => void;
  onClear?: () => void;
  onClose?: () => void;
  /** Apply button shows "Show N activities". */
  resultCount?: number;
  style?: React.CSSProperties;
}
