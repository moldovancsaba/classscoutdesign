/** Labelled native select for parent-intent fields (age, borough, date, budget). */
export interface SelectFieldProps {
  label?: string;
  /** Strings or {value,label}. */
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** First empty option, e.g. "Any age". */
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}
