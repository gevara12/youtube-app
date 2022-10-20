import { useLocalStorage } from 'usehooks-ts';

import { useTheme } from 'hocs/ThemeProvider/ThemeProvider';

export const ThemeSwitcher: React.FC = () => {
  const { themeType, setCurrentTheme } = useTheme();
  const [isDarkTheme, setDarkTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setCurrentTheme(themeType === 'dark' ? 'light' : 'dark');
    setDarkTheme(themeType === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {`Current theme is ${isDarkTheme === 'dark' ? `dark` : `light`}`}
      </button>
    </div>
  );
};
