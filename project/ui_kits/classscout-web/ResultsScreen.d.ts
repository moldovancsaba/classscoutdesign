/** Results: active removable filters, cards, list/map toggle (mobile), split list+map (≥900px), filter rail (≥1200px). Filters/saved live in parent state so navigation preserves them (v2 §35.6). */
export interface ResultsScreenProps {
  onNav?: (id: string) => void;
  onOpenListing?: (id: string) => void;
  filters: Record<string, string | string[]>;
  setFilters: (f: Record<string, string | string[]>) => void;
  saved: Record<string, boolean>;
  setSaved: (s: Record<string, boolean>) => void;
}
