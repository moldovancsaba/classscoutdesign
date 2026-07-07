/**
 * Homepage hero search panel (v2 §6.1, §16.1): age / neighbourhood / date /
 * type / budget + "Show activities" + Scout secondary + trust line.
 * Fluid: fields wrap from 5-across to single column automatically.
 * @startingPoint section="Search" subtitle="Parent-intent search panel" viewport="900x300"
 */
export interface HeroSearchPanelProps {
  /** Override the NYC defaults: {id, label, placeholder, options[]}. */
  fields?: Array<{ id: string; label: string; placeholder?: string; options: string[] }>;
  buttonLabel?: string;
  /** null hides the Scout secondary. */
  secondaryLabel?: string | null;
  onSearch?: (values: Record<string, string>) => void;
  onScout?: () => void;
  /** null hides. */
  trustLine?: string | null;
  style?: React.CSSProperties;
}
