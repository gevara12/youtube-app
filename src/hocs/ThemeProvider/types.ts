import { Color } from './config';

export type TThemeType = 'dark' | 'light';

export type TTheme = {
  '--primary': Color;
  '--secondary': Color;
  '--background': Color;
};
