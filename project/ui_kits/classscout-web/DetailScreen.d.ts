/** Listing detail "parent briefing" (v2 §8): breadcrumbs/back, summary, key facts (stacked on mobile), why-fit, confirm checklist, source block. */
export interface DetailScreenProps {
  onNav?: (id: string) => void;
  /** Back to results without resetting search state. */
  onBack?: () => void;
  saved: Record<string, boolean>;
  setSaved: (s: Record<string, boolean>) => void;
}
