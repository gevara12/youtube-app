import React from 'react';
import { THEMES } from './config';
import type { TThemeType, TTheme } from './types';

type TContextProps = {
  themeType: TThemeType;
  theme: TTheme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<TThemeType>>;
};

const ThemeContext = React.createContext<TContextProps>({
  themeType: 'dark',
  theme: THEMES['dark'],
} as TContextProps);

const useTheme = () => React.useContext(ThemeContext);

type TProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<TProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<TThemeType>('dark');

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
