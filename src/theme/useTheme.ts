import { useContext } from 'react';
import { ThemeContext, type ThemeValue } from './context';

export default function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
