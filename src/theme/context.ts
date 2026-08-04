import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeValue | null>(null);
