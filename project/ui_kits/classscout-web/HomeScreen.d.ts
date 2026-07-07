/** ClassScout homepage (v2 §16): hero, active search panel, quick starts, trust module, Scout + provider. Responsive XS→XXL. */
export interface HomeScreenProps {
  /** Router callback ('find' | 'week' | 'scout' | …). */
  onNav?: (id: string) => void;
  /** Called when the user searches or taps a quick start. */
  onSearch?: () => void;
}
