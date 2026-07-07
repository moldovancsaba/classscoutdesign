/** Labelled text input. Visible label always (WCAG 2.2 AA); errors explain recovery. */
export interface TextInputProps {
  label?: string;
  hint?: string;
  /** Error message; soft-red border + role=alert. */
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id?: string;
  style?: React.CSSProperties;
}
